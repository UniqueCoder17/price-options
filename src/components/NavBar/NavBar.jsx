import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
    ];


    return (
        <nav>
            <div className="md:hidden text-2xl p-4 bg-yellow-500 text-black" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> 
                    :
                    <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ml-4 md:ml-0 p-4 bg-yellow-500
                ${open ? 'top-12' : '-top-60'}
                text-black`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;