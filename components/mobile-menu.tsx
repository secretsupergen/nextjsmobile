'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const pathname = usePathname();

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 right-0 w-full sm:w-[320px] overflow-scroll bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B] scrollbar-hide"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='pt-12 items-center gap-6 flex flex-col'>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-3xl text-gray-300" href="/airdrop">Airdrop</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-3xl text-gray-300" href="/leaderboard">Leaderboard</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-3xl text-gray-300" href="/devs">Devs</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-3xl text-gray-300" href="/about">About</a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}
