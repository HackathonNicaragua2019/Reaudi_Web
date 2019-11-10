import React from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {signOut} from "../../store/actions/authAction";
const Navbar = (props) =>{

/*     const {auth, profile} = props;
    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink/>; */
    const {auth, profile} = props;
    console.log(auth)
    return(

        <nav className="navbar navbar-expand-lg navbar-light">
            
            
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <li className="nav-item active">
                    <Link to="/" className="navbar-brand text-light font-weight-bold ">REAUDI</Link>
            </li>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
        
                
                <li className="nav-item">
                    <li><NavLink to="/aboutus" className="nav-link text-light">¿Quienes Somos?<span className="sr-only">(current)</span></NavLink></li>
                    
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Servicio
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Empresa colaboradoras
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                
                
                </ul>
                {!auth.uid ? 
                    <ul className="navbar-nav my-auto">
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link text-light">Registrate<span className="sr-only">(current)</span></NavLink>
                            
                        </li>
                        
                        <li className="nav-item ">
                            <NavLink to="/signin" className="nav-link text-light">Iniciar Sesión<span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul> 
                :
                    <ul className="navbar-nav my-auto" >
                        
                        <li className="nav-item">
                        
                            <a className="nav-link" onClick={props.signOut}>Salir<span className="sr-only">(current)</span></a>
                        </li>
                        <li><NavLink to="/" className="btn bg-danger lighten-1">{props.profile.initials}<span className="sr-only">(current)</span></NavLink></li>
                    </ul>
                }
                 
            </div>
        </nav>

    )
}
const mapStateToProps = state => {

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
