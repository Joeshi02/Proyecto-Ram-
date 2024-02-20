import { useEffect, useState } from "react"
import ProfesionalCard from "../ProfesionalCard/ProfesionalCard"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { data } from "autoprefixer";
import { CircularProgress } from "@nextui-org/react";

const Profesionales = () => {

    const [professionals, setProfessionals] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "profesionales");

        getDocs(itemsCollection)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    data: { ...doc.data(), id: doc.id },
                }));
                setProfessionals(docs)
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="flex flex-col items-center text-primary pt-7 px-7 text-center">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-title mb-3">Nuestros profesionales</h1>
                <h2 className="text-base lg:text-2xl">Listos para mejorar tu bienestar desde la comodidad y seguridad de tu hogar</h2>
            </div>
            <div className="sm:grid grid-cols-2 p-7 gap-10 lg:px-20 justify-items-center">
                {
                    professionals.length > 0 ?
                    professionals.map(prof => <ProfesionalCard key={prof.data.id} professional={prof} />)
                    :
                    <div className="col-span-full flex justify-center h-20">
                        <CircularProgress label="Cargando Profesionales" />
                    </div>
                }
            </div>
        </>
    )
}

export default Profesionales