let initState = {
    search: '',
    sortBy: undefined,
    colors: [],
    size: [],
    tags: []
};

export default (state = initState, action) => {
    switch (action.type){
        case 'SET_FILTER_BY_TITLE':
            return state;
        case 'SET_FILTER_COLORS':
                let { colors } = action.colors;
                return { 
                    ...state,
                    colors
                 };
        default:
            return state;
    }
}