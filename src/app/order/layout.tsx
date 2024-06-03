import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../components/Cart";
import { ProductContextProvider } from "./UseProductStore";
import { ToastContainer, toast } from "react-toastify";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" min-h-[100vh] relative">
       <ToastContainer />

<ToastContainer />
      <ProductContextProvider>
        <Cart></Cart>

        <main>{children}</main>
      </ProductContextProvider>
    </div>
  );
}
