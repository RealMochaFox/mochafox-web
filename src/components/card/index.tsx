import Image, { StaticImageData } from 'next/image'

export default function Card(props: {title: string, text: string, image: StaticImageData, imgAlt: string}){
    return (
        <div className="p-4 max-w-sm">
            <div className="card rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out">
                <Image className="w-full" src={props.image} alt={props.imgAlt} />
                <div className="border-t-2 border-foxOrange px-6 py-4">
                    <div className="font-bold text-xl text-foxOrange mb-2">{props.title}</div>
                    <p className="text-foamWhite text-base">{props.text}</p>
                </div>
            </div>
        </div>
    )
}