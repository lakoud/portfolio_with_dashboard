import axios from 'axios';
import React, {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';

import { useNavigate } from 'react-router-dom';


const IndexCoordonnees = () => {

    // hna 3mlna variable post li an7to fiha natija mta3 request axios.get
    //fnfss wa9t 3mlna setter mta3ha 
    const [coordonnee , setCoordonnee] = useState([])

    //hadi bach nta9lo mn page l page
     const navigate = useNavigate()

    // hadi 7tina fiha route li anta9lo lih mni ndghto 3la button ta7t
    const newPost = () => {
            // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
        navigate('/coordonnee/new')
    }

    // hady method bach mny ndghto 3la update f ay row ydina l page mta3o b ID
    const editCoordonnee= (id) => {
      // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
      navigate('/coordonnee/edit/'+id)
    }

    // hadi n7toha bach bach w9tma 3mlna rendue lchi html hady t executa mara wa7da  
    useEffect(() => {
      //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPost()
      getCoordonnee()
    },[])

    //method li katb3et request l api de type get bnissba id raw njiboh mn html ta7t m f wa9t li 3mlna post.id
    const deleteCoordonnee = async (id) => {

      await axios.get('/api/delete_coordonnee/'+id)
      .then(({data}) => {
          // hna fa9at 3awdna executina getPosts bach t3awed hya bdawrha tb3t request o tjib lina data jdida li moch bach ykon fiha row li supprimina
          getCoordonnee()
      }).catch(({response}) => {

      })
    }

    //hady hya method getPost li anb3to mnha get request l api mta3na 
    const getCoordonnee= async () => {
      //katb3t fa9at parameter wa7ed li hwa route li defininah f api.php
      await axios.get('/api/get_coordonnee').then(({data}) => {
        //ida t7bi tchofy resultat mt3 request
        console.log(data)
        //hna n7to data li jatna fwasst variable fo9 li 3mlna => posts
        setCoordonnee(data.coordonnee)
      })
    }


    const [adresse , setAdresse] = useState([])

    //hadi bach nta9lo mn page l page
     const navigate2 = useNavigate()

    // hadi 7tina fiha route li anta9lo lih mni ndghto 3la button ta7t
    const newAdresse= () => {
            // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
            navigate2('/adresse/new')
    }

    // hady method bach mny ndghto 3la update f ay row ydina l page mta3o b ID
    const editAdresse= (id) => {
      // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
      navigate('/adresse/edit/'+id)
    }

    // hadi n7toha bach bach w9tma 3mlna rendue lchi html hady t executa mara wa7da  
    useEffect(() => {
      //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPost()
      getAdresse()
    },[])

    //method li katb3et request l api de type get bnissba id raw njiboh mn html ta7t m f wa9t li 3mlna post.id
    const deleteAdresse = async (id) => {

      await axios.get('/api/delete_adresse/'+id)
      .then(({data}) => {
          // hna fa9at 3awdna executina getPosts bach t3awed hya bdawrha tb3t request o tjib lina data jdida li moch bach ykon fiha row li supprimina
          getAdresse()
      }).catch(({response}) => {

      })
    }

    //hady hya method getPost li anb3to mnha get request l api mta3na 
    const getAdresse= async () => {
      //katb3t fa9at parameter wa7ed li hwa route li defininah f api.php
      await axios.get('/api/get_adresse').then(({data}) => {
        //ida t7bi tchofy resultat mt3 request
        console.log(data)
        //hna n7to data li jatna fwasst variable fo9 li 3mlna => posts
        setAdresse(data.adresses)
      })
    }
    return (
        <div className='container'>
            <div className='post_list'>
                <div className='title_bar'>
                    <div className='title_bar_item'>
                        <h1>Coordonnees</h1>
                    </div>

                    <div className='title_bar_item'>
                        <div className='btn'>
                            {/* fach ndghto 3la button hadaya n execetiw method newPost */}
                            {
                     coordonnee.length  ==0  ?   <button className='btn btn-primary' onClick={() => newPost()}>Add Coordonner</button> :'' } 
                        </div>
                    </div>
                </div>
                <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>First name</th>
          <th>Last name</th>
          <th>Title</th>
          <th>Phone number</th>

          <th>Description</th>
          <th>Birth date</th>
          <th>Cv url</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {
          // hna 3mlna boucle bach n7to data dyalna f table bootstrap 
          coordonnee.length > 0 && (coordonnee.map((coordonnee,index) => {
            return <tr key={index}>
            <td>{coordonnee.id}</td>
            <td>{coordonnee.first_name}</td>
            <td>{coordonnee.phone_number}</td>
            <td>{coordonnee.title}</td>
            <td>{coordonnee.description}</td>
            <td>{coordonnee.birth_date}</td>
            <td>{coordonnee.cv_url}</td>
            <td><img src={'./images/'+coordonnee.image} width='50' /></td>

           
            <td>{coordonnee.last_name}</td>
    
            <td>
              {/* fach ndghto 3la button n execetiw method editPost  */}
              <button className='btn btn-primary m-2' onClick={() => editCoordonnee(coordonnee.id)}>Update</button>
              {/* fach ndghto 3la button n execetiw method deletePost  */}
              <button className='btn btn-danger' onClick={() => deleteCoordonnee(coordonnee.id)}>Delete</button>
            </td>
          </tr>
          }))
        }
      </tbody>
    </Table>
    <div className='title_bar'>
      <div className='title_bar_item'>
                        <h1>Adresse</h1>
                    </div>

                    <div className='title_bar_item'>
                        <div className='btn'>
                            {/* fach ndghto 3la button hadaya n execetiw method newPost */}
                            
                     <button className='btn btn-primary' onClick={() => newAdresse()}>Add Adresse</button> 
                        </div>
                    </div>
                
                    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>rue</th>
          <th>code postal</th>
          <th>ville</th>
          <th>pays</th>

         
        </tr>
      </thead>
      <tbody>
        {
          // hna 3mlna boucle bach n7to data dyalna f table bootstrap 
          adresse.length > 0 && (adresse.map((adresse,index) => {
            return <tr key={index}>
            <td>{adresse.rue}</td>
            <td>{adresse.code_postal}</td>
            <td>{adresse.ville}</td>
            <td>{adresse.pays}</td>
       
    
            <td>
              {/* fach ndghto 3la button n execetiw method editPost  */}
              <button className='btn btn-primary m-2' onClick={() => editAdresse(adresse.id)}>Update</button>
              {/* fach ndghto 3la button n execetiw method deletePost  */}
              <button className='btn btn-danger' onClick={() => deleteAdresse(adresse.id)}>Delete</button>
            </td>
          </tr>
          }))
        }
      </tbody>
    </Table>
            </div>
        </div>
    )
}

export default IndexCoordonnees