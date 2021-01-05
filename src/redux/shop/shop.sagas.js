import { takeLatest, call, put, all } from "redux-saga/effects";
import { shopActionType } from "./shop.type";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();

    const collectionObject = yield call(
      convertCollectionSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionObject));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* onFetchCollectionStart() {
  yield takeLatest(
    shopActionType.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export function* shopsagas() {
  yield all([call(onFetchCollectionStart)]);
}
