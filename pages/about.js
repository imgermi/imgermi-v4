import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Index({ allPosts }) {
  return (
    <Layout>
      <Container>
        <Header />
        <section>
          <p>hello, this is about</p>
        </section>
      </Container>
    </Layout>
  )
}