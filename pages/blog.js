import Layout from '../components/layout'
import AllStories from '../components/all-stories'
import { getAllPosts } from '../lib/api'

export default function Blog({ allPosts }) {
  const morePosts = allPosts
  return (
    <Layout>
      <section>
        <p>hello, this is blog</p>
        {morePosts.length > 0 && <AllStories posts={morePosts} />}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}