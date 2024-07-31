//otras imagenes

export const imagenes = {
  img1: '../../../miFoto.png',
}

// Datos Personales
export const datos_personales = {
  nombre: 'Cristhian',
  nombre2: 'Cruz',
  ape_paterno: 'Bautista',
  ape_materno: 'Mamani',
  correo: 'cristhiancruz030598@gmail.com',
  celular: '67344498',
  fotografia1: '../../../img1.png',
  fotografia2: '',
  cv: '../../../Cristhian-Bautista-(C.V.).pdf'
}

//Contactos
export const contactos = [
  {
    id: 1,
    nombre_contacto: 'Correo Electrónico',
    dato: 'cristhiancruz030598@gmail.com',
    link: '#',
    icono: 'bx bx-mail-send'
  },
  {
    id: 2,
    nombre_contacto: 'WhatsApp',
    dato: '67344498',
    link: '#',
    icono: 'bx bxl-whatsapp'
  }
];

//Redes sociales
export const redes_sociales = [
  {
    nombre_red_social: 'GitHub',
    icono: 'uil uil-github-alt',
    link: 'https://github.com/cristhiancbm'
  },
  {
    nombre_red_social: 'WhatsApp',
    icono: 'uil uil-whatsapp',
    link: '#'
  },
];

// CONEXION A EMAILJS
export const variablesEmailJS = {
  serviceID: 'service_8e1cg8y',
  templateID: 'template_zt89i72',
  publicKey: 'C5ghBgImKJ7r3N3Lb'
}

// Profesion u Oficio
export const profesion = {
  programador_web: 'Programador Web - Estudiante',
  descripcion: 'Soy una persona disciplinada y creativa a la cual le apasiona el diseño web.'
}

// Experienicia
export const experiencia = [
  {
    id: 2,
    cargo: 'Docente',
    materia: 'Introducción a la Informatica y Computación',
    lugar: 'Academia FORMATE',
    gestion: '2022'
  },
  {
    id: 1,
    cargo: 'Mensajero en Laboratorio Óptico',
    materia: '',
    lugar: 'Óptica ANGELYS DIGITAL',
    gestion: '2017-2022'
  },
]


export const experiencia_general = {
  semestre_universidad: 'Séptimo Semetre',
  años_experiencia_programando: '0 años trabajando',
  proyectos_completados: '1+ proyectos',
}

// Experienicia
export const formacion_academica = [
  {
    id: 1,
    titulo: 'Estudiante de Informática',
    institucion: 'Universidad Mayor de San Andres',
    gestion: '2024'
  },
  {
    id: 2,
    titulo: 'Bachiller en Humanidades',
    institucion: 'Unidad Educativa Gualberto Villarroel',
    gestion: '2012'
  },
]


// A cerca de mi
export const descripcion = 'Estudiante de la carrera de Informática, He apoyado con proyectos a compañeros en la universidad en diferentes materias.'

// Habilidades
export const frontend = [
  {
    nombre: 'HTML',
    nivel: 'Intermedio',
    logo: ''
  },
  {
    nombre: 'CSS',
    nivel: 'Intermedio',
    logo: ''
  },
  {
    nombre: 'ReactJS',
    nivel: 'Básico',
    logo: ''
  },
  {
    nombre: 'Bootstrap',
    nivel: 'Intermedio',
    logo: ''
  },
]

export const backend = [
  {
    nombre: 'NodeJs',
    nivel: 'Básico',
    logo: ''
  },
  {
    nombre: 'MySql',
    nivel: 'Básico',
    logo: ''
  }
]

export const lenguajes_prog = [
  {
    nombre: 'JavaScript',
    nivel: 'Intermedio',
    logo: '../../../icons_tecnology/js.png'
  },
  {
    nombre: 'Java',
    nivel: 'Básico',
    logo: '../../../icons_tecnology/java.png'
  },
  {
    nombre: 'PHP',
    nivel: 'Básico',
    logo: '../../../icons_tecnology/php.png'
  },
  {
    nombre: 'Python',
    nivel: 'Básico',
    logo: '../../../icons_tecnology/python.png'
  },

];

// Proyectos y materiales realizados
export const proy_mat = {
  introduccion: 'Recientes proyectos de programación y materiales de apoyo realizados',

  categorias_nav: [
    'diseño web',
    'documento',
    'todo',
  ],

  // las categorias pueden ser:
  // diseño web -> diseños de páginas web
  // documento -> pdf

  proyectos: [
    {
      id: 1,
      imagen: '../../../materiales/viajes-bolivia.png',
      titulo: 'Viajes Bolivia',
      categoria: 'diseño web',
      demo: 'https://cristhiancbm.github.io/design-agencia-viajes/',
      link_github: '',
      tecnologias: [
        {
          id_tec: 1,
          nom_tecnologia: 'Html',
          icono: '../../../icons_tecnology/html.png'
        },
        {
          id_tec: 2,
          nom_tecnologia: 'CSS',
          icono: '../../../icons_tecnology/css.png'
        },
        {
          id_tec: 2,
          nom_tecnologia: 'Bootstrap',
          icono: '../../../icons_tecnology/bootstrap.png'
        },
      ]
    },
    {
      id: 2,
      imagen: '../../../materiales/formulario.png',
      titulo: 'Formualario de Registro',
      categoria: 'diseño web',
      demo: 'https://cristhiancbm.github.io/design-formulario-registro/',
      link_github: '',
      tecnologias: [
        {
          id_tec: 1,
          nom_tecnologia: 'HTML',
          icono: '../../../icons_tecnology/html.png'
        },
        {
          id_tec: 2,
          nom_tecnologia: 'CSS',
          icono: '../../../icons_tecnology/css.png'
        }
      ]
    },
    {
      id: 3,
      imagen: '../../../materiales/texto-escrito.png',
      titulo: 'Texto Escrito',
      categoria: 'diseño web',
      demo: 'https://cristhiancbm.github.io/design-texto-escrito/',
      link_github: '',
      tecnologias: [
        {
          id_tec: 1,
          nom_tecnologia: 'HTML',
          icono: '../../../icons_tecnology/html.png'
        },
        {
          id_tec: 2,
          nom_tecnologia: 'CSS',
          icono: '../../../icons_tecnology/css.png'
        }
      ]
    },
    {
      id: 3,
      imagen: '../../../materiales/formulario-operativa-1.png',
      titulo: 'Formulario de OPE-1',
      categoria: 'documento',
      demo: '../../../materiales/formulario-operativa-1.pdf',
      link_github: '',
      tecnologias: [
        {
          id_tec: 1,
          nom_tecnologia: 'Word',
          icono: '../../../icons_tecnology/pdf.png'
        }
      ]
    },
  ]
}