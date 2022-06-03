export interface StarWarsState {
    categories: string[],
    data: any,
    isLoading: boolean,
    error: null | string,
}

export enum StarWarsActionTypes {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_CATEGORIES = "SET_CATEGORIES",
    SET_SEARCH_DATA = "SET_SEARCH_DATA",
    SET_ERROR = "SET_ERROR",
}

interface SetIsLoadingAction {
    type: StarWarsActionTypes.SET_IS_LOADING,
    payload: boolean
}

interface SetCategoriesAction {
    type: StarWarsActionTypes.SET_CATEGORIES,
    payload: any
}

interface SetSearchDataAction {
    type: StarWarsActionTypes.SET_SEARCH_DATA,
    payload: any
}

interface SetErrorAction {
    type: StarWarsActionTypes.SET_ERROR,
    payload: any
}

export type StartWarsAction = SetIsLoadingAction | SetCategoriesAction | SetSearchDataAction | SetErrorAction;
