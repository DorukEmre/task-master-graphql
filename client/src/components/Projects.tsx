import { GET_PROJECTS } from '@/queries/projectQueries'
import { useQuery } from '@apollo/client'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/types'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  )
}

export default Projects
