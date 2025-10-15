"use client";

export default function ContactMap() {
  const directionsUrl = "https://maps.app.goo.gl/sWqvPJThQ1KSeeUu9";

  return (
    <div className="w-full flex justify-center py-10 px-4 sm:px-6">
      <div className="relative w-full max-w-[600px] aspect-[3/2]">
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
          {/* Background Map Image */}
          <img
            src="/bg/Pallikaranai.png"
            alt="ASAN Institute Location - Click to Open Directions"
            className="w-full h-full object-cover rounded-2xl shadow-lg border"
          />

          {/* Button Overlay */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg shadow transition">
              Get Directions
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}
