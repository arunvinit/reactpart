import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from './NavBar';

export default function One() {
    const {id}=useParams();
    const [cont,setCont]=useState();
    const [orig,setOrig]=useState([])
    console.log(id);
    var x;
    const handleChange=(e)=>{
        setCont(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      orig.content=cont;
        console.log(orig);
        
        var x = axios({
            method: "POST",
            url: "http://localhost:8080/update/"+orig.id,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            data: JSON.stringify(orig),
            success:alert("Update successfully !!!" )
      }).then(res=>{
          console.log(orig+ " added");
          window.location.href="http://localhost:3000/getcontent/"+orig.id;
      })
    }
    useEffect(()=>{
      x=axios({
            method:"GET",
            url:"http://localhost:8080/getone/"+id,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            }).then(res=>{
                console.log(res);
                setCont(res.data.content);
                setOrig(res.data);
            })
    },[])
  return (
    <div> 
    <NavBar></NavBar>
        <div className='forms'>
        <form action="" onSubmit={handleSubmit} style={{"display":"flex","flexDirection":"column","marginTop":"5%"}}>
            <textarea id="" cols="30" rows="10" value={cont} onChange={handleChange}></textarea>
            <button type='submit'>Update</button>
        </form>
        </div>
    </div>
  )
}
