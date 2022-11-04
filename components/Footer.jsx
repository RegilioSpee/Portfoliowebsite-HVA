import React from 'react'

function Footer() {
  return (
    <footer class="py-12 bg-black lg:py-20 sm:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-start lg:justify-between">
            <div class="text-center lg:text-left">
                <a href="#" title="" class="flex">
                    <img class="w-auto mx-auto h-9 lg:mx-0" src="https://i.ibb.co/Bncjm5V/CS4-Logo-White-2.png" alt="" />
                </a>
                <p class="mt-6 text-base font-normal text-gray-400 lg:max-w-xs">Business & IT student aan de Hogeschool van Amsterdam</p>
            </div>

            <div class="mt-6 lg:mt-0">
                <div class="flex items-center justify-center lg:justify-start">
                    <div class="inline-flex items-center justify-center px-5 py-4 border border-gray-800 lg:w-auto rounded-2xl">
                        <svg class="w-6 h-6 text-gray-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:regiliospee17@gmail.com?subject=Contact met Regilio" title="" class="ml-4 text-lg font-normal text-white"> regiliospee17@gmail.com </a>
                    </div>
                </div>

                <ul class="flex items-center justify-center mt-8 space-x-6 lg:justify-start sm:space-x-12">
                    <li>
                        <a class="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Wibautstraat 3b, 1091 GH Amsterdam </a>
                    </li>

                    <li>
                        <a href="tel:+31 6 12345678" title="" class="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> +31 6 4099 1664 </a>
                    </li>

                    <li>
                        <a href="/#about" title="" class="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Over mij </a>
                    </li>

                    <li>
                        <a href="/#form" title="" class="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Contact </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer