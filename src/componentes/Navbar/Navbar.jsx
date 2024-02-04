// import { useState } from "react";
// import NavbarList from "./NavbarList";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const handleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="flex items-center justify-between m-auto p-1 border-b shadow-lg">
//       <img className="w-24 m-1" src="/public/imagenes/RAM.Color.png" alt="logo" />
//       <button className="lg:hidden" onClick={handleMenu}>
//         <img src="/public/imagenes/menu.png" alt="menu" />
//       </button>

//       <div className={`lg:flex ${open ? '' : 'hidden'} lg:justify-end container`}>
//         <NavbarList open={open} setOpen={setOpen} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Como funciona",
    "Opiniones",
    "Preguntas frecuentes",
    "Contactanos",
    "Profesionales",
  ];

  return (
    <Navbar   isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="flex justify-between items-center  px-4 sm:px-0  border-b shadow-md">
        <NavbarBrand>
          <button>
            <Link><img className="w-24 m-1" src="/imagenes/RAM.Color.png" alt="logo" /></Link>

          </button>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4">
          <NavbarItem>
            <button>
              <Link color="foreground" to="#">
                Como funciona
              </Link>
            </button>

          </NavbarItem>
          <NavbarItem >
            <button>
              <Link to="#" color="foreground">
                Opiniones
              </Link>
            </button>

          </NavbarItem>
          <NavbarItem>
            <button>
              <Link color="foreground" to="#">
                Preguntas frecuentes
              </Link>
            </button>

          </NavbarItem>
          <NavbarItem>
            <button>
              <Link color="foreground" to="#">
                Cóntactanos
              </Link>
            </button>

          </NavbarItem>
          <NavbarItem>
            <button>
              <Link color="foreground" to="#">
                Profesionales
              </Link>
            </button>

          </NavbarItem>
        </NavbarContent>

        <NavbarMenu >
          {menuItems.map((item, index) => (
            <NavbarMenuItem  key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                to="#"
                size="lg"
                
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
    </Navbar>
  );
}

