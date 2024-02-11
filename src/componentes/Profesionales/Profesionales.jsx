import ProfesionalCard from "../ProfesionalCard/ProfesionalCard"

const Profesionales = () => {

    const professionals = [
        {
            id: '1',
            name: 'Miguel Otero',
            thumbnail: 'imagenes/professional_profile.png',
            nationality: 'ar',
            college: 'Universidad Central',
            specialty: 'Psicología familiar',
            abilities: ['Reconciliación', 'Divorsios', 'Maltrato'],
            appointmentTime: '50',
            priceArs: '10.000',
            priceUsd: '40',
            calendlyLink: '/'
        },
        {
            id: '2',
            name: 'Roberto Smith',
            thumbnail: 'imagenes/professional_profile.png',
            nationality: 'ar',
            college: 'Universidad de Rosario',
            specialty: 'Psicología infantil',
            abilities: ['TDA', 'Autismo', 'Abusos'],
            appointmentTime: '40',
            priceArs: '8.000',
            priceUsd: '35',
            calendlyLink: '/'
        },
        {
            id: '3',
            name: 'Miguel Otero',
            thumbnail: 'imagenes/professional_profile.png',
            nationality: 'ar',
            college: 'Universidad Central',
            specialty: 'Psicología familiar',
            abilities: ['Reconciliación', 'Divorsios', 'Maltrato'],
            appointmentTime: '50',
            priceArs: '10.000',
            priceUsd: '40',
            calendlyLink: '/'
        },
        {
            id: '4',
            name: 'Roberto Smith',
            thumbnail: 'imagenes/professional_profile.png',
            nationality: 'ar',
            college: 'Universidad de Rosario',
            specialty: 'Psicología infantil',
            abilities: ['TDA', 'Autismo', 'Abusos'],
            appointmentTime: '40',
            priceArs: '8.000',
            priceUsd: '35',
            calendlyLink: '/'
        },
    ]

    return (
        <div> 
            <div className="flex flex-col items-center w-screen text-primary pt-7 px-7 text-center">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-title mb-3">Nuestros profesionales</h1>
                <h2 className="text-base lg:text-2xl">Listos para mejorar tu bienestar desde la comodidad y seguridad de tu hogar</h2>
            </div>
            <div className="sm:grid grid-cols-2 p-7 gap-10 lg:px-20 justify-items-center">
                {
                    professionals.map(prof => <ProfesionalCard key={prof.id} professional={prof} />)
                }
            </div>
        </div>
    )
}

export default Profesionales