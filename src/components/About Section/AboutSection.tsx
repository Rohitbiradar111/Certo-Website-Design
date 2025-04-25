import { MoveRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-around px-6 lg:px-16 py-16 lg:py-24 bg-white">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-5">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
          At Certo, mobile security is not an afterthought, it's what we do.
        </h1>

        <p className="text-base lg:text-lg mb-8 lg:mb-12 text-center lg:text-left">
          With years of experience in mobile security and spyware detection, our
          products have helped countless people safeguard their devices and find
          peace of mind.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 bg-yellow-400 rounded-full px-6 py-3 text-sm font-bold">
            Get Certo for iPhone <MoveRight className="h-5 w-5" />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold border-2">
            Get Certo for Android
          </button>
        </div>
      </div>

      <div className="mb-8 lg:mb-0">
        <img
          src="images/Image3.png"
          alt="About Section Image"
          className="h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain mx-auto"
        />
      </div>
    </section>
  );
}
