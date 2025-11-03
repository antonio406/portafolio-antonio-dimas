import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = {
    nombre: "Antonio Dimas Fernández",
    ubicacion: "León de los Aldama, Guanajuato, México",
    objetivo: `Busco unirme a una empresa que ofrezca oportunidades de desarrollo 
    profesional, donde pueda aprender y adquirir más conocimientos y experiencia 
    en el campo de sistemas de manera continua. Mi objetivo es contribuir al 
    crecimiento de la empresa a través de un desempeño excepcional y estar 
    dispuesto a aprender cualquier sistema o framework necesario para respaldar 
    sus metas y proyectos.`
  };

  const education = [
    {
      degree: "Ing. En Desarrollo y Gestión de Software",
      institution: "Universidad Tecnológica Fidel Velázquez",
      period: "2021 - 2023"
    },
    {
      degree: "Técnico Superior Universitario en Tecnologías de la Información",
      institution: "Universidad Tecnológica Fidel Velázquez",
      period: "2019 - 2021"
    }
  ];

  const technicalSkills = {
    "Desarrollo Web Frontend": [
      { name: 'HTML5', experience: 'Avanzado', projects: 'Múltiples sitios web responsivos' },
      { name: 'CSS3', experience: 'Avanzado', projects: 'Diseños personalizados y animaciones' },
      { name: 'JavaScript', experience: 'Avanzado', projects: 'Aplicaciones web interactivas' },
      { name: 'React', experience: 'Intermedio-Avanzado', projects: 'SPAs y aplicaciones dinámicas' },
      { name: 'Angular', experience: 'Intermedio', projects: 'Desarrollo de dashboards' }
    ],
    "Desarrollo Backend": [
      { name: 'Node.js', experience: 'Intermedio-Avanzado', projects: 'APIs RESTful y microservicios' },
      { name: 'PHP', experience: 'Avanzado', projects: 'Sistemas de gestión y CMS' },
      { name: 'Python', experience: 'Intermedio-Avanzado', projects: 'Automatización y APIs' },
      { name: 'Java', experience: 'Intermedio', projects: 'Aplicaciones empresariales' },
      { name: 'Spring Boot', experience: 'Intermedio', projects: 'Microservicios y APIs' }
    ],
    "Bases de Datos": [
      { name: 'MongoDB', experience: 'Intermedio-Avanzado', projects: 'Aplicaciones NoSQL' },
      { name: 'PostgreSQL', experience: 'Avanzado', projects: 'Sistemas transaccionales' },
      { name: 'MySQL', experience: 'Avanzado', projects: 'Aplicaciones web complejas' },
      { name: 'SQL Server', experience: 'Intermedio-Avanzado', projects: 'Sistemas empresariales' }
    ],
    "Herramientas y Otros": [
      { name: 'Git', experience: 'Avanzado', projects: 'Control de versiones en equipo' },
      { name: 'Docker', experience: 'Intermedio', projects: 'Containerización de aplicaciones' },
      { name: 'Postman', experience: 'Avanzado', projects: 'Pruebas y documentación de APIs' },
      { name: 'VS Code', experience: 'Avanzado', projects: 'Desarrollo y extensiones' },
      { name: 'Odoo', experience: 'Intermedio', projects: 'Módulos personalizados' }
    ]
  };

  const softSkills = [
    { skill: "Capacidad de aprendizaje rápido", description: "Adaptación rápida a nuevas tecnologías y frameworks" },
    { skill: "Trabajo en equipo", description: "Colaboración efectiva en equipos multidisciplinarios" },
    { skill: "Resolución de problemas", description: "Enfoque analítico y metódico para resolver desafíos técnicos" },
    { skill: "Comunicación", description: "Habilidad para explicar conceptos técnicos de manera clara" },
    { skill: "Gestión del tiempo", description: "Organización eficiente de tareas y cumplimiento de plazos" },
    { skill: "Adaptabilidad", description: "Flexibilidad para adaptarse a cambios y nuevos requerimientos" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16 px-6 
                 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 
                 dark:from-gray-900 dark:via-gray-950 dark:to-black
                 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Desarrollador Full Stack
          </p>
        </motion.div>

        {/* Información Personal */}
        <motion.section
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Perfil Profesional</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.objetivo}
          </p>
        </motion.section>

        {/* Educación */}
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Educación</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="border-l-4 border-primary pl-4"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-500">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Habilidades Técnicas */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary bg-opacity-10 text-primary">
                          {skill.experience}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.projects}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Habilidades Blandas */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Habilidades Blandas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary">{skill.skill}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;