import Link from "next/link";

export default function Devs() {
    return (
        <section className="w-full h-[90vh] scrollbar-hide overflow-auto">
            <div className="relative bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col justify-center items-center gap-x-16 sm:flex-row gap-y-16 pt-24">
                        <div className="flex flex-1 px-8">
                            <img src="/images/illustration-devs.webp" className="w-full" />
                        </div>
                        <div className="flex-1">
                            <h2 className="w-full text-center md:text-start text-4xl sm:text-5xl text-primary font-bold leading-tight tracking-none pb-8">Build with yield</h2>
                            <p className="text-xl sm:text-2xl text-secondary font-semibold leading-tight pb-8">Blast is an L2 with native yield for ETH and stablecoins. Yield makes it possible to create new revenue streams and provide novel rewards for end-users.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-y-16 pt-20">
                        <h2 className="w-full text-center md:text-start text-3xl sm:text-4xl text-primary font-bold leading-tight tracking-none">An evm-compatible L2 designed to help you and your users earn more.</h2>
                        <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-native-yield.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">NATIVE YIELD</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight sm:pl-16">Yield as a primitive unlocks new business models for Dapps. ETH and stablecoins bridged to Blast automatically earn yield. Dapps can easily monetize deposits with a single config.</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-gas-fees.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">GAS FEE REVENUE</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight sm:pl-16">Other L2s keep revenue from gas fees for themselves. Blast gives this revenue back to developers programatically. Keep this revenue for yourself or use it to subsidize gas fees for your users.</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4 pb-4">
                                    <img src="/images/thumbnail-token-airdrop.webp" className="w-12" />
                                    <h3 className="text-3xl text-primary font-semibold leading-tight uppercase">AIRDROP</h3>
                                </div>
                                <p className="text-xl text-secondary font-medium leading-tight sm:pl-16">50% of the Blast Airdrop has been reserved for developers. The Developer Airdrop launches in January along with the Blast Testnet.</p>
                            </div>
                        </div>
                    </div>


                    <svg className="w-full text-secondary my-20" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="flex flex-col items-start gap-y-8 pt-20">
                        <h2 className="w-full text-center md:text-start text-3xl sm:text-4xl text-primary font-bold leading-tight tracking-none">If you've deployed on mainnet or any L2, you can easily deploy on Blast.</h2>
                        <h3 className="text-xl sm:text-2xl text-secondary font-semibold leading-tight">Blast is EVM equivalent, so you can build Dapps on Blast without learning a new toolkit. All your code, tools, and infrastructure work out of the box.</h3>

                        <div className="w-full flex flex-col items-center">
                            <img src="/images/code-1.png" className="rounded-2xl" />
                        </div>
                        <p className="w-full text-2xl text-center text-primary font-semibold">Compatable with</p>
                        <div className="w-full flex flex-row justify-center items-center gap-8">
                            <img src="/images/letterhead/letterhead-hardhat.webp" />
                            <img src="/images/letterhead/letterhead-foundry.webp" />
                        </div>
                    </div>

                    <svg className="w-full text-secondary mb-20 mt-36" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="pt-20">
                        <h2 className="w-full text-center md:text-start text-3xl sm:text-4xl text-primary font-bold leading-tight tracking-none pb-8">It's time to ditch other L2s</h2>
                        <h3 className="text-2xl text-secondary font-semibold leading-tight pb-16">Blast has the same features you love on other L2s while providing 10x more value.</h3>
                        <img src="/images/blast-l2-comparison_en.webp" alt="Blast L2 Comparison" className="w-full pb-16" />
                    </div>

                    <svg className="w-full text-secondary my-20" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
                        <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path><circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle><circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle><circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle><path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>

                    <div className="flex flex-col items-start gap-y-16 pt-16">
                        <div className="w-full flex flex-col gap-16 items-start">
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col items-center gap-8 min-w-[320px]">
                                    <img src="/images/illustration-liquidity.webp" alt="Illustration-liquidity" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="w-full text-center md:text-start text-2xl text-secondary font-medium leading-tight pb-8">$938M LIQUIDITY WAITING FOR YOU</h3>
                                    <p className="text-2xl text-primary font-medium leading-tight">82,669 users have deposited $938M to Blast in anticipation of the mainnet launch in February. When the Blast mainnet launches, the bridge contract will unlock and release all those users and funds to your dapps.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col items-center gap-8 min-w-[320px]">
                                    <img src="/images/illustration-airdrop.webp" alt="Illustration-airdrop" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="w-full text-center md:text-start text-2xl text-secondary font-medium leading-tight pb-8">BLAST DEVELOPER AIRDROP</h3>
                                    <p className="text-2xl text-primary font-medium leading-tight">The Blast Developer Airdrop goes live in January, when the Blast Testnet launches. 50% of the Blast airdrop has been allocated for developers. Instructions on how to claim the airdrop and how it works will be shared upon testnet launch.</p>
                                </div>
                            </div>
                            <img src="/images/blast-timeline-devs.webp" alt="Blast timeline devs" className="w-full pb-16" />
                            <div className="flex flex-col sm:flex-row items-center justify-stretch gap-8">
                                <div className="flex flex-row sm:flex-col items-center gap-8 min-w-[320px]">
                                    <img src="/images/illustration-community.webp" alt="Illustration-community" />
                                </div>
                                <div className="pl-4 w-full text-center md:text-start ">
                                    <h3 className="text-2xl text-secondary font-medium leading-tight pb-8">JOIN THE COMMUNITY</h3>
                                    <p className="text-2xl text-primary font-medium leading-tight pb-8">In the meantime, join our developer community on Discord to learn more about Blast (also so you don't miss the airdrop).</p>
                                    <a>
                                        <button className="w-[300px] disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] bg-yellow-300 group-focus-visible:bg-white hover:bg-white text-black">Join Blast Discord</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative mx-auto flex w-full max-w-screen-sm flex-col items-center rounded-lg sm:mt-16">
                        <div className="w-full flex flex-col items-center text-center md:text-start py-12 bg-black">
                            <h2 className="text-5xl text-primary leading-tight font-bold pb-8">Need More Info?</h2>
                            <p className="text-lg text-secondary leading-tight font-semibold pb-8 max-w-xl text-center">More docs will be available when the Blast Developer Airdrop and Testnet launches in January. In the meantime, join our Discord to learn more.</p>
                            <button className="w-[300px] disabled:cursor-not-allowed disabled:bg-camo-300 disabled:text-gray-800 typography-brand-body-l-caps min-h-[40px] px-6 py-2 transition-colors will-change-transform [transform:translateZ(0)] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] bg-yellow-300 focus-visible:bg-white hover:bg-white text-black">Claim your airdrop</button>
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