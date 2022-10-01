export default function PluralsightReducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, success: false, error: false };

        case "SUCCESS":
            return { ...state, loading: false, success: true, error: false };

        case "ERROR":
            return { ...state, loading: false, success: false, error: true };
    }
}
