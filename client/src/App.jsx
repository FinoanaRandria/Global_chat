import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
/* import {AuthProvider} from "" */
function App() {
  return (
    <div className="App" style={{fontFamily: "Avenir"}}>
      <Routes>
        {/* <AuthProvider> */}
          

        <Route path="/" Component={Login}/>
         
        {/* </AuthProvider> */}
      </Routes>
    </div>
  );
}

export default App;
