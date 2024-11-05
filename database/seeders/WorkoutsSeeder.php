<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;

class WorkoutsSeeder extends Seeder
{
    public function run()
    {
        $workouts = [
            [
                'name' => "Antrenament pentru pectorali",
                'is_proposed' => true,
                'exercises' => [1, 12, 23, 24]
            ],
            [
                'name' => "Antrenament pentru spate",
                'is_proposed' => true,
                'exercises' => [4, 11, 18, 17]
            ],
            [
                'name' => "Antrenament pentru umeri si brate",
                'is_proposed' => true,
                'exercises' => [5, 21, 20, 19, 22, 6, 26, 7, 28]
            ],
            [
                'name' => "Antrenament pentru picioare",
                'is_proposed' => true,
                'exercises' => [2, 3, 31, 13, 14, 9]
            ],
            [
                'name' => "Antrenament pentru abdomen",
                'is_proposed' => true,
                'exercises' => [16, 15, 29]
            ]
        ];

        foreach ($workouts as $workout) {
            $newWorkout = Workout::create([
                'name' => $workout['name'],
                'is_proposed' => $workout['is_proposed'],
            ]);

            // Create the pivot data
            $exercises = [];
            foreach ($workout['exercises'] as $index => $exerciseId) {
                $exercises[$exerciseId] = ['order' => $index + 1];
            }

            $newWorkout->exercises()->attach($exercises);
        }
    }
}
