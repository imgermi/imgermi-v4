import Link from 'next/link'

export default function Header() {
  return (
    <div className="mb-20">
      <h2>Hey, I'm Germi</h2>
      <span>But people call me Juan</span>
      <ul>
        <li>
          <Link href="/"><a>Start</a></Link>
        </li>
        <li>
          <Link href="/blog"><a>Blog</a></Link>
        </li>
        <li>
          <Link href="/work"><a>Work</a></Link>
        </li>
        <li>
          <Link href="/now"><a>Now</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </div>
  )
}
