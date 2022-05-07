<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamplesTable extends Migration
{

	public function up()
	{
		 

		Schema::create('examples', function (Blueprint $table) {
			$table->increments('id');
			$table->uuid('uuid')->unique();
			
			$table->string('title')->nullable();
			$table->string('password')->nullable();
			$table->string('number')->nullable();
			 
			$table->text('description')->nullable();
			$table->text('texteditor')->nullable();

			$table->boolean('is_default')->default(false);
			$table->boolean('is_accept')->default(false); 

			$table->char('gender')->nullable();  
			$table->string('multi_check')->nullable();  
 
			$table->date('date')->nullable();
			$table->time('time')->nullable();
			$table->dateTime('datetime')->nullable();

			$table->string('select')->nullable();  
			$table->string('multi_select')->nullable(); 
			$table->integer('select_cond1')->nullable(); 
			$table->integer('select_cond2')->nullable();  
			$table->integer('select_cond3')->nullable();  
			
			$table->string('file')->nullable();  
			$table->string('multi_file')->nullable(); 

			$table->tinyInteger('rating')->default(0)->nullable();

			$table->integer('created_by')->unsigned()->nullable()->index();
			$table->integer('updated_by')->unsigned()->nullable()->index();
			$table->integer('deleted_by')->unsigned()->nullable()->index();

			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::drop('examples');
	}
}
