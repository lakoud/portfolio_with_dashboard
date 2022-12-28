import axios from "axios"
import React, { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
const NewCoordonnee = () => {

    //react fih tari9a t7ot variable o setter mta3ha en meme temps 
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [phone_number, setphone_number] = useState('')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [birth_date, setbirth_date] = useState('')
    const [cv_url, setcv_url] = useState('')
    const [image, setImage] = useState([])
  
    // fach ndghto 3la submit mta3 form y executi method hadia createPost li takhed t3tina paramater sminah e li hwa de type event 
    
    //3mlna async li anno anssyt3mlo asynchronous request l server kif flutter
    const createCoordonnee = async (e) => {
        console.log("dsd");
        //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
        e.preventDefault()
        //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
        //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
        const formData = new FormData()

        formData.append('first_name' , first_name)
        formData.append('phone_number', phone_number)
        formData.append('title', title)

        formData.append('description' , description)
        formData.append('birth_date', birth_date)
        formData.append('cv_url', cv_url)
        formData.append('image', image)
        formData.append('last_name', last_name)
     
        //hna nb3to  post request b axios li hwa library khassa b requests api 
        //fama axios.get w axios.update w axios.post ...etc
        //axios.post yakhod parameter awal hwa 'route mta3 api' tl9ayh f api.php  , w paramater tani hwa formdata li khdat lina values li dkhel user f html form
        await axios.post('/api/add_coordonnee',formData)


        //then = wa9t li request tkhdem o tkon status mta3ha 200 , ya3ni b3t request li fo9 o jab haja mn database aw backend bsifa 3amma , 7na sminaha {data} li wsstha data li jbna
        .then(({data}) => {
            console.log("okIIIIIIIIIIIIII");
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
  <h5 className="card-header">Add New coordonnee</h5>
  <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={first_name} onChange={(event) => {setfirst_name(event.target.value)}} name="first_name" className="form-control mb-4" placeholder="first_name"/>
    <input type="text" value={last_name} onChange={(event) => {setlast_name(event.target.value)}} name="last_name" className="form-control mb-4" placeholder="last_name"/>
    <input type="text" value={phone_number} onChange={(event) => {setphone_number(event.target.value)}} name="phone_number" className="form-control mb-4" placeholder="phone_number"/>
    <input type="text" value={title} onChange={(event) => {settitle(event.target.value)}} name="title" className="form-control mb-4" placeholder="title"/>
    <textarea type="text" value={description} onChange={(event) => {setdescription(event.target.value)}} name="description" className="form-control mb-4" placeholder="description"/>
    <input type="text" value={birth_date} onChange={(event) => {setbirth_date(event.target.value)}} name="birth_date" className="form-control mb-4" placeholder="birth_date"/>
    <input type="text" value={cv_url} onChange={(event) => {setcv_url(event.target.value)}} name="cv_url" className="form-control mb-4" placeholder="cv_url"/>
    <input type="file"  onChange={(event) => {setImage(event.target.files[0])}} name="image" className="form-control mb-4" /> 
  
    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button href="#" onClick={(event) => createCoordonnee(event)} className="btn btn-primary">Add Coordonnee</button>
    </form>
  </div>
</div>
</div>
</>
    )
}


export default NewCoordonnee