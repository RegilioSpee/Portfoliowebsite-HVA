import React from 'react'
import { storyblokEditable } from "@storyblok/react";

const About = ({blok}) => {
    return (
        <section {...storyblokEditable(blok)} class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="relative overflow-hidden">
                    <div class="lg:absolute lg:inset-0 aspect-w-4 aspect-h-3">
                        <img class="object-cover object-left w-full h-full lg:object-top xl:object-contain" src="https://images.unsplash.com/photo-1665694839721-e956ad3f6afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <div class="relative flex justify-end">
                        <div class="bg-gradient-to-r from-[#090914]/70 to-[#0C0C12] overflow-hidden lg:w-7/12 bg-opacity-90 backdrop-blur-lg">
                            <div class="p-6 md:py-10 sm:p-8 md:px-16">
                                <p class="font-bold text-8xl">
                                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> “ </span>
                                </p>
                                <blockquote>
                                    <p class="text-3xl font-normal text-white xl:text-4xl">{blok.title}</p>
                                </blockquote>
                                <p class="mt-12 text-xl font-normal text-gray-400 sm:mt-16">{blok.text}</p>

                                <div class="inline-flex flex-col mt-12 sm:mt-16">
                                    <a href="https://www.canva.com/design/DAEBSwCuzM4/HJ9j9W67CshhVQZvlD-gxw/view?utm_content=DAEBSwCuzM4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" title="" class="text-base font-normal text-white" target="_blank"> Bekijk CV </a>
                                    <div class="w-full h-px mt-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About