
export default function Hero() {
  return (
    <section className="relative flex h-full flex-1 px-6 pt-6 sm:ml-16 sm:pl-14 lg:pt-14 overflow-hidden sm:pr-0">

      <div className="flex flex-1 flex-col mt-8 lg:mt-0 gap-12">

        <div>
          <h1 className="text-5xl leading-tight font-bold max-w-[600px] text-yellow-100">The L2 that helps you earn more ETH</h1>
          <p className="text-2xl font-semibold text-secondary mt-8 max-w-[500px]">The only Ethereum L2 with native yield for ETH and stablecoins. Airdrop now live.</p>
          <div className="pt-8">
            <a className="transition-[filter] drop-shadow-glow-sm-yellow-300 hover:drop-shadow-glow-sm-white-300" href="/airdrop">
              <button className="disabled:cursor-not-allowed disabled:bg-camo-300 max-w-[300px] disabled:text-gray-800 typography-brand-body-l-caps min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-yellow-300 group-focus-visible:bg-white hover:bg-white text-black">Join Early Access</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}