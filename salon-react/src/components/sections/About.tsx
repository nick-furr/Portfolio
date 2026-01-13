export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-rose-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"></div>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">About Ayesha Salon</h2>
            <p className="text-lg text-gray-600">
              Where passion meets expertise in hair care
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              Welcome to Ayesha Salon, where we've been dedicated to providing exceptional hair care services
              for over 15 years. Our team of skilled stylists brings passion, creativity, and expertise to every
              appointment, ensuring you leave feeling confident and beautiful.
            </p>
            <p className="text-gray-600">
              We specialize in everything from precision haircuts and vibrant color treatments to luxurious
              keratin treatments and special occasion styling. Using only premium professional-grade products,
              we stay at the forefront of hair trends and techniques to deliver outstanding results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Expert Team</h3>
              <p className="text-sm text-gray-600">
                Certified professionals with years of experience
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Premium Products</h3>
              <p className="text-sm text-gray-600">
                Only the finest professional-grade products
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Personalized Care</h3>
              <p className="text-sm text-gray-600">
                Tailored services to match your unique style
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12 text-center md:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-rose-600">15+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600">3</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Expert Stylists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600">1000+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-600">8</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
