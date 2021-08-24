import Link from 'next/link'
import Image from 'next/image'

const ArticleCard = ({title, summary, slug, imageLink, newsType, styleArray, index}) => {
  let gridStyle = true
  var gridSet = true;
  let style = 'max-w-screen md:w-full   md:mx-4 border rounded shadow-sm p-4 hover:bg-gray-100 shadow'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  if(styleArray) {
    gridStyle = styleArray[index][0]
    gridSet = styleArray[index][1] //this yields the true/false on setting
    if(gridStyle) {
      if(gridSet) { //if true = larger
        style = classNames('md:col-span-3 ', style) //true:true
      } else {
        style = classNames('md:col-span-2 ', style) //true:false
      }
    } else {
      if(gridSet) { //if true = true = smaller for second
        style = classNames('md:col-span-3 ', style) //false:true
      } else {
        style = classNames('md:col-span-2 ', style) //false:false
      }
    }
  }
  // className={classNames(
  //   gridStyle ? 'text-gray-900' : 'text-gray-500',
  //   'max-w-screen md:w-full mb-2  md:mx-4 border rounded shadow-sm p-4 hover:bg-gray-100'
  // )}
  return (
    <>
      <div className={style}>
        <Link href={`newsLetter/${slug}?newsType=${newsType}`} passHref>
          <div>
          <div className="mb-4">
            <Image
                alt={title}
                src={imageLink}
                className="h-8 w-auto sm:h-10"
                width={180}
                height={180}
            ></Image>
          </div>
          <div className="font-semibold leading-tight text-2xl text-gray-800 hover:text-gray-800">
            {title}
          </div>
          <hr className="border-gray-200 my-1 border-bottom-none"/>
            <p className="text-gray-900">
                {summary}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ArticleCard
{/*
        <a href="#" class="mb-4">
            <img class="rounded" src="/assets/docs/master/image-01.jpg">
        </a>

                Bootstrap Card's Title


    </div> */}
