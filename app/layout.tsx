
import './css/style.css'

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { usePathname } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Blast',
  description: 'Blast website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased tracking-tight`}>
        <div className='relative flex min-h-screen w-screen px-[11px] py-[12px] sm:py-[11px] h-auto sm:h-screen overflow-hidden'>
          <div className="relative flex min-h-full w-full flex-1 flex-col rounded-md border-2 border-camo-500 bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B] transition-colors md:bg-[url('/images/border/hero-2x.jpg')] bg-cover bg-center bg-no-repeat">
            <div className='relative z-10 flex flex-1 flex-col pb-16 h-auto md:[background:linear-gradient(180deg,_rgba(17,_20,_12,_0.24)_27.54%,_rgba(17,_20,_12,_0.37)_58.11%,_rgba(17,_20,_12,_0.63)_100%)]'>
              <Header />
              {children}
            </div>
          </div>
          <div className="absolute left-0 right-0 top-0 z-20 h-[14px] border-b-2 border-camo-500 bg-black sm:h-[13px]"></div>
          <div className="absolute bottom-0 left-0 right-0 z-20 h-[14px] border-t-2 border-camo-500 bg-black sm:h-[13px]"></div>
          <div className="absolute bottom-0 top-0 left-0 z-20 w-[14px] border-r-2 border-camo-500 bg-black sm:w-[13px]"></div>
          <div className="absolute bottom-0 top-0 right-0 z-20 w-[14px] border-l-2 border-camo-500 bg-black sm:w-[13px]"></div>
          <img src="/images/border/frame-corner-sm-top-left.svg" width="597" className='pointer-events-none absolute left-0 top-0 z-20 hidden sm:block'/>
          <img src="/images/border/frame-corner-sm-top-right.svg" width="465" className='pointer-events-none absolute right-0 top-0 z-20 hidden sm:block'/>
          <img src="/images/border/frame-corner-sm-bottom-left.svg" width="597" className='pointer-events-none absolute left-0 bottom-0 z-20 hidden sm:block'/>
          <img src="/images/border/frame-corner-sm-bottom-right.svg" width="465" className='pointer-events-none absolute right-0 bottom-0 z-20 hidden sm:block'/>

          <img src="/images/border/frame-corner-top-left.svg" width="150" className='pointer-events-none absolute left-0 top-0 z-20 sm:hidden'/>
          <img src="/images/border/frame-corner-top-right.svg" width="211" className='pointer-events-none absolute right-0 top-0 z-20 sm:hidden'/>
          <img src="/images/border/frame-corner-bottom-left.svg" width="150" className='pointer-events-none absolute left-0 bottom-0 z-20 sm:hidden'/>
          <img src="/images/border/frame-corner-bottom-right.svg" width="211" className='pointer-events-none absolute right-0 bottom-0 z-20 sm:hidden'/>
        </div>
      </body>
    </html>
  )
}
