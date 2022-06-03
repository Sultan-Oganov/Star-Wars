import { instance } from "../modules/axios"

export const starWarsAPI = {
    getCategories() {
        return instance.get(``);
    },
    getSearchData(category: string, label: string) {
        return instance.get(label ? `${category}/?search=${label}` : `${category}`)
    }
}