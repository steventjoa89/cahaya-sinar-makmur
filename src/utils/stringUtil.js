export const toProperCase = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());
