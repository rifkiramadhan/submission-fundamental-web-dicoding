import '../component/meals-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealsListElement = document.querySelector("meals-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMeals(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        mealsListElement.meals = results;
    };

    const fallbackResult = message => {
        mealsListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;