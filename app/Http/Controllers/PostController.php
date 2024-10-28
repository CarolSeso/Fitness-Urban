<?php

   namespace App\Http\Controllers;

   use App\Models\Post;
   use Illuminate\Http\Request;
   use Illuminate\Support\Facades\Log;

   class PostController extends Controller
   {
       public function index()
       {
           Log::info('Fetching posts');
           $posts = Post::all();
           Log::info('Posts fetched', ['count' => $posts->count()]);
           return response()->json($posts);
       }
   }
