import { Link } from "react-router-dom"


import Carrusel from "../Carrusel/Carrusel"
import Acordiones from "../Accordion/Accordion"
import FormFAQ from "../Form/FormFAQ"

const Inicio = () => {
    return (
        <>
            <div className="flex flex-col mb-5 text-primary">
                <div className="flex items-center justify-around m-14">
                    <div>
                        <div className="flex justify-center flex-col items-center m-2 text-center">
                            <img className="w-80" src="/imagenes/RAM.Color.png" alt="logo color" />
                            <h2 className="text-3xl font-title"> Somos una red de asistencia mental y atencion médica.</h2>
                            <h3>contamos con más de 25 años de experiencia mejorando la calidad de vida las personas</h3>
                            <button className="m-4 p-4 text-white bg-light-green hover:bg-primary rounded-3xl w-80 duration-500 "><Link to="/professionals">Comienza ahora</Link> </button>
                        </div>
                    </div>
                    <div className="w-2/3 hidden lg:block">
                        <img className="img-mujer1 rounded-tl-3xl rounded-br-3xl" src="https://s3-alpha-sig.figma.com/img/508a/4488/7141e1a06e6ae64d28537a2e4fa35e4d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-Tgq7HYHYyOGzDqAwpSl8N5Ycm7KJuIIk6skblTmAFrjEYblHJFqUb~64CUe3m3Bpw11PAUXB2U8yQE6tMjId~V5DYmQR5pyp0y6AJDUH2Pt1-sP9owtqqiMbcHIGd-uxpIWxyJbGzRgO14oO9ceC3h2jjl~kVF2aLBKQlTwx02C-m9jSsMDlIzO2c9MNV882yYQE20eHOvJFbwe6M6Zob~eQqdE4O-kHmvVfBzElqCnINbE3lH0m1fd49PEBnFOkYgqNeQIiox5jixitA9QNxo-c2yAAwKgiTGMwBxuceO55VtZ7CehdMYyIxJ1AG6caGP9RHsSMO8yKBLlu7EHA__" alt="img-inicio1" />
                    </div>
                </div>
                <div className="text-center flex justify-center bg-light p-5">
                    <h3 className="w-1/2">Ofrecemos un servicio de calidad basado en la atención, el respeto, confianza, calidez y la responsabilidad que nos caracterizan.</h3>
                </div>
                <div className="flex items-center justify-around m-14 flex-wrap sm:flex-nowrap">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center">
                        <div className="flex justify-center m-1 p-1 w-full sm:w-96">
                            <img className="img-personas-flor rounded-tr-3xl rounded-bl-3xl m-4" src="/imagenes/Flor.personas.png" alt="persona-1-flor" />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex">
                        <div className="flex-col justify-center items-center w-full sm:w-80 mx-auto my-auto">
                            <h2 className="font-title text-2xl">Elige al profesional que mejor se adapte a ti.</h2>
                            <p>A través de nuestra asesoría psicológica, brindamos las herramientas necesarias para que cada individuo pueda transitar y superar dificultades de la vida diaria: </p>
                            <ul className="list-disc">
                                <li>Duelos</li>
                                <li>Separaciones</li>
                                <li>Trastornos depresivos, de sueño o alimenticios</li>
                                <li>Adicciones</li>
                                <li>Fuentes de ansiedad</li>
                                <li>Cuidado de los hijos y familia</li>
                            </ul>
                            <p>Y mucho más.</p>
                            <button className="m-4 p-3 text-white bg-light-green hover:bg-primary rounded-3xl w-full sm:w-80 duration-500">
                                <Link to="/professionals">Comienza ahora</Link>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="bg-light">
                 <div className="flex-col items-center text-center">
                    <p className="text-3xl font-title"> En 3 pasos puedes agendar una cita online</p>
                    <p>Sigue los pasos e inicia tu acompañamiento psicologico ahora </p>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="p-0">
                        <div className="m-4 p-4 w-full flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="mb-4 sm:mb-0 sm:mr-4">
                                <div className="flex flex-row items-center">
                                    <p className="text-6xl">1</p>
                                    <p className="text-3xl m-1.5 font-title">Elige a tu psicólogo</p>
                                </div>
                                <div className="w-full sm:w-96">
                                    <p>Contamos con un grupo de profesionales con especialidades para que se adapten mejor a tus necesidades.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imagenes/bro.png" alt="bros" />
                            </div>
                        </div>
                        <div className="m-4 p-4 w-full flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="mb-4 sm:mb-0 sm:mr-4">
                                <div className="flex flex-row items-center">
                                    <p className="text-6xl">2</p>
                                    <p className="text-3xl m-1.5 font-title">Agenda tu cita online</p>
                                </div>
                                <div className="w-full sm:w-96">
                                    <p>Ingresa al link que te llevará a la página Calendly donde podrás seleccionar el día y hora para tu consulta.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imagenes/bro1.png" alt="bros" />
                            </div>
                        </div>
                        <div className="m-4 p-4 w-full flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="mb-4 sm:mb-0 sm:mr-4">
                                <div className="flex flex-row items-center">
                                    <p className="text-6xl">3</p>
                                    <p className="text-3xl m-1.5 font-title">Conéctate e inicia tu cita online</p>
                                </div>
                                <div className="w-full sm:w-96">
                                    <p>Tu psicólogo estará encantado de acompañarte en este nuevo camino.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/imagenes/bro2.png" alt="bros" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="m-4 p-4 text-white bg-light-green hover:bg-primary rounded-3xl w-80 flex justify-center content-center duration-500"><Link to="/professionals">Comienza ahora</Link></button>
                </div>   
                </div>
                
                <div className="text-center text-2xl">
                    <p className="font-title">Conoce que opinan nuestros pacientes</p>
                </div>
                <div>
                    <Carrusel />
                </div>
                <div>
                    <p className="flex justify-center text-2xl font-title">Preguntas frecuentes </p>
                </div>
                <div className="flex justify-center ">
                    <Acordiones />
                </div>
                <div className="flex justify-center">
                    <button className="m-4 p-4 text-white bg-light-green hover:bg-primary rounded-3xl w-80 flex justify-center content-center duration-500"><Link to="/professionals">Comienza ahora</Link></button>
                </div>
                <div className="bg-light">
                    <div className="flex-col justify-center">
                        <p className="text-center text-2xl font-title">Preguntas frecuentes</p>
                        <p className="text-center text-xl">¿Tienes alguna duda? o ¿Deseas dejarnos tu opinión? Escríbenos, estamos aquí para lo que necesites.</p>
                    </div>
                    <div >
                        <FormFAQ />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Inicio