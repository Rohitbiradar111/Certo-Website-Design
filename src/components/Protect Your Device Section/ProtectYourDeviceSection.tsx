import { MoveRight } from "lucide-react";

export default function ProtectYourDeviceSection() {
  return (
    <section className="flex flex-col items-center px-8 sm:px-16 py-12 sm:py-16 bg-blue-700">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Is someone spying on your phone?
        </h1>
        <h2 className="text-base sm:text-lg text-white flex items-center justify-center mt-6 sm:mt-10 mb-8 sm:mb-10">
          Find out with Certo
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-400 rounded-full px-4 py-3 text-sm sm:text-base font-bold cursor-pointer">
            Get Certo for iPhone <MoveRight className="h-5 w-5" />
          </button>
          <button className="rounded-full px-4 py-3 text-sm sm:text-base font-bold border-2 border-white text-white cursor-pointer">
            Get Certo for Android
          </button>
        </div>
      </div>
    </section>
  );
}
