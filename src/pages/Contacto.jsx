import NavBar from "../components/NavBar";
import { Fragment, useState } from "react"
import Footer from "../components/Footer";
import Input from "../components/Input";
import { db } from "../cfg/firebase"
//import { doc, deleteDoc, setDoc } from 'firebase/firestore'
import { collection, addDoc } from "firebase/firestore";



function Contacto() {
const [nuevoMensaje, setNuevoMensaje] = useState({})
const handleInput = (e) => {
    setNuevoMensaje({
    ...nuevoMensaje, [e.target.name]: e.target.value 
   })
  }

  const guardarMensaje = async (e) => {
    try {
        e.preventDefault()
         await addDoc(collection(db, 'mensajes'), nuevoMensaje)
       console.log('Mensaje enviado correctamente')
    } catch (error) {
        console.log("Hubo un problema. Intente más tarde.")
    }
}
   console.log(nuevoMensaje)
  return (     
               
        <Fragment>
         <header>
        <NavBar />
        </header>
       <section><br></br>
         <div className="row featurette">
            <h2 className="featurette-heading">Formulario de contacto</h2>
            <br></br><br></br>
            <div>
          <form>
            <Input 
            label='Nombre'
            id='name'
            type='text'
            handleInput={(e)=>handleInput(e)} 
            />
            <br></br>
           <Input 
            label='Correo'
            id='email'
            type='email'
            handleInput={(e)=>handleInput(e)}
            />
            <br></br>

           <label htmlFor="mensaje">Escribe tu mensaje de contacto:</label>
            <br></br>
           <textarea name="mensaje" id="mensaje" cols="30" rows="10" maxLength="150" onChange={(e)=>handleInput(e)} ></textarea><br></br>
            <button onClick={guardarMensaje}>Enviar</button>
          </form>
       </div>
       </div>
       </section>
        <Footer />
       </Fragment>
    );
  }

export default Contacto