import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "collinandmandy94",
    text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
  },
  {
    name: "Jennifer Black",
    text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Check any email if they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.",
  },
  {
    name: "Phillip Colligan",
    text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
  },
];

export default function FeedBackSection() {
  return (
    <section className="bg-gradient-to-b from-orange-300 to-yellow-600 py-16 md:py-24 px-6 md:px-20">
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-black text-left mb-12 md:mb-16">
          Loved by thousands of iPhone <br className="hidden md:block" /> and
          Android users alike
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl px-6 md:px-10 py-6 md:py-8 text-black"
            >
              <div className="flex text-yellow-500 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="currentColor"
                      className="fill-current"
                    />
                  ))}
              </div>

              <p className="text-sm mb-4">{t.text}</p>
              <p className="font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-xl md:text-2xl font-bold text-center">
          Featured in:
          <div>
            <img
              src="images/Image2.png"
              alt="brands logo"
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
