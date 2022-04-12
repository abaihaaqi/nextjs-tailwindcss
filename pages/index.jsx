import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layouts'
import logo from '../public/favicon-32x32.png'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4 h-screen text-center">
        <Image src={logo} alt='Nizar Baihaqi Logo' />
        <h1>Nextjs + Tailwindcss</h1>
        <p>Also meta tags generator</p>
        <Link href='/another-page'>
          <a>Go to another page</a>
        </Link>
        <small>Created by <a href="http://nizarbaihaqi.com" target="_blank" rel="noopener noreferrer">Ijay Baihaqi</a></small>
      </div>
    </Layout>
  )
}
