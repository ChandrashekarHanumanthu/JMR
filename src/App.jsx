import { useState } from "react";

const App = () => {
  const [activeCategory, setActiveCategory] = useState('home');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = {
    foods: [
      { id: 1, name: "Chicken Pickle", price: 299, image: "https://assets.tendercuts.in/product/P/K/d697240e-8fef-42c6-a97b-2d645e3aac04.webp", description: "Authentic homemade chicken pickle with aromatic spices" },
      { id: 2, name: "Mutton Pickle", price: 349, image: "https://assets.tendercuts.in/product/P/K/bd4c6ba8-a603-4986-8471-a5c7d2a7a160.webp", description: "Rich mutton pickle prepared with traditional family recipe" },
      { id: 3, name: "Egg Pickle", price: 249, image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/latha-nair020161218194934129.jpeg", description: "Delicious egg pickle with perfect spice blend" },
      { id: 4, name: "Fish Pickle", price: 329, image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/ZG/CF/RB/145196166/product-jpeg.jpg", description: "Fresh fish pickle with coastal flavors" }
    ],
    sweets: [
      { id: 5, name: "Gulab Jamun", price: 199, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTo6k3apnsXT4B3gUFBVKwv1HYDUOUwgn8g&s", description: "Soft, syrupy gulab jamuns made with love" },
      { id: 6, name: "Jalebi", price: 179, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWVpY4lI3ggRle4nKfa3r6S5Xyue5e63ng&s", description: "Crispy, golden jalebis soaked in sugar syrup" },
      { id: 7, name: "Rasgulla", price: 189, image: "https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg", description: "Soft cottage cheese balls in light sugar syrup" },
      { id: 8, name: "Mysore Pak", price: 219, image: "https://static.toiimg.com/thumb/53376135.cms?imgsize=204335&width=800&height=800", description: "Rich, ghee-laden sweet with gram flour and sugar" }
    ],
    pickles: [
      { id: 9, name: "Mango Pickle", price: 159, image: "https://www.doctorschoiceoil.com/wp-content/uploads/2023/09/Spicy-Mango-Pickle-1200x900.png", description: "Tangy mango pickle with mustard oil and spices" },
      { id: 10, name: "Lemon Pickle", price: 149, image: "https://i0.wp.com/veenapatwardhan.com/pat-a-cake/wp-content/uploads/2024/05/Goan-Lemon-Pickle-Recipe.png?fit=760%2C400&ssl=1", description: "Zesty lemon pickle with perfect balance of flavors" },
      { id: 11, name: "Mixed Vegetable Pickle", price: 179, image: "https://img-global.cpcdn.com/recipes/e94c1a97f25d23d5/1200x630cq80/photo.jpg", description: "Assorted vegetables in aromatic pickle masala" },
      { id: 12, name: "Chilli Pickle", price: 139, image: "https://i0.wp.com/indischwindisch.com/wp-content/uploads/2023/11/Mirch-ka-achaar-6.jpg?resize=683%2C1024&ssl=1", description: "Fiery chilli pickle for spice lovers" }
    ]
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://432bf9bbfb7bb53c9ef1.cdn6.editmysite.com/uploads/b/432bf9bbfb7bb53c9ef169396b06995d00b4cabb896d0695d554d127c0dd6947/22F87637-FA83-442D-95D2-BE9DF226B4CE_1681963759.jpeg?width=2400&optimize=medium" 
                alt="JMR Foods Logo" 
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">JMR Foods</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Authentic Homemade Delicacies Crafted with Love and Traditional Recipes
            </p>
            <button 
              onClick={() => setActiveCategory('foods')}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose JMR Foods?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring the taste of home to your table with authentic, homemade recipes passed down through generations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Homemade with Love</h3>
              <p className="text-gray-600">Every product is prepared in our home kitchen using traditional methods and family recipes.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-gray-600">We use only the finest natural ingredients, free from preservatives and artificial additives.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Freshly Prepared</h3>
              <p className="text-gray-600">Our products are made in small batches to ensure freshness and quality in every bite.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Delicious Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => setActiveCategory('foods')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105">
                <img 
                  src="https://assets.tendercuts.in/product/P/K/d697240e-8fef-42c6-a97b-2d645e3aac04.webp" 
                  alt="Non Veg Pickles" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">Non-Veg Pickles</h3>
                  <p className="text-gray-200">Authentic meat-based pickles with traditional spices</p>
                </div>
              </div>
            </div>
            <div 
              onClick={() => setActiveCategory('sweets')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTo6k3apnsXT4B3gUFBVKwv1HYDUOUwgn8g&s" 
                  alt="Sweets" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">Traditional Sweets</h3>
                  <p className="text-gray-200">Homemade Indian sweets made with love</p>
                </div>
              </div>
            </div>
            <div 
              onClick={() => setActiveCategory('pickles')}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105">
                <img 
                  src="https://www.doctorschoiceoil.com/wp-content/uploads/2023/09/Spicy-Mango-Pickle-1200x900.png" 
                  alt="Pickles" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">Vegetable Pickles</h3>
                  <p className="text-gray-200">Tangy and spicy pickles made with fresh vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The chicken pickle from JMR Foods tastes exactly like my grandmother used to make. The perfect balance of spices and tanginess. Absolutely delicious!"</p>
              <div className="font-semibold">- Priya M., Mumbai</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">"I ordered the gulab jamuns for a family gathering, and everyone raved about them. So soft and perfectly soaked in syrup. Will definitely order again!"</p>
              <div className="font-semibold">- Rajiv K., Bangalore</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The mango pickle is the best I've ever tasted. You can tell it's made with care and quality ingredients. Fast shipping and excellent packaging too."</p>
              <div className="font-semibold">- Anjali S., Hyderabad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductCategory = ({ category, products }) => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{category}</h1>
          <p className="text-xl text-gray-600">
            {category === 'foods' && "Authentic non-vegetarian pickles made with traditional recipes"}
            {category === 'sweets' && "Delicious homemade sweets crafted with love"}
            {category === 'pickles' && "Tangy and spicy vegetable pickles made with fresh ingredients"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CartPage = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5h14.2M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8M5 21h14a2 2 0 002-2v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-xl text-gray-600">Your cart is empty</p>
            <button 
              onClick={() => setActiveCategory('home')}
              className="mt-4 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-orange-600 font-bold">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 ml-4"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-xl font-bold mb-6">
                <span>Total:</span>
                <span className="text-orange-600">₹{getTotalPrice()}</span>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveCategory('home')}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Continue Shopping
                </button>
                <button 
                  className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About JMR Foods</h1>
          <p className="text-xl text-gray-600">Bringing the taste of home to your table</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://432bf9bbfb7bb53c9ef1.cdn6.editmysite.com/uploads/b/432bf9bbfb7bb53c9ef169396b06995d00b4cabb896d0695d554d127c0dd6947/22F87637-FA83-442D-95D2-BE9DF226B4CE_1681963759.jpeg?width=2400&optimize=medium" 
                alt="JMR Foods Logo" 
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                JMR Foods was born out of a passion for traditional Indian cuisine and the desire to share authentic homemade flavors with the world. What started as a small family venture has grown into a beloved brand known for its quality and taste.
              </p>
              <p className="text-gray-600">
                Our founder, Mrs. Jaya Reddy, began making pickles and sweets for family and friends, who immediately fell in love with the authentic flavors. Encouraged by their enthusiasm, she decided to share these delicious creations with a wider audience.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
            <p className="text-gray-600">We source only the finest ingredients to ensure exceptional taste and quality in every product.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Recipes</h3>
            <p className="text-gray-600">Our products are made using traditional family recipes passed down through generations.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">We're confident you'll love our products, or we'll make it right with our satisfaction guarantee.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center text-lg">
            To preserve the rich culinary heritage of Indian homemade foods while making them accessible to food lovers everywhere. We believe that food made with love and traditional methods brings people together and creates lasting memories.
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Food Street, Hyderabad, Telangana 500001, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@jmrfoods.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <h3 className="font-semibold text-gray-800">Customer Support</h3>
              <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Order Processing</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://432bf9bbfb7bb53c9ef1.cdn6.editmysite.com/uploads/b/432bf9bbfb7bb53c9ef169396b06995d00b4cabb896d0695d554d127c0dd6947/22F87637-FA83-442D-95D2-BE9DF226B4CE_1681963759.jpeg?width=2400&optimize=medium" 
                alt="JMR Foods Logo" 
                className="h-12 w-auto object-contain"
              />
              <h1 className="text-2xl font-bold text-gray-800">JMR Foods</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveCategory('home')}
                className={`font-semibold transition duration-300 ${activeCategory === 'home' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveCategory('foods')}
                className={`font-semibold transition duration-300 ${activeCategory === 'foods' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Non-Veg Pickles
              </button>
              <button 
                onClick={() => setActiveCategory('sweets')}
                className={`font-semibold transition duration-300 ${activeCategory === 'sweets' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Sweets
              </button>
              <button 
                onClick={() => setActiveCategory('pickles')}
                className={`font-semibold transition duration-300 ${activeCategory === 'pickles' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Pickles
              </button>
              <button 
                onClick={() => setActiveCategory('about')}
                className={`font-semibold transition duration-300 ${activeCategory === 'about' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveCategory('contact')}
                className={`font-semibold transition duration-300 ${activeCategory === 'contact' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCart(true)}
                className="relative p-2 text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5h14.2M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8M5 21h14a2 2 0 002-2v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition duration-300"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveCategory('home');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveCategory('foods');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                Non-Veg Pickles
              </button>
              <button
                onClick={() => {
                  setActiveCategory('sweets');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                Sweets
              </button>
              <button
                onClick={() => {
                  setActiveCategory('pickles');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                Pickles
              </button>
              <button
                onClick={() => {
                  setActiveCategory('about');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setActiveCategory('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {activeCategory === 'home' && <HomePage />}
        {activeCategory === 'foods' && <ProductCategory category="Non-Veg Pickles" products={products.foods} />}
        {activeCategory === 'sweets' && <ProductCategory category="Traditional Sweets" products={products.sweets} />}
        {activeCategory === 'pickles' && <ProductCategory category="Vegetable Pickles" products={products.pickles} />}
        {activeCategory === 'about' && <AboutPage />}
        {activeCategory === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://432bf9bbfb7bb53c9ef1.cdn6.editmysite.com/uploads/b/432bf9bbfb7bb53c9ef169396b06995d00b4cabb896d0695d554d127c0dd6947/22F87637-FA83-442D-95D2-BE9DF226B4CE_1681963759.jpeg?width=2400&optimize=medium" 
                  alt="JMR Foods Logo" 
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-xl font-bold">JMR Foods</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Bringing the taste of home to your table with authentic homemade delicacies crafted with love and traditional recipes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.163c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642c.455 0 .642-.188.642-.643v-3.357c0-.454-.188-.642-.642-.642h-3.642v-2c0-2.206 1.794-4 4-4h4v3h-2.5c-1.378 0-2.5 1.121-2.5 2.5v2.5h5.5v4h-5.5v12h6v-12c0-3.309-2.691-6-6-6h-4c-3.309 0-6 2.691-6 6v12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveCategory('home')} className="text-gray-300 hover:text-white transition duration-300">Home</button></li>
                <li><button onClick={() => setActiveCategory('foods')} className="text-gray-300 hover:text-white transition duration-300">Non-Veg Pickles</button></li>
                <li><button onClick={() => setActiveCategory('sweets')} className="text-gray-300 hover:text-white transition duration-300">Sweets</button></li>
                <li><button onClick={() => setActiveCategory('pickles')} className="text-gray-300 hover:text-white transition duration-300">Pickles</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveCategory('about')} className="text-gray-300 hover:text-white transition duration-300">About Us</button></li>
                <li><button onClick={() => setActiveCategory('contact')} className="text-gray-300 hover:text-white transition duration-300">Contact Us</button></li>
                <li><button className="text-gray-300 hover:text-white transition duration-300">Shipping Policy</button></li>
                <li><button className="text-gray-300 hover:text-white transition duration-300">Return Policy</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>123 Food Street, Hyderabad</li>
                <li>Telangana 500001, India</li>
                <li>+91 98765 43210</li>
                <li>info@jmrfoods.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} JMR Foods. All rights reserved. | Made with ❤️ for authentic homemade flavors
            </p>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-orange-600">₹{item.price} x {item.quantity}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-orange-600">₹{getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;