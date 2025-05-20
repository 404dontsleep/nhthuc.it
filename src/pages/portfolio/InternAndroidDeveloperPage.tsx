import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon } from "lucide-react";

const portfolio = {
  name: "Thuc Nguyen Huu",
  title: "Intern Android Developer",
  about: (
    <>
      I am a student at <b>Vietnam-Korea University of Information and Communication Technology</b> with{" "}
      <b>strong self-learning abilities</b> and quick learning skills. I have a <b>passion for mobile development</b>{" "}
      and am particularly good at <b>algorithms</b>. My ability to <b>research independently</b> and absorb new
      knowledge helps me quickly adapt to modern Android technologies and frameworks like Jetpack, Material Design, and
      popular libraries.
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
      title: "Second Prize in LQDOJ CUP 2021 University division",
      link: "https://lqdoj.edu.vn/user/undefined",
    },
    {
      time: <b>04/2022</b>,
      title: "Consolation Prize at the 31st Vietnam Student Informatics Olympiad 2022",
      link: "https://drive.google.com/file/d/1r5jXd3uarJpKCwnWuWkZ59CrsinPCrve/edit",
    },
  ],
  skills: ["Android Studio", "Kotlin", "Java", "OOP", "Git", "Android SDK", "Material Design", "MVVM Architecture"],
  softSkills: ["Communication", "Teamwork", "Problem Solving", "Self-learning", "Fast Learner"],
  contact: [
    { icon: <MailIcon className='w-4 h-4' />, text: "nhthuc.it@gmail.com", href: "" },
    { icon: <PhoneIcon className='w-4 h-4' />, text: "+84 395 743 566", href: "" },
    { icon: <MapPinIcon className='w-4 h-4' />, text: "Da Nang, Vietnam", href: "" },
    {
      icon: <GithubIcon className='w-4 h-4' />,
      text: "@dontsleep404",
      href: "https://github.com/404dontsleep",
    },
  ],
  education: [
    {
      time: <b>2021 - Present</b>,
      school: "Vietnam-Korea University of Information and Communication Technology",
      description: "4th year Software Engineer student",
    },
  ],
  experience: [
    {
      time: <b>03/2022 - 05/2022</b>,
      position: "Intern Frontend Developer",
      company: "SAFEHORIZONS SOFTWARE SERVICE COMPANY LIMITED",
      description: [
        "Implemented responsive UIs using ReactJS",
        "Utilized Material UI for consistent and visually appealing design",
        "Integrated frontend components with backend APIs for seamless functionality",
      ],
    },
    {
      time: <b>2022 - Present</b>,
      position: "Freelancer",
      company: "",
      description: [
        "Developed browser automation tools",
        "Built and developed web applications",
        "Optimized web performance and user experience",
        "Fixed bugs and deployed web applications",
      ],
    },
  ],
  projects: [
    {
      name: "Labyrinth Game",
      description: "A maze game developed with Kotlin for Android",
      link: "https://github.com/dontsleep404/Labyrinth",
      technologies: ["Kotlin", "Android Canvas", "OOP"],
      role: [
        "Developed a maze game with multiple difficulty levels",
        "Implemented scoring system and player movement logic",
        "Optimized performance and user experience",
      ],
    },
    {
      name: "PetShop App",
      description: "Cross-platform pet shop management application",
      link: "https://github.com/404dontsleep/PetShop",
      technologies: ["React Native", "Node.js", "MongoDB", "Docker"],
      role: [
        "Developed cross-platform mobile app using React Native and Expo",
        "Built RESTful API with Node.js and MongoDB",
        "Implemented Docker for development and deployment environment",
      ],
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
      <img
        src={"https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"}
        alt=''
        className='w-64 h-64 mx-auto'
      />
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
            <li key={index} className={index > 0 ? "mt-8" : ""}>
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
            <li key={index} className='mb-8'>
              <div className='flex items-center gap-2'>
                <b className='text-xl'>{project.name}</b>
                {project.link && (
                  <a className='text-blue-500 underline' href={project.link} target='_blank' rel='noopener noreferrer'>
                    Github
                  </a>
                )}
              </div>
              <p className='text-gray-600 mt-1'>{project.description}</p>
              <div className='mt-2'>
                <span className='font-semibold'>Technologies: </span>
                <span className='text-gray-500'>{project.technologies.join(" • ")}</span>
              </div>
              <div className='mt-2'>
                <span className='font-semibold'>Role & Contributions:</span>
                <ul className='list-disc ml-6 mt-1'>
                  {project.role.map((role, roleIndex) => (
                    <li key={roleIndex} className='text-gray-600'>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function InternAndroidDeveloperPage() {
  return (
    <>
      <title>Intern Android Developer - Thuc Nguyen Huu</title>
      <div className='flex flex-row text-gray-500 w-full'>
        <Contact />
        <Project />
      </div>
    </>
  );
}
