import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState, useRef } from "react"
import Swal from "sweetalert2"

const FormFAQ = () => {

    const [mensaje, setMensaje] = useState(
        {
            remitente: "",
            nombre: "",
            mensaje: ""
        }
    )
    const [isConsulting, setIsConsulting] = useState(false)

    const inputRemitente = useRef();
    const inputNombre = useRef();
    const inputMensaje = useRef();

    const handleInputChange = (e) => {



        setMensaje({ ...mensaje, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsConsulting(true)
            const cleanedMensaje = {
                remitente: mensaje.remitente.trim(),
                nombre: mensaje.nombre.trim(),
                mensaje: mensaje.mensaje.trim(),
                fecha: new Date()
            };

            // Validate if any required field is empty
            if (!cleanedMensaje.remitente || !cleanedMensaje.nombre || !cleanedMensaje.mensaje) {
                throw new Error("Por favor complete todos los campos.");
            }

            const db = getFirestore()

            const mensajeCollection = collection(db, "mensajes")

            const mensajeRef = await addDoc(mensajeCollection, cleanedMensaje)

            Swal.fire({
                title: "Su consulta fue recibida, en breve nos pondremos en contacto.",
                icon: "success"
            })
            setMensaje({
                remitente: "",
                nombre: "",
                mensaje: ""
            })
            setIsConsulting(false)

            inputRemitente.current.value = '';
            inputNombre.current.value = '';
            inputMensaje.current.value = '';

        } catch (err) {
            Swal.fire({
                title: "Error al enviar el mensaje",
                text: err.message,
                icon: "error"
            });
            setIsConsulting(false)
        }





    }


    return (
        <div>
            <form className="m-auto w-fit sm:w-3/5 text-primary" onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-bold mb-2">
                        Ingresa tu nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="shadow-md w-full px-3 py-2 border rounded-lg"
                        onChange={handleInputChange}
                        ref={inputNombre}
                        value={mensaje.nombre}

                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                        Ingresa tu email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="remitente"
                        className="shadow-md w-full px-3 py-2 border rounded-lg"
                        onChange={handleInputChange}
                        ref={inputRemitente}
                        value={mensaje.remitente}


                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="consulta" className="block text-sm font-bold mb-2">
                        Deja tu consulta:
                    </label>
                    <textarea
                        type="text"
                        id="consulta"
                        name="mensaje"
                        className="shadow-md align-top w-full p-1 py-10 border rounded-lg "
                        onChange={handleInputChange}
                        ref={inputMensaje}
                        value={mensaje.mensaje}


                    />

                </div>
                <div className="mb-4 flex justify-center">
                    <input
                        type="submit"
                        value={isConsulting ? "Enviando..." : "Enviar"}
                        onChange={handleInputChange}
                        className="m-4 p-4 text-white bg-light-green hover:bg-primary rounded-3xl w-80 flex justify-center content-center duration-500 cursor-pointer"
                    />
                </div>
            </form>
        </div>
    )
}
export default FormFAQ