const initialState = {
    data: [], filteredData: [], dataInfo: { next: null, prev: null }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.data, filteredData: action.data, dataInfo: action.dataInfo };
        case 'FILTER':
            const filteredArray = state.data.filter((ele) => {
                return ele.name.toLowerCase().includes(action.filteredName.toLowerCase());
            })
            return { ...state, filteredData: filteredArray };
        case 'SORTING':
            const { data } = state;
            const SortedArray = data.sort((a, b) => {
                var nameA = a.id, nameB = b.id
                if (nameA > nameB)
                    return action.sortOrder === 'Decending' ? -1 : 1;
                if (nameA < nameB)
                    return action.sortOrder === 'Decending' ? 1 : -1;
                return 0
            });
            return { ...state, filteredData: JSON.parse(JSON.stringify(SortedArray)) };
        default:
            return state;
    }

};

export default reducer;