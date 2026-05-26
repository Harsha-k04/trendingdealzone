export default function AmazonAffiliateStore() {
  const products = [
    {
      id: 1,
      title: 'boAt Airdopes 141 Bluetooth TWS Earbuds',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop',
      category: 'Electronics',
      rating: '4.4',
      link: 'https://www.amazon.in/s?k=boAt+Airdopes+141&tag=trendingde0e1-20'
    },
    {
      id: 2,
      title: 'Noise ColorFit Pro Smart Watch',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop',
      category: 'Smart Watches',
      rating: '4.3',
      link: 'https://www.amazon.in/s?k=Noise+ColorFit+Pro+Smart+Watch&tag=trendingde0e1-20'
    },
    {
      id: 3,
      title: 'Apple iPhone 15',
      price: '₹72,999',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
      category: 'Mobiles',
      rating: '4.8',
      link: 'https://www.amazon.in/s?k=Apple+iPhone+15&tag=trendingde0e1-20'
    },
    {
      id: 4,
      title: 'ASUS TUF Gaming Laptop',
      price: '₹59,990',
      image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
      category: 'Gaming',
      rating: '4.6',
      link: 'https://www.amazon.in/s?k=ASUS+TUF+Gaming+Laptop&tag=trendingde0e1-20'
    },
    {
      id: 5,
      title: 'Prestige Electric Rice Cooker',
      price: '₹2,799',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      category: 'Home & Kitchen',
      rating: '4.5',
      link: 'https://www.amazon.in/s?k=Prestige+Electric+Rice+Cooker&tag=trendingde0e1-20'
    },
    {
      id: 6,
      title: 'Fire-Boltt Ninja Fitness Band',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      category: 'Fitness',
      rating: '4.2',
      link: 'https://www.amazon.in/s?k=Fire-Boltt+Ninja+Fitness+Band&tag=trendingde0e1-20'
    },
    {
      id: 7,
      title: 'Logitech Wireless Gaming Mouse',
      price: '₹1,995',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop',
      category: 'Accessories',
      rating: '4.7',
      link: 'https://www.amazon.in/s?k=Logitech+Wireless+Gaming+Mouse&tag=trendingde0e1-20'
    },
    {
      id: 8,
      title: 'Sony WH-CH520 Bluetooth Headphones',
      price: '₹4,489',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
      category: 'Audio',
      rating: '4.6',
      link: 'https://www.amazon.in/s?k=Sony+WH-CH520+Bluetooth+Headphones&tag=trendingde0e1-20'
    },
    {
      id: 9,
      title: 'Samsung Galaxy S24 Ultra',
      price: '₹1,09,999',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
      category: 'Mobiles',
      rating: '4.8',
      link: 'https://www.amazon.in/s?k=Samsung+Galaxy+S24+Ultra&tag=trendingde0e1-20'
    },
    {
      id: 10,
      title: 'HP Victus Gaming Laptop',
      price: '₹67,990',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
      category: 'Laptops',
      rating: '4.5',
      link: 'https://www.amazon.in/s?k=HP+Victus+Gaming+Laptop&tag=trendingde0e1-20'
    },
    {
      id: 11,
      title: 'JBL Flip Bluetooth Speaker',
      price: '₹6,499',
      image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop',
      category: 'Speakers',
      rating: '4.7',
      link: 'https://www.amazon.in/s?k=JBL+Flip+Bluetooth+Speaker&tag=trendingde0e1-20'
    },
    {
      id: 12,
      title: 'realme Buds Wireless 3',
      price: '₹1,799',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1200&auto=format&fit=crop',
      category: 'Audio',
      rating: '4.3',
      link: 'https://www.amazon.in/s?k=realme+Buds+Wireless+3&tag=trendingde0e1-20'
    },
    {
      id: 13,
      title: 'Philips Air Fryer',
      price: '₹8,999',
      image: 'https://images.unsplash.com/photo-1585515656763-40743b9d1c1d?q=80&w=1200&auto=format&fit=crop',
      category: 'Kitchen',
      rating: '4.6',
      link: 'https://www.amazon.in/s?k=Philips+Air+Fryer&tag=trendingde0e1-20'
    },
    {
      id: 14,
      title: 'Dell 24 Inch Monitor',
      price: '₹11,499',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop',
      category: 'Monitors',
      rating: '4.5',
      link: 'https://www.amazon.in/s?k=Dell+24+Inch+Monitor&tag=trendingde0e1-20'
    },
    {
      id: 15,
      title: 'MI Power Bank 20000mAh',
      price: '₹2,199',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1200&auto=format&fit=crop',
      category: 'Accessories',
      rating: '4.4',
      link: 'https://www.amazon.in/s?k=MI+Power+Bank+20000mAh&tag=trendingde0e1-20'
    },
    {
      id: 16,
      title: 'Amazon Echo Dot (5th Gen)',
      price: '₹5,499',
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1200&auto=format&fit=crop',
      category: 'Smart Home',
      rating: '4.7',
      link: 'https://www.amazon.in/s?k=Amazon+Echo+Dot+5th+Gen&tag=trendingde0e1-20'
    }
  ];

  return (
    <div className="min-h-screen bg-[#eaeded] text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-lg">
        <div className="bg-[#0b1220] text-[#facc15] px-6 py-2">
          <div className="max-w-7xl mx-auto flex items-center gap-6">
            <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img
                src="TrendingZone\public\ChatGPT Image May 25, 2026, 04_49_02 PM.png"
                alt="TrendingDealZone Logo"
                className="h-16 object-contain"
              />
            </a>

            <div className="flex-1">
              <div className="bg-white rounded-md flex overflow-hidden border border-gray-300 shadow-sm">
                <input
                  type="text"
                  placeholder="Search trending products"
                  className="flex-1 px-4 py-3 text-black outline-none"
                />
                <button className="bg-[#facc15] px-8 text-black font-bold hover:bg-[#eab308] transition">
                  Search
                </button>
              </div>
            </div>

            <div className="hidden md:flex gap-8 text-sm">
              <div>
                <p className="text-[#fde68a]">Hello, Shopper</p>
                <p className="font-bold text-white">Account</p>
              </div>

              <div>
                <p className="text-[#fde68a]">Returns</p>
                <p className="font-bold text-white">& Orders</p>
              </div>

              <div className="font-bold text-lg text-[#facc15]">
                🛒 Cart
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111827] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 overflow-x-auto text-sm font-medium">
            <a href="https://www.amazon.in/deals?tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Today's Deals</a>
            <a href="https://www.amazon.in/gp/bestsellers/?tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Best Sellers</a>
            <a href="https://www.amazon.in/s?k=electronics&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Electronics</a>
            <a href="https://www.amazon.in/s?k=gaming+accessories&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Gaming</a>
            <a href="https://www.amazon.in/s?k=home+kitchen&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Home & Kitchen</a>
            <a href="https://www.amazon.in/s?k=fitness+products&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Fitness</a>
            <a href="https://www.amazon.in/s?k=trending+products&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] text-[#fde68a] whitespace-nowrap">Trending Finds</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-[#eaeded] border-b">
        <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/ChatGPT Image May 25, 2026, 04_49_02 PM(1).png"
            alt="TrendingDealZone Banner"
            className="w-full rounded-2xl shadow-lg object-cover bg-white mb-6"
          />
        </a>
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-600 font-bold uppercase tracking-wider mb-4">
              Trending Amazon Finds
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6 text-[#111827]">
              Discover Viral Products & Daily Deals
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Shop trending gadgets, home essentials, gaming accessories, fitness gear, and top-rated products loved by thousands of shoppers.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Shop Best Deals
              </a>

              <a
                href="#products"
                className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Explore Trending Products
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl shadow-lg h-72 object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl shadow-lg h-72 object-cover mt-12"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Popular Categories</h3>
          <p className="text-gray-600">Explore top-rated Amazon affiliate products</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: 'Electronics',
              icon: '📱',
              link: 'https://www.amazon.in/s?k=electronics&tag=trendingde0e1-20'
            },
            {
              name: 'Fitness',
              icon: '⌚',
              link: 'https://www.amazon.in/s?k=fitness+products&tag=trendingde0e1-20'
            },
            {
              name: 'Gaming',
              icon: '🎮',
              link: 'https://www.amazon.in/s?k=gaming+accessories&tag=trendingde0e1-20'
            },
            {
              name: 'Home',
              icon: '🏠',
              link: 'https://www.amazon.in/s?k=home+kitchen&tag=trendingde0e1-20'
            }
          ].map((category) => (
            <a
              key={category.name}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-1 block text-center border border-gray-200"
            >
              <div className="text-5xl mb-4">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold">{category.name}</h4>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#eaeded] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h3 className="text-4xl font-bold">Today's Trending Deals</h3>
              <p className="text-gray-600 mt-2">Top trending Amazon India products updated daily</p>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-2xl px-5 py-3 w-full md:w-80 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-200 hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain bg-white p-4"
                />

                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <span className="text-sm font-semibold">⭐ {product.rating}</span>
                  </div>

                  <h4 className="text-base font-semibold mb-2 leading-snug min-h-[48px]">{product.title}</h4>
                  <p className="text-2xl font-bold text-black mb-3">{product.price}</p>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#ffcc4d] text-black py-3 rounded-lg font-bold hover:bg-[#ffb300] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-[#111827]">Latest Shopping & Tech Blogs</h3>
          <p className="text-gray-600 mt-2">
            Explore mobile reviews, electronics updates, book recommendations, trending gadgets, gaming accessories, and viral Amazon deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" alt="Best Smartphones India" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-orange-500 uppercase">Mobile Reviews</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Best Smartphones to Buy in India 2026</h4>
              <p className="text-gray-600 text-sm mb-5">Compare top smartphones with best camera quality, battery backup, gaming performance, and value for money.</p>
              <a href="https://www.amazon.in/s?k=best+smartphones&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop" alt="Best Books" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-blue-500 uppercase">Book Reviews</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Top Must-Read Books for Students & Entrepreneurs</h4>
              <p className="text-gray-600 text-sm mb-5">Explore bestselling finance, self-help, motivational, and business books trending in India.</p>
              <a href="https://www.amazon.in/s?k=best+selling+books&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="Electronics Updates" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-green-500 uppercase">Electronics Updates</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Latest Electronics & Gadget Launches</h4>
              <p className="text-gray-600 text-sm mb-5">Stay updated with trending laptops, headphones, smartwatches, gaming gadgets, and electronics launches.</p>
              <a href="https://www.amazon.in/s?k=latest+electronics&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop" alt="Gaming Accessories" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-purple-500 uppercase">Gaming Accessories</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Top Gaming Accessories Every Gamer Needs</h4>
              <p className="text-gray-600 text-sm mb-5">Discover gaming keyboards, mice, controllers, gaming chairs, and accessories trending in India.</p>
              <a href="https://www.amazon.in/s?k=gaming+accessories&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Budget Gadgets" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-pink-500 uppercase">Budget Gadgets</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Best Gadgets Under ₹1000 in India</h4>
              <p className="text-gray-600 text-sm mb-5">Explore affordable gadgets, mobile accessories, smart devices, and trending products under budget.</p>
              <a href="https://www.amazon.in/s?k=best+gadgets+under+1000&tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-200">
            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop" alt="Trending Deals" className="w-full h-52 object-cover" />
            <div className="p-5">
              <span className="text-sm font-semibold text-red-500 uppercase">Trending Deals</span>
              <h4 className="text-xl font-bold mt-3 mb-3">Viral Amazon Products Trending Daily</h4>
              <p className="text-gray-600 text-sm mb-5">Find trending TikTok gadgets, viral home products, electronics deals, and best-selling Amazon India finds.</p>
              <a href="https://www.amazon.in/deals?tag=trendingde0e1-20" target="_blank" rel="noopener noreferrer" className="text-[#ff9900] font-bold hover:underline">Read More</a>
            </div>
          </article>
        </div>
      </section>

      <footer id="contact" className="bg-[#131a22] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">TrendingDealZone</h4>
            <p>
              Discover trending gadgets, viral Amazon finds, smart shopping deals, electronics updates, mobile reviews, and top online products updated daily.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
              <li><a href="#blog" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            </ul>
          </div>

          <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer">
            <img src="TrendingZone\public\ChatGPT Image May 25, 2026, 04_49_02 PM.png" alt="Footer Logo" className="h-14 object-contain" />
          </a>
        </div>
      </footer>
    </div>
  );
}