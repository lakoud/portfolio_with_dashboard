<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageClient extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'message',
        'phone_number',
         'email',
    ];

}
