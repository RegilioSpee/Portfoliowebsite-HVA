import React from 'react'
import { storyblokEditable } from "@storyblok/react";

const About = ({blok}) => {
    return (
        <section id="about" {...storyblokEditable(blok)} class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="relative overflow-hidden">
                    <div class="lg:absolute lg:inset-0 aspect-w-4 aspect-h-3">
                        <img class="object-cover object-left w-half h-full lg:object-top xl:object-contain" src="https://media-exp1.licdn.com/dms/image/D4E03AQGeGHwFUhYFCQ/profile-displayphoto-shrink_800_800/0/1667396467893?e=1672876800&v=beta&t=OP6m6vJRsImzVY9AyQYhAIr5FKe-Y5JVoGV91U-c8zI" alt="" />
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