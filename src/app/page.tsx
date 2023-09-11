'use client'
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const jetBrainsMono = JetBrains_Mono({ weight: "600", style: "normal", subsets: ["greek"] });

function NavigationText(props: { text: string }) {
  return (
    <div className={`text-white text-2xl ${jetBrainsMono.className}`}>
      {props.text}
    </div>
  )
}

export default function Home() {
  return (
    <main className={`min-h-screen max-h-screen h-screen ${jetBrainsMono.className}`} >
      <div className='mx-auto min-w-full ' style={{ minHeight: "90%", maxHeight: "90%", display: "flex", alignItems: "center"}}>
        <div className='text-center mx-auto h-full' style={{ minHeight: "100%", maxHeight: "100%" }}>
          <text className='text-center font-mono text-6xl text-white'>
            I AM
          </text>
          <div className='min-w-full text-6xl text-green-600' style={{ marginTop: "15px" }}>
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
        <Link href="/blog">
          <NavigationText text='Blog' />
        </Link>
        <Link href="/work">
          <NavigationText text='Work' />
        </Link>
        <Link href="/contact">
          <NavigationText text='Contact' />
        </Link>
      </div>
    </main>
  )
}
