
import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
    alert('Message sent successfully!');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-gray-200 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <small className="uppercase tracking-widest text-gray-400 text-xs">Get in Touch</small>
          <h1 className="text-4xl font-bold leading-tight mt-2 text-rose-700">
            We’re Here to <br className="md:hidden" />Support You
          </h1>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Whether you have questions, need help getting started, or want to learn more — reach out anytime.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white text-[#083c3f] rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8 p-6 md:p-10">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Contact Details:</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@mechatron.com" className="hover:underline">support@mechatron.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254725168740" className="hover:underline">+254 725 168 740</a>
            </p>
            <p>
              <strong>Address:</strong> 123 Waiyaki Way, Nairobi City, CA 90210
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl mt-4 flex-wrap">
              {[
                {
                  href: 'https://www.linkedin.com/',
                  img: 'https://www.iconpacks.net/icons/5/free-black-linkedin-logo-icon-15915.png',
                  alt: 'LinkedIn',
                },
                {
                  href: 'https://www.facebook.com/',
                  img: 'https://www.iconpacks.net/icons/2/free-icon-facebook-5213.png',
                  alt: 'Facebook',
                },
                {
                  href: 'https://www.instagram.com/',
                  img: 'https://www.iconpacks.net/icons/2/free-icon-black-instagram-logo-3497.png',
                  alt: 'Instagram',
                },
                {
                  href: 'https://www.whatsapp.com/',
                  img: 'https://www.iconpacks.net/icons/2/free-icon-whatsapp-4451.png',
                  alt: 'WhatsApp',
                },
              ].map(({ href, img, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition"
                >
                  <img src={img} alt={alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 pt-40">We typically respond within 12 hours.</p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Send Us a Message</h3>
            <div className="bg-[#f5f6f4] p-6 rounded-2xl">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full border border-gray-300 bg-white px-4 py-3 rounded-lg text-[#083c3f] outline-none focus:ring-2 focus:ring-[#083c3f]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="w-full border border-gray-300 bg-white px-4 py-3 rounded-lg text-[#083c3f] outline-none focus:ring-2 focus:ring-[#083c3f]"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#083c3f] text-white px-6 py-3 rounded-full hover:bg-[#062f30] transition w-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
