import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </>
  );
}

export default App;
