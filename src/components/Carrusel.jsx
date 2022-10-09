function Carrusel () {
    return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1" class=""></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2" class=""></li>
        </ol>
    
        {/*--------------- flechas  -------------*/}
        <div class="carousel-inner">
            <div class="carousel-item carousel-item-next carousel-item-start">
           <img src="cover1.jpeg" className="d-block w-100" alt="el primero de todo"></img>
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"></rect>
                </svg>                
                <div class="container">
                    <div class="carousel-caption text-start">
                   
                        <h1>Inolvidables momentos en familia</h1>
                        <p>Ubicados en el centro de concepción, puedes reservar una mesa para degustar con más tiempo y disfrutar en familia nuestras mejores preparaciones.</p>
                         {/*<p><a class="btn btn-dark btn-lg" href="/contacto" role="button">Ver Carta</a></p>*/}
                    </div>
                </div>
            </div>
    
        {/*--------------- flechas  -------------*/}
            <div class="carousel-item">
                <img src="cover4.jpeg" className="d-block w-100" alt="el primero de todo"></img>
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777">
                    </rect>
                </svg>
    
                <div class="container">
                    <div class="carousel-caption">
                        <h1>La mejor comida campestre.</h1>
                        <p>Con los mejores productos 100% naturales, sin aditivos, ven y disfruta de una experiencia única.</p>
                        {/* <p><a class="btn btn-dark btn-lg" href="/contacto" role="button">Conoce más</a></p>*/}
                    </div>
                </div>
            </div>
    
            <div class="carousel-item active carousel-item-start">
            <img src="cover3.jpeg" className="d-block w-100" alt="el primero de todo"></img>
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"></rect>
                </svg>
                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>Date un gusto.</h1>
                        <p>Promociones especiales de lunes a jueves, puedes agendar en la sección de contacto.</p>
                       {/* <p><a class="btn btn-dark btn-lg" href="/contacto" role="button">Contacto</a></p> */}
                    </div>
                </div>
            </div>
        </div>
        {/*--------------- flechas  -------------*/}
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">  <span class="carousel-control-next-icon" aria-hidden="true"></span></a>
    </div>
     
     )
    }
    

export default Carrusel
