import axios from 'axios';
import React, {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';

import { useNavigate } from 'react-router-dom';


const IndexSocialLink = () => {

    // hna 3mlna variable post li an7to fiha natija mta3 request axios.get
    //fnfss wa9t 3mlna setter mta3ha 
    const [socialLinks , setSocialLink] = useState([])

    //hadi bach nta9lo mn page l page
     const navigate = useNavigate()

    // hadi 7tina fiha route li anta9lo lih mni ndghto 3la button ta7t
    const newSocialLink = () => {
            // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
        navigate('/socialLink/new')
    }

    // hady method bach mny ndghto 3la update f ay row ydina l page mta3o b ID
    const editSocialLink= (id) => {
      // hady hya method mss2ola 3la tana9ol mn page l page bsti3mal route monassib
      navigate('/socialLink/edit/'+id)
    }

    // hadi n7toha bach bach w9tma 3mlna rendue lchi html hady t executa mara wa7da  
    useEffect(() => {
      //wa9t li n 3mlo render l html kima kan ghady n executiw had method -> getPost()
      getSocialLink()
    },[])

    //method li katb3et request l api de type get bnissba id raw njiboh mn html ta7t m f wa9t li 3mlna post.id
    const deleteSocialLink = async (id) => {

      await axios.get('/api/delete_socialLink/'+id)
      .then(({data}) => {
          // hna fa9at 3awdna executina getPosts bach t3awed hya bdawrha tb3t request o tjib lina data jdida li moch bach ykon fiha row li supprimina
          getSocialLink()
      }).catch(({response}) => {

      })
    }

    //hady hya method getPost li anb3to mnha get request l api mta3na 
    const getSocialLink= async () => {
      //katb3t fa9at parameter wa7ed li hwa route li defininah f api.php
      await axios.get('/api/get_socialLink').then(({data}) => {
        //ida t7bi tchofy resultat mt3 request
        console.log(data)
        //hna n7to data li jatna fwasst variable fo9 li 3mlna => posts
        setSocialLink(data.socialLinks)
      })
    }
    return (
        <div className='container'>
            <div className='post_list'>
                <div className='title_bar   m-5'>
                    <div className='title_bar_item'>
                        <h1>SocialLink</h1>
                    </div>

                    <div className='title_bar_item'>
                        <div className='btn'>
                            {/* fach ndghto 3la button hadaya n execetiw method newPost */}
                            <button className='btn btn-primary' onClick={() => newSocialLink()}>Add SocialLink</button>
                        </div>
                    </div>
                </div>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>url</th>
          <th>label</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          // hna 3mlna boucle bach n7to data dyalna f table bootstrap 
          socialLinks.length > 0 && (socialLinks.map((socialLink,index) => {
            return <tr key={index}>
            <td>{socialLink.id}</td>
            <td>{socialLink.url}</td>
            {/* <td><img src={'./images/'+socialLink.image} width='50' /></td> */}
            <td>{socialLink.label}</td>
            <td>
              {/* fach ndghto 3la button n execetiw method editPost  */}
              <button className='btn btn-primary m-2' onClick={() => editSocialLink(socialLink.id)}>Update</button>
              {/* fach ndghto 3la button n execetiw method deletePost  */}
              <button className='btn btn-danger' onClick={() => deleteSocialLink(socialLink.id)}>Delete</button>
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

export default IndexSocialLink