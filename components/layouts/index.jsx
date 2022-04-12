import MetaTags from "../utils/MetaTags"

export default function Layout({ children, metaContent }) {
  return (
    <>
      {/* This is head for meta tags */}
      <MetaTags {...metaContent} />
      <main>
        {children}
      </main>
    </>
  )
}
