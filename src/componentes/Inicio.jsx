import { Link } from "react-router-dom"
import Carrusel from "./Carrusel"

const Inicio = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-around m-14">
                    <div>
                        <div className="flex justify-center flex-col items-center m-2">
                            <img className="w-80" src="/imagenes/RAM.Color.png" alt="logo color" />
                            <h2 className="text-2xl"> Somos una red de asistencia mental y atencion médica.</h2>
                            <h3>contamos con más de 25 años de experiencia mejorando la calidad de vida las personas</h3>
                            <button className="m-4 p-4 bg-green-600 rounded-xl w-80 "><Link to="/profesionales"></Link> Comienza ahora</button>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <img className="img-mujer1 rounded-tl-3xl rounded-br-3xl" src="https://s3-alpha-sig.figma.com/img/508a/4488/7141e1a06e6ae64d28537a2e4fa35e4d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-Tgq7HYHYyOGzDqAwpSl8N5Ycm7KJuIIk6skblTmAFrjEYblHJFqUb~64CUe3m3Bpw11PAUXB2U8yQE6tMjId~V5DYmQR5pyp0y6AJDUH2Pt1-sP9owtqqiMbcHIGd-uxpIWxyJbGzRgO14oO9ceC3h2jjl~kVF2aLBKQlTwx02C-m9jSsMDlIzO2c9MNV882yYQE20eHOvJFbwe6M6Zob~eQqdE4O-kHmvVfBzElqCnINbE3lH0m1fd49PEBnFOkYgqNeQIiox5jixitA9QNxo-c2yAAwKgiTGMwBxuceO55VtZ7CehdMYyIxJ1AG6caGP9RHsSMO8yKBLlu7EHA__" alt="img-inicio1" />
                    </div>
                </div>
                <div>
                    <h3 className="flex justify-center">Ofrecemos un servicio de calidad basado en la atención, el respeto, confianza, calidez y la responsabilidad que nos caracterizan.</h3>
                </div>
                <div className="flex items-center justify-around m-14">
                    <div>
                        <div className="flex m-1 p-1 w-96">
                            <img className=" img-personas-flor rounded-tr-3xl rounded-bl-3xl m-4" src="/imagenes/Flor.personas.png" alt="persona-1-flor" />
                        </div>
                    </div>
                    <div>
                        <div className="ml-20 flex flex-col justify-center items-center w-80">
                            <h2 className="text-2xl">Elige al profesional que mejor se adapte a ti.</h2>
                            <p>A través de nuestra asesoría psicológica, brindamos las herramientas necesarias para que cada individuo pueda transitar y superar dificultades de la vida diaria: </p>
                            <ul className="list-disc">
                                <li>Duelos</li>
                                <li>Separaciones</li>
                                <li>Trastornos depresivos, de sueño o alimienticios</li>
                                <li>Addicciones</li>
                                <li>Fuentes de ansiedad</li>
                                <li>Cuidado de los hijos y familia</li>
                            </ul>
                            <p>Y mucho más.</p>
                            <button className="m-16 p-3 bg-green-600 rounded-xl w-80 "><Link to="/profesionales"></Link> Comienza ahora</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-3xl"> En 3 pasos puedes agendar una cita online</p>
                    <p>Sigue los pasos e inicia tu acompañamiento psicologico ahora </p>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="p-0">
                        <div className="m-4 p-4 w-96">
                            <div>
                                <div className="flex flex-row w-16 items-center">
                                    <p className="text-6xl">1</p>
                                    <p className="text-3xl">Elige a tu psicólogo</p>
                                </div>
                            </div>
                            <div className="w-96">
                                <p>Contamos con un grupo de profesionales con especialidades para que se adapten mejor a tus necesidades.</p>
                            </div>
                        </div>
                        <div className="m-4 p-4 w-96">
                           <div>
                                <div className="flex flex-row w-64 items-center">
                                <p className="text-6xl">2</p>
                                <p className="text-3xl">Agenda tu cita online</p>
                                </div>
                            </div>
                            <div>
                                <p>Ingresa al link que te llevará a la página Calendly donde podrás  seleccionar el día y hora para tu consulta.</p>
                            </div> 
                        </div>
                        <div className="m-4 p-4 w-96">
                            <div>
                                <div className="flex flex-row w-72 items-center">
                                <p className="text-6xl">3</p>
                                <p className="text-3xl">Conéctate e inicia tu cita online</p>
                                </div>
                            </div>
                            <div>
                                <p>Tu psicólogo estará encantando de acompañarte en este nuevo camino.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mr-8">
                        <img className="w-44" src="imagenes/Frame-5050.png" alt="instrucciones" />
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="m-4 p-4 bg-green-600 rounded-xl w-80 flex justify-center content-center"><Link to="/profesionales"></Link> Comienza ahora</button>
                </div>
                <div>
                    <p className="flex justify-center text-2xl">Conoce que opinan nuestros pacientes</p>
                </div>
                <div>
                   <Carrusel/>
                </div>
            </div>

        </>
    )
}
export default Inicio