import Image from 'next/image'

const mainCategories = [
  {
    id: 'basics',
    name: 'BASICS',
    image: '/banner.png',
    bgColor: '#554537'
  },
  {
    id: 'luxury-pret',
    name: 'LUXURY PRET',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#806a57'
  },
  {
    id: 'jewelry',
    name: 'JEWELRY',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#98918e'
  },
  {
    id: 'menswear',
    name: 'MENSWEAR',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#b28b65'
  }
]

const springSummerCategories = [
  {
    id: 'prints-unstitched',
    name: 'PRINTS UNSTITCHED',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#554537',
    size: 'large'
  },
  {
    id: 'printed',
    name: 'PRINTED',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#806a57',
    size: 'medium'
  },
  {
    id: 'festive',
    name: 'FESTIVE',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#98918e',
    size: 'medium'
  },
  {
    id: 'essential-pret',
    name: 'ESSENTIAL PRET',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#b28b65',
    size: 'large'
  },
  {
    id: 'ready-to-wear-2pc',
    name: 'READY TO WEAR - 2 PC',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#806a57',
    size: 'medium'
  },
  {
    id: 'ready-to-wear-3pc',
    name: 'READY TO WEAR - 3 PC',
    image: 'https://ext.same-assets.com/2520327791/375037467.gif',
    bgColor: '#ceccc5',
    size: 'medium'
  }
]

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Categories */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            SHOP BY CATEGORY
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainCategories.map((category) => (
              <div
                key={category.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                style={{ backgroundColor: category.bgColor }}
              >
                <div className="aspect-square flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: category.bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                      {category.name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spring/Summer Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            SPRING / SUMMER
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Prints Unstitched - Large */}
            <div className="lg:row-span-2">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg h-full min-h-[300px] lg:min-h-[400px]"
                style={{ backgroundColor: springSummerCategories[0].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[0].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                      {springSummerCategories[0].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Printed */}
            <div>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                style={{ backgroundColor: springSummerCategories[1].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[1].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg md:text-xl font-bold tracking-wide">
                      {springSummerCategories[1].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Festive */}
            <div>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                style={{ backgroundColor: springSummerCategories[2].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[2].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg md:text-xl font-bold tracking-wide">
                      {springSummerCategories[2].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Essential Pret - Large */}
            <div className="lg:row-span-2">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg h-full min-h-[300px] lg:min-h-[400px]"
                style={{ backgroundColor: springSummerCategories[3].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[3].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                      {springSummerCategories[3].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Ready to Wear 2PC */}
            <div>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                style={{ backgroundColor: springSummerCategories[4].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[4].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-sm md:text-base font-bold tracking-wide">
                      {springSummerCategories[4].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Ready to Wear 3PC */}
            <div>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                style={{ backgroundColor: springSummerCategories[5].bgColor }}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: springSummerCategories[5].bgColor }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-sm md:text-base font-bold tracking-wide">
                      {springSummerCategories[5].name}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
