export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800">
                About Us
              </span>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Discover Our Restaurant Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Cuisine has been dedicated to bringing you an
                  extraordinary dining experience that celebrates the art of
                  culinary excellence.
                </p>
                <p>
                  Our passionate chefs craft each dish with the finest ingredients,
                  combining traditional techniques with modern innovation. From farm
                  to table, we ensure quality in every bite.
                </p>
                <p>
                  We believe dining is more than just a meal—it's an experience to
                  be savored and shared. Join us and taste the difference passion
                  makes.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div>
                  <div className="mb-1 text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="mb-1 text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </div>
                <div>
                  <div className="mb-1 text-2xl font-bold text-orange-600">15</div>
                  <div className="text-sm text-gray-600">Expert Chefs</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-64 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <div className="h-64 translate-y-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
