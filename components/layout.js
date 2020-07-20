import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Container from '../components/container'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-black text-white py-28 font-mono">
        <Container>
          <div className="md:grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <Header />
            </div>
            <div className="col-span-7 col-start-6">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
