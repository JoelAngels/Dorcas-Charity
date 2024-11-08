import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[600px]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-red-500" />
            <span className="text-lg font-medium">Dorcas Charity Hand</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Empowering Lives Through Education
          </h1>
          <p className="text-xl mb-8">
            We believe every child deserves access to quality education. Join us
            in making a difference in the lives of students across Kenya.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <a href="mailto:joelbaraka4325@gmail.com">Contact Us Now</a>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
