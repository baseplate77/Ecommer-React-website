import { shopActionType } from "./shop.type";

const INITAIL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case shopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case shopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case shopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
//
export default shopReducer;
