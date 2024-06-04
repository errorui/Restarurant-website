import {
  NavItem,
  ProductItem,
  review,
  social_connection,
  swipperitem,
} from "./type";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const swipperitems: swipperitem[] = [
  { src: "images/about.jpg", name: "indian thali" },
  { src: "images/Barfi-Diwali_sweet.jpg", name: "barfi" },
  { src: "images/biryani.jpg", name: "biryani" },
  { src: "images/kheeer.jpg", name: "kheer" },
  { src: "images/Palakpaneer.jpg", name: "palak panner" },
  { src: "images/chicken.jpg", name: "chicken" },
];
const navitems: NavItem[] = [
  {
    name: "order now",
    pathname: "/order",
  },
  {
    name: "our team",
    pathname: "/workers",
  },
];
const connections: social_connection[] = [
  {
    link: "intstagram",
    icon: <FaInstagram />,
  },
  {
    link: "facebook",
    icon: <FaFacebook />,
  },
  {
    link: "youtube",
    icon: <FaYoutube />,
  },
];
const reviewitems: review[] = [
  {
    name: "john",
    stars: 4.5,
    date: "14 Feb 2024",
    description:
      "The flavors here are absolutely amazing! The butter chicken was creamy and rich, and the naan was perfectly baked. The ambience is warm and inviting, making it a great spot for a family dinner. I was particularly impressed with the attentive service.",
  },
  {
    name: "rohit",
    stars: 5,
    date: "1 Jan 2024",
    description:
      "Absolutely fantastic dining experience! The biryani was flavorful and aromatic, and the service was top-notch. I highly recommend trying their mango lassi and the paneer tikka. Will definitely come back again!",
  },
  {
    name: "virat",
    stars: 4.5,
    date: "4 May 2024",
    description:
      "A delightful experience with a wide variety of dishes to choose from. The tandoori chicken was flavorful, and the dal makhani had a rich, creamy texture. The staff was friendly and the restaurant had a cozy atmosphere.",
  },
];
const items: ProductItem[] = [
  {
    img: "images/about.jpg",
    productname: "indian thali",
    quantity: 1,
    price: 450,
  },
  {
    img: "images/Barfi-Diwali_sweet.jpg",
    productname: "barfi",
    quantity: 1,
    price: 150,
  },
  {
    img: "images/biryani.jpg",
    productname: "biryani",
    quantity: 1,
    price: 300,
  },
  { img: "images/kheeer.jpg", productname: "kheer", quantity: 1, price: 75 },
  {
    img: "images/Palakpaneer.jpg",
    productname: "palak panner",
    quantity: 1,
    price: 100,
  },
  {
    img: "images/chicken.jpg",
    productname: "chicken",
    quantity: 1,
    price: 250,
  },
];

export { navitems, connections, reviewitems, items, swipperitems };
