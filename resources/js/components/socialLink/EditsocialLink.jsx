import axios from "axios"
import React, {useState,useEffect}  from "react"
import { useParams,useNavigate } from "react-router-dom"

const EditSocialLink = () => {

    //declarina variable li ans7tajo f html o f reponse dyal request API , st3mlna syntax dyal declaration dyal variable m3a initialisation mta3 setter mta3ha
    const [url, seturl] = useState('')
    // const [image, setImage] = useState([])
    const [label, setlabel] = useState('')
    // hadi n7toha bach  w9tma 3mlna rendue lchi html, hady t executa mara wa7da brk
 
    

    const getInitialState = () => {
        const label = "Facebbook";
        return label;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };
    
    
    
    useEffect(() => {
        //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPostById()
        getSocialLinkById()
      },[])

    const getSocialLinkById = async () => {
        // rodi bal mast3mltch '' bal st3mlt `` li anny an7et hna ${variable_name} ida 7biti tsst3mli '' ylzem t3mli concatination b + ex : 'api/get_post_id/'+id
        await axios.get(`/api/get_socialLink_id/${id}`)
        .then(({data}) => {
            // hna bach tchofi chno wasst data li jbty mn db (3an tari9 api request li 3mlna fo9)
            console.log(data.socialLink)
            //hna n3mlo setter l variable title fo9
            seturl(data.socialLink.url)
            //n3mlo setter l description variable li declarina fo9
            // setImage(data.socialLink.image)
            setlabel(data.socialLink.label)
        }).catch(({response}) => {
            // ida fama error chno n3mlo ! 
            console.log(response)
        })
    }  


    // hady update method li n executiwha f wa9t li ndghto 3la button edit
    const updateSocialLink  = async (e) => {
          //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
          e.preventDefault()
          //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
          //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
          const formData = new FormData()
          //njibo data mn champs html 3an tari9 name mta3hom
          formData.append('url' , url)
        //   formData.append('image', image)
          formData.append('label', value)
          // nb3to post request l api ,ta3na 
          axios.post(`/api/update_socialLink/${id}`, formData)
          .then(({data}) => {

            // tnjmo t3mli hna li t7by mn b3d mat posti post l db , par exemple notofication aw t9dery t3mli
            // redirect y3ny trj3y page princial , li hya bach n3mlo tawa 
            navigate('/SocialLink')
          }).catch(({response}) => {

          })
    }
    // nst3mlo navigation bin pages
    const navigate = useNavigate()
    
    // hady jbnaha mn parameter 'id' li 3tinah had page fwasst page index.jsx
    const { id } = useParams()
    // hna kan 3mlo render l HTML dyalna 
    return (
        //className f html sous react = class f html 3adia
        <div className="container">
            <div className="card">
                <h5 className="card-header">Edit SocialLink</h5>
        <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={url || '' } onChange={event => {seturl(event.target.value)}} className="form-control mb-4" />
<div> <select value={value} onChange={handleChange}>
        <option value="Facebook">Facebook</option>
        <option value="Linkedin">Linkedin</option>
        <option value="Youtube">Youtube</option>
        <option value="Instagram">Instagram</option>
        <option value="Twiter">Twiter</option>
      </select></div> 
    {/* <input type="file"  onChange={(event) => {setImage(event.target.files[0])}} name="image" className="form-control mb-4" />  */}

    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button onClick={ (event) => updateSocialLink(event) } className="btn btn-primary">Edit Competence</button>
    </form>
  </div>
</div>
</div>
    )
}

export default EditSocialLink 