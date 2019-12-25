import axios from 'axios';

export function getData() {
    return function (dispatch) {
        return axios.get("https://rickandmortyapi.com/api/character/").then(response => {
            console.log(response);
            dispatch({
                type: "GET_DATA",
                data: response.data.results,
                dataInfo: response.data.info
            })
        })
    }
}

export function filterDataByName(filteredName) {
    return function (dispatch) {
        dispatch({
            type: "FILTER",
            filteredName: filteredName
        })
    }
}


export function sortData(sortOrder) {
    return function (dispatch) {
        dispatch({
            type: "SORTING",
            sortOrder: sortOrder
        })
    }
}

export function nextPageData(url) {
    return function (dispatch) {
        return axios.get(url).then(response => {
            console.log(response);
            dispatch({
                type: "GET_DATA",
                data: response.data.results,
                dataInfo: response.data.info
            })
        })
    }
}

export function prevPageData(url) {
    return function (dispatch) {
        return axios.get(url).then(response => {
            console.log(response);
            dispatch({
                type: "GET_DATA",
                data: response.data.results,
                dataInfo: response.data.info
            })
        })
    }
}

