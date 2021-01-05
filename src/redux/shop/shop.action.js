import { shopActionType } from "./shop.type";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collection) => ({
  type: shopActionType.FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());
    const collectionRef = firestore.collection("collection");

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionObject = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionObject));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};

export const checkCollections = () => ({
  type: shopActionType.CHECK_COLLECTION,
});
