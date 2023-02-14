import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { GET_PROJECT } from '@/queries/projectQueries'
import ClientInfo from '@/components/ClientInfo'

export default function project() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } })
  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error.message)
    return (
      <>
        <p>Error...</p>
        <br />
        <Link href="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Go back
        </Link>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      {!loading && !error && (
        <>
          <div className="mx-auto w-75 card p-5">
            <Link
              href="/"
              className="btn btn-light btn-sm w-25 d-inline ms-auto"
            >
              Back
            </Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>

            <h5 className="mt-3">Project status</h5>
            <p className="lead">{data.project.status}</p>

            <ClientInfo client={data.project.client} />
          </div>
        </>
      )}
    </>
  )
}
