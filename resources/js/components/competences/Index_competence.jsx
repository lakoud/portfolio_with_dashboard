import axios from 'axios';
import React, {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';

import { useNavigate } from 'react-router-dom';


const IndexCompetence = () => {

    // hna 3mlna variable post li an7to fiha natija mta3 request axios.get
    //fnfss wa9t 3mlna setter mta3ha 
    const [competences , setCompetence] = useState([])

    //hadi bach nta9lo mn page l page
     const navigate = useNavigate()

    // hadi 7tina fiha route li anta9lo lih mni ndghto 3la button ta7t
    const newCompetence = () => {
            // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
        navigate('/competence/new')
    }

    // hady method bach mny ndghto 3la update f ay row ydina l page mta3o b ID
    const editCompetence= (id) => {
      // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
      navigate('/competence/edit/'+id)
    }

    // hadi n7toha bach bach w9tma 3mlna rendue lchi html hady t executa mara wa7da  
    useEffect(() => {
      //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPost()
      getCompetence()
    },[])

    //method li katb3et request l api de type get bnissba id raw njiboh mn html ta7t m f wa9t li 3mlna post.id
    const deleteCompetence = async (id) => {

      await axios.get('/api/delete_competence/'+id)
      .then(({data}) => {
          // hna fa9at 3awdna executina getPosts bach t3awed hya bdawrha tb3t request o tjib lina data jdida li moch bach ykon fiha row li supprimina
          getCompetence()
      }).catch(({response}) => {

      })
    }

    //hady hya method getPost li anb3to mnha get request l api mta3na 
    const getCompetence= async () => {
      //katb3t fa9at parameter wa7ed li hwa route li defininah f api.php
      await axios.get('/api/get_competences').then(({data}) => {
        //ida t7bi tchofy resultat mt3 request
        console.log(data)
        //hna n7to data li jatna fwasst variable fo9 li 3mlna => posts
        setCompetence(data.competences)
      })
    }
    return (
        <div className='container'>
            <div className='post_list'>
                <div className='title_bar'>
                    <div className='title_bar_item'>
                        <h1>Competences</h1>
                    </div>

                    <div className='title_bar_item'>
                        <div className='btn'>
                            {/* fach ndghto 3la button hadaya n execetiw method newPost */}
                            <button className='btn btn-primary' onClick={() => newCompetence()}>Add Competence</button>
                        </div>
                    </div>
                </div>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>image</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          // hna 3mlna boucle bach n7to data dyalna f table bootstrap 
          competences.length > 0 && (competences.map((competence,index) => {
            return <tr key={index}>
            <td>{competence.id}</td>
            <td>{competence.competence_name}</td>
            <td><img src={'./images/'+competence.image} width='50' /></td>
        
            <td>
              {/* fach ndghto 3la button n execetiw method editPost  */}
              <button className='btn btn-primary m-2' onClick={() => editCompetence(competence.id)}>Update</button>
              {/* fach ndghto 3la button n execetiw method deletePost  */}
              <button className='btn btn-danger' onClick={() => deleteCompetence(competence.id)}>Delete</button>
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

export default IndexCompetence