<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->string('image_url');
        $table->string('link');
        $table->timestamps();
    });
}


    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
