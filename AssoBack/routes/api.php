<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NouvelleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//Home


Route::get('/home/info',[HomeController::class,'index']);
Route::get('/home/baner',[HomeController::class,'HomeBaner']);

//contact
Route::post('/contact/store',[ContactController::class,'store']);
Route::get('/contact/info',[ContactController::class,'index']);
Route::get('/contact/baner',[ContactController::class,'ContactBaner']);

//Abour
Route::get('/about/info',[AboutController::class,'index']);
Route::get('/about/members',[AboutController::class,'members']);
Route::get('/about/baner',[AboutController::class,'AboutBaner']);

//
Route::get('/nouvelle/baner',[NouvelleController::class,'NouvelleBaner']);
Route::get('/nouvelle/info',[NouvelleController::class,'index']);
Route::get('/nouvelle/articles',[NouvelleController::class,'articles']);
Route::get('/nouvelle/article/{id}',[NouvelleController::class,'voirarticle']);
Route::get('/nouvelle/last',[NouvelleController::class,'recentarticle']);

