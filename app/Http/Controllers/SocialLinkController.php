<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SocialLink;

class SocialLinkController extends Controller
{
    // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
    public function addSociallink(Request $request){
        $imageName = [];
       
           
            $socialLink= new SocialLink();
            $socialLink->url = $request->url;
            $socialLink->label = $request->label;
           

            // if($request->has('image')){
            //     $imageName = time().'.'.$request->image->extension(); 
            //     $request->image->move(public_path('images'), $imageName);
            //     $socialLink->image = $imageName;
            // }
            $socialLink->save();  
               return response()->json(['status' => 'mziaaaaaan ya 7aloofa aaahahahaha', 'message' => 'bahy ya bazbozti'],200);
            //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

        // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
    public function getSociallink(Request $request){
        //hna njibo posts mn db 
        $socialLinks = SocialLink::all();

        return response()->json([
            'socialLinks' =>$socialLinks
        ],200);
    }

    // bach tfhmi ro7i l route api.php
    public function getSocialLinksById($id){

        $socialLink = SocialLink::findOrFail($id);

        return response()->json(['socialLink' => $socialLink],200);
    }

    // bach tfhmi ro7i l route api.php
    public function updateSocialLink(Request $request,$id){
        $imageName = [];
        $socialLink = SocialLink::findOrFail($id);

        $socialLink->url = $request->url;
        // if($request->has('image')){
        //     //hna nakhdo schemain dyal photo : wa9t.png wla jpg 3la 7ssab extension dyal image
        //     $imageName = time().'.'.$request->image->extension(); 
        //     // kan golo laravel n9el li photo l public folder wasst dossier ismo images
        //     $request->image->move(public_path('images'), $imageName);
        //     // nakhdo schemain wn7toh f db bach n9dro n9rawh mn b3d f front end 
        //     $socialLink->image = $imageName;
        // }
        $socialLink->label = $request->label;
        $socialLink->save();
        return response()->json(['success' => 'data updateed db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

    public function deleteSocialLink(Request $request,$id){

        $socialLink = SocialLink::findOrFail($id);

        $socialLink->delete();

        return response()->json(['success' => 'post deleted belbahi :D'],200);
    }
}
