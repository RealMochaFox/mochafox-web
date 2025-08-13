import Image from 'next/image'
import Link from 'next/link'
import foxIcon from '../../../../public/icon.png'

export default function Header(){
    return (
        <nav className="bg-foamWhite 2xl:w-2/3 2xl:mx-auto">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://mochafox.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={foxIcon} alt="MochaFox" quality={95} className="rounded-2xl" width={40} height={40} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-darkRoast">MochaFox</span>
                </a>
                <div className="flex items-center space-x-6">
                    <Link 
                        href="/" 
                        className="text-darkRoast hover:text-foxOrange transition-colors font-medium"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/projects" 
                        className="text-darkRoast hover:text-foxOrange transition-colors font-medium"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}