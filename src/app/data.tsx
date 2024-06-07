import { TbBackground } from "react-icons/tb";
import {
  NavItem,
  ProductItem,
  review,
  social_connection,
  swipperitem,
  worker_data,
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

let workers_data: worker_data[] = [
  {
    prof: "CEO",
    profimg: "images/Ceo.png",
    name: "Rajesh Mehta",
    background: `Rajesh Mehta, our
    visionary CEO, has over 20 years of experience in the hospitality
    industry. He founded our restaurant with the aim of bringing
    authentic Indian flavors to a wider audience. Before embarking on
    his journey in the culinary world, Rajesh dedicated several years
    to working with various NGOs, focusing on community development
    and food security. His extensive background in social work has
    greatly influenced his approach to business, emphasizing
    sustainability and community involvement. Under his leadership,
    our restaurant has grown from a small family-owned business to a
    renowned establishment, known not only for its delicious cuisine
    but also for its commitment to making a positive impact in the
    community.`,
  },
  {
    prof: "Main Chef",
    profimg: "images/Maincook.png",
    name: "Rajiv Kumar",
    background: `Rajiv Kumar, our
    head chef, hails from a long line of culinary experts. With a deep
    passion for Indian cuisine, he brings a unique blend of
    traditional and modern techniques to our kitchen. Rajiv's culinary
    journey began in his family's kitchen, where he learned the
    secrets of authentic Indian cooking from his grandparents. He
    further honed his skills at prestigious culinary institutes and
    worked in several renowned restaurants across India and abroad,
    gaining invaluable experience and refining his craft.Rajiv's
    innovative dishes and dedication to quality have made our menu a
    favorite among patrons. His commitment to using fresh,
    locally-sourced ingredients ensures that every dish not only
    delights the palate but also supports local farmers and producers.
    Rajiv is also passionate about mentoring young chefs, often
    hosting workshops and cooking classes to share his knowledge and
    inspire the next generation of culinary talent.`,
  },
];
export {
  navitems,
  connections,
  reviewitems,
  items,
  swipperitems,
  workers_data,
};
