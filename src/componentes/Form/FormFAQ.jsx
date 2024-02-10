const FormFAQ = () => {
    return (
        <div>
            <form className="container m-auto p-2 w-2/3" >
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-bold mb-2">
                        Ingresa tu nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="w-full px-3 py-2 border rounded-lg"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                        Ingresa tu email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="consulta" className="block text-sm font-bold mb-2">
                        Deja tu consulta:
                    </label>
                    <textarea
                        type="text"
                        id="consulta"
                        name="consulta"
                        className="w-full p-1 py-10 border rounded-lg "
                        
                    />

                </div>
                <div className="mb-4 flex justify-center">
                    <input
                        type="submit"
                        value="Realizar consulta"
                        className="m-4 p-4 bg-green-600 rounded-xl w-80 flex justify-center content-center"
                    />
                </div>
            </form>
        </div>
    )
}
export default FormFAQ