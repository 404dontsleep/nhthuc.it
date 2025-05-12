import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const portfolio = {
  name: "Thuc Nguyen Huu",
  title: "Intern Frontend Developer",
  about: (
    <>
      I am a student at <b>Vietnam-Korea University of Information and Communication Technology</b> with{" "}
      <b>strong self-learning abilities</b> and quick learning skills. I have a <b>passion for frontend development</b>{" "}
      and am particularly good at <b>algorithms</b>. My ability to <b>research independently</b> and absorb new
      knowledge helps me quickly adapt to modern technologies and frameworks in web development.
    </>
  ),
  certificates: [
    {
      time: <b>03/2021</b>,
      title: "Second Prize in Non-Specialized Division at Vietnam Student Informatics Olympiad 2021",
      link: "https://drive.google.com/file/d/1XZv4b8lL4fWsdQx8sKH9J_pphQpXIHMy/edit",
    },
    {
      time: <b>03/2021</b>,
      title:
        "Consolation Prize at International Collegiate Programming Contest (ICPC) Central Region 2021 - Team Prize",
    },
    {
      time: <b>09/2021</b>,
      title: "Present Major: Software Engineer Certificates 03/2021 Second Prize in",
      link: "https://lqdoj.edu.vn/user/undefined",
    },
    {
      time: <b>04/2022</b>,
      title: "Consolation Prize at the 31st Vietnam Student Informatics Olympiad 2022",
      link: "https://drive.google.com/file/d/1r5jXd3uarJpKCwnWuWkZ59CrsinPCrve/edit",
    },
  ],
  skills: ["React", "React Router", "React Hooks", "Zustand", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
  softSkills: ["Effective Communication", "Teamwork", "Problem Solving", "Self-learning"],
  contact: [
    { icon: <MailIcon className='w-4 h-4' />, text: "nhthuc.it@gmail.com", href: "" },
    { icon: <PhoneIcon className='w-4 h-4' />, text: "+84 395 743 566", href: "" },
    { icon: <MapPinIcon className='w-4 h-4' />, text: "Da Nang, Vietnam", href: "" },
  ],
  education: [
    {
      time: <b>2021 - Present</b>,
      school: "Vietnam-Korea University of Information and Communication Technology",
    },
  ],
  experience: [
    {
      time: <b>03/2022 - 05/2022</b>,
      position: "Intern Frontend Developer",
      company: "SAFEHORIZONS SOFTWARE SERVICE COMPANY LIMITED",
      description: [
        <>
          Implemented responsive UIs using <b>ReactJS</b>
        </>,
        <>
          Utilized <b>Material UI</b> for consistent and visually appealing design
        </>,
        <>Integrated frontend components with backend APIs for seamless functionality</>,
      ],
    },
    {
      time: <b>2022 - Present</b>,
      position: "Freelancer",
      company: "",
      description: [],
    },
  ],
  projects: [
    {
      name: "Web3 Social Network",
      description: "Decentralized social network platform built with Web3 technologies",
      details: [
        <>
          Developed smart contracts using <b>Solidity</b> and <b>Hardhat</b>
        </>,
        <>
          Built responsive frontend with <b>TypeScript</b> and <b>React</b>
        </>,
        <>
          Implemented <b>Web3 wallet integration</b> and blockchain interactions
        </>,
      ],
      technologies: ["Solidity", "Hardhat", "TypeScript", "React"],
    },
    {
      name: "PetShop Management System",
      description: "Full-stack application for pet shop management and operations",
      details: [
        <>
          Built with <b>TypeScript</b>, <b>React</b> for frontend and <b>Node.js</b> for backend
        </>,
        <>
          Containerized application using <b>Docker</b> and <b>Docker Compose</b>
        </>,
        <>
          Implemented <b>RESTful APIs</b> and database integration
        </>,
      ],
      technologies: ["TypeScript", "React", "Node.js", "Docker", "Docker Compose"],
    },
    {
      name: "SimpleBase Admin Panel",
      description: "Configurable admin dashboard for system management",
      details: [
        <>
          Developed using <b>TypeScript</b> and modern web technologies
        </>,
        <>
          Implemented <b>dynamic configuration system</b>
        </>,
        <>
          Containerized deployment with <b>Docker</b>
        </>,
      ],
      technologies: ["TypeScript", "React", "Docker"],
    },
  ],
};

function Contact() {
  const ContactInfo = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => {
    return (
      <p className='flex flex-row items-center gap-2'>
        {icon}
        <a href={href}>{text}</a>
      </p>
    );
  };
  return (
    <div className='flex flex-col w-sm p-10 bg-gray-100'>
      <img src={"https://avatar.iran.liara.run/public/7"} alt='' className='rounded-full w-64 h-64' />
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Contact</h1>
        {portfolio.contact.map((item, index) => (
          <ContactInfo key={index} icon={item.icon} text={item.text} href={item.href} />
        ))}
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Skills</h1>
        <ul className='list-disc ml-4'>
          {portfolio.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Soft Skills</h1>
        <ul className='list-disc ml-4'>
          {portfolio.softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Education</h1>
        <ul className='list-disc ml-4'>
          {portfolio.education.map((item, index) => (
            <li key={index}>
              {item.time}
              <br />
              {item.school}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className='flex flex-col flex-1 p-10'>
      <div className='h-64 flex flex-col justify-center gap-4'>
        <h1 className='text-7xl'>{portfolio.name}</h1>
        <h1 className='text-2xl text-gray-500'>{portfolio.title}</h1>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>About me</h1>
        <p className='text-gray-500'>{portfolio.about}</p>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <p className='text-2xl font-bold mb-4'>Certificates</p>
        <ul className='list-disc ml-4'>
          {portfolio.certificates.map((item, index) => (
            <li key={index} className='mb-2'>
              <span className='font-bold'>{item.time}</span>
              {item.link && (
                <a className='ml-2 text-blue-500 underline' href={item.link}>
                  View Here
                </a>
              )}
              <br />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col '>
        <h1 className='text-2xl font-bold mb-4'>Experience</h1>
        <ul className='list-disc ml-4'>
          {portfolio.experience.map((item, index) => (
            <li key={index} className='mb-8'>
              <b>{item.time}</b>
              <br />
              <b>{item.position}</b>
              <br />
              {item.company}
              <br />
              <span>
                <ul className='list-disc ml-4'>
                  {item.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-4 border-gray-500' />
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Projects</h1>
        <ul className='list-disc ml-4'>
          {portfolio.projects.map((project, index) => (
            <li key={index} className='mb-6'>
              <b>{project.name}</b>
              <br />
              Technologies: <span className='text-gray-500 font-bold'>{project.technologies.join(", ")}</span>
              <br />
              <span className='text-gray-500'>{project.description}</span>
              <ul className='list-disc ml-4 mt-2'>
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className='flex flex-row text-gray-500 w-full'>
      <Contact />
      <Project />
    </div>
  );
}
