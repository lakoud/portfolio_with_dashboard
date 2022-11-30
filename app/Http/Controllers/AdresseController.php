<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adresse;

class AdresseController extends Controller
{
   // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
   public function addAdresse(Request $request){
        
        
    //hna n3mlo instance dyal Model Post 
    $adresse= new Adresse();
    //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
    // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
    $adresse->rue = $request->rue;
    $adresse->code_postal = $request->code_postal;
    $adresse->ville = $request->ville;
    $adresse->pays = $request->pays;
    $adresse->save();
    return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

    // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
public function getAdresses(Request $request){
    //hna njibo posts mn db 
    $adresses = Adresse::all();

    return response()->json([
        'adresses' =>$adresses
    ],200);
}

// bach tfhmi ro7i l route api.php
public function getAdresseById($id){

    $adresse = Adresse::findOrFail($id);

    return response()->json(['adresse' => $adresse],200);
}

// bach tfhmi ro7i l route api.php
public function updateAdresse(Request $request,$id){

    $adresse = Adresse::findOrFail($id);

    $adresse->rue = $request->rue;
    $adresse->code_postal = $request->code_postal;
    $adresse->ville = $request->ville;
    $adresse->save();
    return response()->json(['success' => 'data updateed db binaja7 !'],200);
    //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
}

public function deleteAdresse(Request $request,$id){

    $adresse = Adresse::findOrFail($id);

    $adresse->delete();

    return response()->json(['success' => 'post deleted belbahi :D'],200);
}
}
