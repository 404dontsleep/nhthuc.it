import { scrollToSection } from "../../utils/scrollToSection";

export default function Navbar({
  config,
}: {
  config: {
    title: string;
    links: { label: string; href: string }[];
  };
}) {
  return (
    <section id='home' className='fixed top-0 inset-x-0 bg-white/50 backdrop-blur-sm z-10'>
      <div className='flex flex-row items-center justify-between py-2 px-4 container mx-auto'>
        <h1 className='text-2xl text-emerald-500 font-bold'>{config.title}</h1>
        <div className='flex flex-row items-center justify-center gap-4'>
          {config.links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className='text-xl hover:text-emerald-500 transition-colors duration-100'
            >
              {link.label}
            </button>
          ))}
        </div>
        <p />
      </div>
    </section>
  );
}
