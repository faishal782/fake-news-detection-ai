type ButtonProps = {
  text: string;
  primary?: boolean;
};

export default function Button({
  text,
  primary = false,
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-8 py-4 text-lg font-semibold transition duration-300 ${
        primary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-gray-700 bg-transparent text-white hover:border-blue-500"
      }`}
    >
      {text}
    </button>
  );
}