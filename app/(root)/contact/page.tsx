import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Luxury Contact Banner */}
      <div 
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/luxury-contact-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            #Let's Connect
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-xl text-gold-200 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to begin your luxury experience with us.
          </p>
        </div>
      </div>

      {/* Connect Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info Card */}
        <div className="bg-white p-10 rounded-xl shadow-xl border border-gold-100">
          <h2 className="font-playfair text-3xl font-semibold text-gray-900 mb-8">
            Visit Our Atelier
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-50 rounded-full">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Our Address</h3>
                <p className="text-gray-600 mt-1">Dablin Park, England, New York</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-50 rounded-full">
                <Mail className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email Us</h3>
                <p className="text-gray-600 mt-1">contact@luxurybrand.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold-50 rounded-full">
                <Phone className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Call Us</h3>
                <p className="text-gray-600 mt-1">+1 (212) 555-0199</p>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Map */}
        <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl border-2 border-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-transparent z-10 pointer-events-none"></div>
          <Image
            // fill
            height={400}
            width={600}
            src="/luxury-map.jpg"
            alt="Our Location"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="font-playfair text-xl">Our Flagship Atelier</h3>
            <p className="text-gold-300">New York, USA</p>
          </div>
        </div>
      </div>

      {/* Luxury Contact Form */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <div className="h-1 w-16 bg-gold-500 mx-auto"></div>
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
            Fill out the form below and our concierge team will contact you within 24 hours.
          </p>
        </div>

        <form className="space-y-6 bg-white p-10 rounded-xl shadow-lg border border-gold-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="How can we assist you?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;