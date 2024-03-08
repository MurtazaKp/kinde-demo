
const page = () => {
  return (
    <div>
          <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Choose your plan
            </h2>
            <p className="mt-5 text-lg font-normal text-gray-900 font-pj">
              Premium UI Kit, affordable for everyone
            </p>
          </div>

          <div className="grid max-w-7xl grid-cols-1 mx-auto mt-8 text-center sm:grid-cols-3 sm:mt-16 gap-y-5 gap-x-10">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="p-6 md:p-10">
                <p className="text-lg font-bold text-gray-900 font-pj">
                  Book a Discovery Call
                </p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                  Book a Free Discovery Call and Learn about all the SkinScope
                  services today hurry
                </p>
                <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                  FREE
                </p>
              <iframe width='100%' height='250px' src='https://govindtesting.zohobookings.com/portal-embed#/4590285000000036016' allowFullScreen={true} ></iframe></div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="p-6 md:p-10" style={{ height: '550px' }}>
                  <p className="text-lg font-bold text-gray-900 font-pj">
                    Consultation call
                  </p>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                    Consultation available for you. Discover SkinScope services
                    today! book a paid call
                  </p>
                  <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                    $100
                  </p>

                  <a
                    href="https://buy.stripe.com/test_28oeXU70j2R38HS288"
                    title=""
                    className="
                                        relative
                                        inline-flex
                                        items-center
                                        justify-center
                                        px-8
                                        py-3.5
                                        mt-10
                                        text-base
                                        font-bold
                                        text-white
                                        transition-all
                                        duration-200
                                        bg-gray-900
                                        border border-transparent
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                        font-pj
                                        hover:bg-opacity-90
                                        rounded-xl
                                    "
                    role="button"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="p-6 md:p-10">
                <p className="text-lg font-bold text-gray-900 font-pj">
                  Custom call
                </p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                  Looking for custom option Book a custom call now book
                  according to your need
                </p>
                <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                  -
                </p>

                <a
                  href="#"
                  title=""
                  className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-3.5
                                    mt-10
                                    text-base
                                    font-bold
                                    text-gray-900
                                    transition-all
                                    duration-200
                                    border-2 border-gray-400
                                    rounded-xl
                                    font-pj
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    hover:bg-gray-900
                                    focus:bg-gray-900
                                    hover:text-white
                                    focus:text-white
                                    hover:border-gray-900
                                    focus:border-gray-900
                                "
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page