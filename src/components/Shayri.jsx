import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './style1.css'
import NavBar from './NavBar';

export default function Shayri() {
    const [cont,setCont]=useState([]);
    const [poem,setPoem]=useState([]);
    const [story,setStory]=useState([]);
    const [shayri,setShayri]=useState([]);
    var x;
    useEffect(()=>{
      x=axios({
            method:"GET",
            url:"http://localhost:8080/getcontent",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            }).then(res=>{
                var poem1=[],story1=[],shayri1=[];
                var resu=res.data;
                console.log(res.data);
                setCont(res.data);
                cont.map( res1 =>{
                    if(res1.isPoem){
                        poem1.push(res1)
                    }else if(res1.isStory){
                        story1.push(res1)
                    }else{
                        shayri1.push(res1);
                    }
                    console.log(res1);
                })
                
                setPoem(poem1);
                setShayri(shayri1);
                setStory(story1);
                console.log(cont);
                console.log(poem);
                console.log(shayri);
                console.log(story);
            })
    },[cont])
  return (
    <div style={{"backgroundImage":"url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')","height":"auto","minHeight":"100vh","width":"100%",backgroundRepeat: "no-repeat",
    backgroundSize: "cover",backgroundColor:"rgba(0,0,0,0.9)"}}>
    <NavBar></NavBar>
    {/* <button onClick={fun1} >hello</button> */}
    <div className="main">
    {/* <div className="poems" >
      <h3>Poems</h3>
      {poem.map(c1=>(
        <li>{c1} <a href={"http://localhost:3000/getcontent"+c1.id}>Edit</a></li>
      ))}
    </div>
    <div className="stories" >
    <h3>Stories</h3>
      {story.map(c1=>(
        <li>{c1}</li>
      ))}
    </div> */}
    <div className="shayris" >
    <h3>Shayris</h3>
    <div className='postdetails'>
      {shayri.map(c1=>(
          <div className="mainpost">
          <div className='posttext' > <p>{c1.content}</p></div> 
          <div className="postlinks"> <button><a href={"http://localhost:3000/getcontent/"+c1.id}>Edit</a></button> <button><a href={"http://localhost:3000/getcontent/"+c1.id}>Delete</a></button></div>
          </div>
      ))}
      </div>
    </div>
    </div>
     {/* <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow>
             <TableCell>Dessert (100g serving)</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {shayri.map((poem) => (
             <TableRow
                // key={poem.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {poem}
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer> */}
    
    </div>
  )
}
