export const COMPANY_NAME = "Cahaya Sinar Makmur";
export const COMPANY_ADDRESS = "Jl. Pejagalan Raya No. 85K";
export const COMPANY_ADDRESS_2 = "Jakarta, 11240";
export const COMPANY_ADDRESS_3 = "Indonesia";
export const COMPANY_PHONE = "+62 819 058 7 5858";
export const COMPANY_EMAIL = "steventjoa89@gmail.com";

export const MENU_NAV = [
  { name: "Home", link: "/" },
  { name: "About Us", menuName: 'about', link: "/about-us" },
  { name: "Products", menuName: 'product', link: "/products" },
  { name: "Contact Us", menuName: 'contact', link: "/contact-us" },
];

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    name: "solvent",
    image:
      "https://media.istockphoto.com/id/1063777306/photo/yellow-liquid-spilled-petrol-additive-innovative-supply.jpg?s=612x612&w=0&k=20&c=VVTMkh_J-Mlm8v_PqO_D_h3Dzl1JNmLu5tCa1ZUEEtI=",
    // image: "/images/products/solvent.jpg",
  },
  {
    id: 2,
    name: "alcohols",
    image:
      "https://media.istockphoto.com/id/1418367954/photo/acetone-in-glass-chemical-in-the-laboratory-and-industry.jpg?s=612x612&w=0&k=20&c=O3OSJtTMQXKek5bdrhJUab9Q_HGEDlBABEv3FOn2qK8=",
  },
  {
    id: 3,
    name: "glycols",
    image:
      "https://media.istockphoto.com/id/157529625/photo/toxic-substance.jpg?s=612x612&w=0&k=20&c=YxS0aRk5Rg5gqZm9rsdW6jAmnYk_FrFcRaRg_KRIeN8=",
  },
  {
    id: 4,
    name: "others",
    image:
      "https://media.istockphoto.com/id/182188515/photo/analyzing-samples.jpg?s=612x612&w=0&k=20&c=-uo-jsjj1DawNP4J3JCnBHYNlH3Ip2uaL37MDc-koW4=",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Ethanol / Ethyl Alcohol",
    category: ["solvent"],
    package: "Drum",
    weight: 200,
    description: "This is ethanol description.",
  },
  {
    id: 2,
    name: "Product 2",
    category: ["a", "b"],
  },
  {
    id: 3,
    name: "Product 3",
    category: ["c"],
  },
  {
    id: 4,
    name: "Product 4",
    category: ["d"],
  },
];
