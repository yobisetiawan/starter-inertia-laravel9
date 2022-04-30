<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration {

	public function up()
	{
		Schema::create('addresses', function(Blueprint $table) {
			$table->increments('id');
			$table->uuid('uuid')->unique();
			$table->string('title')->nullable();
			$table->text('address')->nullable();

			$table->morphs('addressable');
			
			$table->boolean('is_default')->default(false);

			$table->integer('country_id')->unsigned()->nullable()->index();
			$table->integer('province_id')->unsigned()->nullable()->index();
			$table->integer('city_id')->unsigned()->nullable()->index();
			$table->integer('suburb_id')->unsigned()->nullable()->index();
			$table->integer('area_id')->unsigned()->nullable()->index();

			$table->string('country_name')->nullable();
			$table->string('province_name')->nullable();
			$table->string('city_name')->nullable();
			$table->string('suburb_name')->nullable();
			$table->string('area_name')->nullable();
			$table->string('postcode', 20)->nullable();
			$table->text('display_address')->nullable();
			
			$table->integer('created_by')->unsigned()->nullable()->index();
			$table->integer('updated_by')->unsigned()->nullable()->index();
			$table->integer('deleted_by')->unsigned()->nullable()->index();
			
			$table->timestamps();
			$table->softDeletes();
			
		});
	}

	public function down()
	{
		Schema::drop('addresses');
	}
}