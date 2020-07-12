import Link from 'next/link'

export default function Header() {
  return (
    <div className="mb-20">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 mt-8">
        <Link href="/">
          <a className="hover:underline">Germi</a>
        </Link>
      </h2>
      <ul>
        <Link href="/about">
          <a>About</a>
          </Link>
      </ul>
    </div>
  )
}
