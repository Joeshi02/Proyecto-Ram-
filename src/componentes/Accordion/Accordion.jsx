import React from "react";
import {AccordionItem, Accordion } from "@nextui-org/accordion";

const Acordiones = () => {
  const defaultContent = [
    
    "La videollamada es segura, solamente estarás tú y tu psicólogo.",
    "Contamos con profesionales especializados en distintas ramas de psicología aplicadas a terapias individuales, de parejas, grupos familiares, dinámica laboral o grupos de trabajo, entre otras opciones.",
    "Si estás dentro del territorio nacional, aparecerá un link de Mercado Pago y si eres del exterior, tienes la opción de pagar por medio de Paypal.",
    "Debes ir a la sección de Profesionales, elige el que más se adecue a tus necesidades y agenda la cita. Se abrirá un link a una página llamada Calendly, donde aparecerán los días y horarios disponibles del profesional. Cuando agendes la consulta con el profesional, te pedirá un correo electrónico donde te llegará la confirmación de la consulta.",
    "Al momento de agendar la consulta en Calendly, se te enviará un correo electrónico con la confirmación de la cita, la fecha, horario, link para conectarte a zoom y la clave para ingresar.",
    "Si, en el correo que te llega de confirmación te ofrece la opción de cancelar el turno, para que puedas programar uno nuevo"

    
  ]
  return (
    <div className="w-4/5 md:w-2/3 text-primary">
      <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title=" ¿La consulta es confidencial? ">
        {defaultContent[0]}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Qué tipo de terapia ofrecen?" >
        {defaultContent[1]}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Qué medios de pago utilizan?">
        {defaultContent[2]}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="¿Cómo agendar la consulta?">
        {defaultContent[3]}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="¿Cómo me conecto a la consulta?">
        {defaultContent[4]}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="¿Puedo reprogramar mi consulta?">
        {defaultContent[5]}
      </AccordionItem>
    </Accordion>
    </div>
    
  );
}
export default Acordiones
 