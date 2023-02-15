import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { GET_PROJECT, GET_PROJECTS } from '@/queries/projectQueries'
import ClientInfo from '@/components/ClientInfo'
import DeleteProjectButton from '@/components/DeleteProjectButton'
import EditProjectForm from '@/components/EditProjectForm'
import { Project } from '@/types'
import client from '@/config/apolloClient'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PROJECT,
    variables: { id: params!.id },
  })
  const project = data.project
  return {
    props: {
      project: data.project,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  })
  // `paths` must be an array of strings or objects of shape { params: [key: string]: string }
  const paths = data.projects.map((project: Project) => ({
    params: {
      id: project.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function project({ project }: { project: Project }) {
  // const router = useRouter()
  // const { id } = router.query

  // const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } })
  // if (loading) return <p>Loading...</p>
  // if (error) {
  //   console.log(error.message)
  //   return (
  //     <>
  //       <p>Error...</p>
  //       <br />
  //       <Link href="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
  //         Go back
  //       </Link>
  //     </>
  //   )
  // }

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      {/* {!loading && !error && ( */}
      <>
        <div className="mx-auto w-75 card p-5">
          <Link href="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{project.name}</h1>
          <p>{project.description}</p>

          <h5 className="mt-3">Project status</h5>
          <p className="lead">{project.status}</p>

          <ClientInfo client={project.client!} />
          <EditProjectForm project={project} />
          <DeleteProjectButton projectId={project.id} />
        </div>
      </>
      {/* )} */}
    </>
  )
}
