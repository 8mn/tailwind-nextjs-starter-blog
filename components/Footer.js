import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-4 border-t-2">
      <div className="flex flex-col items-center mt-9">
        <div className="flex mb-3 space-x-3">
          <div className="rounded-full border-2 border-primary-400 p-2 hover:bg-primary-500">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          </div>
          <div className="rounded-full border-2 border-primary-400 p-2 hover:bg-primary-500">
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          </div>
          <div className="rounded-full border-2 border-primary-400 p-2 hover:bg-primary-500">
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          </div>
        </div>
      </div>
    </footer>
  )
}
