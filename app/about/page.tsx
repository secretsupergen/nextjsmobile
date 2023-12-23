import Link from "next/link";

export default function About() {
    return (
        <section className="w-full h-[90vh] scrollbar-hide overflow-auto">
            <div className="relative bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
                <div className="mx-auto px-6 sm:px-14 sm:mx-16">
                    <div className="flex flex-col justify-center items-center gap-x-16 sm:flex-row gap-y-16 pt-12">
                        <div className="flex flex-1 px-8">
                            <img src="/images/illustration-about.webp" className="w-full" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none pb-8 text-center md:text-start">Blast is the L2 that helps you earn</h2>
                            <p className="text-xl sm:text-3xl text-secondary font-semibold leading-tight pb-8">The only Ethereum L2 with native yield for ETH and stablecoins.</p>
                            <p className="text-xl sm:text-xl text-secondary font-semibold leading-tight pb-8 uppercase">Backed by</p>
                            <div className="flex flex-row gap-x-16 justify-center">
                                <img src="/images/letterhead/letterhead-paradigm-color.webp" className="h-16" />
                                <img src="/images/letterhead/letterhead-standard-crypto-color.webp" className="h-16" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-y-8 pt-20">
                        <h2 className="text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none text-center md:text-start">Other L2s don't have yield, so the value of your assets depreciate over time.</h2>
                        <h3 className="text-xl sm:text-3xl text-secondary font-semibold leading-tight">Blast is the first L2 that incorporates native yield. Your balance on Blast compounds automatically.</h3>
                        <div className="w-full flex flex-col items-center p-8">
                            <img src="/images/blast-rewards.webp" className="w-full" />
                        </div>
                        <div className="w-full flex flex-col sm:flex-row gap-20 items-start">
                            <div className="border-l-[1px] border-camo-300">
                                <p className="text-lg text-primary font-medium leading-tight pl-8">Blast yield comes from ETH staking and RWA protocols. The yield from these decentralized protocols is passed back to Blast users automatically. The default interest rate on other L2s is 0%. On Blast, it's 4% for ETH and 5% for stablecoins.</p>
                            </div>
                            <div className="border-l-[1px] border-camo-300">
                                <p className="text-lg text-primary font-medium leading-tight pl-8">Our goal as contributors is to grow the on-chain economy with the highest-yield L2 possible. Community members who join our mission will have the opportunity to earn the Blast Airdrop. The first stage of the airdrop is [now live].</p>
                            </div>
                        </div>
                    </div>

                    <svg className="w-full text-secondary my-20" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="flex flex-col items-start gap-y-16 pt-20">
                        <h2 className="w-full text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none text-center md:text-start">How Blast works</h2>
                        <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-auto-rebasing.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">AUTO REBASING</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight sm:pl-16">Users transact in ETH. Dapps are built around ETH. Blast was designed from the ground up so that ETH itself is natively rebasing on the L2.</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-l1-staking.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">Vite</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight  sm:pl-16">Blast only became possible this year following Ethereum's Shanghai upgrade. ETH yield from L1 staking, initially Lido, is automatically transferred to users via rebasing ETH on the L2.</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-t-bill-yield.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">T-BILL YIELD</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight sm:pl-16">Users who bridge stablecoins receive USDB, Blast's auto-rebasing stablecoin. The yield for USDB comes from MakerDAO's on-chain T-Bill protocol. USDB can be redeemed for USDC when bridging back to Ethereum.</p>
                            </div>
                        </div>
                        <p className="w-full text-center text-lg text-secondary font-medium leading-tight sm:mt-12">In the future, the Blast community will have the power to supplement, or even fully replace, Lido and MakerDAO with Blast-native solutions or other third party protocols.</p>
                    </div>

                    <svg className="w-full text-secondary mb-20 mt-4" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="flex flex-col items-start gap-y-8 pt-20">
                        <h2 className="w-full text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none text-center md:text-start">Why a new L2</h2>
                        <h3 className="text-xl sm:text-2xl text-secondary font-semibold leading-tight">The risk-free rate on existing L2s is 0%. It's time to change that.</h3>
                        <div className="w-full flex flex-col sm:flex-row gap-16 items-start">
                            <div className="border-l-[1px] border-camo-300">
                                <p className="text-xl text-primary font-medium leading-tight pl-8">After the merge, Ethereum provides 4% yield on ETH. On-chain T-Bill protocols provide 5% yield on stablecoins. If users do not match or beat these rates, they are losing money to a form of inflation.</p>
                            </div>
                            <div className="border-l-[1px] border-camo-300">
                                <p className="text-xl text-primary font-medium leading-tight pl-8">L2s today do not have this yield. Incorporating ETH and stablecoin yield natively requires a new L2 designed from the ground up. Blast is an EVM-compatible, optimistic rollup that raises the baseline yield for users and developers without changing the experience cryptonatives expect.</p>
                            </div>
                        </div>
                        <p className="w-full text-lg text-secondary font-medium leading-tight text-center sm:mt-12">The “risk-free” rate is the theoretical return on an investment with zero risk. In reality, there are no true risk-free rates, only low-risk rates. Even T-Bills carry risk.</p>
                    </div>


                    <svg className="w-full text-secondary mb-20 mt-4" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="flex flex-col items-start gap-y-16 pt-20">
                        <h2 className="w-full text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none text-center md:text-start">Who we are</h2>
                        <div className="w-full flex flex-col gap-16 items-start">
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col items-center gap-8 min-w-[400px]">
                                    <img src="/images/letterhead/letterhead-pacman.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-blur.webp" className="h-10 w-auto" />
                                </div>
                                <div className="self-stretch hidden sm:block sm:w-[2px] sm:h-auto bg-camo-300"></div>
                                <div>
                                    <p className="text-2xl text-secondary font-medium leading-tight pl-4">Pacman created Blur, the top NFT marketplace protocol on Ethereum with over 333,063 users and $7b worth of NFTs traded. Blur distributed the 5th largest airdrop in Ethereum history.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col flex-wrap justify-center items-center gap-8 min-w-[400px]">
                                    <img src="/images/letterhead/letterhead-mit.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-ntu.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-snu.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-yc.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-makerdao.webp" className="h-10 w-auto" />
                                </div>
                                <div className="self-stretch hidden sm:block sm:w-[2px] sm:h-auto bg-camo-300"></div>
                                <div className="border-primary">
                                    <p className="text-2xl text-secondary font-medium leading-tight pl-4">Our team members come from FAANG, Yale, MIT, Nanyang Technological University, Seoul National University and have worked on some of the largest protocols in Defi and Web3, primarily on Ethereum but also on other chains like Solana as well.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col items-center gap-8 min-w-[400px]">
                                    <img src="/images/letterhead/letterhead-paradigm.webp" className="h-10 w-auto" />
                                    <img src="/images/letterhead/letterhead-standard-crypto.webp" className="h-10 w-auto" />
                                </div>
                                <div className="self-stretch hidden sm:block sm:w-[2px] sm:h-auto bg-camo-300"></div>
                                <div className="border-primary">
                                    <p className="text-2xl text-secondary font-medium leading-tight pl-4">Blast contributors have raised $20m from Paradigm, Standard Crypto, eGirl Capital, Primitive Ventures, Andrew Kang, Hasu, Foobar, Blurr, Will Price, Hsaka, Santiago Santos, Larry Cermak, Manifold, Jeff Lo, and other cryptonatives.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <svg className="w-full text-secondary my-20" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="pt-20">
                        <h2 className="w-full text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none pb-8 text-center md:text-start">Airdrop timeline</h2>
                        <h3 className="text-2xl text-secondary font-semibold leading-tight pb-8">The Blast Community Airdrop is split between Early Access Members (50%) and Developers (50%).</h3>
                        <p className="text-xl text-primary font-semibold leading-tight max-w-3xl pb-16">The Early Access airdrop is now live. You can earn airdrop points by bridging to Blast and inviting friends. Airdrop points can be redeemed in May.</p>
                        <img src="/images/blast-timeline-about.webp" className="w-full pb-16" />
                        <p className="text-2xl text-secondary font-semibold leading-tight pb-16">The developer airdrop goes live in January when the Blast Testnet launches. Learn more in our <Link href="/devs" className=" text-yellow-300 font-bold transition duration-300 hover:text-yellow-100">developer docs.</Link></p>
                    </div>
                    <div className="relative mx-auto flex w-full max-w-screen-sm flex-col items-center rounded-lg sm:mt-16">
                        <div className="w-full flex flex-col items-center text-center md:text-start py-12 bg-black">
                            <h2 className="text-5xl text-primary leading-tight font-bold pb-8">Have an Early Access Invite?</h2>
                            <button className="w-[300px] disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] bg-yellow-300 focus-visible:bg-white hover:bg-white text-black">Claim your airdrop</button>
                            <p className="text-lg text-secondary leading-tight font-semibold pt-8 text-center"><Link href="/devs" className="font-bold text-yellow-300 hover:text-yellow-100 transition duration-300">Click here</Link> if you're a developer</p>
                        </div>
                        <div className="absolute top-[-32px] hidden w-full text-camo-700 sm:bottom-[100%] sm:block"><svg className="max-w-full" fill="none" height="65" viewBox="0 0 1024 65" width="1024" xmlns="http://www.w3.org/2000/svg"><path d="M785.052 16.7089L800.381 1.51897L856.286 1.51898L870.262 12.9115L884.238 12.9115L884.689 1.51898L902.103 1.51898L902.272 8.10132L925.716 8.10133L925.716 1.51898L954.344 1.51899L1014 1.51899C1019.52 1.51899 1024 5.99615 1024 11.519L1024 65L0 64.9999L0.258424 51.8312C0.365297 46.3859 4.81012 42.0274 10.2565 42.0274L282.229 42.0275L350.758 -5.88567e-05L610.9 -3.61143e-05L625.778 16.7089L785.052 16.7089Z" fill="currentColor"></path></svg></div>
                        <div className="absolute bottom-[-28px] hidden w-full text-camo-700 sm:bottom-[-52px] sm:block"><svg className="max-w-full" fill="none" height="55" viewBox="0 0 1024 55" width="1024" xmlns="http://www.w3.org/2000/svg"><path d="M357.918 40.3596L342.611 55L313.797 55L299.841 44.0197H285.884L285.434 55H268.044L267.876 48.6558L127.41 48.6558V55H98.8213L9.99998 54.9999C4.47714 54.9999 0 50.5227 0 44.9999L0 0L1024 0V1.56473C1024 7.08757 1019.52 11.5647 1014 11.5647L849.432 11.5647L781 54.2678L589.776 54.2678L574.919 40.3596L357.918 40.3596Z" fill="currentColor"></path></svg></div>
                    </div>
                    <div className="py-32"></div>
                </div>
            </div>
        </section>
    );
}