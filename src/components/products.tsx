"use client"

export default function Products() {

  const categories = [
    {
      href: "/products/fashion",
      name: "Fashion",
      image: "https://tse2.mm.bing.net/th?id=OIP.o9MFd38T64x5vuyYO61vRgHaIn&rs=1&pid=ImgDetMain",
    },
    {
      href: "/products/glocery",
      name: "glocery",
      image: "https://freepngimg.com/download/grocery/41619-7-groceries-free-download-image.png",
    },
    {
      href: "/products/health",
      name: "Health",
      image: "https://wallpapers.com/images/hd/vega-sport-premium-vanilla-protein-powder-jijgc9a9tmld1zbo.png",
    },
    {
      href: "/products/furniture",
      name: "Furniture",
      image: "https://www.pngarts.com/files/7/Modern-Furniture-Download-PNG-Image.png",
    },
    {
      href: "/products/electronics",
      name: "Electronics",
      image: "https://www.pngplay.com/wp-content/uploads/6/Electronic-Gadgets-Transparent-Free-PNG.png",
    },
    {
      href: "/products/mobiles-tablets",
      name: "Mobiles & Tablets",
      image: "https://www.pngkey.com/png/full/377-3778414_generic-smartphone-png.png",
    },
    {
      href: "/products/gadgets",
      name: "Gadgets",
      image: "https://brain-images-ssl.cdn.dixons.com/3/7/10203573/u_10203573.jpg",
    },
    {
      href: "/products/sports",
      name: "Sports",
      image: "https://tse2.mm.bing.net/th?id=OIP.5kVVU-cdnyvBXsVpSJW-gQHaDt&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div>
      <div className="text-center text-4xl font-bold text-gray-800 mb-8">Products</div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg bg-gradient-to-r from-blue-100 to-gray-50 p-6 hover:shadow-xl transition-all"
            >
              {/* Centered Card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="mx-auto mb-4 h-40 w-40 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mb-4 text-gray-800">{category.name}</h2>
                <a
                  href={category.href}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
