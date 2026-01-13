export default function Gallery() {
  // Placeholder images - in production these would come from the database or CMS
  const images = [
    { id: 1, alt: "Hair coloring transformation" },
    { id: 2, alt: "Elegant updo hairstyle" },
    { id: 3, alt: "Modern haircut" },
    { id: 4, alt: "Blonde highlights" },
    { id: 5, alt: "Keratin treatment results" },
    { id: 6, alt: "Bridal hair styling" },
  ];

  return (
    <section id="gallery" className="bg-gradient-to-br from-rose-50 to-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Work</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Take a look at some of our stunning transformations and beautiful styles.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100">
                <svg
                  className="h-12 w-12 text-rose-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Follow us on social media to see more of our work and daily updates!
          </p>
        </div>
      </div>
    </section>
  );
}
