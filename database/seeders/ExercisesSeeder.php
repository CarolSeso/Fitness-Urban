<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Exercises;

class ExercisesSeeder extends Seeder
{
    public function run()
    {
        $exercises = [
            [
                'id' => 1,
                'name' => "Împins din culcat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/bench-press/bench-press-400.avif',
                'type' => "compus",
                'muscleGroups' => "Pectorali, Deltoizi anteriori, Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=SCVCLChPQFY'
            ],
            [
                'id' => 2,
                'name' => "Genuflexiune",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/squat/squat-400.avif',
                'type' => "compus",
                'muscleGroups' => "Cvadricepși, Glutei, Biceps femural, Partea inferioară a spatelui",
                'exerciseLink' => 'https://www.youtube.com/watch?v=aclHkVaku9U'
            ],
            [
                'id' => 3,
                'name' => "Îndreptări",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/deadlift/deadlift-400.avif',
                'type' => "compus",
                'muscleGroups' => "Biceps femural, Glutei, Partea inferioară a spatelui, Trapez",
                'exerciseLink' => 'https://www.youtube.com/watch?v=op9kVnSso6Q'
            ],
            [
                'id' => 4,
                'name' => "Tracțiuni",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/pull-ups/pull-ups-400.avif',
                'type' => "compus",
                'muscleGroups' => "Dorsali, Bicepși, Romboizi, Trapez",
                'exerciseLink' => 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
            ],
            [
                'id' => 5,
                'name' => "Presa de umeri",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/shoulder-press/shoulder-press-400.avif',
                'type' => "compus",
                'muscleGroups' => "Deltoizi, Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=B-aVuyhvLHU'
            ],
            [
                'id' => 6,
                'name' => "Flexii pentru bicepși",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/barbell-curl/barbell-curl-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Bicepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo'
            ],
            [
                'id' => 7,
                'name' => "Flotări la paralele",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/dips/dips-400.avif',
                'type' => "compus",
                'muscleGroups' => "Tricepși, Pectorali, Deltoizi anteriori",
                'exerciseLink' => 'https://www.youtube.com/watch?v=2z8JmcrW-As'
            ],
            [
                'id' => 8,
                'name' => "Presa pentru picioare",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/sled-leg-press/sled-leg-press-400.avif',
                'type' => "compus",
                'muscleGroups' => "Cvadricepși, Glutei, Biceps femural",
                'exerciseLink' => 'https://www.youtube.com/watch?v=1Tq3QdYUuHs'
            ],
            [
                'id' => 9,
                'name' => "Ridicări pentru gambe",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/dumbbell-calf-raise/dumbbell-calf-raise-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Gambele",
                'exerciseLink' => 'https://www.youtube.com/watch?v=gwLzBJYoWlI'
            ],
            [
                'id' => 10,
                'name' => "Flotări",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/push-ups/push-ups-400.avif',
                'type' => "compus",
                'muscleGroups' => "Pectorali, Tricepși, Deltoizi anteriori",
                'exerciseLink' => 'https://www.youtube.com/watch?v=_l3ySVKYVJ8'
            ],
            [
                'id' => 11,
                'name' => "Tracțiuni la scripete",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/lat-pulldown/lat-pulldown-400.avif',
                'type' => "compus",
                'muscleGroups' => "Dorsali, Bicepși, Romboizi, Trapez",
                'exerciseLink' => 'https://www.youtube.com/watch?v=CAwf7n6Luuc'
            ],
            [
                'id' => 12,
                'name' => "Fluturări la aparat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/machine-chest-fly/machine-chest-fly-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Pectorali",
                'exerciseLink' => 'https://www.youtube.com/watch?v=eozdVDA78K0'
            ],
            [
                'id' => 13,
                'name' => "Flexii pentru picioare la aparat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/seated-leg-curl/seated-leg-curl-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Biceps femural",
                'exerciseLink' => 'https://www.youtube.com/watch?v=j80R2fohzR8'
            ],
            [
                'id' => 14,
                'name' => "Extensii pentru picioare",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/leg-extension/leg-extension-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Cvadricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=yR_L8X4IGx8'
            ],
            [
                'id' => 15,
                'name' => "Răsuciri rusești",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/russian-twist/russian-twist-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Oblici, Abdomene",
                'exerciseLink' => 'https://www.youtube.com/watch?v=wkD8rjkodUI'
            ],
            [
                'id' => 16,
                'name' => "Ridicări de picioare suspendate",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/hanging-leg-raise/hanging-leg-raise-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Abdomene, Flexori ai coapsei",
                'exerciseLink' => 'https://www.youtube.com/watch?v=6kLJzKA2nJQ'
            ],
            [
                'id' => 17,
                'name' => "Ramat la scripete din șezut",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/seated-cable-row/seated-cable-row-400.avif',
                'type' => "compus",
                'muscleGroups' => "Dorsali, Romboizi, Bicepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=GZbfZ033f74'
            ],
            [
                'id' => 18,
                'name' => "Ramat cu bara",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/bent-over-row/bent-over-row-400.avif',
                'type' => "compus",
                'muscleGroups' => "Dorsali, Romboizi, Bicepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=MEFjyjZ6g2Y'
            ],
            [
                'id' => 19,
                'name' => "Trageri pentru deltoizii posteriori",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/face-pull/face-pull-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Deltoizi posteriori, Trapez",
                'exerciseLink' => 'https://www.youtube.com/watch?v=rep-qVOkqgk'
            ],
            [
                'id' => 20,
                'name' => "Ridicări laterale cu gantere",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/dumbbell-lateral-raise/dumbbell-lateral-raise-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Deltoizi laterali",
                'exerciseLink' => 'https://www.youtube.com/watch?v=kDqklk1ZESo'
            ],
            [
                'id' => 21,
                'name' => "Ridicări frontale",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/dumbbell-front-raise/dumbbell-front-raise-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Deltoizi anteriori",
                'exerciseLink' => 'https://www.youtube.com/watch?v=-t7fuZ0KhDA'
            ],
            [
                'id' => 22,
                'name' => "Fluturări inversate la aparat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/machine-reverse-fly/machine-reverse-fly-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Deltoizi posteriori",
                'exerciseLink' => 'https://www.youtube.com/watch?v=JKT5GkbjUD8'
            ],
            [
                'id' => 23,
                'name' => "Împins înclinat din culcat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/incline-bench-press/incline-bench-press-400.avif',
                'type' => "compus",
                'muscleGroups' => "Pectorali, Deltoizi anteriori, Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=SrqOu55lrYU'
            ],
            [
                'id' => 24,
                'name' => "Împins declinat din culcat",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/decline-bench-press/decline-bench-press-400.avif',
                'type' => "compus",
                'muscleGroups' => "Pectorali, Deltoizi anteriori, Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=RLOto1Jueic'
            ],
            [
                'id' => 25,
                'name' => "Flexii pentru bicepși la banca Scott",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/preacher-curl/preacher-curl-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Bicepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=o1iTPF1ewCI'
            ],
            [
                'id' => 26,
                'name' => "Flexii ciocan",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/hammer-curl/hammer-curl-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Bicepși, Brachialis",
                'exerciseLink' => 'https://www.youtube.com/watch?v=zC3nLlEvin4'
            ],
            [
                'id' => 27,
                'name' => "Skull Crusher",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/lying-tricep-extension/lying-tricep-extension-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=d_KZxkY_0cM'
            ],
            [
                'id' => 28,
                'name' => "Împins tricepși la scripete",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/tricep-pushdown/tricep-pushdown-400.avif',
                'type' => "izolare",
                'muscleGroups' => "Tricepși",
                'exerciseLink' => 'https://www.youtube.com/watch?v=2-LAMcpzODU'
            ],
            [
                'id' => 29,
                'name' => "Mountain Climber",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/mountain-climbers/mountain-climbers-400.avif',
                'type' => "greutatea corpului",
                'muscleGroups' => "Abdomene, Flexori ai coapsei, Umeri",
                'exerciseLink' => 'https://www.youtube.com/watch?v=nmwgirgXLYM'
            ],
            [
                'id' => 30,
                'name' => "Burpee",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/burpees/burpees-400.avif',
                'type' => "greutatea corpului",
                'muscleGroups' => "Corpul întreg",
                'exerciseLink' => 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
            ],
            [
                'id' => 31,
                'name' => "Fandări",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/dumbbell-lunge/dumbbell-lunge-400.avif',
                'type' => "greutatea corpului",
                'muscleGroups' => "Cvadricepși, Glutei, Biceps femural",
                'exerciseLink' => 'https://www.youtube.com/watch?v=QOVaHwm-Q6U'
            ],
            [
                'id' => 32,
                'name' => "Ridicări de bazin",
                'imageURL' => 'https://static.strengthlevel.com/images/exercises/hip-thrust/hip-thrust-400.avif',
                'type' => "greutatea corpului",
                'muscleGroups' => "Glutei, Biceps femural, Partea inferioară a spatelui",
                'exerciseLink' => 'https://www.youtube.com/watch?v=ytGaGIn3SjE'
            ]
        ];

        foreach ($exercises as $exercise) {
            Exercises::create($exercise);
        }
    }
}
