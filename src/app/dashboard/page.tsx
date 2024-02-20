"use client";
import Link from "next/link";
import { client } from "../../../sanity/lib/client.js";
import { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";

export default function Dashboard() {
  const [heroData, setHeroData] = useState<any>();
  useEffect(() => {
    async function getData() {
      const query = `*[_type == "hero"]
      
      `;
      const data = await client.fetch(query);

      return data;
    }

    async function fetchHeroData() {
      try {
        const result = await getData();

        setHeroData(result);

        // const bannerImage = result[0]?.sections?.bannerImage;

        // if (bannerImage) {
        //   setHeroData((prevState) => ({
        //     ...prevState,
        //     bannerImage: {
        //       src: urlForImage(bannerImage.src),
        //     },
        //   }));
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchHeroData();
  }, []);

  const hero = heroData && heroData[0];
  const image = heroData && urlForImage(heroData[0].image.src);

  return (
    <div>
      <section className="pt-12 pb-48 overflow-hidden bg-gray-900 sm:pb-80 sm:pt-16 lg:pt-20 xl:pt-24 xl:pb-96">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-7xl sm:tracking-tight">
              {hero && hero.title}
            </h1>
            <p className="mt-6 text-lg leading-7 text-white lg:leading-8 lg:text-xl">
              {hero && hero.subtitle}
            </p>
            <div className="mt-8">
              <Link
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                role="button"
              >
                {hero && hero.ctaText}
              </Link>
            </div>
            <p className="mt-8 text-sm font-normal text-gray-400">
              {hero && hero.note}
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-20">
            <img
              className="absolute top-auto w-full max-w-5xl mx-auto -mb-48 -translate-x-1/2 left-1/2"
              src={image}
              alt=""
            />

            <div className="absolute inset-0 grid w-full h-full mt-20 sm:mt-36 lg:mt-40 xl:mt-44 place-items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 border border-white lg:text-base lg:py-4 lg:px-8 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20"
              >
                <svg
                  className="w-auto h-4 mr-3 -ml-1 lg:h-5"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.80425V14.1958C1 15.7666 2.7279 16.7243 4.06 15.8917L12.3732 10.696C13.6265 9.91266 13.6265 8.08734 12.3732 7.304L4.06 2.10825C2.7279 1.27569 1 2.23338 1 3.80425Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Play 1 min video
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
