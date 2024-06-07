import { ReactElement } from "react";

type ProductItem = {
    productname: string;
    quantity: number;
    price: number;
    img: string;
  };
  type NavItem = {
    name: string;
    pathname: string;
  };
  type review = {
    name: string;
    stars: number;
    date: string;
    description: string;
  };
  type social_connection = {
    link: string;
    icon: ReactElement<any, any>;
  };
  type context_type = {
    user: any;
    loading: boolean;
    signout: () => Promise<void>;
    signingoogle: () => Promise<void>;
    signemail_pass: (a: string, b: string, c: boolean) => Promise<void>;
  };
  type UseProductContext = {
    productitems: ProductItem[];
    additems: (item: ProductItem) => void;
    removeitems: (productname: string) => void;
    increasequantity: (product: ProductItem, increase: boolean) => void;
    emptyarr: () => void;
  };
  
  type swipperitem={
    src:string,
    name:string
  }
  type worker_data={
    prof:string,
    profimg:string,
    name:string,
    background:string
  }
  export type {ProductItem,NavItem,review,social_connection,context_type,UseProductContext,swipperitem,worker_data}
 