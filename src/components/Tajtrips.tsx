import React, { useState } from 'react';
import { Menu, X, MapPin, Clock, Users, Phone, Mail, Star } from 'lucide-react';
import tajMahalHero from '../images/taj-mahal-hero.webp';  // hero image
import sunrisetour from '../images/sunrise-tour.jpeg';  // hero image
import fullDayTour from '../images/full-day-tour.jpeg';  // hero image
import goldenTriangleTour from '../images/golden-triangle-tour.jpeg';  // hero image
import agraFoodTour from '../images/agra-food-tour.jpeg';  // hero image
import moonlightTour from '../images/moonlight-tour.jpeg';  // hero image
import heritageTour from '../images/heritage-tour.jpeg';  // hero image

interface FormValues {
  name: string;
  email: string;
  phone: string;
  groupSize: string;
  date: string;
  message: string;
}

interface Tour {
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
}

interface Testimonial {
  name: string;
  country: string;
  text: string;
}

const createWhatsAppUrl = (message: string): string => {
  const phoneNumber = "919319821522"; // Replace with your actual number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const TajTrips: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

// Separate tours data array
const toursData: Tour[] = [
  {
    title: "Taj Mahal Sunrise Tour",
    description: "Experience the breathtaking beauty of the Taj Mahal at sunrise",
    duration: "4 hours",
    groupSize: "Up to 6 people",
    price: "$45",
    image: sunrisetour
  },
  {
    title: "Agra Full Day Tour",
    description: "Visit Taj Mahal, Agra Fort, and other historical monuments",
    duration: "8 hours",
    groupSize: "Up to 8 people",
    price: "$75",
    image: fullDayTour
  },
  {
    title: "Golden Triangle Tour",
    description: "Explore Delhi, Agra, and Jaipur in a comprehensive tour",
    duration: "3 days",
    groupSize: "Up to 10 people",
    price: "$299",
    image: goldenTriangleTour
  },
  {
    title: "Agra Food Tour",
    description: "Experience the culinary delights of Agra with local food experts",
    duration: "4 hours",
    groupSize: "Up to 8 people",
    price: "$35",
    image: agraFoodTour
  },
  {
    title: "Moonlight Taj Tour",
    description: "View the Taj Mahal under the magical moonlight",
    duration: "2 hours",
    groupSize: "Up to 6 people",
    price: "$55",
    image: moonlightTour
  },
  {
    title: "Heritage Walking Tour",
    description: "Explore the hidden gems of Agra's rich history",
    duration: "3 hours",
    groupSize: "Up to 10 people",
    price: "$25",
    image: heritageTour
  }
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-800">TajTrips</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-800">Home</a>
              <a href="#tours" className="text-gray-600 hover:text-blue-800">Tours</a>
              <a href="#about" className="text-gray-600 hover:text-blue-800">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-800">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-800">Contact</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Home</a>
            <a href="#tours" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Tours</a>
            <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">About</a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Testimonials</a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="pt-16">
        <div className="relative">
          <img 
            src={tajMahalHero} 
            alt="Taj Mahal" 
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Experience the Majesty of the Taj Mahal</h1>
              <p className="text-xl mb-8">Professional guided tours with a local expert</p>
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
              >
                Book Your Tour
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div id="tours" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Popular Tours</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {toursData.map((tour, index) => (
        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
            <p className="text-gray-600 mb-4">{tour.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center font-semibold text-lg text-blue-600">
                {tour.price}
              </div>
              </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <a href="#contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">Book Now</a>
                    <a href={createWhatsAppUrl(`Hi, I'm interested in the ${tour.title} (${tour.price})`)} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>WhatsApp</a>
                  </div>
                </div>
            </div>
            ))
            }
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                country: "USA",
                text: "The sunrise tour of Taj Mahal was magical. Our guide was incredibly knowledgeable!"
              },
              {
                name: "David Chen",
                country: "Singapore",
                text: "Best tour guide in Agra! Made our Golden Triangle tour unforgettable."
              },
              {
                name: "Emma Watson",
                country: "UK",
                text: "Wonderful experience! The historical insights provided were fascinating."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Tour</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                <input
                  type="number"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+91 93198 21522</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>contact@tajtrips.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Agra, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#tours" className="hover:text-blue-400">Tours</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">We Accept</h4>
              <p className="text-sm text-gray-400">
                Major credit cards, PayPal, and local payment methods accepted.
                All transactions are secure and encrypted.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} TajTrips. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TajTrips;