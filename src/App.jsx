
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {

  const {state} = useContextGlobal()

  return (
      <div className= {state.theme + " App"}>
        
        <Navbar/>
          <Routes>    

            <Route path='/' element={<Home/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>

        </Routes>

        <Footer/>
      </div>
  );
}

export default App;
