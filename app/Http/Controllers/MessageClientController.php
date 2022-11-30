<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MessageClient;
class MessageClientController extends Controller
{
    public function addMessageClient(Request $request){
        
        
        //hna n3mlo instance dyal Model Post 
        $message= new MessageClient();
        //wnjibo data mn fron end - li b3tna f front end b react bsti3mal formDATA
        // hna nst9blo data f REQUEST (y3ni kolchy 3ndna wasst request : ex : title , description)
        $message->first_name = $request->first_name;
        $message->last_name = $request->last_name;
        $message->message = $request->message;
        $message->email = $request->email;
        $message->phone_number = $request->phone_number;
        $message->save();
        return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
        //hna njmo nreturniw haja l front end matalan return response()->json(['success' => 'data dkhlat db binaja7 !'],200);
    }
}
