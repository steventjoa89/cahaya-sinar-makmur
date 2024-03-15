export const toProperCase = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const getUniqueCategoriesFromProductsArr = (products) => {
  const allCategories = products.flatMap((product) => product.category);
  return [...new Set(allCategories)];
};

export const getProductsByCategory = (products, category) => {
  return products.filter(product => product.category.includes(category));
};