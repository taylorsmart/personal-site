/**
 *
 * @returns
 * Overview:
 *   Main NavBar for non-home pages
 *
 *
 * Goals:
 *   Contains Page Structure
 *     - Home
 *     - About me
 *     - Product
 *       - Blog
 *       - Projects
 *     - Engineering
 *       - Blog
 *       - Projects
 *     - Contact
 *       - Email
 *       - Book a meeting
 *
 *   Renders dynamically for mobile
 *
 */

 import loadable from '@loadable/component'
 const NavButton = loadable(() => import('../molecules/atoms/nav-button'))

import sitemap from '../content/meta/sitemap'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { useState } from 'react';

function NavBar () {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Popover className="flex justify-between items-center border-b-2 border-gray-100 py-6 px-6 md:justify-start md:space-x-10 bg-white">
          <a href="/">
            <Image
              className="h-8 w-auto sm:h-10"
              src="/assets/images/TS.svg"
              alt="TS Logo"
              width={32}
              height={32}
            ></Image>
          </a>
        <div className="flex">
          <span className='text-xl font-bold uppercase tracking-wide px-2'>
              Taylor Smart
          </span>
        </div>


{/* Mobile View Icon*/}
        <button
          className='inline-flex  rounded md:hidden lg:hidden text-white hover:text-white outline-none'
          onClick={handleClick}
          aria-label="Menu Items"
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>



{/* Web View */}
      <div className="grid grid-cols-2">
        <div className="flex w-full justify-end col-start-2">
          <Popover.Group  as="nav" className="hidden md:flex space-x-10 col-span-2">
              {sitemap.map((linkObj) => (<NavButton page={linkObj.page} primaryLink={linkObj.primaryLink} subLinks={linkObj.subLinks} keyArticles={linkObj.keyArticles} key={linkObj.key} />))}
          </Popover.Group>
        </div>
      </div>
      </Popover>

{/* Mobile View Menu*/}
      <Popover className="relative bg-gray-100 flex-col justify-between items-center border-b-2 border-gray-50 w-full">
          <div
            className={`${
              active ? '' : 'hidden'
            }   md:hidden`}
          >
            <div className="flex flex-col justify-center items-center border-b-2 border-gray-200  underline uppercase">
              {sitemap.map((linkObj) => (<NavButton page={linkObj.page} primaryLink={linkObj.primaryLink} subLinks={[]} keyArticles={[]} key={linkObj.key} />))}
            </div>
          </div>
        </Popover>
    </>
  )
}

export default NavBar
