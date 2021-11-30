import Image from './Image'
import Link from './Link'

// .hover14 figure {
// 	position: relative;
// }
// .hover14 figure::before {
// 	position: absolute;
// 	top: 0;
// 	left: -75%;
// 	z-index: 2;
// 	display: block;
// 	content: '';
// 	width: 50%;
// 	height: 100%;
// 	background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
// 	background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
// 	-webkit-transform: skewX(-25deg);
// 	transform: skewX(-25deg);
// }
// .hover14 figure:hover::before {
// 	-webkit-animation: shine .75s;
// 	animation: shine .75s;
// }
// @-webkit-keyframes shine {
// 	100% {
// 		left: 125%;
// 	}
// }
// @keyframes shine {
// 	100% {
// 		left: 125%;
// 	}
// }

const Card = ({ title, description, imgSrc, href }) => (
  <div
    className="p-4 md:w-1/2 md hover:b"
    // hover:-translate-y-1.5 transform ease-in-out duration-300
    style={{ maxWidth: '544px' }}
  >
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36 "
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400 cursor-default">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Read more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
