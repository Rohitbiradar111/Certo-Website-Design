import { MoveRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex justify-between items-center pt-14 bg-white">
      <div className="pl-32 max-w-[620px]">
        <h1 className="text-5xl font-bold text-black mb-8">
          Your mobile privacy <br /> is our mission
        </h1>
        <p className="text-[15px] font-normal mb-12">
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-400 rounded-full px-3 py-3 text-sm font-bold cursor-pointer">
            Get Certo for iPhone <MoveRight className="h-5 w-5" />
          </button>
          <button className="rounded-full px-3 text-sm font-bold border-2 border-black cursor-pointer">
            Get Certo for Android
          </button>
        </div>
      </div>
      <div>
        <img
          src="images/Image1.png"
          alt="Mobile App Screenshot"
          className="h-[590px]"
        />
      </div>
    </section>
  );
}
