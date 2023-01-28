
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import More from "./pages/More";


 function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route index element={<Cards/>}></Route>
      <Route path="more" element ={<More/>}></Route>
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
