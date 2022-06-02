import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import Contact from "./pages/Contact/idex";
import { ProjectPage } from "./pages/Project";
import About from "./pages/About";
import NotFound from "./pages/404 page";
import SingleTask from "./pages/singleTask";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProjectPage />}></Route>
          <Route path="/:taskId" element={<SingleTask />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
