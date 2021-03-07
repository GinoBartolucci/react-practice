import {Link} from'react-router-dom';
import logo from './../../assets/img/logo.png';

export default function navbar (){
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={logo} alt='logo' width='30' height='24'></img> Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/contacto'>Contacto</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/nosotros'>Nosotros</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/'>Disabled</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}