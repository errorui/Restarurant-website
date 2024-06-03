import Image from "next/image";
import Bannner from "./components/Bannner";
import About_Section from "./components/About";
import page from "./signin/page";
import Menu_Section from "./components/Menu";
import Review_Section from "./components/Review";

export default function Home() {
  return (
    <div className=" ">
      <Bannner></Bannner>
      <About_Section></About_Section>
      <Menu_Section></Menu_Section>
      <Review_Section></Review_Section>
    </div>
  );
}
