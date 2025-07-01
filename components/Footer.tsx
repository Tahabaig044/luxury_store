import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              CONTACT US
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: info@gamil.com</p>
              <p>Cell: +92 12 3456789, 5480576</p>
              <p>WhatsApp: +92 348 Sara</p>
              <p className="text-green-600 font-medium">Join our WhatsApp Channel</p>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              CUSTOMER CARE
            </h3>
            <div className="space-y-2">
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">My Account</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Customer Reviews</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Size Chart</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">FAQ</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Catalogue</button>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              INFORMATION
            </h3>
            <div className="space-y-2">
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">About Us</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Stockists</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Press</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Wholesale</button>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              POLICIES
            </h3>
            <div className="space-y-2">
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Privacy Policy</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Shipping Policy</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Exchange & Returns</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Return & Exchanges</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Terms & Conditions</button>
              <button className="block text-sm text-gray-600 hover:text-[#806a57] text-left">Cookie Policy</button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              NEWSLETTER SIGNUP
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Sign up to receive the latest updates from Sara.
            </p>
            <div className="flex-col">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#806a57] focus:border-transparent w-full rounded"
              />
              <Link href="/sign-up" >
              <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors w-full">
                Subscribe
              </button>
              </Link>
            </div>

            <div className="mt-6">
              <div className="text-center text-sm text-gray-500 mb-4">OR</div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>

                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>

                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.247 7.052 7.757 8.349 7.757s2.448.49 3.324 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.386 3.344c-.876.807-2.027 1.297-3.324 1.297z" clipRule="evenodd" />
                  </svg>
                </button>

                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.141.662-1.992 1.488-1.992.219 0 .359.105.359.359 0 .219-.105.662-.105 1.009 0 .662.519 1.219 1.406 1.219 1.406 0 2.403-1.488 2.403-3.439 0-1.797-1.296-3.057-3.158-3.057-2.186 0-3.439 1.624-3.439 3.298 0 .662.254 1.371.572 1.756.063.074.072.139.053.215-.058.252-.186.749-.212.854-.034.139-.111.169-.256.102-1.39-.647-2.261-2.676-2.261-4.308 0-3.509 2.547-6.733 7.338-6.733 3.857 0 6.86 2.748 6.86 6.424 0 3.834-2.418 6.911-5.777 6.911-1.129 0-2.192-.587-2.553-1.295 0 0-.559 2.133-.695 2.656-.252.937-.936 2.107-1.393 2.821.105-.074 2.107-.937 3.158-.937z" />
                  </svg>
                </button>

                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              ©2025 Sara luxury (Private) Limited All rights reserved.
            </div>

            {/* SSL Certificate */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 px-3 py-1 rounded">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-xs text-green-700 font-medium">WEBSITE SECURED</span>
                </div>
              </div>

              {/* Payment Icons */}
              <div className="flex space-x-2">
                <Image
                  src="https://ext.same-assets.com/2520327791/2239296750.svg"
                  alt="Payment Methods"
                  width={100}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
