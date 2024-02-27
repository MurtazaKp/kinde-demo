import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
            <div className="flex flex-col justify-between lg:order-2">
              <div className="flex-1">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-xl bg-blue-50">
                  #1 Website to Download Premium Assets
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl sm:tracking-tight">
                  Elevate Your Tech Stack with Exclusive SaaS Resources!
                </h1>
              </div>

              <div className="mt-6 lg:mt-auto">
                <p className="text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                  Discover top-tier SaaS assets to level up your tech game! From
                  groundbreaking software to expert guides, access everything
                  you need to thrive in the digital realm. Explore our exclusive
                  collection today
                </p>

                <div className="mt-10">
                  {!isAuthenticated ? (
                    <Link
                      href="/auth"
                      title=""
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                      role="button"
                    >
                      Download Premium Assets
                    </Link>
                  ) : (
                    <Link
                      href="/download"
                      title=""
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                      role="button"
                    >
                      Download Premium Assets
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                <img
                  className="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/5/portrait-girl.png"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 mb-12 -ml-2 bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start">
                      <svg
                        className="text-blue-600 w-9 h-9 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-3xl font-semibold text-gray-900">
                          34,585
                        </p>
                        <p className="mt-1 text-lg font-normal text-gray-700">
                          Secured emails are sent last week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
