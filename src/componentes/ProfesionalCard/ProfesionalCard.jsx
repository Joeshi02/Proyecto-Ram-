const ProfesionalCard = ({ professional }) => {
    return (
        <div className='flex flex-col border-2 rounded-xl shadow-md mb-7 sm:mb-0 max-w-xl justify-between'>
            <div className='px-4 pt-4 pb-1 text-sm lg:text-base lg:flex lg:flex-col lg:gap-1'>
                <div className='flex lg:flex-col mb-1'>
                    <div className='w-32 h-36 lg:w-full lg:h-72 lg:mb-2 lg:relative'>
                        <img src={professional.thumbnail} alt={professional.name} className='w-full h-full object-cover object-center rounded-xl' />
                        <img src={`imagenes/flag-${professional.nationality}.png`} alt="" className='hidden lg:inline lg:absolute lg:right-4 lg:bottom-4 lg:z-10' />
                    </div>
                    <div className='ml-2 flex flex-col justify-around lg:gap-1'>
                        <p>Psicólogo Online</p>
                        <h2 className='font-title text-xl lg:text-4xl'>{professional.name}</h2>
                        <span className='lg:text-xl'>{professional.college}</span>
                        <div className='lg:hidden'>
                            <img src={`imagenes/flag-${professional.nationality}.png`} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex py-2 gap-3 lg:ml-2'>
                    <p>Especialidad:</p>
                    <p className='green-border'>{professional.specialty}</p>
                </div>
                <div className='w-full pb-2 lg:ml-2'>
                    <p>Habilidades:</p>
                    <div className='flex flex-wrap gap-2 mt-1'>
                        {
                            professional.abilities.map((ab, i) => <p className='ability' key={i++}>{ab}</p>)
                        }
                    </div>
                </div>
                <div className='lg:ml-2 lg:flex lg:my-5'>
                    <p>Cita individual - <span>{professional.appointmentTime}</span> minutos</p>
                    <div className='flex gap-4 py-2 lg:py-0 lg:ml-7'>
                        <p className='green-border'>${professional.priceArs} ARS</p>
                        <p className='green-border'>${professional.priceUsd} USD</p>
                    </div>
                </div>
            </div>
            <button className='h-12 bg-light text-skyblue rounded-xl shadow-lg hover:bg-light-green hover:text-white duration-500 text-base lg:text-xl'><a className='flex justify-center items-stretch' href={professional.calendlyLink}>¡Agenda tu cita aquí!</a></button>
        </div>
    )
}

export default ProfesionalCard