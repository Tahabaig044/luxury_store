import React from "react";
import { Diamond, Sparkles, Award, Shield, Star } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-cream-50 min-h-screen flex flex-col">
      {/* Luxury Header Section */}
      <header className="relative text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-600"></div>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            About Our Maison
          </h1>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Crafting digital excellence with the precision of haute couture and the vision of timeless design.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Who We Are Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Diamond className="w-6 h-6 text-gold-500" />
              <h2 className="font-playfair text-4xl font-semibold text-gray-900">
                Our Heritage
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-serif font-bold text-gold-600">Web-E-Com</span>, we blend 
              traditional craftsmanship with digital innovation to create e-commerce 
              experiences that resonate with luxury and sophistication.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to redefine digital commerce, our atelier of 
              designers and developers work meticulously to craft solutions that 
              embody elegance, performance, and exclusivity.
            </p>
            <div className="pt-4">
              <button className="px-8 py-3 bg-transparent border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300 font-medium tracking-wider">
                Discover Our Craft
              </button>
            </div>
          </div>

          {/* Luxury Image Frame */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-300 to-gold-600 rounded-xl opacity-30 blur-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/luxury-team.jpg"
                alt="Our Atelier"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-[url('/luxury-texture.jpg')] bg-cover bg-center py-24 relative">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-white mb-4">
                Our Pillars of Excellence
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-16 bg-gold-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="w-10 h-10 text-gold-400" />,
                  title: "Innovation",
                  description: "Pioneering digital solutions with avant-garde creativity and technical mastery."
                },
                {
                  icon: <Shield className="w-10 h-10 text-gold-400" />,
                  title: "Integrity",
                  description: "Upholding the highest standards of trust and transparency in all engagements."
                },
                {
                  icon: <Star className="w-10 h-10 text-gold-400" />,
                  title: "Excellence",
                  description: "Relentless pursuit of perfection in every detail of our craftsmanship."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-white/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-gold-50 rounded-full">
                      {value.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury CTA Section */}
        <div className="py-24 bg-gradient-to-b from-cream-100 to-cream-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
              Experience Digital Haute Couture
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Let us craft a bespoke digital experience that reflects your brand's unique elegance.
            </p>
            <button className="px-10 py-4 bg-gold-500 hover:bg-gold-600 text-white font-medium tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all">
              Begin Your Journey
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;