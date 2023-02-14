import AddClientModal from '@/components/AddClientModal'
import Clients from '@/components/Clients'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="container">
        <AddClientModal />
        <Projects />
        <Clients />
      </main>
    </>
  )
}
