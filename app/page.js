import Image from "next/image";
import Aria01Table from "./components/fullTable";
import LastElement from "./components/lastElement";
import Navbar from "./components/Navbar";
import SectionSystem from "./components/SectionSystem";
import TitleModule from "./components/WebsiteTitle";

export default function Home() {
  return (
    <div className="p-2 md:p-4">
      <TitleModule />
      {/* <Navbar /> */}
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <SectionSystem />
      {/* <Aria01Table /> */}
      {/* <LastElement /> */}
      {/* </main> */}
    </div>
  );
}
