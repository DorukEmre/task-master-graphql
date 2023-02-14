import AddClientModal from '@/components/AddClientModal'
import Clients from '@/components/Clients'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="d-flex gap-3 mb-4">
          <AddClientModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </main>
    </>
  )
}
