import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7bGA-KQa7J2SdmeT-jwwM6lCu5dQCMS0",
  authDomain: "crwn-db-996d2.firebaseapp.com",
  databaseURL: "https://crwn-db-996d2.firebaseio.com",
  projectId: "crwn-db-996d2",
  storageBucket: "crwn-db-996d2.appspot.com",
  messagingSenderId: "452158234037",
  appId: "1:452158234037:web:cb70e6087b6f2f994c8dfc",
  measurementId: "G-TC3EYZ068E",
};

firebase.initializeApp(firebaseConfig);

export const convertCollectionSnapshotToMap = (snapshot) => {
  const transformCollection = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentuser = () => {
  const unsubcribe = auth.onAuthStateChanged((user) => {
    unsubcribe();
    return "user";
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
