export default function AmazonAffiliateStore() {
  const affiliateTags = {
    IN: 'trendingd0e54-21',
    CA: 'trendingd08bb-20',
    US: 'trendingde0e1-20',
    DEFAULT: 'trendingde0e1-20'
  };

  const getAmazonConfig = () => {
    if (typeof window === 'undefined') {
      return {
        baseUrl: 'https://www.amazon.com',
        tag: affiliateTags.DEFAULT
      };
    }

    const locale = (
      navigator.languages?.[0] ||
      navigator.language ||
      Intl.DateTimeFormat().resolvedOptions().locale ||
      ''
    ).toLowerCase();

    // India
    if (locale.includes('-in')) {
      return {
        baseUrl: 'https://www.amazon.in',
        tag: affiliateTags.IN
      };
    }

    // Canada
    if (locale.includes('-ca')) {
      return {
        baseUrl: 'https://www.amazon.ca',
        tag: affiliateTags.CA
      };
    }

    // United States
    if (locale.includes('-us')) {
      return {
        baseUrl: 'https://www.amazon.com',
        tag: affiliateTags.US
      };
    }

    // United Kingdom
    if (locale.includes('-gb')) {
      return {
        baseUrl: 'https://www.amazon.co.uk',
        tag: affiliateTags.DEFAULT
      };
    }

    // Germany
    if (locale.includes('-de')) {
      return {
        baseUrl: 'https://www.amazon.de',
        tag: affiliateTags.DEFAULT
      };
    }

    // France
    if (locale.includes('-fr')) {
      return {
        baseUrl: 'https://www.amazon.fr',
        tag: affiliateTags.DEFAULT
      };
    }

    // Japan
    if (locale.includes('-jp')) {
      return {
        baseUrl: 'https://www.amazon.co.jp',
        tag: affiliateTags.DEFAULT
      };
    }

    // Fallback for all other countries
    return {
      baseUrl: 'https://www.amazon.com',
      tag: affiliateTags.DEFAULT
    };
  };

  const { baseUrl, tag } = getAmazonConfig();

  const products = [
    {
      id: 1,
      title: 'Apple iPhone 15',
      price: '₹72,999',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
      category: 'Mobiles',
      rating: '4.8',
      link: `${baseUrl}/s?k=iphone+15&tag=${tag}`
    },
    {
      id: 2,
      title: 'Sony WH-CH520 Bluetooth Headphones',
      price: '₹4,499',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
      category: 'Audio',
      rating: '4.6',
      link: `${baseUrl}/s?k=sony+headphones&tag=${tag}`
    },
    {
      id: 3,
      title: 'ASUS TUF Gaming Laptop',
      price: '₹59,999',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
      category: 'Gaming',
      rating: '4.5',
      link: `${baseUrl}/s?k=asus+gaming+laptop&tag=${tag}`
    },
    {
      id: 4,
      title: 'boAt Airdopes 141',
      price: '₹1,299',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop',
      category: 'Electronics',
      rating: '4.4',
      link: `${baseUrl}/s?k=boat+airdopes+141&tag=${tag}`
    }
  ];

  const navLinks = [
    {
      name: "Today's Deals",
      link: `${baseUrl}/deals?tag=${tag}`
    },
    {
      name: 'Best Sellers',
      link: `${baseUrl}/gp/bestsellers/?tag=${tag}`
    },
    {
      name: 'Electronics',
      link: `${baseUrl}/s?k=electronics&tag=${tag}`
    },
    {
      name: 'Gaming',
      link: `${baseUrl}/s?k=gaming+accessories&tag=${tag}`
    },
    {
      name: 'Home & Kitchen',
      link: `${baseUrl}/s?k=home+kitchen&tag=${tag}`
    },
    {
      name: 'Fitness',
      link: `${baseUrl}/s?k=fitness+products&tag=${tag}`
    },
    {
      name: 'Trending Finds',
      link: `${baseUrl}/s?k=viral+products&tag=${tag}`
    }
  ];

  return (
    <div className="min-h-screen bg-[#eaeded] font-sans">
      <header className="sticky top-0 z-50 shadow-lg">
        <div className="bg-[#131921] px-6 py-3 text-white">
          <div className="max-w-7xl mx-auto flex items-center gap-6">
            <a href={baseUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://dummyimage.com/200x60/facc15/000000&text=TrendingDealZone"
                alt="TrendingDealZone"
                className="h-14 object-contain"
              />
            </a>

            <div className="flex-1 flex bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search trending products"
                className="flex-1 px-4 py-3 outline-none text-black"
              />

              <button className="bg-yellow-400 px-6 font-bold text-black hover:bg-yellow-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#232f3e] text-sm text-white">
          <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 overflow-x-auto">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap hover:text-yellow-300 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Trending Products & Daily Deals
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Explore viral gadgets, gaming accessories, electronics, mobile phones, and trending Amazon products updated daily.
            </p>

            <a
              href={`${baseUrl}/deals?tag=${tag}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 px-8 py-4 rounded-xl font-bold inline-block hover:bg-yellow-500 transition"
            >
              Shop Deals
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-8">Today's Trending Deals</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between mb-3">
                  <span className="text-sm bg-yellow-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>

                  <span>⭐ {product.rating}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 min-h-[56px]">
                  {product.title}
                </h3>

                <p className="text-2xl font-bold mb-4">
                  {product.price}
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-yellow-400 py-3 rounded-xl font-bold hover:bg-yellow-500 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
