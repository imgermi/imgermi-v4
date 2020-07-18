import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="py-28 flex flex-col lg:flex-row items-start justify-between">
        <div>
          <strong className="block">Footer thing - Year thing (it's 2020)</strong>
          <span className="block">Site built like this</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >
            TW
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >
            DR
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >
            IN
          </a>          
        </div>
      </div>
    </footer>
  )
}
