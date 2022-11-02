import { storyblokEditable } from "@storyblok/react";


export default function Project({blok}) {
    return (
        <div {...storyblokEditable(blok)} >
            <div className="relative group">
                <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 group-hover:rotate-3" src={blok.image} alt="" />
                </div>
                <p className="mt-6 text-base font-normal text-gray-500">{blok.name}</p>
                <p className="mt-3 text-xl font-normal text-white">{blok.description}</p>
                <div className="mt-6">
                    <a href="#" target="_blank" title="" className="flex items-center text-gray-400" role="button">
                        <span className="w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100">{blok.name}</span>
                        <svg className="w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span className="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}
