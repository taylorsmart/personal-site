/**
 * This banner contains my meta information:
 *   - image
 *   - name
 *   - (Date... maybe)
 *   - Subscribe to new posts button
 *   - Links:
 *     + Twitter
 *     + LinkedIn
 *     + Github
 */

import Link from 'next/link'
import Image from 'next/image'
import content from '../../content/meta/about-me/about-me-content'
import LogoList from './logo-list'
const ArticleSubHeading = ({timeToRead}) => {

  timeToRead = 3;
  return (
    <>
      <div className="flex-grow grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="sm:flex md:grid md:grid-cols-3 md:col-span-2 lg:col-span-1 justify-items-center items-center">
          <div className="sm:pr-6 md:pr-0 ">
            <Image
              className=""
              alt="Taylor Image"
              src={content.avatar}
              height={45}
              width={45}
              ></Image>
          </div>
          <div className="md:col-span-2 ">
            <div>
              <a>Taylor Smart</a>
              {/* <button className=" border border-gray-900 text-blue-600 hover:bg-gray-900 hover:text-blue-100  px-2 py-2 rounded-full mr-2">Subscribe</button> */}
            </div>
            <div>
              {`${timeToRead} min read`}
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-4 col-start-3 justify-items-center items-end">
          <LogoList/>
        </div>
      </div>
      <div className="flex pt-2 justify-center items-center md:hidden">
        <LogoList/>
      </div>
    </>
  )

}

export default ArticleSubHeading