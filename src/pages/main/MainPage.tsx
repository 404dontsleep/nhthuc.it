import { GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import Hero from "../../components/tailwind/Hero";
import Navbar from "../../components/tailwind/Navbar";
import Footer from "../../components/tailwind/Footer";
import { info } from "../../config/info";
import { Fragment } from "react/jsx-runtime";

export default function MainPage() {
  return (
    <div className='custom-scrollbar h-screen overflow-y-auto '>
      <Navbar config={info.navbar} />
      <Hero config={info.hero} />
      <div id='about' className='snap-center py-20 flex flex-col container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center decoration-emerald-500 underline-offset-8 underline'>About Me</h1>
        <div className='mt-6 max-w-3xl mx-auto'>
          <div>
            <p className='text-lg text-gray-700 mb-4 text-justify'>
              I'm a full-stack developer with hands-on experience in frontend, backend, and game development. I
              specialize in leveraging modern libraries and frameworks to optimize systems and accelerate development
              without compromising on performance or scalability.
            </p>
            <p className='text-lg text-gray-700 mb-4 text-justify'>
              With multiple algorithm competition awards, I've built a strong foundation in problem-solving and
              developed an exceptional ability to debug complex issues efficiently. I approach every project with
              attention to detail, a creative mindset, and a strong sense of ownership.
            </p>
            <p className='text-lg text-gray-700 text-justify'>
              Above all, I have a genuine passion for programming. To me, coding is not just about building software —
              it's about creating elegant solutions, solving real-world problems, and constantly pushing the limits of
              what I can do.
            </p>
          </div>
        </div>
      </div>
      <div id='skills' className='snap-center py-20 flex flex-col container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center decoration-emerald-500 underline-offset-8 underline'>
          Skills & Expertise
        </h1>
        <div className='mt-6 grid grid-cols-3 lg:grid-cols-4 gap-4'>
          {[
            // Frontend
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              tag: ["Frontend", "Web3", "3D"],
            },
            {
              name: "Next.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              tag: ["Frontend"],
            },
            {
              name: "Three.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
              tag: ["Frontend", "3D"],
            },

            // Backend
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              tag: ["Backend"],
            },
            {
              name: "Express",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              tag: ["Backend"],
            },
            // Database
            {
              name: "MongoDB",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              tag: ["Database"],
            },
            {
              name: "MySQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              tag: ["Database"],
            },

            // Programming Languages
            {
              name: "Typescript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              tag: ["Frontend", "Backend", "Web3"],
            },
            {
              name: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              tag: ["Algorithm"],
            },
            {
              name: "C#",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
              tag: ["Game", "Desktop"],
            },
            {
              name: "C++",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              tag: ["Algorithm"],
            },
            {
              name: "Java",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              tag: ["Algorithm", "Game", "Desktop"],
            },
            {
              name: "C",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              tag: ["Algorithm"],
            },
            {
              name: "Solidity",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
              tag: ["Web3", "Blockchain"],
            },

            // DevOps & Cloud
            {
              name: "Docker",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              tag: ["DevOps"],
            },

            // Game & 3D
            {
              name: "Unity",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
              tag: ["Game", "3D"],
            },

            // AI & ML
            {
              name: "Kotlin",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
              tag: ["Mobile", "Android"],
            },
            {
              name: "React Native",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              tag: ["Mobile", "Cross-platform"],
            },
            {
              name: "Unity + Meta Quest 3",
              icon: "https://virtualrealmvr.com/cdn/shop/files/MQ3.png?v=1722329990",
              tag: ["VR", "3D"],
            },
          ].map((skill) => (
            <Fragment key={skill.name}>
              <div className='hidden md:flex items-center gap-2 ring-1 ring-gray-300 rounded-md p-2 relative'>
                <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
                <span>{skill.name}</span>
              </div>
              <div className='flex md:hidden items-center justify-center gap-2 ring-1 ring-gray-300 rounded-md p-2 relative'>
                <img src={skill.icon} alt={skill.name} className='w-20 h-20' />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div id='projects' className='snap-center py-20 flex flex-col container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center decoration-emerald-500 underline-offset-8 underline'>Projects</h1>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[
            {
              name: "My VR Shot",
              description:
                "An immersive VR game where you defend your territory by using a gun to eliminate waves of invading rats. Features realistic weapon mechanics and challenging gameplay.",
              tags: ["VR", "Unity", "Meta Quest 3", "Game"],
              image: "./assets/vrshot.png",
              link: "https://github.com/404dontsleep/VRShot",
            },
            {
              name: "My VR World",
              description:
                "A game created while learning about VR and MetaSDK, allowing free creativity with the world using available objects",
              tags: ["VR", "Unity", "Meta Quest 3"],
              image: "./assets/vrworld.png",
              link: "https://github.com/404dontsleep/VRShot",
            },
            {
              name: "My VR Room",
              description:
                "An immersive AR game featuring intuitive hand tracking interactions and an intuitive UI system for collecting and managing virtual items in real-world environments, creating a seamless blend of digital and physical experiences",
              tags: ["VR", "Unity", "Meta Quest 3", "AR", "Hand Tracking"],
              image: "./assets/vrroom.png",
              link: "https://webapp-sg.tiktok.com/ee27a4c5596489ea61886541add4f869/682dc5e6/kmoat/tos-alisg-pve-0037c001/okQQDJ8MgQIFjfMIuaesM3foXCzAPQ8dWgN9IA?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2232&bt=1116&cs=0&ds=6&ft=LrmapoTzD12NvHS-lWIxRNyNJlBF-UjNS8opiX&mime_type=video_mp4&qs=0&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmNDc6aDs3OzQzOGYzZjQ0NUBpM3k3dms5cjpuczMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiNgXjJfMGBiXi8xLTQxNjNhYSNvc2QvMmRrY2tgLS1kMS1zcw%3D%3D&btag=200088000&dpk=81EXDRZBmptETz%2BTvmQ4vXtar%2BHoD5Zm5inLeDjkxiW6unkQxQD3IKhQO4ix3r2OUSTsMDStjgOvZG7LZvftW%2FPqYgw9ldt%2BDFF8rA%3D%3D&dpm=cenc-aes-ctr&l=20250519202318B4EB0553BAF53252C21C&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjYxMzg5NjE0MDUyNTQ1MzMxNCJ9",
            },
          ].map((project, index) => (
            <div
              key={project.name + index}
              className='flex flex-col gap-2 ring-1 ring-gray-300 rounded-md p-4 hover:shadow-lg transition-all duration-300'
            >
              <img src={project.image} alt={project.name} className='w-full h-40 object-cover rounded-md' />
              <h3 className='text-xl font-semibold'>{project.name}</h3>
              <p className='text-gray-600 text-sm'>{project.description}</p>
              <div className='flex-1' />
              <div className='flex flex-wrap gap-2 mt-2'>
                {project.tags.map((tag) => (
                  <span key={tag} className='bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full'>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 text-emerald-600 hover:text-emerald-800 text-sm font-medium'
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
      <div id='contact' className='snap-center py-20 flex flex-col container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center decoration-emerald-500 underline-offset-8 underline'>
          Contact Me
        </h1>
        <div className='mt-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-emerald-600'>Contact Information</h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <MailIcon className='text-emerald-300' />
                <a href='mailto:nhthuc.it@gmail.com' className='text-gray-700 hover:text-emerald-600'>
                  nhthuc.it@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <PhoneIcon className='text-emerald-300' />
                <a href='tel:+84395743566' className='text-gray-700 hover:text-emerald-600'>
                  (+84) 395 743 566
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <GithubIcon className='text-emerald-300' />
                <a
                  href='https://github.com/404dontsleep'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-emerald-600'
                >
                  @404dontsleep
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
