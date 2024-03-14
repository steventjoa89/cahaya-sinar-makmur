export const scrollToElement = (el) => {
  const navbarHeight = document.getElementById("header").offsetHeight;
  const element = document.getElementById(el);
  if (element) {
    const offset = navbarHeight; // Adjust the offset as needed
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
