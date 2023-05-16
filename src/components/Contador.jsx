import { useState } from "react";

const Contador = () => {
//aqui creo mi estado
const [numero, setNumero] = useState(0);

// setNumero(1) es la funcion que actualiza al state numero

    return (
        <section className='mt-5'>
            <h3>Contador</h3>
            <hr />
            <h4>{numero}</h4>
            <button className='btn btn-primary' onClick={()=> setNumero(numero + 1) }>+1</button>
            {/* agreguen un boton que reste el valor del state */}
        </section>
    );
};

export default Contador;