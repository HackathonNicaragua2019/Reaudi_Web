import React,{Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from "../../store/actions/authAction";
import {Redirect} from'react-router-dom';


class SignIn extends Component{
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) =>{
        console.log([e.target.id], e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const { props, state } = this;
        const credentials = { ...state };
        const authData =   credentials;

        props.signIn(authData);
    }

    render() {
        const {authError, auth} = this.props;
        
        if (auth.uid) return <Redirect to='/'/>
        return(
            <div className="row">

                
                <div className="col-lg-10 col-xl-5 mx-auto">
                    
                    
                    <div className="card card-signup flex-row my-5">
                    
                    <div className="card-img-left d-none d-md-flex">
                        
                    </div>
                    
                    
                    <div className="card-body">
                    <div className="card-title text-danger text-center">Inicio de Sesión</div>
                        <form className="form-signup" onSubmit={this.handleSubmit}>

                        

                        <div className="form-label-group">
                            <input onChange={this.handleChange} type="email" id="email" className="form-control" placeholder="Email address" required/>
                            <label for="email" >Correo Electronico</label>
                        </div>
                        
                        <hr/>

                        <div className="form-label-group">
                            <input onChange={this.handleChange} type="password" id="password" className="form-control" placeholder="Password" required/>
                            <label for="password" >Contraseña</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Iniciar Sesión</button>
                        
                        <hr className="my-4"/>
                        { authError ? <p>{authError}</p>: null}
                        </form>
                    </div>
                    </div>
                    
                </div>
               
                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => ({
    signIn: authData => dispatch(signIn(authData))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)