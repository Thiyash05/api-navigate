import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';


function Details(){
    const [photos,setphotos]=useState([])
    
        useEffect(()=>{

        axios.get('https://api.tvmaze.com/shows/1/episodes')
          .then((res)=>
          setphotos(res.data)
          )
    
        },[])
        const params=useParams()
        const item=photos.find((e)=>e.id=== parseInt(params.id))
    
        return(
            <div>
                <Card className="card-style">
      
                  <Card.Body>

                      <Card.Img variant="top" src={item?.image.medium} />
                          <Card.Title className="detail-card">Title : {item?.name}</Card.Title>
                              <Card.Text>id :{item?.id}</Card.Text>
                              <Card.Text>runtime :{item?.runtime}</Card.Text>
                              <Card.Text> rating :{item?.rating.average}</Card.Text>
                              <Card.Text> number : {item?.number}</Card.Text> 
                              <Card.Text>type :{item?.type}</Card.Text>
                  </Card.Body>
               </Card>  
            </div>
               
        )
        

}
export default Details ;