import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './style1.css'
import NavBar from './NavBar';

export default function Add() {
    const [content,setContent]=useState("");
    const handleChange=(e)=>{
        setContent(e.target.value);
    }
  return (
    <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')","height":"100vh","width":"100%",backgroundRepeat: "no-repeat",
        backgroundSize: "cover",}}>
    <NavBar></NavBar>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setContent("")
            var data={
                id:1,
                isShayri:true,
                isStory:false,
                isPoem:false,
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
        }}>
            <div className="forms">
            <textarea name="" id="" cols="30" rows="10" value={content} onChange={handleChange}></textarea>
            <button variant="contained" type='submit' style={{"display":"flex","alignItems":"center","justifyContent":"center"}}> <AddCircleOutlinedIcon/> Add New Shayri </button>
            </div>
        </form>
    </div>
  )
}
