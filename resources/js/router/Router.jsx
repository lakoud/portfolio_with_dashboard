import React from "react"
import { Routes , Route } from "react-router-dom"
import IndexProject from '../components/projects/Index_project'
import NotFound  from "../components/NotFound"
import New from "../components/projects/New_project"
import Edit from '../components/projects/Edit_project'
import IndexCoordonnees from "../components/coordonnées/Index_coordonnées"
import IndexExperience from "../components/experiences/Index_experience"
import Newexperience from "../components/experiences/Newexperience"
import EditExperience from "../components/experiences/Editexperience"
import IndexCompetence from "../components/competences/Index_competence"
import Newcompetence from "../components/competences/Newcompetence"
import EditCompetence from "../components/competences/Editcompetences"
import NewCoordonnee from "../components/coordonnées/New_coordonnee"
import EditCoordonnee from "../components/coordonnées/Edit_coordonnee"
import IndexSocialLink from "../components/socialLink/Index_socialLink"
import EditSocialLink from "../components/socialLink/EditsocialLink"
import NewSocialLink from "../components/socialLink/NewsocialLink"
import EditAdresse from "../components/coordonnées/Edit_adresse"
import NewAdresse from "../components/coordonnées/New_adresse"


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <IndexCoordonnees/> } />
                <Route path="/coordonnee/new" element={ <NewCoordonnee/> } />
                <Route path="/coordonnee/edit/:id" element={ <EditCoordonnee/> } />
                <Route path="/adresse/new" element={ <NewAdresse/> } />
                <Route path="/adresse/edit/:id" element={ <EditAdresse/> } />
             
                { /************************************** */}
               <Route path="/Competence" element={ <IndexCompetence/> } /> 
               <Route path="/competence/new" element={ <Newcompetence/> } />
                <Route path="/competence/edit/:id" element={ <EditCompetence/> } />
                { /************************************** */}
                <Route path="/Project" element={ <IndexProject/> } />
                <Route path="/project/new" element={ <New/> } />
                <Route path="/project/edit/:id" element={ <Edit/> } />
                { /************************************** */}



                <Route path="/Experience" element={ <IndexExperience/> } />
                <Route path="/experience/new" element={ <Newexperience/> } />
                <Route path="/experience/edit/:id" element={ <EditExperience/> } />
              
                    {/* social */}

                 <Route path="/SocialLink" element={ <IndexSocialLink/> } />
                <Route path="/socialLink/new" element={ <NewSocialLink/> } />
                <Route path="/socialLink/edit/:id" element={ <EditSocialLink/> } />

                <Route path="/*" element={ <NotFound/> } />
            </Routes>
        </div>
    )
}

export default Router