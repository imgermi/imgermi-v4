import Container from '../components/container'
import Layout from '../components/layout'

export default function Index() {
  return (
    <>
      <Layout>
        <h1 className="font-bold text-3xl mb-16">I'm a designer focused on helping entrepreneurial-minded people create digital products.</h1>
        <article className="mb-12">
          <h5 className="uppercase text-gray text-base font-bold mb-2 tracking-widest">The founder thing</h5>
          <h3 className="text-xl leading-relaxed">I run a tiny design & marketing agency with my best friend. You can <a href="https://thewhoknows.com" target="_blank" className="underline">take a look</a>, but it's all in español.</h3>
        </article>
        <article className="mb-12">
          <h5 className="uppercase text-gray text-base font-bold mb-2 tracking-widest">The writing thing</h5>
          <h3 className="text-xl leading-relaxed">I write a weekly blog where I share stuff about entrepreneurship, creating products and making a living remotely.</h3>
        </article>
        <article className="mb-12">
          <h5 className="uppercase text-gray text-base font-bold mb-2 tracking-widest">The design thing</h5>
          <h3 className="text-xl leading-relaxed">To have fun and get out of the day to day, I share my work constantly to get some likes and pretend I'm Design God.</h3>
        </article>
        <article className="mb-12">
          <h5 className="uppercase text-gray text-base font-bold mb-2 tracking-widest">The present thing</h5>
          <h3 className="text-xl leading-relaxed">As a compromise with myself, I document what I'm working on right now. On the front, and on the side.</h3>
        </article>     
      </Layout>
    </>
  )
}