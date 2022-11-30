import axios from "axios"
import React, { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
const New = () => {

    //react fih tari9a t7ot variable o setter mta3ha en meme temps 
    const [project_name, setproject_name] = useState('')
    const [project_description, setproject_description] = useState('')
    const [project_date, setproject_date] = useState('')
  
    // fach ndghto 3la submit mta3 form y executi method hadia createPost li takhed t3tina paramater sminah e li hwa de type event 
    
    //3mlna async li anno anssyt3mlo asynchronous request l server kif flutter
    const createProject = async (e) => {
        console.log("dsd");
        //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
        e.preventDefault()
        //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
        //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
        const formData = new FormData()

        formData.append('project_name' , project_name)
        formData.append('project_description', project_description)
        formData.append('project_date', project_date)

        console.log("dsd2");
        //hna nb3to  post request b axios li hwa library khassa b requests api 
        //fama axios.get w axios.update w axios.post ...etc
        //axios.post yakhod parameter awal hwa 'route mta3 api' tl9ayh f api.php  , w paramater tani hwa formdata li khdat lina values li dkhel user f html form
        await axios.post('/api/add_project',formData)


        //then = wa9t li request tkhdem o tkon status mta3ha 200 , ya3ni b3t request li fo9 o jab haja mn database aw backend bsifa 3amma , 7na sminaha {data} li wsstha data li jbna
        .then(({data}) => {
            console.log("ok");
            navigate('/')
            //hna chno t7bi t3mli madam wsslatek data mn server aw backend aw db ?? 
            //exemple t3mli notification aw alert t9oli raw m3lomat tamat binaja7 !! 
        })
        .catch(({response}) => {
            console.log("dsd233");
            //hna l3kss dyal then n9olo mny request mawsslatch aw wsslat lakin w9e3 error 
            //hna n7to ism 3adi l parameter ana 3melt response tnjmi t7to error blasst response c'est just un nom dyal parameter li wssto aykon error o status . barcha m3lomat
            //hna affichinahom wsst console.log bach t9dri tchofi kolchy
            console.log(response);
        })
    }

    const navigate = useNavigate()

    // hna kan 3mlo render l HTML dyalna 
    return (
        //className f html sous react = class f html 3adia
    <>

        <div className="container">

            <div className="card">
  <h5 className="card-header">Add New Project</h5>
  <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={project_name} onChange={(event) => {setproject_name(event.target.value)}} name="title" className="form-control mb-4" placeholder="title"/>
    <input type="text" value={project_description} onChange={(event) => {setproject_description(event.target.value)}} name="description" className="form-control mb-4" placeholder="description"/>
    <input type="text" value={project_date} onChange={(event) => {setproject_date(event.target.value)}} name="project_date" className="form-control mb-4" placeholder="project_date"/>
  
    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button href="#" onClick={(event) => createProject(event)} className="btn btn-primary">Add Project</button>
    </form>
  </div>
</div>
</div>
</>
    )
}


export default New