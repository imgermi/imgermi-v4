import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer class="pt-20">
      <div className="py-8 border-t border-gray flex flex-col lg:flex-row items-start justify-between">
        <div>
          <strong className="block text-sm font-bold mb-1">Footer thing - Year thing (it's 2020)</strong>
          <span className="block text-sm">Site built <a href="" className="underline">like this</a></span>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-2 transition ease-in duration-200 font-bold hover:text-gray text-sm"
          >
            TW
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-2 transition ease-in duration-200 font-bold hover:text-gray text-sm"
          >
            DR
          </a>
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-2 transition ease-in duration-200 font-bold hover:text-gray text-sm"
          >
            IN
          </a>          
        </div>
      </div>
    </footer>
  )
}
