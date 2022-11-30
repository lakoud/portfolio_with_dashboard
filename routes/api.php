<?php
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CompetenceController;
use App\Http\Controllers\CoordonneeController;
use App\Http\Controllers\SocialLinkController;
use App\Http\Controllers\AdresseController;
use App\Http\Controllers\MessageClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// route mta3 ajout mta3 post
//awal parameter hwa route li n7to f navigator ex : 127.0.0.1:8000/api/add_post 
//parameter tany hwa action method li bach t executa wasst controller PostController f wa9t li n7to route f navigator
Route::post('add_post',[PostController::class,'addPost']);
// route mta3 get mta3 post
//awal parameter hwa route li n7to f navigator ex : 127.0.0.1:8000/api/get_posts 
//parameter tany hwa action method li bach t executa wasst controller PostController f wa9t li n7to route f navigator
Route::get('get_posts',[PostController::class,'getPosts']);
// route mta3 get mta3 post wa7ed bark bsti3mal ID mta3o f db
//awal parameter hwa route li n7to f navigator ex : 127.0.0.1:8000/api/get_post_id/1 
//parameter tany hwa action method li bach t executa wasst controller PostController f wa9t li n7to route f navigator
Route::get('get_post_id/{id}',[PostController::class,'getPostById']);
// route mta3 update mta3 post wa7ed bark bsti3mal ID mta3o f db
//awal parameter hwa route li n7to f navigator ex : 127.0.0.1:8000/api/get_post_id/1 
//parameter tany hwa action method li bach t executa wasst controller PostController f wa9t li n7to route f navigator
Route::post('update_post/{id}',[PostController::class,'updatePost']);

Route::get('delete_post/{id}',[PostController::class,'deletePost']);

// Note : api.php yzid lik f route /api/ 3akss web.php mayzid walo
//ex : 7na 7tina fo9 f parameter awal : 'add_post' lakin f 7a9i9a roite aysser haka /api/add_post li2annak ktbti route f fichier api.php 


///projecttt


Route::get('get_projects',[ProjectController::class,'getProjects']);
Route::post('add_project',[ProjectController::class,'addProject']);
Route::get('delete_project/{id}',[ProjectController::class,'deleteproject']);
Route::post('update_project/{id}',[ProjectController::class,'updateProject']);
Route::get('get_project_id/{id}',[ProjectController::class,'getProjectById']);



//experience 

Route::get('get_experiences',[ExperienceController::class,'getExperiences']);
Route::post('add_experience',[ExperienceController::class,'addExperience']);
Route::get('delete_experience/{id}',[ExperienceController::class,'deleteExperience']);
Route::post('update_experience/{id}',[ExperienceController::class,'updateExperience']);
Route::get('get_experience_id/{id}',[ExperienceController::class,'getExperienceById']);


//competence
Route::get('get_competences',[CompetenceController::class,'getCompetences']);
Route::post('add_competence',[CompetenceController::class,'addCompetence']);
Route::get('delete_competence/{id}',[CompetenceController::class,'deleteCompetence']);
Route::post('update_competence/{id}',[CompetenceController::class,'updateCompetence']);
Route::get('get_competence_id/{id}',[CompetenceController::class,'getCompetenceById']);

//coordonnees

Route::get('get_coordonnee',[CoordonneeController::class,'getCoordonnee']);
Route::post('add_coordonnee',[CoordonneeController::class,'addCoordonnee']);
Route::get('delete_coordonnee/{id}',[CoordonneeController::class,'deleteCoordonnee']);
Route::post('update_coordonnee/{id}',[CoordonneeController::class,'updateCoordonnee']);
Route::get('get_coordonnee_id/{id}',[CoordonneeController::class,'getCoordonneeById']);

//sociallinks

Route::get('get_socialLink',[SocialLinkController::class,'getSociallink']);
Route::post('add_socialLink',[SocialLinkController::class,'addSociallink']);
Route::get('delete_socialLink/{id}',[SocialLinkController::class,'deleteSocialLink']);
Route::post('update_socialLink/{id}',[SocialLinkController::class,'updateSocialLink']);
Route::get('get_socialLink_id/{id}',[SocialLinkController::class,'getSocialLinksById']);


//adresses
Route::get('get_adresse',[AdresseController::class,'getAdresses']);
Route::post('add_adresse',[AdresseController::class,'addAdresse']);
Route::get('delete_adresse/{id}',[AdresseController::class,'deleteAdresse']);
Route::post('update_adresse/{id}',[AdresseController::class,'updateAdresse']);
Route::get('get_adresseid/{id}',[AdresseController::class,'getAdresseById']);




Route::get('add_messageclient',[MessageClientController::class,'addmessageclient']);








Route::post('login', [LoginController::class, 'authenticate']);