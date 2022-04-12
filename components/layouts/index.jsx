import MetaTags from "../utils/MetaTags"

export default function Layout({ children, metaContent }) {
  return (
    <>
      {/* Meta tag generator
        * props:
        * - url
        * - title
        * - description
        * - img
        */}
      <MetaTags {...metaContent} />
      <main>
        {children}
      </main>
    </>
  )
}
