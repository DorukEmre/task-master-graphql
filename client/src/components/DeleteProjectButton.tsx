import { DELETE_PROJECT } from '@/mutations/projectMutations'
import { GET_PROJECTS } from '@/queries/projectQueries'
import { useMutation } from '@apollo/client'
import { Project } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DeleteProjectButton = ({ projectId }: { projectId: string }) => {
  const router = useRouter()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    update(cache, { data: { deleteProject } }) {
      const { projects }: { projects: Project[] } = cache.readQuery({
        query: GET_PROJECTS,
      })!
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter((project) => project.id !== projectId),
        },
      })
    },
    onCompleted: () => router.push('/'),
  })

  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteProject()}
      >
        Delete Project
      </button>
    </div>
  )
}

export default DeleteProjectButton
