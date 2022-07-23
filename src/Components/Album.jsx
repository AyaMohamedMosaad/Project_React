
import React, { useEffect, useState } from "react";
import {Card, ListGroup, Table} from "react-bootstrap"
import { useParams } from "react-router-dom";
import { albumsAPI } from "../API/albums"
import { FaRegEye } from 'react-icons/fa';
import { IconName } from "react-icons/fa";


export function Album()
{
  let [album,setAlbum]=useState({})
  let {id}=useParams()
  let GetAlbumById=async()=>{

      try{
          let response=await albumsAPI.GetById(id);
          setAlbum(response.data)
          console.log(response.data)

         
      }
      catch(err){console.log(err)}
  }


  useEffect(() => {
    GetAlbumById();
}, []);

const mystyle = {
 
  backgroundColor: "dark",
  padding: "10px",
  fontFamily: "Arial",
  fontSize:"30px",
  textAlign:"center"
};

    return (
        <>

  <Card style={mystyle} className='m-5'>
  <Card.Header>Album Details</Card.Header>
  <ListGroup variant="Dark">
    <ListGroup.Item> {album.userId}</ListGroup.Item>
    <ListGroup.Item> {album.id}</ListGroup.Item>
    <ListGroup.Item> {album.title}</ListGroup.Item>
  </ListGroup>
</Card>    
    
        </>
    )
}