import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddShayri from "./components/AddShayri";
import AddPoem from "./components/AddPoem";
import AddStory from "./components/AddStory";
import Content from "./components/Content";
import Home from './components/Home'
import Shayri from "./components/Shayri";
import Poem from "./components/Poem";
import Story from "./components/Story";
import One from "./components/One";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/addpoem" element={<AddPoem></AddPoem>}></Route>
          <Route exact path="/addshayri" element={<AddShayri></AddShayri>}></Route>
          <Route exact path="/addstory" element={<AddStory></AddStory>}></Route>
          <Route exact path="/getcontent" element={<Content></Content>}></Route>
          <Route exact path="/getcontent/shayri" element={<Shayri></Shayri>}></Route>
          <Route exact path="/getcontent/poem" element={<Poem></Poem>}></Route>
          <Route exact path="/getcontent/story" element={<Story></Story>}></Route>
          <Route path="/getcontent/:id" element={<One></One>}>  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
