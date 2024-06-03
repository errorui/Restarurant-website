"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

type ProductItem = {
  productname: string;
  quantity: number;
  price: number;
  img: string;
};
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
  { img: "images/kheer.jpg", productname: "kheer", quantity: 1, price: 75 },
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
type UseProductContext = {
  productitems: ProductItem[];
  additems: (item: ProductItem) => void;
  removeitems: (productname: string) => void;
  increasequantity: (product: ProductItem, increase: boolean) => void;
  emptyarr: () => void;
};

const ProductContext = createContext<UseProductContext | null>(null);

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [productitems, setproductitems] = useState<ProductItem[]>([]);

  const additems = (item: ProductItem) => {
    let present: boolean = false;
    for (let i = 0; i < productitems.length; i++) {
      if (item.productname === productitems[i].productname) {
        increasequantity(item, true);
        present = true;
        break;
      }
    }
    if (!present) {
      setproductitems([...productitems, item]);
    }
  };

  const removeitems = (productname: string) => {
    const updatedItems = productitems.filter(
      (item) => item.productname !== productname
    );
    setproductitems(updatedItems);
  };

  const increasequantity = (item: ProductItem, increase: boolean) => {
    const defaultItem = items.find((i) => i.productname === item.productname);
    if (!defaultItem) return;

    if (increase) {
      const updatedItems = productitems.map((product) =>
        product.productname === item.productname
          ? {
              ...product,
              quantity: product.quantity + 1,
              price: product.price + defaultItem.price,
            }
          : product
      );
      setproductitems(updatedItems);
    } else {
      const updatedItems = productitems
        .map((product) =>
          product.productname === item.productname
            ? {
                ...product,
                quantity: product.quantity - 1,
                price: product.price - defaultItem.price,
              }
            : product
        )
        .filter((product) => product.quantity > 0);
      setproductitems(updatedItems);
    }
  };
  const emptyarr = () => {
    if (productitems.length) {
      setproductitems([]);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        productitems,
        additems,
        removeitems,
        increasequantity,
        emptyarr,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const UseProductStore = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "UseProductStore must be used within a ProductContextProvider"
    );
  }
  return context;
};

export { ProductContextProvider, UseProductStore };
