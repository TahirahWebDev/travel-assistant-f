export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-gray-800">
          
          {/* Logo + About */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              AI-TraWell
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Your smart travel companion that plans, guides, and assists you on every journey.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-1">Quick Links</h3>
            <a className="hover:text-white transition">Home</a>
            <a className="hover:text-white transition">Chat</a>
            <a className="hover:text-white transition">Destinations</a>
            <a className="hover:text-white transition">FAQ</a>
          </div>

          {/* Policies */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-1">Legal</h3>
            <a className="hover:text-white transition">Privacy Policy</a>
            <a className="hover:text-white transition">Terms & Conditions</a>
            <a className="hover:text-white transition">Support</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between mt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI-TraWell. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ for travelers.</p>
        </div>

      </div>
    </footer>
  );
}
