const initState = {
    news: [
        {id: '1', title: 'Prueba de algebra', content: 'Cuantos origamis existen'},
        {id: '2', title: 'Prueba de Quimica', content: 'Cuantos atomos existen'},
        {id: '3', title: 'Prueba de Literatura', content: 'Cuantos verbos existen'}
    ]
}

const newsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NEWS':
            console.log('create news', action.news);
            return state
        case 'CREATE_NEWS_ERROR':
            console.log('create news error', action.err);
            return state
        default:
            return state

    }

}
export default newsReducer