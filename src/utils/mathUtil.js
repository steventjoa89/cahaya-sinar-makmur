export const addLeadingZero = (number) => (number < 10 ? "0" + number : number);

export const getRandomObjectFromObjectArray = (objArray, totalNum) => {
  const randomProducts = [];
  const productIndices = new Set();

  while (productIndices.size < totalNum) {
    const randomIndex = Math.floor(Math.random() * objArray.length);
    productIndices.add(randomIndex);
  }

  productIndices.forEach((index) => {
    randomProducts.push(objArray[index]);
  });

  return randomProducts;
};
