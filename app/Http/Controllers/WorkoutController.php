<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkoutController extends Controller
{
    public function proposedWorkouts()
    {
        return Workout::where('is_proposed', true)->with('exercises')->get();
    }

    public function personalWorkouts()
    {
        $user = Auth::user();

        return Workout::where('user_id', $user->id)->with('exercises')->get();
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'exercises' => 'required|array',
            'exercises.*' => 'exists:exercises,id',
        ]);

        $workout = Workout::create([
            'name' => $validated['name'],
            'user_id' => $user->id,
        ]);

        $exercises = collect($validated['exercises'])->map(function ($id, $index) {
            return ['exercise_id' => $id, 'order' => $index + 1];
        });

        $workout->exercises()->sync($exercises);

        return $workout->load('exercises');
    }

    public function destroy(Workout $workout)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        if ($workout->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $workout->delete();

        return response()->json(['message' => 'Workout deleted successfully']);
    }
}
