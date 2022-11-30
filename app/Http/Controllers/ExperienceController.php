<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Experience;

class ExperienceController extends Controller
{
  // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
  public function addExperience(Request $request){
        
        
    //hna n3mlo instance dyal Model Post 
    $experience= new Experience();
    //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
    // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
    $experience->experience_title = $request->experience_title;
    $experience->experience_description = $request->experience_description;
    $experience->experience_date = $request->experience_date;
    $experience->save();
    return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

    // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
public function getExperiences(Request $request){
    //hna njibo posts mn db 
    $experiences = Experience::all();

    return response()->json([
        'experiences' =>$experiences
    ],200);
}

// bach tfhmi ro7i l route api.php
public function getExperienceById($id){

    $experience = Experience::findOrFail($id);

    return response()->json(['experience' => $experience],200);
}

// bach tfhmi ro7i l route api.php
public function updateExperience(Request $request,$id){

    $experience = Experience::findOrFail($id);

    $experience->experience_title = $request->experience_title;
    $experience->experience_description = $request->experience_description;
    $experience->experience_date = $request->experience_date;
    $experience->save();
    return response()->json(['success' => 'data updateed db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

public function deleteExperience(Request $request,$id){

    $experience = Experience::findOrFail($id);

    $experience->delete();

    return response()->json(['success' => 'post deleted belbahi :D'],200);
}
}
