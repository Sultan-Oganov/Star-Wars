import { StartWarsAction, StarWarsActionTypes } from '../../types/starWars';
import { Dispatch } from "redux";
import { starWarsAPI } from '../../../api';

export const setIsLoading = (payload: boolean) => ({ type: StarWarsActionTypes.SET_IS_LOADING, payload });
export const setCategories = (payload: any) => ({ type: StarWarsActionTypes.SET_CATEGORIES, payload });
export const setSearchData = (payload: any) => ({ type: StarWarsActionTypes.SET_SEARCH_DATA, payload });
export const setError = (payload: any) => ({ type: StarWarsActionTypes.SET_ERROR, payload });


export const getCategories = () => (dispatch: Dispatch<StartWarsAction>) => {
    dispatch(setIsLoading(true));
    starWarsAPI.getCategories()
        .then(response => {
            dispatch(setCategories(Object.keys(response.data)));
        })
        .catch(error => {
            console.warn('Axios -> get: ', error);
            return error;
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const getSearchData = (category = "", label = "") => (dispatch: Dispatch<StartWarsAction>) => {
    dispatch(setIsLoading(true));
    starWarsAPI.getSearchData(category, label)
        .then(response => {
            if (response.data?.results?.length > 0) {
                dispatch(setSearchData(response.data?.results));
                dispatch(setError(false));
            } else {
                dispatch(setError('Not Found'));
            }
        })
        .catch(error => {
            console.warn('Axios -> get: ', error);
            return error;
        })
        .finally(() => dispatch(setIsLoading(false)));
}