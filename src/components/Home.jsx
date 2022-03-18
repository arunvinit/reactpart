import React from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useState } from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Home() {
  const [type, setType] = useState();
  const [poems, setPoems] = useState([]);
  const [cont, setCont] = useState([]);
  const [poem, setPoem] = useState([]);
  const [story, setStory] = useState([]);
  const [shayri, setShayri] = useState([]);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#A36147"),
    backgroundColor: "#A36147",
    "&:hover": {
      opacity: 0.9,
    },
  }));

  
  useEffect(() => {
    x = axios({
      method: "GET",
      url: "http://localhost:8080/getcontent",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      var poem1 = [],
        story1 = [],
        shayri1 = [];
      var resu = res.data;
      // console.log(res.data);
      setCont(res.data);
      cont.map((res1) => {
        if (res1.isPoem) {
          poem1.push(res1);
        } else if (res1.isStory) {
          story1.push(res1);
        } else {
          shayri1.push(res1);
        }
        console.log(res1.content);
      });
      setPoem(poem1);
      setShayri(shayri1);
      setStory(story1);
      console.log(cont);
      console.log(poem);
      console.log(shayri);
      console.log(story);
    });
  }, [cont]);

  const store = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    window.location.href = `http://localhost:3000/add${e.target.value}`;
  };
  var x;
  return (
    <div
      style={{
        "background-image":
          "url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')",
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar></NavBar>
      <div className="mat">
        <div className="header">
          <p style={{ color: "#ffe5d9", fontWeight: "bold" }}>
            Welcome to <span> Javed-Writes 📝 </span>{" "}
          </p>
        </div>
        <div className="content">
          <p style={{ "font-size": "17px" }}>
            Hey There !!! <br /> This is Javed Akhtar I am a guy who loves
            writing things that come to my head. <br /> Here you can also post
            your Poems Shayris andd Stories and Enjoy Reading what others have
            posted <br />{" "}
          </p>
        </div>
        <div className="btns">
          <button variant="contained" value="story" onClick={store}>
            <AddCircleOutlinedIcon />
            Story
          </button>
          <button variant="contained" value="shayri" onClick={store}>
            <AddCircleOutlinedIcon />
            Shayri
          </button>
          <button variant="contained" value="poem" onClick={store}>
            <AddCircleOutlinedIcon />
            Poem
          </button>
        </div>
      </div>
      <div className="below">
        <h3>
          You Post Your Writings Here and Win Exciting prizes If People Loves
          your Post :)
        </h3>
        <hr
          style={{
            height: "4px",
            border: "none",
            "background-color": "pink",
            width: "20%",
          }}
        />
        <div className="belcont">
          <div className="bt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              fugiat libero quos, iusto eaque quis laboriosam error quia debitis
              qui aut rerum voluptates placeat dolores dolor corrupti tempora
              modi unde?
            </p>
          </div>
          <div className="imb">
            <img
              src="https://images.unsplash.com/photo-1592819695396-064b9572a660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              height="auto"
              width="auto"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <h3>
          Some Poems On Our Platform :)
        </h3>
        <hr
          style={{
            height: "4px",
            border: "none",
            "background-color": "pink",
            width: "20%",
          }}
        />
        <div className="mainhm">
        {
          poem.map(p1=>(
            <div className="hmc">
            <p>{p1.content}</p>
            </div>
          ))
        }
        </div>
        <div className="btns" style={{"margin":"auto"}}>
          <button variant="contained" value="poem" style={{"width":"auto"}}>
            <ArrowCircleRightOutlinedIcon />
            <a href="http://localhost:3000/getcontent/poem">Explore More</a>
          </button>
        </div>
        <h3>
          Some Stories On Our Platform :)
        </h3>
        <hr
          style={{
            height: "4px",
            border: "none",
            "background-color": "pink",
            width: "20%",
          }}
        />
        <div className="mainhm">
        {
          story.map(p1=>(
            <div className="hmc">
            <p>{p1.content}</p>
            </div>
          ))
        }
        </div>
        <div className="btns" style={{"margin":"auto"}}>
          <button variant="contained" value="poem" style={{"width":"auto"}}>
            <ArrowCircleRightOutlinedIcon />
            <a href="http://localhost:3000/getcontent/story">Explore More</a>
          </button>
        </div>
        <h3>
          Some Shayris On Our Platform :)
        </h3>
        <hr
          style={{
            height: "4px",
            border: "none",
            "background-color": "pink",
            width: "20%",
          }}
        />
        <div className="mainhm">
        {
          shayri.map(p1=>(
            <div className="hmc">
            <p>{p1.content}</p>
            </div>
          ))
        }
        </div>
        <div className="btns" style={{"margin":"auto"}}>
          <button variant="contained" value="poem"  style={{"width":"auto"}}>
            <ArrowCircleRightOutlinedIcon />
            <a href="http://localhost:3000/getcontent/shayri">Explore More</a>
          </button>
        </div>
      </div>
    </div>
  );
}
