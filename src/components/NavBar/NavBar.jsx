import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
    ];

    return (
        <nav>

            <div 
                className="md:hidden text-2xl p-4 bg-yellow-500 text-black" 
                onClick={() => setOpen(!open)} 
                role="button" 
                aria-label="Toggle navigation menu"
            >
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>

            <ul 
                className={`md:flex duration-700 absolute md:static bg-yellow-500 ml-4 md:ml-0 p-4 text-black
                    ${open ? 'top-12' : 'hidden md:block'}`}
            >
                {routes.map(route => (
                    <Link key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
