import { Brain, Globe, ShieldCheck, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain size={38} />,
      title: "AI Powered Detection",
      description:
        "Our machine learning model analyzes news content to detect misinformation with high accuracy.",
    },
    {
      icon: <Globe size={38} />,
      title: "URL Verification",
      description:
        "Paste any article URL and instantly verify whether the information is trustworthy.",
    },
    {
      icon: <ShieldCheck size={38} />,
      title: "Fact Checking",
      description:
        "Cross-check articles against trusted fact-checking organizations and reliable sources.",
    },
    {
      icon: <Zap size={38} />,
      title: "Fast Analysis",
      description:
        "Receive AI-powered results within seconds without waiting for manual verification.",
    },
  ];

  return (
    <section id="features"
    className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Everything you need to verify online news using Artificial
            Intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-800 bg-[#0B1120] p-8 transition duration-300 hover:border-blue-500 hover:-translate-y-2"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-blue-600/10 p-4 text-blue-500">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}