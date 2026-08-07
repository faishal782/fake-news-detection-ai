export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            AI
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Fake News
            </h1>

            <p className="text-xs text-gray-400">
              Detection System
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-10 text-gray-300 md:flex">
          <a
            href="#features"
            className="transition hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#how"
            className="transition hover:text-blue-400"
          >
            How It Works
          </a>

          <a
            href="#analyzer"
            className="transition hover:text-blue-400"
          >
            Analyzer
          </a>
        </nav>

        {/* Button */}
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          Analyze Now
        </button>

      </div>
    </header>
  );
}