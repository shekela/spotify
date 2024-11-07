 import { action } from "@testing-library/react";

export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: 'BQDHUOvRlEk2ry_kTAoat6sA9IBDqgnKSfqQMYdKOovDljnPbcfiKT2t-LJWTiWmuN4KKYepo0u2W5py9SeriGsANyOGAw2WqoiZg7RqsE0xJMFdlG0zQejXWCaDJ_yw9vDteS2SD_bt0Ac3EHnB520DvcSmEYTto9dwfkhHN-AA7CsgdOwC_hH629iFGOoAKo_22dAxSAECOSpp7EpJ',
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user ,
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;
