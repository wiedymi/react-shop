let initState = {
    search: '',
    sortBy: undefined,
    colors: [],
    size: [],
    tags: []
};

export default (state = initState, action) => {
    switch (action.type){
        case 'SET_FILTER_SEARCH':
            const { search } = action;
            return {
                ...state,
                search
            };
        case 'SET_FILTER_SORT_BY':
            const { sortBy } = action; 
            return {
                ...state,
                sortBy
            };
        case 'SET_FILTER_COLORS':
            const { colors } = action;
            
            return { 
                ...state,
                colors
            };
        case 'SET_FILTER_TAGS':
            const { tags } = action;
            return { 
                ...state,
                tags
            };
        case 'SET_FILTER_SIZE':
                let { size } = action;
                return { 
                    ...state,
                    size
                };       
        default:
            return state;
    }
}