import axios from "axios"
import React, { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
const NewAdresse= () => {

    //react fih tari9a t7ot variable o setter mta3ha en meme temps 
    const [rue, setrue] = useState('')
    const [code_postal, setcode_postal] = useState('')
    const [ville, setville] = useState('')
    const [pays, setpays] = useState('')
  
    // fach ndghto 3la submit mta3 form y executi method hadia createPost li takhed t3tina paramater sminah e li hwa de type event 
    
    //3mlna async li anno anssyt3mlo asynchronous request l server kif flutter
    const createCoordonnee = async (e) => {
        console.log("dsd");
        //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
        e.preventDefault()
        //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
        //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
        const formData = new FormData()

        formData.append('rue' , rue)
        formData.append('code_postal', code_postal)
        formData.append('ville', ville)

        formData.append('pays' , pays)

        console.log(formData);
        //hna nb3to  post request b axios li hwa library khassa b requests api 
        //fama axios.get w axios.update w axios.post ...etc
        //axios.post yakhod parameter awal hwa 'route mta3 api' tl9ayh f api.php  , w paramater tani hwa formdata li khdat lina values li dkhel user f html form
        await axios.post('/api/add_adresse',formData)


        //then = wa9t li request tkhdem o tkon status mta3ha 200 , ya3ni b3t request li fo9 o jab haja mn database aw backend bsifa 3amma , 7na sminaha {data} li wsstha data li jbna
        .then(({data}) => {
            console.log("ok");
            navigate('/')
        })
        .catch(({response}) => {
            console.log("dsd233");
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
  <h5 className="card-header">Ajouter Adresse</h5>
  <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={rue} onChange={(event) => {setrue(event.target.value)}} name="rue" className="form-control mb-4" placeholder="rue"/>
    <input type="text" value={code_postal} onChange={(event) => {setcode_postal(event.target.value)}} name="code postal" className="form-control mb-4" placeholder="code postal"/>
    <input type="text" value={ville} onChange={(event) => {setville(event.target.value)}} name="ville" className="form-control mb-4" placeholder="ville"/>
    <input type="text" value={pays} onChange={(event) => {setpays(event.target.value)}} name="pays" className="form-control mb-4" placeholder="pays"/>
   
    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button href="#" onClick={(event) => createCoordonnee(event)} className="btn btn-primary">Add Adresse</button>
    </form>
  </div>
</div>
</div>
</>
    )
}


export default NewAdresse