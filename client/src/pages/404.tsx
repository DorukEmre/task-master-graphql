import Head from 'next/head'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="d-flex flex-column gap-3 align-items-center mt-5 ">
        <h1>404 - Page Not Found</h1>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </>
  )
}
