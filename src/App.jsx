 

import {BrowserRouter,Routes,Route} from "react-router-dom"
import FormPage from "./FormPage"
import BalloonPage from "./BalloonPage"
import Header from "./Header"

 
function App() {

  return  <BrowserRouter>
    <Header/>
  <Routes>
      <Route path="/" element={<BalloonPage />} />
      <Route path="/form" element={<FormPage/>}/>
  </Routes>
   
</BrowserRouter>
      
    
}

export default App
