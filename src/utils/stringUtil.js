export const toProperCase = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const getUniqueCategoriesFromProductsArr = (products) => {
  const allCategories = products.flatMap((product) => product.category);
  return [...new Set(allCategories)];
};

export const getproductsFirstLetterFromProductsArr = (products) =>
  [...new Set(products.map((product) => product.name.charAt(0)))].sort();

export const getProductsByCategory = (products, category) => {
  return products.filter((product) => product.category.includes(category));
};

export const getProductsByFirstLetter = (products, letter) => {
  return products.filter(
    (product) => product.name.charAt(0).toLowerCase() === letter.toLowerCase()
  );
};

export const ensureArray = (data) => {
  return Array.isArray(data) ? data : [];
};
