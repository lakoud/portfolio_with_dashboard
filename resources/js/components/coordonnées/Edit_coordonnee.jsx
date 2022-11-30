import axios from "axios"
import React, {useState,useEffect}  from "react"
import { useParams,useNavigate } from "react-router-dom"

const EditCoordonnee = () => {

    //declarina variable li ans7tajo f html o f reponse dyal request API , st3mlna syntax dyal declaration dyal variable m3a initialisation mta3 setter mta3ha
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [phone_number, setphone_number] = useState('')

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [birth_date, setbirth_date] = useState('')

    const [cv_url, setcv_url] = useState('')
    const [photo, setphoto] = useState('')

    // hadi n7toha bach  w9tma 3mlna rendue lchi html, hady t executa mara wa7da brk
    useEffect(() => {
        //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPostById()
        getCoordonneeById()
      },[])

    const getCoordonneeById = async () => {
        // rodi bal mast3mltch '' bal st3mlt `` li anny an7et hna ${variable_name} ida 7biti tsst3mli '' ylzem t3mli concatination b + ex : 'api/get_post_id/'+id
        await axios.get(`/api/get_coordonnee_id/${id}`)
        .then(({data}) => {
            // hna bach tchofi chno wasst data li jbty mn db (3an tari9 api request li 3mlna fo9)
            console.log(data.coordonnee)
            //hna n3mlo setter l variable title fo9
            setfirst_name(data.coordonnee.first_name)
            //n3mlo setter l description variable li declarina fo9
            setlast_name(data.coordonnee.last_name)
            setphone_number(data.coordonnee.phone_number)
            settitle(data.coordonnee.phone_number)

            setphoto(data.coordonnee.photo)
            setdescription(data.coordonnee.description)
            setbirth_date(data.coordonnee.birth_date)
            setcv_url(data.coordonnee.cv_url)
        }).catch(({response}) => {
            // ida fama error chno n3mlo ! 
            console.log(response)
        })
    }  


    // hady update method li n executiwha f wa9t li ndghto 3la button edit
    const updateCoordonnee = async (e) => {
          //hady n3mloha bach page tb9a fixe mat7errkch mni n3mlo submit ida m3mlnahach page ida kant assfal tsser f a3la b7al ida 3mlat actualiser
          e.preventDefault()
          //hada nst3mloh bach nakhdo data mn les champs f Form dyal html 
          //parameter mta3o hwa name li f champ html , o lvalue mta3o li ydkhel user
          const formData = new FormData()
          //njibo data mn champs html 3an tari9 name mta3hom
          formData.append('first_name' , first_name)
          formData.append('phone_number', phone_number)
          formData.append('title', title)

          formData.append('description' , description)
          formData.append('birth_date', birth_date)
          formData.append('cv_url', cv_url)

          formData.append('photo' , photo)
          formData.append('last_name', last_name)
       

          // nb3to post request l api ,ta3na 
          axios.post(`/api/update_coordonnee/${id}`, formData)
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
                <h5 className="card-header">Edit coordonnee</h5>
        <div className="card-body">
    <form>
     {/* value = {title} , title f 7ala hadia hwa variable li 3mlna lo setter lfo9 f react wlli dkhlnah b idina f form o jbnah mn formData /// onChange = y3ni w9t li fama haja tkteb 
     wsst input kan7toha f variable title 3an tari9 settter setTitle , w name = 'title' hwa li bih formData ynjjem y3ref form li 7na nt3amlo m3ah 
     */}
    <input type="text" value={first_name || '' }  placeholder='first name' onChange={event => {setfirst_name(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={last_name || '' }  placeholder='last name ' onChange={event => {setlast_name(event.target.value)}} className="form-control mb-4" />

    <input type="text" value={phone_number || '' } placeholder='phone number 'onChange={event => {setphone_number(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={title || '' }  placeholder='title'onChange={event => {settitle(event.target.value)}} className="form-control mb-4" />


    <input type="text" value={description || '' }placeholder='description ' onChange={event => {setdescription(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={birth_date || '' }   placeholder='birth_date ' onChange={event => {setbirth_date(event.target.value)}} className="form-control mb-4" />
    <input type="text" value={cv_url || '' } placeholder='cv_url ' onChange={event => {setcv_url(event.target.value)}} className="form-control mb-4" />

    <input type="file" value={photo || '' } placeholder='phone_number '  onChange={event => {setphoto(event.target.value)}} className="form-control mb-4" />

    {/* 
        onClick = wa9t li nadghto 3la submit n3mlo execute l method mta3 react smitha createPost li wsst mnha nb3to request l api f backend dyal laravel li defininaha f api.php w PostController 
    */}
    <button onClick={ (event) => updateCoordonnee(event) } className="btn btn-primary">Edit Coordonnee</button>
    </form>
  </div>
</div>
</div>
    )
}

export default EditCoordonnee 