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
                    Servicios
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Asesoria</a>
                    <a className="dropdown-item" href="#">Atencion psicologica</a>
                    <a className="dropdown-item" href="./Manual-de-autodefensa2definitivo.pdf"><NavLink to="/personal-defense" className="nav-link">Manual de defensa personal<span className="sr-only">(current)</span></NavLink></a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"><NavLink to="/test" className="nav-link">Violentometro<span className="sr-only">(current)</span></NavLink></a>
                    
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Empresa colaboradoras
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://www.minim.gob.ni/">MINIM</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.mifamilia.gob.ni/">MIFAM</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="http://www.cnu.edu.ni/">CNU</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.tecnacional.edu.ni/">INATEC</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.mined.gob.ni/">MINED</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.policia.gob.ni/">Policia Nacional</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.uaf.gob.ni/cooperacion-nacional/instituciones-nacionales/mefcca">MEFCCA</a>
                    </div>
                </li>
                <li className="nav-item">
                    <li><NavLink to="/news" className="nav-link text-light">Noticias<span className="sr-only">(current)</span></NavLink></li>
                    
                </li>
                
                <li className="nav-item">
                    <a href="https://www.facebook.com/Reaudi-103252227801362/" class="btn btn-info btn-social-icon btn-twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/Reaudi-103252227801362/" class="btn btn-light btn-social-icon btn-google">
                            <i class="fab fa-google"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/Reaudi-103252227801362/" class="btn btn-primary btn-social-icon btn-facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
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
                        
                        <li className="nav-item ">
                        <NavLink to="/"><a className="nav-link" onClick={props.signOut}><i class="fas fa-sign-out-alt"></i><span className="sr-only">(current)</span></a></NavLink>
                            
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
