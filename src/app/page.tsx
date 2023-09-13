'use client'
import { JetBrains_Mono, Rubik_Mono_One } from 'next/font/google';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import ParentContainer from './components/parent-container';

const jetBrainsMono = JetBrains_Mono({ weight: "600", style: "normal", subsets: ["vietnamese"] });
const rubikMonoOne = Rubik_Mono_One({weight: "400", style: "normal", display: "swap", subsets: ["cyrillic"]});

function NavigationText(props: { text: string }) {
  return (
    <div className={`text-white text-2xl ${jetBrainsMono.className}`}>
      {props.text}
    </div>
  )
}

export default function Home() {
  return (
    <ParentContainer show={false} path={"/"}>
        <div className={`mx-auto min-w-full`} style={{ minHeight: "90%", maxHeight: "90%", display: "flex", alignItems: "center" }}>
          <div className='text-center mx-auto h-full' style={{ minHeight: "100%", maxHeight: "100%" }}>
            <text className='text-center font-mono text-6xl text-white'>
              I AM
            </text>
            <div className={`min-w-full text-6xl text-green-600 ${rubikMonoOne.className}`} style={{ marginTop: "15px" }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("A FULL STACK DEVELOPER")
                    .start()
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("A MOBILE DEVELOPER")
                    .start()
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("ATHARVA SUNE.")
                    .stop()
                }}
              />
            </div>
          </div>
        </div>

        <div className='w-5/12 mx-auto' style={{ minHeight: "10%", maxHeight: "10%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/about">
            <NavigationText text={"About"} />
          </Link>
          <Link href="/projects">
            <NavigationText text='Projects' />
          </Link>
          <Link href="/blogs">
            <NavigationText text='Blog' />
          </Link>
          <Link href="/work">
            <NavigationText text='Work' />
          </Link>
          <Link href="/contact">
            <NavigationText text='Contact' />
          </Link>
        </div>
    </ParentContainer>
  )
}
