import { PRODUCTS } from "../data/info";

export const toProperCase = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const getUniqueProductCategories = (products) => {
  return [
    ...products.reduce((acc, product) => {
      product.category.forEach((category) => {
        acc.add(category);
      });
      return acc;
    }, new Set()),
  ].sort();
};
