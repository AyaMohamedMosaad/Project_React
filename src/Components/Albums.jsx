

import { useEffect, useState } from "react";
import { albumsAPI } from "../API/albums"
import {Button, NavLink, Table} from "react-bootstrap"
import { Link } from "react-router-dom";
import { FaRegEye } from 'react-icons/fa';


export function Albums() {
    let [albumes, setAlbumes] = useState([])

    let GetAllAlbumes = async () => {
        try {
            let response = await albumsAPI.Get();
            setAlbumes(response.data)
            
        }
        catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        GetAllAlbumes();
    }, []);

    return (
        <>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>User Id</th>
      <th>ID</th>
      <th>Title</th>
      <th>Show Details</th>
    </tr>
  </thead>
  <tbody>
  {albumes&&albumes.map((item)=>( 
                     <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                       <td>{item.title}</td> 
                       <td><Link to={`/albums/${item.id}`}><FaRegEye/></Link></td> 

                    </tr>
                )
                    )}
  </tbody>
</Table>



        </>
    )
}