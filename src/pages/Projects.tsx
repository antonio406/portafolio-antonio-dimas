import { motion } from "framer-motion";
import { useState } from "react";
import reportetsu from "../assets/Plataforma web y móvil para administrar solicitudes de recuperación de piezas y refacciones producto de siniestros..pdf";
import reporteing from "../assets/REPORTE DE ESTADIA FINAL ADF.pdf";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Doc {
  title: string;
  description: string;
  fileUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sistema de Citas",
      description:
        "Aplicación web de gestión de citas desarrollada con React y Vite en el frontend, Node.js y Express en el backend, y MySQL como base de datos. Permite crear, actualizar y eliminar citas, con rutas RESTful y una interfaz responsiva y moderna.",
      technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],
      githubUrl: "https://github.com/tuusuario/proyecto1",
      liveUrl: "https://citas-lhxq.vercel.app/",
    },
    {
      title: "GJIMAR — Sitio Corporativo",
      description:
        "Sitio web profesional para GJIMAR, con diseño moderno y optimización SEO.",
      technologies: ["React", "Vite", "Vanilla CSS"],
      githubUrl: "https://github.com/tuusuario/gjimar",
      liveUrl: "https://www.gjimar.com.mx/",
    },
    {
      title: "Baez Ópticos — Sitio Web",
      description:
        "Sitio web de óptica desarrollado con HTML, CSS y JavaScript puro. Interfaz intuitiva y diseño responsive, optimizado para navegadores modernos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/antonio-1000/Baez_Opticos",
      liveUrl: "https://antonio-1000.github.io/Baez_Opticos/index.html",
    },
  ];

  const docs: Doc[] = [
    {
      title: "Liberación de TSU",
      description: "Documento oficial de liberación de Técnico Superior Universitario.",
      fileUrl: reportetsu,
    },
    {
      title: "Liberación de Ingeniería",
      description: "Documento oficial de liberación de Ingeniería.",
      fileUrl: reporteing,
    },
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
      <div className="max-w-5xl mx-auto">
        {/* Sección de Proyectos */}
        <SectionTitle title="Mis Proyectos" subtitle="Una selección de mis trabajos más recientes." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Sección de Documentos */}
        <SectionTitle
          title="Proyectos realizados / Experiencia profesional"
          subtitle="Documentos oficiales de liberación de TSU e Ingeniería"
          className="mt-16"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {docs.map((doc, index) => (
            <DocCard key={doc.title} doc={doc} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ title, subtitle, className = "" }: { title: string; subtitle: string; className?: string }) => (
  <div className={`text-center mb-10 ${className}`}>
    <motion.h1
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-4xl font-extrabold"
    >
      {title}
    </motion.h1>
    <p className="text-gray-200 mt-2 text-sm">{subtitle}</p>
  </div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imageError, setImageError] = useState(false);
  const previewUrl = project.liveUrl
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.liveUrl)}?w=400`
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-md bg-white/10 border border-white/20
                 rounded-xl shadow-lg p-4 transition-all duration-300
                 hover:bg-white/20 hover:shadow-xl flex flex-col justify-between"
    >
      <div className="w-full h-28 mb-3 rounded-lg overflow-hidden relative">
        {!imageError && project.liveUrl ? (
          <img
            src={previewUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/40 to-purple-400/30 flex items-center justify-center text-center text-white/70 text-sm">
            Vista previa no disponible
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-100 text-sm mb-3 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs bg-white/20 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 mt-auto text-sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-300 transition"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-300 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DocCard = ({ doc, index }: { doc: Doc; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
    className="backdrop-blur-md bg-white/10 border border-white/20
               rounded-xl shadow-lg p-6 transition-all duration-300
               hover:bg-white/20 hover:shadow-xl flex flex-col justify-between"
  >
    <div className="flex-1 mb-4">
      <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
      <p className="text-gray-100 text-sm">{doc.description}</p>
    </div>
    <a
      href={doc.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm text-center"
    >
      Ver / Descargar PDF
    </a>
  </motion.div>
);

export default Projects;
