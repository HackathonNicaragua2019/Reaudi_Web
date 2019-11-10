import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import moment from 'moment'

const newsDetails = (props) =>{
    const { news } = props;

    if (news !== undefined && news !== null ){
        
        return (
            <div className="container section news-details card mx-5">
                <div className="card body">
                    <div className="card-title">
                        <span className="card-subtitle mb-2 text-muted">{news.title} </span>
                        <p>{news.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Autor: Anonimo</div>
                        <div>{moment(news.timestamp).calendar().toString()}</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="container section test-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Cargando contenido...</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps  = (state, ownProps) => {

    const id = ownProps.match.params.id;
    
    const newss = state.firestore.data.news;
    console.log(newss);

    const news = newss ? newss[id] : null

    return {
        news: news
        
    }


}
export default compose(
    connect(mapStateToProps),
    firestoreConnect ( [
        {collection: "news"}
    ])
)(newsDetails)