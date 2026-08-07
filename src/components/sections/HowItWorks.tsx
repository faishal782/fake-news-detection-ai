import { FileText, BrainCircuit, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <FileText size={42} />,
    title: "Paste News",
    description:
      "Paste a news article, headline, or URL into the analyzer.",
  },
  {
    icon: <BrainCircuit size={42} />,
    title: "AI Analysis",
    description:
      "Our machine learning model evaluates credibility, writing patterns, and trusted sources.",
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Get Results",
    description:
      "Receive an instant prediction with confidence score and explanation.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Detect misinformation in just three simple steps.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-[#0B1120] p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500">
                {step.icon}
              </div>

              <div className="mb-4 text-sm font-semibold text-blue-400">
                STEP {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}