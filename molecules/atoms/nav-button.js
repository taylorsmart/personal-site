/**
 *
 * @param {*} param0
 * @returns
 *
 * There are two key types of nav buttons - this organizes each appropriately
 *  Option 1: single link
 *  Option 2: drop down link
 */
 import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'


function NavButton ({page, primaryLink, subLinks, keyArticles}) {
  let dropdownFlag = subLinks.length > 0 ? true : false;
  let articlesFlag = keyArticles.length > 0 ? true : false;
  const router = useRouter()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  // const handleRouter = (e) => {
  //   // e.preventDefault()
  //   console.log(e)
  //   // router.push(e)
  // }

  return (
    <>
      {!dropdownFlag ?
          (
            <a href={primaryLink} className="text-base font-medium text-gray-500 hover:text-gray-900">
              {page}
            </a>
          )
          :
          (
            <Popover className="relative bg-white">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>{page}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'bg-white ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition-opacity transition-colors ease-in duration-200"
                    enterFrom="opacity-0 translate-y-1  bg-gray-50"
                    enterTo="opacity-100 translate-y-0 bg-gray-50"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      static
                      className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-gray-50">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {subLinks.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                              >
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200">
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                          {articlesFlag ?
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                Recent Posts
                              </h3>
                              <ul className="mt-4 space-y-4">
                                {keyArticles.map((post) => (
                                  <li key={post.id} className="text-base truncate">
                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a href={primaryLink} className="font-medium text-indigo-600 hover:text-indigo-500">
                                {' '}
                                View all posts <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                          : null }
                        </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          )

      }
    </>
  )
}

export default NavButton;
