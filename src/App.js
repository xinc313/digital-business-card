import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "../src/style.css";

export default function App(){
  return (
    <div className="app-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}