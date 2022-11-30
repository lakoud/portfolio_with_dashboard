import React from 'react'
import './navbard.css'
import { useNavigate } from 'react-router-dom';

export const Navbard = () => {
    const navigate = useNavigate()
  return (
    

        
<div class="topnav" id="myTopnav">
<a class="topnav1" onClick={() =>  navigate('/')}>Coordonnées</a>
<a class="topnav1"  onClick={() =>  navigate('/Competence')} >Competence</a>
<a class="topnav1" onClick={() =>  navigate('/Experience')} >Experience</a>
<a class="topnav1"  onClick={() =>  navigate('/Project')}  >Project</a>
<a class="topnav1" onClick={() =>  navigate('/SocialLink')}  > Social link</a>

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
        

  )
}
