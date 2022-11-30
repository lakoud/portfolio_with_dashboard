<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    
    // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
    public function addPost(Request $request){
        
        //hna n3mlo instance dyal Model Post 
        $post = new Post();
        //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
        // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();
        return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

        // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
    public function getPosts(Request $request){
        //hna njibo posts mn db 
        $posts = Post::all();

        return response()->json([
            'posts' =>$posts
        ],200);
    }

    // bach tfhmi ro7i l route api.php
    public function getPostById($id){

        $post = Post::findOrFail($id);

        return response()->json(['post' => $post],200);
    }

    // bach tfhmi ro7i l route api.php
    public function updatePost(Request $request,$id){

        $post = Post::findOrFail($id);

        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

    public function deletePost(Request $request,$id){

        $post = Post::findOrFail($id);

        $post->delete();

        return response()->json(['success' => 'post deleted belbahi :D'],200);
    }
}
