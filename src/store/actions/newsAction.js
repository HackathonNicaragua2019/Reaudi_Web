import {firestore} from 'firebase/app'  

export const createNews = (news) =>{
    
    console.log(news)
    return(dispatch) => {
        
        firestore().collection('news').add({
            title: news.title,
            content: news.content,
            timestamp: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_NEWS', news});
        }).catch((err) =>{
            dispatch({type: 'CREATE_NEWS_ERROR', err});
        })

    }
};