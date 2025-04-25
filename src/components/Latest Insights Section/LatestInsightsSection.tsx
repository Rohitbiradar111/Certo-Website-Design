import { MoveRight } from "lucide-react";

export default function LatestInsightsSection() {
  const insights = [
    {
      title: "Signs Your Ex Is Spying On You",
      description:
        "In an ideal world, after a relationship ends both you and your ex will move on. But what if they can't let go, and start spying on your...",
      image: "images/Image10.png",
    },
    {
      title: "How to Remove a Hacker from Your Samsung Phone",
      description:
        "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple's 28.43% as...",
      image: "images/Image11.png",
    },
    {
      title: "Is Your Cell Phone Under Surveillance?",
      description:
        "In today's surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
      image: "images/Image12.png",
    },
  ];

  return (
    <section className="flex flex-col items-center px-4 lg:px-60 py-14 bg-indigo-50">
      <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-center mb-14">
        Latest insights
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white rounded-3xl">
            <img
              src={insight.image}
              alt={insight.title}
              className="aspect-video object-cover"
            />
            <div className="p-8">
              <h2 className="text-lg font-bold mb-4">{insight.title}</h2>
              <p className="text-xs">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-3 bg-yellow-500 rounded-full px-4 py-3 text-sm font-bold cursor-pointer">
        View all insights <MoveRight className="h-5 w-5" />
      </button>
    </section>
  );
}
