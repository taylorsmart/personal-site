import Image from 'next/image'

export default function Spinner () {
  return (
    <div >
      <Image
        className="animate-spin-slow  mr-10"
        src="/assets/images/ProductLife4.png"
        alt="Development Lifecycle"
        width={300}
        height={300}
      ></Image>
    </div>
  )
}