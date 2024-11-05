<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    protected $fillable = ['name', 'is_proposed'];

    public function exercises()
    {
        return $this->belongsToMany(Exercises::class, 'exercise_workout')
            ->withPivot('order');
    }
}
