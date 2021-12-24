import {Link} from 'react-router-dom'
import Context from '../Context';
import { useContext } from 'react';
const Footer = () => {
    const Login = useContext(Context);
    return (
        <footer>
           
            {Login && <p>Email me at:<a href="https://mail.google.com/mail/?view=cm&fs=1&to=prithvirajmudiliyar@gmail.com"> PRITHIVIRAJ ELUMALAI</a></p>}
            {Login && <Link to="/about">About</Link>}
            
        </footer>
    )
}

export default Footer;
