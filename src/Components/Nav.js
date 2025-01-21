import Link from "next/link"

const Nav = () => {
  return (
    <header className='bg-slate-400 text-amber-600 w-full ease-in duration-300 fixed top-0 left-0 z-10'>
    <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
        <div>
            <Link href='/address'><span className='font-extrabold text-[20px] md:text-2xl lg:text-3xl uppercase'>digital mailbox</span></Link>
        </div>

        <ul className="md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
            <li className="mr-4 lg:mr-8 hover:text-green-500">
                <Link href='/'>home</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-green-500">
                <Link href='/about'>about</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-green-500">
                <Link href='/make'>make mailbox</Link>
            </li>
        </ul>

        <ul className="md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800 px-4 ">
            <li className="mr-4 md:mr-6 lg:mr-8">
                <Link href='#'>login</Link>
            </li>
            <li className="mr-4 md:mr-6 lg:mr-8">
                <Link href='#'>sign up</Link>
            </li>
            
           
        </ul>
       
    </nav>
</header>

  )
}

export default Nav
