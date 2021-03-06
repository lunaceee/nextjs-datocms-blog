import PostPreview from '../components/post-preview'
import { useRouter } from 'next/router'
import localize from "../lib/localize"

export default function MoreStories({ posts }) {
   const router = useRouter()
  const { locale } = router
  
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={localize(post.title, locale, post._allTitleLocales)}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
