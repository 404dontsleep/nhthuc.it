import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollToSection";
export default function Hero({
  config,
}: {
  config: { title: string; description: string; shortDescription: string; button: string };
}) {
  return (
    <section
      id='hero'
      className='snap-center relative flex flex-col h-screen items-center justify-center container px-4 mx-auto'
    >
      <div className='absolute bottom-10 inset-x-0 flex flex-col items-center justify-center'>
        <motion.div
          animate={{ transform: "translateY(10px)" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className='w-10 h-10 text-emerald-500' />
        </motion.div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl font-bold'>Hello, I'm</h1>
          <h1 className='text-5xl font-bold text-emerald-500'>{config.title}</h1>
          <h1 className='text-xl text-gray-500 mt-4'>{config.description}</h1>
          <h1 className='text-lg text-gray-500 mt-4'>{config.shortDescription}</h1>
          <div className='flex flex-row gap-4 mt-4'>
            <button
              onClick={() => scrollToSection("#contact")}
              className='bg-emerald-500 text-white px-4 py-2 rounded-md'
            >
              Contact me
            </button>
            {/* <button className='bg-white text-emerald-500 border border-emerald-500 px-4 py-2 rounded-md'>
              <a href='https://www.facebook.com/nhthuc.it'>Download CV</a>
            </button> */}
          </div>
        </div>
        <div className='flex flex-col justify-center lg:items-end items-center'>
          <img
            src={
              "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeEA_muYD8jOZGuhB84f7XgZWt9TLzuBU1Ba31MvO4FTUDQ0QjunmXrgpI_tGY0q3xwLCzmf07QWJXqa03qiCBZV&_nc_ohc=31SphODCOLIQ7kNvwF8B-1v&_nc_oc=Adm427znflplOL_2hiaJ_FvmyRBiyzDy3T5khvlF_Tw6Q1o-TGhoISq2BVGvZf1eLGJBCSPW3rnyraxs4ph82Fyk&_nc_zt=24&_nc_ht=scontent.fdad1-2.fna&oh=00_AfIe38wu5bFx2Kj2Az5S50Uo-Bp5ICGNK4kxcMX28tM-Iw&oe=68497C7A"
            }
            alt='hero'
            className='w-64 h-64 ring-3 ring-emerald-500 rounded-full p-2'
          />
        </div>
      </div>
    </section>
  );
}
