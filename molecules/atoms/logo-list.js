import Image from 'next/image'
import Link from 'next/link'
import content from '../../content/meta/about-me/about-me-content'

export default function LogoList () {
  return(
    <>
      <div className="p-1 md:p-0 h-29 w-29">
      <Link
        key="twitterLink"
        href={content.links.twitter}
        >
        <Image
          className=""
          alt="Twitter Link"
          src={content.links.twitterIcon}
          height={29}
          width={29}
          ></Image>
      </Link>
    </div>
    <div className="p-1 md:p-0 h-29 w-29">
      <Link
        key="linkedinLink"
        href={content.links.linkedin}
        >
        <Image
          className=""
          alt="linkedin Link"
          src={content.links.linkedinIcon}
          height={29}
          width={29}
          ></Image>
      </Link>
    </div>
    <div className="p-1 md:p-0 h-29 w-29">
      <Link
        key="githubLink"
        href={content.links.github}
        >
        <Image
          className=""
          alt="Github Link"
          src={content.links.githubIcon}
          height={29}
          width={29}
          ></Image>
      </Link>
    </div>
    <div className="p-1 md:p-0 h-29 w-29">
      <Link
        key="calendlyLink"
        href={content.links.calendly}
        >
        <Image
          className=""
          alt="calendly Link"
          src={content.links.calendlyIcon}
          height={29}
          width={29}
          ></Image>
      </Link>
    </div>
  </>
  )
}