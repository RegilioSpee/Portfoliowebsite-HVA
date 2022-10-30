import { storyblokEditable } from "@storyblok/react";

  
  export default function Example(blok) {
    return (
        <div {...storyblokEditable(blok)} class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <section class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl text-center lg:text-left">
            <p class="text-lg font-normal text-gray-400">Projecten die ik heb gebouwd</p>
            <h2 class="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Projecten.</h2>
        </div>

        <div class="grid grid-cols-1 mt-12 gap-y-12 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20 xl:mt-24">
            <div class="relative group">
                <div class="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-3" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/blog/2/thumbnail-1.png" alt="" />
                </div>
                <p class="mt-6 text-base font-normal text-gray-500">{blok.project_1_name}</p>
                <p class="mt-3 text-xl font-normal text-white">{blok.project_1_description}</p>
                <div class="mt-6">
                    <a href={blok.project_1_link} target="_blank" title="" class="flex items-center text-gray-400" role="button">
                        <span class="w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"> Website </span>
                        <svg class="w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-3" src="cs4_webp.png" alt="" />
                </div>
                <p class="mt-6 text-base font-normal text-gray-500">{blok.project_2_name}</p>
                <p class="mt-3 text-xl font-normal text-white">{blok.project_2_description}</p>
                <div class="mt-6">
                    <a href="#" target="_blank" title="" class="flex items-center text-gray-400" role="button">
                        <span class="w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"> Website </span>
                        <svg class="w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-3" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/blog/2/thumbnail-3.png" alt="" />
                </div>
                <p class="mt-6 text-base font-normal text-gray-500">{blok.project_3_name}</p>
                <p class="mt-3 text-xl font-normal text-white">{blok.project_3_description}</p>
                <div class="mt-6">
                    <a href="#" target="_blank" title="" class="flex items-center text-gray-400" role="button">
                        <span class="w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"> Website </span>
                        <svg class="w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-3" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/blog/2/thumbnail-4.png" alt="" />
                </div>
                <p class="mt-6 text-base font-normal text-gray-500">{blok.project_4_name}</p>
                <p class="mt-3 text-xl font-normal text-white">{blok.project_4_description}</p>
                <div class="mt-6">
                    <a href="#" target="_blank" title="" class="flex items-center text-gray-400" role="button">
                        <span class="w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"> Website </span>
                        <svg class="w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
    )
  }
  