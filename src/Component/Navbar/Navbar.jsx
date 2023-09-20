
// import PropTypes from 'prop-types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Link from "../Link/Link";
import { useState } from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];

      const [open, setOpen] = useState([])
    return (
        <div>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {open === false ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}
                
            </div>

            <ul className={`items-center absolute shadow-lg p-4 bg-slate-100 w-fit duration-1000 md:static md:flex lg:flex  ${open ? '-top-60' : 'top-12 ml-8'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

// Navbar.propTypes = {
    
// };

export default Navbar;
