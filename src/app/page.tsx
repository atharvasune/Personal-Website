"use client"
import { JetBrains_Mono, Rubik_Mono_One } from 'next/font/google';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import ParentContainer from '@/components/parent-container';
import Navbar from '@/components/nav-bar';

const jetBrainsMono = JetBrains_Mono({ weight: "600", style: "normal", subsets: ["vietnamese"] });
const rubikMonoOne = Rubik_Mono_One({ weight: "400", style: "normal", display: "swap", subsets: ["cyrillic"] });

function NavigationText(props: { text: string }) {
  return (
    <div className={`text-white text-base md:text-2xl ${jetBrainsMono.className} hover:text-green-500`}>
      {props.text}
    </div>
  )
}

export default function Home() {
  return (
    <ParentContainer show={false} path={"/"} showBorder={false}>
      <nav className='md:hidden'>
        <Navbar path="/" show={true} />
      </nav>
      <div className={`mx-auto min-w-full h-full md:h-[90%] xl:h-[90%] flex items-center justify-center`} >
        <div className='text-center mx-auto p-2' >
          <text className='text-center font-mono text-4xl md:text-6xl text-white'>
            I AM
          </text>
          <div className={`min-w-full max-w-full break-normal text-4xl md:text-6xl text-green-600 ${rubikMonoOne.className} mt-[15px]`}>
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

      <div className='hidden px-3 pb-3 md:pb-0 w-full md:w-[75%] lg:1/2 xl:w-5/12 mx-auto md:flex items-end md:items-center justify-between'>
        <Link href="/about">
          <NavigationText text={"About"} />
        </Link>
        <Link href="/blogs">
          <NavigationText text='Blogs' />
        </Link>
        <Link href="/projects">
          <NavigationText text='Projects' />
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
