import { GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-12 mt-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <h3 className='text-xl font-bold mb-4'>nhthuc.it</h3>
            <p className='text-emerald-100 mb-4'>Building elegant solutions for complex problems through code.</p>
            <div className='flex space-x-4'>
              <a href='https://github.com/404dontsleep' className='hover:text-emerald-200 transition-colors'>
                <GithubIcon size={20} />
              </a>
              <a href='mailto:contact@nhthuc.it' className='hover:text-emerald-200 transition-colors'>
                <MailIcon size={20} />
              </a>
              <a href='tel:+84123456789' className='hover:text-emerald-200 transition-colors'>
                <PhoneIcon size={20} />
              </a>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() => scrollToSection("#hero")}
                  className='text-emerald-100 hover:text-white transition-colors'
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className='text-emerald-100 hover:text-white transition-colors'
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#skills")}
                  className='text-emerald-100 hover:text-white transition-colors'
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className='text-emerald-100 hover:text-white transition-colors'
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className='text-emerald-100 hover:text-white transition-colors'
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-emerald-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-emerald-100 text-sm'>© {new Date().getFullYear()} nhthuc.it. All rights reserved.</p>
          <p className='text-emerald-100 text-sm mt-2 md:mt-0'>Designed & Developed with ❤️ in Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
