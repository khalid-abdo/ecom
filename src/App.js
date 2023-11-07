import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Nomore from "./Component/Nomore";
import ProudctDetail from "./Component/ProudctDetail";
import ProudctsList from "./Component/Proudcts-list";
import Slider from "./Component/Slider";
import { Routes, Route } from "react-router-dom";


function App() {

  return (

    <div className="App ">

      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <ProudctsList />

        </>
        }
        />
        <Route path="About" element={<About />} />
        <Route path="Nomore" element={<Nomore/>} />
        <Route path="Proudct/:ProudctID" element={<ProudctDetail/>} />

      </Routes>


    </div>
  );
}

export default App;
