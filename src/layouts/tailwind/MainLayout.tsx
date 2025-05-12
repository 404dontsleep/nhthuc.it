import { Outlet } from "react-router-dom";
import Navbar from "../../components/tailwind/Navbar";

export default function MainLayout() {
  return (
    <section className='flex flex-col h-screen p-4 gap-4'>
      <Navbar />
      <main className='flex-1 overflow-y-auto flex flex-col'>
        <Outlet />
      </main>
    </section>
  );
}
