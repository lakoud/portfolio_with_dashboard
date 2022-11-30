<?php

namespace App\Http\Controllers;
use App\Models\Competence;
use Illuminate\Http\Request;

class CompetenceController extends Controller
{
      // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
  public function addCompetence(Request $request){
        
        
    //hna n3mlo instance dyal Model Post 
    $competence= new Competence();
    //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
    // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
    $competence->competence_name = $request->competence_name;
    if($request->has('image')){
        //hna nakhdo schemain dyal photo : wa9t.png wla jpg 3la 7ssab extension dyal image
        $imageName = time().'.'.$request->image->extension(); 
        // kan golo laravel n9el li photo l public folder wasst dossier ismo images
        $request->image->move(public_path('images'), $imageName);
        // nakhdo schemain wn7toh f db bach n9dro n9rawh mn b3d f front end 
        $competence->image = $imageName;
    }

    $competence->save();
    return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

    // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
public function getCompetences(Request $request){
    //hna njibo posts mn db 
    $competences = Competence::all();

    return response()->json([
        'competences' =>$competences
    ],200);
}

// bach tfhmi ro7i l route api.php
public function getCompetenceById($id){

    $competence = Competence::findOrFail($id);

    return response()->json(['competence' => $competence],200);
}

// bach tfhmi ro7i l route api.php
public function updateCompetence(Request $request,$id){

    $competence = Competence::findOrFail($id);

    $competence->competence_name = $request->competence_name;
    if($request->has('image')){
        //hna nakhdo schemain dyal photo : wa9t.png wla jpg 3la 7ssab extension dyal image
        $imageName = time().'.'.$request->image->extension(); 
        // kan golo laravel n9el li photo l public folder wasst dossier ismo images
        $request->image->move(public_path('images'), $imageName);
        // nakhdo schemain wn7toh f db bach n9dro n9rawh mn b3d f front end 
        $coordonnee->image = $imageName;
    }

    $competence->save();
    return response()->json(['success' => 'data updateed db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

public function deleteCompetence(Request $request,$id){

    $competence = Competence::findOrFail($id);

    $competence->delete();

    return response()->json(['success' => 'post deleted belbahi :D'],200);
}
}
