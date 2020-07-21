import Link from 'next/link'

export default function Header() {
  return (
    <div className="mb-20">
      <h2 className="font-bold text-2xl md:text-xl mb-1">Hey, I'm Germi</h2>
      <span className="block text-base md:text-sm">But people call me Juan</span>
      <ul className="pt-8 -mx-3 md:mx-0 header-nav flex md:block overflow-scroll">
        <li>
          <Link href="/"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">Start</a></Link>
        </li>
        <li>
          <Link href="/blog"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">Blog</a></Link>
        </li>
        <li>
          <Link href="/work"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">Work</a></Link>
        </li>
        <li>
          <Link href="/now"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">Now</a></Link>
        </li>
        <li>
          <Link href="/about"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">About</a></Link>
        </li>
        <li>
          <Link href="/contact"><a className="inline-block px-3 md:px-0 py-2 uppercase font-bold text-gray hover:text-white text-base">Contact</a></Link>
        </li>
      </ul>
    </div>
  )
}
