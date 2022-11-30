<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordonnee extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'phone_number',
        'title',
        'phone_number',
        'description',
        'birth_date',
        'cv_url',
        'photo',
        'last_name'
    
    ];

}
