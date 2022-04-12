import { useRouter } from "next/router";
import Layout from "../components/layouts";

export default function AnotherPage() {
  const router = useRouter()

  // * This object are for meta tags generator
  const metaContent = {
    url: 'another-page',
    title: 'Another page',
    description: 'What you would describe in another page is another page',
    img: '/another-page.png'
  }

  return (
    <Layout metaContent={metaContent}>
      <div className="flex flex-col justify-center items-center gap-4 h-screen text-center">
        <h1>Welcome to another page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae accusantium nesciunt aliquid.</p>
        <button onClick={() => router.back()}>
          &larr; Back
        </button>
      </div>
    </Layout>
  )
}