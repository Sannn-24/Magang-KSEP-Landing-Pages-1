import Image from "next/image";
import Landing_Page_1 from "./components/Landing_Page_1";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4'>
      <Landing_Page_1/>
    </main>
  );
}
