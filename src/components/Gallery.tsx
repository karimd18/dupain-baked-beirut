import { useState } from "react";

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Placeholder images - in a real implementation, these would come from the bakery's actual photos
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=400&h=400&fit=crop",
      alt: "Fresh croissants and pastries",
      category: "pastries"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1549024932-2d48705c9b57?w=400&h=500&fit=crop",
      alt: "Artisanal bread selection",
      category: "breads"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      alt: "Specialty coffee preparation",
      category: "coffee"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      alt: "Bakery interior ambiance",
      category: "interior"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      alt: "French macarons display",
      category: "pastries"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=500&fit=crop",
      alt: "Sourdough bread making",
      category: "breads"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop",
      alt: "Latte art coffee",
      category: "coffee"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1555507036-ab794f4afe5e?w=400&h=300&fit=crop",
      alt: "Bakery display case",
      category: "interior"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            A glimpse into our artisanal craftsmanship and warm bakery atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 ${
                hoveredIndex === index ? "scale-105 shadow-xl" : "hover:scale-105"
              } ${
                index % 3 === 0 ? "row-span-2" : index % 5 === 0 ? "col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-inter font-medium text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter mb-4">
            Follow us for more daily delights
          </p>
          <a
            href="https://instagram.com/dupain.lb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-inter font-semibold transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @dupain.lb
          </a>
        </div>
      </div>
    </section>
  );
};