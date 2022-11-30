import axios from "axios"
import React, {useState,useEffect}  from "react"
import { useParams,useNavigate } from "react-router-dom"

const EditAdresse = () => {

    //declarina variable li ans7tajo f html o f reponse dyal request API , st3mlna syntax dyal declaration dyal variable m3a initialisation mta3 setter mta3ha
    const [rue, setrue] = useState('')
    const [code_postal, setcode_postal] = useState('')
    const [ville, setville] = useState('')
    const [pays, setpays] = useState('')


    // hadi n7toha bach  w9tma 3mlna rendue lchi html, hady t executa mara wa7da brk
    useEffect(() => {
        //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPostById()
        getAdresseById()
      },[])

    const getAdresseById = async () => {
        // rodi bal mast3mltch '' bal st3mlt `` li anny an7et hna ${variable_name} ida 7biti tsst3mli '' ylzem t3mli concatination b + ex : 'api/get_post_id/'+id
        await axios.get(`/api/get_adresseid/${id}`)
        .then(({data}) => {
            // hna bach tchofi chno wasst data li jbty mn db (3an tari9 api request li 3mlna fo9)
            console.log(data.adresse)
            //hna n3mlo setter l variable title fo9
            setrue(data.adresse.rue)
            //n3mlo setter l description variable li declarina fo9
            setcode_postal(data.adresse.code_postal)
      
            setville(data.adresse.ville)

            setpays(data.adresse.pays)
         
        }).catch(({response}) => {
            // ida fama error chno n3mlo ! 
            console.log(response)
        })
    }  


    // hady update method li n executiwha f wa9t li ndghto 3la button edit
    const updateAdresse = async (e) => {
          //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
          e.preventDefault()
          //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
          //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
          const formData = new FormData()
          //njibo data mn champs html 3an tari9 name mta3hom
          formData.append('rue' , rue)
          formData.append('code_postal', code_postal)
          formData.append('ville', ville)

          formData.append('pays' , pays)
         

       
       

          // nb3to post request l api ,ta3na 
          axios.post(`/api/update_adresse/${id}`, formData)
          .then(({data}) => {

            // tnjmo t3mli hna li t7by mn b3d mat posti post l db , par exemple notofication aw t9dery t3mli
            // redirect y3ny trj3y page princial , li hya bach n3mlo tawa 
            navigate('/')
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
                <h5 className="card-header">Edit Adresse</h5>
        <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={rue || '' }placeholder='rue' onChange={event => {setrue(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={code_postal || '' }  placeholder='code postal' onChange={event => {setcode_postal(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={ville || '' } placeholder='ville'onChange={event => {setville(event.target.value)}} className="form-control mb-4" />

    <input type="text" value={pays || '' }  placeholder='pays' onChange={event => {setpays(event.target.value)}} className="form-control mb-4" />


    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button onClick={ (event) => updateAdresse(event) } className="btn btn-primary">Edit Coordonnee</button>
    </form>
  </div>
</div>
</div>
    )
}

export default EditAdresse 