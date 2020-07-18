import DateFormater from '../components/date-formater'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <div>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>      
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`${slug}`} href="[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <button>
        <Link as={`${slug}`} href="[slug]">
          <a>Read ></a>
        </Link>
      </button>
    </div>
  )
}
