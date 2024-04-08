import Image from "next/image"
import ImageScrunglyFox from '../../public/scrungly.gif'
import imageRack from '../../public/card-rack.png'
import imageModding from '../../public/card-modding.png'
import ImageTravel from '../../public/card-travel.png'
import ImagePhotography from '../../public/card-photography.png'
import ImageCoffee from '../../public/card-coffee.png'
import ImageMusic from '../../public/card-music.png'
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Header from "@/components/nav/header"
import Hero from "@/components/hero"
import Footer from "@/components/nav/footer"
import Card from "@/components/card"
import SocialCard from "@/components/social-card"
import ArtistCard from "@/components/artist-card"
export default function Home() {

  return (
    <main className="bg-foxOrange h-full w-full flex flex-col">
      <Header/>
      <Hero/>
      
      <section>
        <div className="xl:grid xl:grid-cols-5">
          <h1 className="section-header xl:col-start-2 xl:col-span-2">About Me &mdash; <span>A fox of many trades</span></h1>

          <div className="xl:col-start-2 xl:col-span-3">
            <Image
              src={ImageScrunglyFox}
              alt="A crudely drawn MochaFox sits, looking head empty. A flashing arrow points at him, calling him scrungly."
              className="float-right rounded mt-1 mr-2 w-3/5 sm:w-3/5 md:w-2/4 lg:w-1/4 max-w-60 xl:min-w-60"
            />
            <p className="leading-relaxed">
              I&apos;m a Software Engineer by day and a geeky, coffee-loving fox by night. I&apos;m always looking for new things to learn and explore.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not working I enjoy making espresso at home, listening to music &amp; collecting vinyls, working on hobby projects, playing video games &amp; moding consoles, building keyboards, practicing photography, watching hockey, and traveling!
            </p> 
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-header">Hobbies &mdash; <span>What them pawbs do</span></h1>
        <div className="flex flex-wrap justify-center">
          <Card
            image={imageRack}
            imgAlt="A picture of a black server rack"
            title="Programming & System Administration" 
            text="At home I have a small rack of servers that I use for various projects. This website being one of them! The rack has a custom 24 core ThreadRipper server with 256GB of RAM, two Dell R330 servers, 10Gb fiber networking, and 144TB of storage."
          />
          <Card
            image={imageModding}
            imgAlt="A picture of a modded Nintendo Switch"
            title="Console Modding" 
            text="Regular consoles are boring! I&apos;ve soldered modchips into Nintendo Switches, installed a GCLoader in my GameCube, softmodded my Wii U and vWii. I&apos;m planning on installing an RGH chip in my Xbox 360 and modding a PS3."
          />
          <Card
            image={ImageTravel}
            imgAlt="A night shot of the Las Vegas strip from the top of a hotel"
            title="Travel" 
            text="I work remote and travel often. I&apos;ve been to Las Vegas around 8 times in the last two years and traveled to other states around 20 times within that same timespan. I&apos;m hoping to attend more cons in the next year!"
          />
          <Card
            image={ImagePhotography}
            imgAlt="An arial photograph of a firework taken by drone"
            title="Photography" 
            text="I&apos;ve been getting into photography more lately. I enjoy taking pictures of cool landmarks, food, and the outdoors while traveling. I also occasionally take arial pictures with my DJI drone."
          />
          <Card
            image={ImageCoffee}
            imgAlt="A picture of a coffee cup from top down"
            title="Coffee" 
            text="Coffee is a quick way to my heart. The smell and taste of a good cup of coffee or espresso shot is something I can&apos;t resist. I find making espresso at home to be a relaxing and rewarding experience, and a nice excuse to take a break from work."
          />
          <Card
            image={ImageMusic}
            imgAlt="A picture from the Porter Robinson Red Rocks Nurture concert"
            title="Music" 
            text="I listen to a wide variety of music, and have a decent collection of vinyls. My daily listening ranges from Rock, Jazz, Classical Piano, and Midwest Emo to various sub-genres of Electronic music. I go to a decent amount of concerts and music festivals."
          />
        </div>
      </section>

      <section>
        <h1 className="section-header">Socials &mdash; <span>Talk to the fox</span></h1>
        <div className="flex flex-wrap justify-center">
          <SocialCard
            service="Discord"
            handle="gotkrypto"
            icon={faDiscord}
          />
          <SocialCard
            service="Twitter"
            handle="@RealMochaFox"
            icon={faTwitter}
            link="https://twitter.com/RealMochaFox"
          />
          <SocialCard
            service="E-Mail"
            handle="fox (at) mochafox.com"
            icon={faEnvelope}
          />
        </div>
      </section>

      <section>
        <h1 className="section-header mb-0">Artists &mdash; <span>Credits for art used on site</span></h1>
        <p>Commissions from these artists were used on the website. Check them out!</p>
        <div className="flex flex-wrap justify-center items-center">
          <ArtistCard
            artist="Fleur"
            icon={faTwitter}
            service="Twitter"
            description="The favicon, navbar icon, and hero image were commissions to Fleur"
            link="https://twitter.com/Fleurfurr"
          />
          <ArtistCard
            artist="DivineFennec"
            icon={faTwitter}
            service="Twitter"
            description="The scrungly Mocha image was a commission to DivineFennec"
            link="https://twitter.com/DivineFennec"
          />
        </div>
      </section>

      <Footer/>
    </main>
  );
}
