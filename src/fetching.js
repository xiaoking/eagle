export function fetching(state = 0, action) {
    switch (action.type) {
        case 'fetch_begin':
            return 1;
        case 'fetch_end':
            return 0;
        default:
            return state;
    }
};