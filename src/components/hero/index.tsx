import Image from 'next/image'
import warmFox from '../../../public/warm.jpg'

export default function Hero(){
    return (
        <section id="hero" className="sm:flex-row items-center justify-center sm:p-20 md:h-full space-x-4 bg-foamWhite">
            <Image
                src={warmFox}
                alt="MochaFox drinking a cup of coffee and wearing a scarf"
                className="w-full sm:w-1/2 lg:w-1/3 block max-w-96"
            />

            <div className="flex flex-col">
                <h1 className="text-center sm:text-left text-3xl sm:text-4xl text-darkRoast">Hi, I&apos;m MochaFox!</h1>
                <p className="sm:text-xl md:text-2xl text-foxOrange">Welcome to my little corner of the internet</p>
            </div>
      </section>
    )
}