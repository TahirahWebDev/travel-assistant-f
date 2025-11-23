import Image from "next/image";

export default function MissionSection() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-slide-up">
      <div className="grid md:grid-cols-2 gap-10 items-center">
      
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We believe travel should be{" "}
            <span className="font-semibold text-blue-600">accessible, personalized, and joyful</span>.
            Whether you&apos;re a solo adventurer or a family traveler, our AI helps you discover hidden gems and plan smarter.
          </p>

          <p className="text-gray-600 leading-relaxed font-semibold">
            No more endless tabs or stressful planning. Just ask and let AI do the rest.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-inner">
            <Image
              src="/logo.png"
              alt="Mission Illustration"
              width={300}
              height={300}
              className="animate-float"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
