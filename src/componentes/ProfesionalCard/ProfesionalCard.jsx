import { Link } from "react-router-dom"

const ProfesionalCard = ({ professional }) => {

    const {data} = professional
 
    return (
        <div className='flex flex-col border-2 rounded-xl shadow-md mb-7 sm:mb-0 max-w-xl justify-between'>
            <div className='px-4 pt-4 pb-1 text-sm lg:text-base lg:flex lg:flex-col lg:gap-1'>
                <div className='flex lg:flex-col mb-1'>
                    <div className='w-32 h-36 lg:w-full lg:h-72 lg:mb-2 lg:relative'>
                        <img src={data.imagen} alt={data.nommbre} className='w-full h-full object-cover object-center rounded-xl' />
                        <img src={`https://res.cloudinary.com/leoms96/image/upload/v1708375761/banderas/${data.nacionalidad}.png`} width={44} alt="" className='hidden lg:inline lg:absolute lg:right-4 lg:bottom-4 lg:z-10 lg:rounded-lg' />
                    </div>
                    <div className='ml-2 flex flex-col justify-around lg:gap-1'>
                        <p>{data.profesion} Online</p>
                        <h2 className='font-title text-xl lg:text-4xl'>{data.nombre}</h2>
                        <span className='lg:text-xl'>{data.descripcion}</span>
                        <div className='lg:hidden'>
                            <img src={`https://res.cloudinary.com/leoms96/image/upload/v1708375761/banderas/${data.nacionalidad}.png`} width={44} alt=" bandera nacionalidad" className="rounded-lg"/>
                        </div>
                    </div>
                </div>
                <div className='flex py-2 gap-3 lg:ml-2'>
                    <p>Especialidad:</p>
                    <p className='green-border'>{data.especialidad}</p>
                </div>
                <div className='w-full pb-2 lg:ml-2'>
                    <p>Habilidades:</p>
                    <div className='flex flex-wrap gap-2 mt-1'>
                        {
                            data.habilidades.map((ab, i) => <p className='ability' key={i++}>{ab}</p>)
                        }
                    </div>
                </div>
                <div className='lg:ml-2 lg:flex lg:my-5'>
                    <p>Cita individual - <span>{data.duracionCita}</span> minutos</p>
                    <div className='flex gap-4 py-2 lg:py-0 lg:ml-7'>
                        <p className='green-border'>${data.precioPesos} ARS</p>
                        <p className='green-border'>${data.precioDolares} USD</p>
                    </div>
                </div>
            </div>
            <Link className='h-12 bg-light text-skyblue rounded-xl shadow-lg hover:bg-light-green hover:text-white duration-500 text-base lg:text-xl flex justify-center items-center' to={data.calendlyLink}>¡Agenda tu cita aquí!</Link>
        </div>
    )
}

export default ProfesionalCard