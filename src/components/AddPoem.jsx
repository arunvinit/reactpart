import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from './NavBar'
import './style1.css'
import { useParams } from 'react-router-dom';

export default function Add() {
    const {id}=useParams()
    console.log(id);
    const [content,setContent]=useState("");
    const handleChange=(e)=>{
        setContent(e.target.value);
    }
  return (
    <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')","height":"100vh","width":"100%",backgroundRepeat: "no-repeat",
        backgroundSize: "cover",}}>
    <NavBar/>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            
            var data={
                id:1,
                isShayri:false,
                isStory:false,
                isPoem:true,
                content:content
            }
            var x = axios({
                  method: "POST",
                  url: "http://localhost:8080/content",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  data: JSON.stringify(data),
                  success:alert("Added successfully !!!" )
            })
            setContent("")
        }}>
            <div className="forms">
            <textarea name="" id="" cols="30" rows="10" value={content} onChange={handleChange}></textarea>
            <button variant="contained" type='submit' style={{"display":"flex","alignItems":"center","justifyContent":"center"}}> <AddCircleOutlinedIcon/> Add New Poem </button>
            </div>
        </form>
    </div>
  )
}
