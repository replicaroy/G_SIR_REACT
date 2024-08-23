import Navbar from "./components/Layout/navbar/Navbar";
import Aside from "./components/Layout/aside/Aside";
import Main from "./components/Layout/main/Main";
import Footer from "./components/Layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div class="main_container">
        <Navbar/>
        <Aside/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
