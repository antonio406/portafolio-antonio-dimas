import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaPhp, 
  FaHtml5, FaCss3Alt, FaJs, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, 
  SiMysql, SiSpringboot, SiFlask, SiOdoo
} from 'react-icons/si';
import { FloatingChatBot } from '../components/ChatBot/FloatingChatBot';

const Home = () => {
  const technologies = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: FaPython, name: 'Python', color: 'text-blue-400' },
    { icon: FaJava, name: 'Java', color: 'text-red-500' },
    { icon: FaPhp, name: 'PHP', color: 'text-purple-500' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    { icon: SiMysql, name: 'MySQL', color: 'text-orange-400' },
    { icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-600' },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-700' },
    { icon: SiOdoo, name: 'Odoo', color: 'text-purple-600' },
    { icon: FaDatabase, name: 'SQL Server', color: 'text-red-600' }
  ];
  return (
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen py-16 px-4 sm:px-6 md:px-6 
              bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 
              dark:from-gray-900 dark:via-gray-950 dark:to-black
              text-white"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: Texto */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="block">Hola, soy</span>
            <span className="block text-primary">Antonio Dimas Fernández</span>
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200"
          >
            Desarrollador Web Full Stack & Ingeniero en Desarrollo y Gestión de Software
          </motion.p>
        </div>

        {/* Columna derecha: Animación e íconos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center"
        >
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[300px] sm:h-[400px] md:h-[450px] relative">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json"
              className="w-full h-full"
            />

            {/* Íconos flotantes adaptados a móviles */}
            {technologies.slice(0, 8).map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`${tech.color} absolute`}
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360],
                  x: Math.cos(index * (Math.PI / 4)) * (window.innerWidth < 640 ? 120 : 220),
                  y: Math.sin(index * (Math.PI / 4)) * (window.innerWidth < 640 ? 120 : 220),
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <tech.icon className={`w-6 sm:w-8 h-6 sm:h-8`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Botones de acción */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-5 max-w-md mx-auto sm:flex sm:justify-center gap-3"
      >
        <div className="rounded-md shadow w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 sm:py-4 sm:text-lg"
          >
            Contáctame
          </a>
        </div>
        <div className="rounded-md shadow w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 dark:bg-dark dark:hover:bg-gray-800 sm:py-4 sm:text-lg"
          >
            Ver Proyectos
          </a>
        </div>
      </motion.div>
    </div>

    {/* Chat Bot Flotante */}
    <FloatingChatBot />
  </motion.div>
  );
};

export default Home;