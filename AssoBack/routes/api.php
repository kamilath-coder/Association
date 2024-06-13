<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\NouvelleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//Home


Route::get('/home/info',[HomeController::class,'index']);
Route::get('/home/baner',[HomeController::class,'HomeBaner']);
Route::get('/home/members',[HomeController::class,'members']);
Route::post('/home/subscribe',[HomeController::class,'subscribe']);
Route::get('/home/partenaire',[HomeController::class,'partenaire']);
Route::get('/home/articles',[HomeController::class,'articles']);
Route::get('/home/eqipement',[HomeController::class,'homeequipement']);
Route::post('/adhesion/store',[HomeController::class,'adhesion']);
Route::post('/payment/create', [HomeController::class, 'create']);
Route::get('/payment-status',[HomeController::class, 'getPaymentStatus'] );
//contact
Route::post('/contact/store',[ContactController::class,'store']);
Route::get('/contact/info',[ContactController::class,'index']);
Route::get('/contact/baner',[ContactController::class,'ContactBaner']);

//Abour
Route::get('/about/info',[AboutController::class,'index']);
Route::get('/about/members',[AboutController::class,'members']);
Route::get('/about/baner',[AboutController::class,'AboutBaner']);

//nouvelle
Route::get('/nouvelle/baner',[NouvelleController::class,'NouvelleBaner']);
Route::get('/nouvelle/info',[NouvelleController::class,'index']);
Route::get('/nouvelle/articles',[NouvelleController::class,'articles']);
Route::get('/nouvelle/article/{id}',[NouvelleController::class,'voirarticle']);
Route::get('/nouvelle/last',[NouvelleController::class,'recentarticle']);

//Activity

Route::get('/activity/baner',[ActivityController::class,'ActivityBaner']);
Route::get('/activity/info',[ActivityController::class,'index']);
Route::get('/activity/articles',[ActivityController::class,'articles']);
Route::get('/activity/article/{id}',[ActivityController::class,'voirarticle']);
Route::get('/activity/last',[ActivityController::class,'recentarticle']);
Route::post('/activity/fedapay',[ActivityController::class,'fedapay']);
Route::post('/activity/stripe',[ActivityController::class,'stripe']);


