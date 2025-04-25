import React from "react";
import { MoveRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      imageSrc: "images/Image4.png",
      title: "Spyware detection",
      description:
        "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    },
    {
      imageSrc: "images/Image5.png",
      title: "Keylogger detection",
      description:
        "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
    },
    {
      imageSrc: "images/Image6.png",
      title: "Find tracking apps",
      description:
        "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
    },
    {
      imageSrc: "images/Image7.png",
      title: "OS integrity check",
      description:
        "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
    },
    {
      imageSrc: "images/Image8.png",
      title: "Threat removal",
      description:
        "Our intelligent scan will either safely remove threats for you or provide easy-to- follow instructions.",
    },
    {
      imageSrc: "images/Image9.png",
      title: "Easy to use",
      description:
        "We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-6 md:px-64 py-16 md:py-24 bg-indigo-50">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-10">
        Get your freedom back, stop mobile <br className="hidden md:block" />{" "}
        spyware today
      </h1>

      <div className="bg-white rounded-[50px] p-6 md:p-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-center">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="h-14 mx-auto mb-6"
              />
              <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="text-center">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="h-14 mx-auto mb-6"
              />
              <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-5">
          <button className="flex items-center justify-center gap-3 bg-yellow-400 rounded-full px-5 py-4 text-sm font-bold cursor-pointer w-full md:w-auto">
            Get Certo for iPhone <MoveRight className="h-5 w-5" />
          </button>
          <button className="rounded-full text-sm px-5 py-4 font-bold border-2 cursor-pointer w-full md:w-auto">
            Get Certo for Android
          </button>
        </div>
      </div>
    </section>
  );
}
