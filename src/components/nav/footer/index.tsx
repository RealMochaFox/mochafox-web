
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faDrumstickBite, faHandsPraying } from "@fortawesome/free-solid-svg-icons"

export default function Footer(){
    return (
        <footer className="bg-foamWhite 2xl:w-2/3 2xl:mx-auto">
            <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-darkRoast sm:text-center">© {new Date().getFullYear()} MochaFox. All Rights Reserved.</span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a target="_blank" href="https://twitter.com/realmochafox" className="text-darkRoast">
                        <FontAwesomeIcon icon={faTwitter} />
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a target="_blank" href="https://mcchickers.com" className="text-darkRoast">
                        <FontAwesomeIcon icon={faDrumstickBite} />
                        <span className="sr-only">McChickers</span>
                    </a>
                    <a target="_blank" href="https://chrisitian.com" className="text-darkRoast">
                        <FontAwesomeIcon icon={faHandsPraying} />
                        <span className="sr-only">Chrisitian</span>
                    </a>
                    <span className="text-darkRoast">OwO</span>
                </div>
            </div>
        </footer>
    )
}