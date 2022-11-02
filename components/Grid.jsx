import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <div id="projects" {...storyblokEditable(blok)} className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <section class="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center lg:text-left">
            <p class="text-lg font-normal text-gray-400">Projecten die ik heb gebouwd</p>
            <h2 class="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Projecten.</h2>
            <div class="grid grid-cols-1 mt-12 gap-y-12 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16 lg:mt-20 xl:mt-24">
              {blok.projects.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
