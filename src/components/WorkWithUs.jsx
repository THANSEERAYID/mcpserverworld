import moonkeylabs from '../Images/moonkeylabs.jpg'
import StatsSection from './CountUp/CountUp';


export default function WorkWithUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen flex items-center">
      {/* Background image */}
      <img
        alt=""
        src={moonkeylabs}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
      />

      {/* Grey overlay */}
      <div className="absolute inset-0 bg-black opacity-75 -z-10"></div>

      {/* Your other gradient decorations */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/500] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/500] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        {/* Main content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-0 sm:mt-12">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center my-8">
            <h2 className="text-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get Early Access
            </h2>
            <p className="mt-6 text-md md:text-xl leading-8 text-gray-300">
              At MoonkeyLabs, we experiment with AI to deliver innovative solutions that drive success for businesses.
            </p>

            <div className="my-6 sm:my-10 max-w-sm md:max-w-lg mx-auto">
              <form className="flex flex-col gap-4 sm:flex-row">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-md border-0 bg-black px-3.5 py-2.5 text-white placeholder-gray-400 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm md:text-base md:py-3 md:px-5"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm md:text-base md:px-5 md:py-3 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
        <StatsSection />
      </div>
    </div>


  )
}
