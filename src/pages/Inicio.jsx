import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import { Fragment } from "react"
import Articulo from "../components/Articulo";
import Footer from "../components/Footer";

function Inicio() {
    return (
      <Fragment>
        <header>
        <NavBar />
        </header>
        <Carrusel />
        <main>
        <Articulo />
        </main>
        <Footer />
       </Fragment>
    );
  }

export default Inicio