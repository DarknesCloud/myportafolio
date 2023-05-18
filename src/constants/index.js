import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  cefise,
  electro,
  gaming,
  robeniorsystem,
  peliculas,
  trelloclon,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Android iOS Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js & Frontend Developer',
    company_name: 'Linkedin',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.',
      'Colaborar con equipos multidisciplinarios, incluyendo diseñadores, gerentes de productos y otros desarrolladores, para crear productos de alta calidad.',
      'Implementar diseños responsivos y asegurar la compatibilidad entre navegadores.',
      'Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Linkedin',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Construir experiencias móviles avanzadas utilizando React Native y otras tecnologías complementarias.',
      'Colaborar estrechamente con diseñadores y equipos interdisciplinarios para llevar a cabo proyectos de alta calidad.',
      'Asegurar un rendimiento óptimo y una interfaz de usuario fluida en diversas plataformas móviles.',
      'Contribuir a revisiones de código colaborativas y ofrecer valiosos comentarios para mejorar continuamente el proceso de desarrollo.',
    ],
  },
  {
    title: 'Backend Developer',
    company_name: 'Linkedin',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Desarrollar y mantener la lógica de negocio y funcionalidades del lado del servidor utilizando tecnologías como Node.js, Python, o Java.',
      'Colaborar estrechamente con equipos de front-end y arquitectos de software para diseñar e implementar APIs robustas y escalables.',
      'Optimizar el rendimiento del backend, asegurando tiempos de respuesta rápidos y alta disponibilidad.',
    ],
  },
  {
    title: 'DevOps',
    company_name: 'Linkedin',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Implementar y mantener la infraestructura de desarrollo, pruebas y producción utilizando herramientas como Docker, Kubernetes y AWS.',
      'Gestionar y monitorear los sistemas en producción, asegurando la disponibilidad, el rendimiento y la seguridad.',
      'Participar en revisiones de configuración y proporcionar retroalimentación para mejorar la eficiencia operativa y la confiabilidad del entorno.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'E-learning Web Cefise',
    description:
      'Este es un proyecto elaborado en React.js en conjunto con otras tecnologias para crear una plataforma capaz de dar a conocer la clinica de fisioterapia, Cefise.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cefise,
    source_code_link: 'https://github.com/DarknesCloud/',
  },
  {
    name: 'Landing Page',
    description:
      'Sitio web diseñado específicamente para captar la atención de los visitantes y convertirlos en clientes potenciales o promover un producto en particular.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: robeniorsystem,
    source_code_link: 'https://github.com/DarknesCloud/robenior',
  },
  {
    name: 'Plataforma E-commerce',
    description:
      'Una e-commerce de productos electrónicos que ofrece un catálogo variado, un proceso de compra seguro, información detallada del producto, y buen servicio al cliente. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: electro,
    source_code_link: 'https://github.com/DarknesCloud/electro-master',
  },
  {
    name: 'Sitio Web de Peliculas',
    description:
      'Sitio web de películas proporciona un catálogo completo, información detallada, herramientas de búsqueda, valoraciones y reseñas de usuarios, opciones de reproducción y contenido adicional relacionado con el mundo del cine',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: peliculas,
    source_code_link: 'https://github.com/DarknesCloud/web_peliculas',
  },
  {
    name: 'Clon de Trello',
    description:
      'El proyecto consistió en desarrollar un clon de Trello utilizando React. Trello es una herramienta de gestión de proyectos basada en tableros y tarjetas. Se creó una interfaz interactiva y amigable que permite a los usuarios crear tableros.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: trelloclon,
    source_code_link: 'https://github.com/DarknesCloud/trello-clon',
  },
  {
    name: 'Plataforma de Juegos',
    description:
      'Esta es una plataforma de juegos que ofrece una amplia selección de juegos, una interfaz intuitiva, funcionalidades sociales, opciones de personalización y progresión, y soporte multiplataforma para proporcionar una experiencia atractiva para los usuarios.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: gaming,
    source_code_link: 'https://github.com/DarknesCloud/cyborg-gaming',
  },
];

export { services, technologies, experiences, testimonials, projects };
