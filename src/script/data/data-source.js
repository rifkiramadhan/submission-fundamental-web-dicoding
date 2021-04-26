import meals from './meals.js';

class DataSource {
    static searchMeals(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} Tidak tersedia`);
                }
            })
    }
}

export default DataSource;