import React from 'react'
import { storyblokEditable } from "@storyblok/react";


function Hero({blok}) {
    return (
        <div {...storyblokEditable(blok)} class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
        <div class="">
            <section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="relative">
                        <div class="lg:w-2/3">
                            <p class="text-sm font-normal tracking-widest text-gray-300 uppercase">{blok.status}</p>
                            <h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Regilio</span> Spee</h1>
                            <p class="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">{blok.subtext}</p>
                            <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                                <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a href="#" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Meer over mij weten </a>
                            </div>
                        </div>

                        <div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                            <img class="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default Hero