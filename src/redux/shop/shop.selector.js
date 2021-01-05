import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectColletionsPerview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const seletIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectISCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
