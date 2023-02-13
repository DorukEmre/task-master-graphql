import Clients from '@/components/Clients'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="container">
        <Clients />
      </main>
    </>
  )
}
