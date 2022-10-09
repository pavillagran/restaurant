import { Fragment } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Informacion () {
    return (
        <Fragment>
        <header>
        <NavBar />
        </header>
       
<div className="container articulo">
 <div className="row featurette">
    <div className="col-md-7"><br></br>
        <h2 className="featurette-heading">Información del Restaurante 
         <br></br>
          &nbsp;&nbsp;<span className="text-muted"> El Campestre</span>
        </h2>
         <br></br>
          <p className="lead">Estamos ubicados en calle Freire #1234.</p>
          <p className="lead">La atención es de lunes a sábado desde las 10 horas hasta las 21 horas.</p>
          <p> Nuestro correo electrónico: maesterbeff@elcampestre.cl</p>
    </div>
    <div className="col-md-5">
        <br/><br/><br/>
        <center>
            <object data="map.svg" width="500" height="500"> </object>
        </center>
    </div>
</div>
</div>
<Footer />
</Fragment>

);
}

export default Informacion