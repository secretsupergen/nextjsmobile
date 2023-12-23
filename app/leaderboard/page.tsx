"use client";

import Board from "@/components/board";
import Join from "@/components/join";

export default function Leaderboard() {
    return (
        <section className="relative flex h-full flex-1 overflow-hidden bg-gradient-to-b from-[#11140C] from-[27.54%] to-[#252B1B]">

            <div className="px-6 sm:px-36 h-full w-full">
                <div className="pt-12 md:pt-16 w-full h-full">
                    <div className="relative w-full h-full flex flex-col sm:flex-row-reverse justify-start sm:justify-center gap-4 sm:gap-12">
                        <Join />
                        <div className="hidden h-full sm:block w-[1px] bg-camo-300"></div>
                        <Board />
                    </div>
                </div>
            </div>
        </section>
    );
}