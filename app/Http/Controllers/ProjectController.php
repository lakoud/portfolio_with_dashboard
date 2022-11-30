<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
   
    // hadi hya li at executa fach react yb3t request l backend : axios.post('/add_post',[PostController:class,'addPost])
    public function addProject(Request $request){
        
        
        //hna n3mlo instance dyal Model Post 
        $project= new Project();
        //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
        // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
        $project->project_name = $request->project_name;
        $project->project_description = $request->project_description;
        $project->project_date = $request->project_date;
        $project->save();
        return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

        // hadi hya li at executa fach react yb3t request l backend : axios.get('/get_posts',[PostController:class,'getPosts])
    public function getProjects(Request $request){
        //hna njibo posts mn db 
        $projects = Project::all();

        return response()->json([
            'projects' =>$projects
        ],200);
    }

    // bach tfhmi ro7i l route api.php
    public function getProjectById($id){

        $project = Project::findOrFail($id);

        return response()->json(['project' => $project],200);
    }

    // bach tfhmi ro7i l route api.php
    public function updateProject(Request $request,$id){

        $project = Project::findOrFail($id);

        $project->project_name = $request->project_name;
        $project->project_description = $request->project_description;
        $project->project_date = $request->project_date;
        $project->save();
        return response()->json(['success' => 'data updateed db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }

    public function deleteProject(Request $request,$id){

        $project = Project::findOrFail($id);

        $project->delete();

        return response()->json(['success' => 'post deleted belbahi :D'],200);
    }
}
