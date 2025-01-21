import Link from "next/link"

const page = () => {
  return (
    <div className='text-3xl text-center text-teal-800 mt-40 p-40 flex justify-center items-center'>
    <ul>
      <li>
        <Link href='/NorthAmerica'>Create Website</Link>
      </li>
    </ul>
  </div>

  )
}

export default page
