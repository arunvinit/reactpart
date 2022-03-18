import React from 'react'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import './style1.css'
export default function NavBar() {
  return (
    <>
        <div className="navbar">
      
      <div className="logo" style={{"color":"#f64c72"}}><HistoryEduIcon style={{"fontSize":"40px"}} />Javed-Writes</div>
      
      <div className="links">
        <a href="http://localhost:3000/">Home</a><a href="http://localhost:3000/getcontent/poem">Poems</a><a href="http://localhost:3000/getcontent/shayri">Shayris</a><a href="http://localhost:3000/getcontent/story">Stories</a> <a href="http://" style={{"background": "hsla(350, 93%, 61%, 1)",

"background": "linear-gradient(90deg, hsla(350, 93%, 61%, 1) 0%, hsla(8, 98%, 59%, 1) 67%)",

"background": "-moz-linear-gradient(90deg, hsla(350, 93%, 61%, 1) 0%, hsla(8, 98%, 59%, 1) 67%)",

"background": "-webkit-linear-gradient(90deg, hsla(350, 93%, 61%, 1) 0%, hsla(8, 98%, 59%, 1) 67%)",

"filter": "DXImageTransform.Microsoft.gradient( startColorstr=#F83D5C, endColorstr=#FD4B2F, GradientType=1 )"}}>LOG-IN</a>
      </div>
      <div className="burger">
          <div className="b1"></div>
          <div className="b2"></div>
          <div className="b3"></div>
        </div>
    </div>
    </>
  )
}
