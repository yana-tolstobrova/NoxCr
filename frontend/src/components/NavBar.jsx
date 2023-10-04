// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import { TwLink } from './TwLink';
// import cart from "../assets/cart.svg"
// import whiteCart from '../assets/whiteCart.svg'
// import Search from './Search';
// import NavBarMenu from './NavBarMenu';
// import whiteLogo from "../assets/whiteLogo.svg"
// import menuBurger from '../assets/menuBurger.svg';


// function NavBar() {
//   const location = useLocation();
//   let anchors = null;
//   const cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

//   if (location.pathname === "/") {
//     anchors = (
//       <>
//         <TwLink as="anchor" href="/#productos">Productos</TwLink> 
//         <TwLink as="anchor" href="/#cuidados">Cuidados</TwLink> 
//         <TwLink as="anchor" href="/#faq">FaQ</TwLink> 
//         <TwLink as="anchor" href="/#contacto">Contacto</TwLink> 
//       </> 
//     )
//   }
  
//   return (
//     <div className="flex w-full justify-between items-center">
//        <img className='px-3 h-5' src= {menuBurger} alt="Menú hambuerguesa" />
//        <Link to="/">
//             <img className="h-12 w-24 md:hidden" src={whiteLogo} alt="Logo" />
//         </Link>
//       <nav className= 'hidden md:block'>{anchors}</nav>
//       <div className="flex items-center h-11">
//           <Search />
//           <Link to="/add-to-cart" className="relative" /*onClick={addToCart}*/>
//             <img className='px-3 h-5 md:block hidden'src={cart} alt="Profile-icon" />
//             <img className='px-3 h-5 md:hidden'src={whiteCart} alt="Profile-icon" />
//             {cartCount > 0 && (
//             <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
//               {cartCount}
//             </div>
//           )}
//           </Link>
          
//           <NavBarMenu />
//       </div>
//     </div>
//   )
// }

// export default NavBar



import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { TwLink } from './TwLink';
import cart from "../assets/cart.svg"
import whiteCart from '../assets/whiteCart.svg'
import Search from './Search';
import NavBarMenu from './NavBarMenu';
import whiteLogo from "../assets/whiteLogo.svg"
import menuBurger from '../assets/menuBurger.svg';


function NavBar() {
  const location = useLocation();
  let anchors = null;

  // almacenar cartCount
  const [cartCount, setCartCount] = useState(parseInt(localStorage.getItem("cartCount")) || 0);

  // actualizo cartCount cuando cambie en localStorage
  useEffect(() => {
    const storedCartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    setCartCount(storedCartCount);
  }, []);


  if (location.pathname === "/") {
    anchors = (
      <>
        <TwLink as="anchor" href="/#productos">Productos</TwLink> 
        <TwLink as="anchor" href="/#cuidados">Cuidados</TwLink> 
        <TwLink as="anchor" href="/#faq">FaQ</TwLink> 
        <TwLink as="anchor" href="/#contacto">Contacto</TwLink> 
      </> 
    )
  }
  
  return (
    <div className="flex w-full justify-between items-center">
       <img className='px-3 h-5' src= {menuBurger} alt="Menú hambuerguesa" />
       <Link to="/">
            <img className="h-12 w-24 md:hidden" src={whiteLogo} alt="Logo" />
        </Link>
      <nav className= 'hidden md:block'>{anchors}</nav>
      <div className="flex items-center h-11">
          <Search />
          <Link to="/add-to-cart" className="relative" /*onClick={addToCart}*/>
            <img className='px-3 h-5 md:block hidden'src={cart} alt="Profile-icon" />
            <img className='px-3 h-5 md:hidden'src={whiteCart} alt="Profile-icon" />
            {cartCount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartCount}
            </div>
          )}
          </Link>
          
          <NavBarMenu />
      </div>
    </div>
  )
}

export default NavBar
