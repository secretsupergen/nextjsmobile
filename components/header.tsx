'use client'

import { usePathname } from 'next/navigation'
import MobileMenu from './mobile-menu'

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={`sticky top-0 z-[11] flex h-max justify-between bg-transparent px-6 pb-3 pt-9 sm:ml-16 sm:pl-14 sm:pr-0 sm:pt-10 lg:pt-14 sm:mr-0 ${pathname != '/' && ' border-b-2 border-camo-500 backdrop-blur-md opacity-90'}`}>
      <div className="flex flex-1 items-center justify-between gap-5 overflow-x-hidden">
        <div className="flex flex-1 items-center justify-between sm:justify-start">
          <a className="flex items-center sm:hidden" href="/" style={{height: "32px", width: "136px"}}>
            <img alt="Blast Logo"
              loading="lazy" width="136" height="32"
              src="/images/logo-glow.webp"
              style={{color: "transparent"}} 
            />
          </a>
          <a className="hidden sm:flex items-center lg:hidden" href="/" style={{height: "40px", width: "170px"}}>
            <img alt="Blast Logo"
              loading="lazy" width="170" height="40"
              src="/images/logo-glow.webp"
              style={{color: "transparent"}} 
            />
          </a>
          <a className="hidden items-center lg:flex" href="/" style={{height: "54px", width: "256px"}}>
            <img alt="Blast Logo"
              loading="lazy" width="256" height="54"
              src="/images/logo-glow.webp"
              style={{color: "transparent"}} 
            />
          </a>

          <div className='ml-6 hidden items-center gap-2 md:flex'>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-gray-300" href="/airdrop">Airdrop</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-gray-300" href="/leaderboard">Leaderboard</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-gray-300" href="/devs">Devs</a>
            </div>
            <div className='typography-brand-body-l-caps px-2 py-2 sm:px-4'>
              <a className="interactive-text text-gray-300" href="/about">About</a>
            </div>
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
