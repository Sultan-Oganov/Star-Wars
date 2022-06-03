import { StarWarsState, StartWarsAction, StarWarsActionTypes } from "../../types/starWars"

const initialState: StarWarsState = {
    categories: [],
    data: [],
    isLoading: false,
    error: null,
}
export const starWarsReducer = (state = initialState, action: StartWarsAction): StarWarsState => {
    const { type, payload } = action;
    switch (type) {
        case StarWarsActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        case StarWarsActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
        case StarWarsActionTypes.SET_SEARCH_DATA:
            return {
                ...state,
                data: payload
            }
        case StarWarsActionTypes.SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}
