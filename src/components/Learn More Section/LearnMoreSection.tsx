import { MoveRight } from "lucide-react";

export default function LearnMoreSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center px-4 lg:px-60 py-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 w-full">
        <div className="w-full lg:w-2/3 bg-yellow-400 rounded-[50px] p-8 lg:p-14">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Read our story
          </h1>
          <p className="text-base sm:text-lg lg:text-lg mb-12">
            Find out why thousands trust Certo to secure their mobile world.
          </p>
          <button className="flex items-center gap-3 bg-blue-700 text-white rounded-full px-5 py-4 text-sm font-bold cursor-pointer">
            About Us <MoveRight className="h-5 w-5" />
          </button>
        </div>

        <div className="w-full lg:w-1/3 pt-8 lg:pt-14 pl-0 lg:pl-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Help Center
          </h2>
          <p className="text-base sm:text-lg lg:text-lg mb-12">
            Help topics, getting started guides and FAQs.
          </p>
          <button className="flex items-center border-2 rounded-full px-5 py-4 text-sm font-bold cursor-pointer">
            Visit help center
          </button>
        </div>
      </div>
    </section>
  );
}
