

import axios from 'axios'

let baseUrl="https://jsonplaceholder.typicode.com";


let Get=()=>axios.get(`${baseUrl}/albums`);

let GetById=(id)=>{return axios.get(`${baseUrl}/albums/${id}`)}


export let albumsAPI={
    Get,
    GetById,
};