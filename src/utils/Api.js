import Config from '../Config';

class Api {

    getPopularMovies () {
    const url = `${Config.API_ROOT}/discover/movie?sort_by=popularity.desc&api_key=${Config.API_KEY}`;
    
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            return res.results
        });
    }
      
    // getReleaseMovies () {
    //     const url = `${Config.API_ROOT}/discover/movie?sort_by=popularity.desc&api_key=${Config.API_KEY}`;
        
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then(res => {
    //             return res.results
    //         });
    //     }
};

export default new Api();