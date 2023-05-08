import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutTea from "./pages/Aboutme/AboutTea";
import Aboutme from "./pages/Aboutme/Aboutme";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  return (
    <>
      <Layout >
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<Aboutme />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/aboutTea" element={<AboutTea />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </Layout>
    </>
  )
}

export default App
