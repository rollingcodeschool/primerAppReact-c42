import "./App.css";
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui va la logica

  return (
    // puedo escribir un poquito de logica
    // <> es un Fragment
    <>
      {/* esto es un comentario del html */}
     <Titulos nuevoTitulo='Este titulo fue creado con props' estado={true} ></Titulos>
     <section className="container">
     <h3>Servicios</h3>
     <hr/>
     <Lista></Lista>
     <Contador></Contador>
     </section>
     {/* <Titulos/> */}
    </>
  );
}

export default App;
