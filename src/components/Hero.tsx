import HeroCarousel from "./Carousel"
import ServicesSection from "./ui/ServiceCard"
import WhyChooseUs from "./ui/WhyChooseUs"


const Hero = () => {
  return (
    <div>
        <div className="animate-rise delay-[1800ms]">
          <HeroCarousel/>
        </div>

        <div className="pt-24 flex flex-col items-center text-center">
        <span
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md text-sm md:text-base animate-rise"
          role="button"
          aria-label="Our services"
        >
          Our services
        </span>

        <h3 className="mt-4 text-center text-xl md:text-2xl font-semibold text-gray-900 animate-rise delay-[200ms]">
          Empowering enterprise performance
        </h3>

        <p className="mt-2 text-center text-sm md:text-base text-gray-600 max-w-2xl px-4 animate-rise delay-[400ms]">
          End-to-end IT solutions designed to drive modern business growth and resilience.
        </p>
        <ServicesSection/>
        </div>

        <div className="mt-10">
          <WhyChooseUs/>
        </div>
    </div>
  )
}

export default Hero