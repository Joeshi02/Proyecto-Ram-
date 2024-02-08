import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to="/" className="mr-4">
        <button className="py-2 px-4 text-lg">Como funciona</button>
      </Link>
      <Link to="/" className="mr-4">
        <button className="py-2 px-4 text-lg">Opiniones</button>
      </Link>
      <Link to="/" className="mr-4">
        <button className="py-2 px-4 text-lg">Preguntas frecuentes</button>
      </Link>
      <Link to="/" className="mr-4">
        <button className="py-2 px-4 text-lg">Contactanos</button>
      </Link>
      <Link to="/">
        <button className="py-2 px-4 text-lg">Profesionales</button>
      </Link>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="m-auto flex justify-between items-center border-b shadow-md flex-wrap">
      <div className="pl-4 w-32 sm:w-auto lg:w-36">
        <Link><img src="/imagenes/RAM.Color.png" alt="logo" /></Link>
      </div>
      <nav className={`flex w-2/3 justify-end ${open ? 'rounded' : ''}`}>        
        <div className={`hidden ${open ? 'w-full' : 'md:flex'}`}>
          <Links />
        </div>
        <div className="md:hidden p-4">
          <button onClick={handleMenu}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {open && (
        <div className="w-full md:w-auto flex flex-col items-center">
          <Links />
        </div>
      )}
    </div>
  );
};

export default Navbar;

