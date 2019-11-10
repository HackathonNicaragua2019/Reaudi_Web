import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createNews} from '../../store/actions/newsAction';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
 import moment from 'moment'

class News extends Component{
    
    state = {
        title: "",
        content: ""
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
        const news =   credentials;
        console.log(news);
        props.history.push('/news');
        props.createNews(news);
        
    }
    render() {
        const {news} = this.props;
        return(
            <div >
                <div className="col-lg-10" ><button className="btn btn-right btn-primary  my-4" data-toggle="modal" data-target="#exampleModal">Crear Publicación</button></div>
                <div className="test-list section">
                    {news && news.map(n =>{
                        return(
                            <div className="mx-5">
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">{n.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Anonimo</h6>
                                        <p className="card-text">{n.content}</p>
                                        <p className="card-text">{moment(n.timestamp.toDate()).fromNow()}</p>
                                        <a href="#" className="card-link">details link</a>
                                    </div>
                                </div>
                                <hr className="my-4"></hr>
                            </div>
                        )
                    })}
                </div>
                
                <div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Publique sus experiencia</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-field">
                                        
                                    <form onSubmit={this.handleSubmit} className="was-validated">
                                        <div className="input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Titulo</span>
                                            </div>
                                            <input type="text" onChange={this.handleChange} className="form-control is-invalid" id="title"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                                        </div>
                                        <div className="mb-3">
                                            
                                            <textarea className="form-control is-invalid" onChange={this.handleChange} id="content" placeholder="Comente Aqui..." required></textarea>
                                            <div className="invalid-feedback">
                                            Ingrese una publicacion.
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="submit" className="btn btn-primary">Publicar</button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createNews: news => dispatch(createNews(news))
    }
}
const mapStateToProps = state =>{

    return {
        
        news: state.firestore.ordered.news
        
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'news', orderBy: ['timestamp', 'desc'] }
    ]),

)(News)