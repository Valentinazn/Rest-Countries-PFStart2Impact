import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("./components/MainContent"));

export default function Home() {
  return <MainContent />;
}
