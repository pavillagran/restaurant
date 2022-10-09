import { Fragment } from "react"




function NavBar () {
    return (
       <Fragment>
           
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid"><a className="navbar-brand" href="/">El Campestre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <a className="nav-link"  href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">Contacto</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link"  href="/informacion">Información</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/menu" tabIndex="-1" aria-disabled="true">Menú</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
       </Fragment>
       
        )
}

export default NavBar