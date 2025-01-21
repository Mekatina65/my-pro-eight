import Link from "next/link"

const page = () => {
  return (
    <div className='flex text-3xl text-center text-teal-800 justify-center items-center m-40 p-40'>
        
        <ul>
        <li>
        <Link href='/NorthAmerica/Canada/Ontario/Algoma/SaultSteMarie' className="hover:text-lime-300">Sault ste Marie</Link><br />
        <Link href='' className="hover:text-lime-300">Algoma</Link><br />
        </li><br />
        <li>
        <Link href='#' className="text-red-600">Sudbury</Link><br />
        </li><br />
        <li>
        <Link href='#' className="text-red-600">Thunder bay</Link><br />
        </li><br />
      </ul>
      </div>

  )
}

export default page
