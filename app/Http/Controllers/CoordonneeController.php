<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coordonnee;

class CoordonneeController extends Controller
{
     // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
     public function addCoordonnee(Request $request){
        
        
        //hna n3mlo instance dyal Model Post 
        $coordonnee= new Coordonnee();
        //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
        // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
        $coordonnee->first_name = $request->first_name;
        $coordonnee->phone_number = $request->phone_number;
        $coordonnee->title = $request->title;
        $coordonnee->description = $request->description;
        $coordonnee->birth_date = $request->birth_date;
        $coordonnee->cv_url = $request->cv_url;

        if($request->has('image')){
            //hna nakhdo schemain dyal photo : wa9t.png wla jpg 3la 7ssab extension dyal image
            $imageName = time().'.'.$request->image->extension(); 
            // kan golo laravel n9el li photo l public folder wasst dossier ismo images
            $request->image->move(public_path('images'), $imageName);
            // nakhdo schemain wn7toh f db bach n9dro n9rawh mn b3d f front end 
            $coordonnee->image = $imageName;
        }

  
        $coordonnee->last_name = $request->last_name;
        $coordonnee->save();
        return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

        // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
    public function getCoordonnee(Request $request){
        //hna njibo posts mn db 
        $coordonnee = Coordonnee::all();

        return response()->json([
            'coordonnee' =>$coordonnee
        ],200);
    }

    // bach tfhmi ro7i l route api.php
    public function getCoordonneeById($id){

        $coordonnee = Coordonnee::findOrFail($id);

        return response()->json(['coordonnee' => $coordonnee],200);
    }

    // bach tfhmi ro7i l route api.php
    public function updateCoordonnee(Request $request,$id){

        $coordonnee = Coordonnee::findOrFail($id);

        $coordonnee->first_name = $request->first_name;
        $coordonnee->phone_number = $request->phone_number;
        $coordonnee->title = $request->title;
        $coordonnee->description = $request->description;
        $coordonnee->birth_date = $request->birth_date;
        $coordonnee->cv_url = $request->cv_url;
        if($request->has('image')){
            //hna nakhdo schemain dyal photo : wa9t.png wla jpg 3la 7ssab extension dyal image
            $imageName = time().'.'.$request->image->extension(); 
            // kan golo laravel n9el li photo l public folder wasst dossier ismo images
            $request->image->move(public_path('images'), $imageName);
            // nakhdo schemain wn7toh f db bach n9dro n9rawh mn b3d f front end 
            $coordonnee->image = $imageName;
        }
        $coordonnee->last_name = $request->last_name;
        $coordonnee->save();
        return response()->json(['success' => 'data updateed db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

    public function deleteCoordonnee(Request $request,$id){

        $coordonnee = Coordonnee::findOrFail($id);

        $coordonnee->delete();

        return response()->json(['success' => 'post deleted belbahi :D'],200);
    }
}
