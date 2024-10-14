import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style.js"
import { navLinks} from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  console.log(active)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2" 
          onClick={()=> {
            setActive("")
            window.scrollTo(0, 0);
          }} 
           >
            <img src={logo} alt={logo} className="w-9 h-9 object-contain" />
             <p className="text-white text-lg font-bold cursor-pointer flex  gap-1">CodeWithSaidul</p>
           </Link>

           {/* Navigation Links */}
           <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link)=>(
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))} 
           </ul>


           {/* Mobile Navigation */}
           <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={ toggle ? close : menu} alt={menu} className="w-6 h-6 object-contain cursor-pointer"
            onClick={()=> setToggle(!toggle)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient top-20 absolute mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link)=>(
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-base 
                  `}
                  onClick={()=> {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
           </div>
        </div>

        
    </nav>
  )
}

export default Navbar