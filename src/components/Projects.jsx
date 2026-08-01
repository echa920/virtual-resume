import { projects } from '../resumeData'

export default function Projects() {
  return (
    <ul className="cards">
      {projects.map((project) => (
        <li className="card" key={project.name}>
          <h3 className="card-title">
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p className="card-body">{project.description}</p>
          <ul className="tags">
            {project.tech.map((tech) => (
              <li className="tag" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
