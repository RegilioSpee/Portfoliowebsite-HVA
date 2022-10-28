import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xer73e9', 'template_x7z7djg', form.current, '-uS348qOgyEMh6yce')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section class="py-12 overflow-hidden bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
                    <div class="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
                        <div class="flex-1">
                            <p class="text-sm font-normal tracking-widest uppercase">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Neem contact op. </span>
                            </p>
                        </div>

                        <div class="mt-6 lg:mt-auto">
                            <h2 class="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Kom meer te weten over mij.</h2>
                            <p class="mt-4 text-base font-normal text-gray-400 lg:max-w-xs sm:text-lg sm:mt-6">Dan zal ik in een meeting alles toelichten</p>
                        </div>
                    </div>

                    <div class="relative flex items-center justify-center">
                        <div class="absolute right-0 transform translate-x-4 -translate-y-1/2 top-1/2">
                            <svg class="filter blur-3xl" width="619" height="371" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M355.661 40.206C507.908 40.206 619-61.411 619 58.454 619 178.319 219.912 371 67.665 371s0-192.681 0-312.546c0-119.865 135.749-18.248 287.996-18.248Z" fill="url(#e)" />
                                <defs>
                                    <linearGradient id="e" x1="0" y1="371" x2="36.57" y2="-50.529" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div class="relative overflow-hidden bg-black rounded-xl">
                            <div class="p-6 sm:py-8 sm:px-9">
                                <p class="text-xl font-normal text-white">Vul het contactformulier in om contact met me op te nemen.</p>

                                <form ref={form} onSubmit={sendEmail} class="mt-8 space-y-4">
                                    <div>
                                        <label for="" class="sr-only"> Full name </label>
                                        <div>
                                            <input type="text" name="user_name" id="" placeholder="Voor- en achternaam" class="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="sr-only"> Email address </label>
                                        <div>
                                            <input type="email" name="user_email" id="" placeholder="Email adres" class="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="sr-only"> Message </label>
                                        <div>
                                            <textarea name="message" id="" placeholder="Bericht" rows="4" class="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md resize-y focus:border-white focus:ring-1 focus:ring-white"></textarea>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="relative inline-flex mt-2 group">
                                            <div class="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                            <button type="submit" value="Send" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md">Stuur bericht</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
