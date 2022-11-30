import axios from "axios"
import React, { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
const NewSocialLink = () => {

    //react fih tari9a t7ot variable o setter mta3ha en meme temps 
    const [url, seturl] = useState('')
    // const [image, setImage] = useState([])
    // const [label, setlabel] = useState('')




      const getInitialState = () => {
        const label = "Facebook";
        return label;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };
    
    // fach ndghto 3la submit mta3 form y executi method hadia createPost li takhed t3tina paramater sminah e li hwa de type event 
    
    //3mlna async li anno anssyt3mlo asynchronous request l server kif flutter
    const createSocialLink = async (e) => {
        
        //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
        e.preventDefault()
        //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
        //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
        const formData = new FormData()

        formData.append('url' , url)
        // formData.append('image', image)
        formData.append('label', value)
        console.log("h")
        //hna nb3to  post request b axios li hwa library khassa b requests api 
        //fama axios.get w axios.update w axios.post ...etc
        //axios.post yakhod parameter awal hwa 'route mta3 api' tl9ayh f api.php  , w paramater tani hwa formdata li khdat lina values li dkhel user f html form
        await axios.post('/api/add_socialLink',formData)


        //then = wa9t li request tkhdem o tkon status mta3ha 200 , ya3ni b3t request li fo9 o jab haja mn database aw backend bsifa 3amma , 7na sminaha {data} li wsstha data li jbna
        .then(({data}) => {
            navigate('/SocialLink')
            console.log('photo upload !')
            // navigate('/SocialLink')
            //hna chno t7bi t3mli madam wsslatek data mn server aw backend aw db ?? 
            //exemple t3mli notification aw alert t9oli raw m3lomat tamat binaja7 !! 
        })
        .catch(({response}) => {
          
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
  <h5 className="card-header">Add New socialLink</h5>
  <div className="card-body">
    <form encType="multipart/form-data">
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={url} onChange={(event) => {seturl(event.target.value)}} name="url" className="form-control mb-4" placeholder="title"/>
    <select value={value} onChange={handleChange}>
        <option value="Facebook">Facebook</option>
        <option value="Linkedin">Linkedin</option>
        <option value="Youtube">Youtube</option>
        <option value="Instagram">Instagram</option>
        <option value="Twiter">Twiter</option>
      </select>
      {/* <p>{`You selected ${value}`}</p>
     */}
    {/* <select type="text" value={label} onChange={(event) => {setlabel(event.target.value)}} name="label" className="form-control mb-4" placeholder="description"/> */}
    {/* <input type="file"  onChange={(event) => {setImage(event.target.files[0])}} name="image" className="form-control mb-4" />  */}

    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button href="#" onClick={(event) => createSocialLink(event)} className="btn btn-primary">Add SocialLink</button>
    </form>
  </div>
</div>
</div>
</>
    )
}


export default NewSocialLink