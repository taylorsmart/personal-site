import content from '../content/meta/about-me/about-me-content'
import Image from 'next/image'
import Link from 'next/link'
import ShortBio from '../content/meta/about-me/shortBio.md'
import { Transition } from '@headlessui/react'

export default function AboutMe () {
  let name = content.name;
  let longBio = content.longBio;
  let avatar = content.avatar;
  let calendly = content.links;

  return (
    <>
      <div  className="flex-grow md:grid  md:grid-cols-2 w-screen justify-between">
        <div className="flex items-center text-left align-middle border-r-2 border-gray-200 p-4">
          <div>
            <article className="prose prose-sm">
              <ShortBio/>
            </article>
            <Link
              href="test"
              >
              <button className="prose bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Book a Meeting
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex align-middle justify-center p-4">
          <Image 
            alt='Photo of Taylor'
            src={avatar}
            className="h-8 w-auto sm:h-10"
            width={180}
            height={180}
          ></Image>
        </div>
      </div>
    </>
  )
}