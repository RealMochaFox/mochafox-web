import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function SocialCard(props: {service: string, handle: string, icon: IconDefinition, link?: string}){
    const card = (
        <div className={`${props.link ? 'cursor-pointer' : ''} card rounded flex justify-center items-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out`}>
            <FontAwesomeIcon icon={props.icon} className="w-24 min-w-24 max-w-24 fa-2x text-foamWhite" />
            <div className="grow border-l-2 border-foxOrange px-2 py-4 relative">
                {props.link ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-indicator absolute top-2 right-2"/> : null } 
                <div className="font-bold text-lg text-foxOrange mb-2">{props.service}</div>
                <p className="text-foamWhite text-base">{props.handle}</p>
            </div>
        </div>
    )

    return (
        <div className="p-4 w-full max-w-sm">
            {props.link ? <a target="_blank" href={props.link}>{card}</a> : card}
        </div>
    )
}