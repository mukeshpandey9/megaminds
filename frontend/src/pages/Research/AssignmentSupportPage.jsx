import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFileSignature, faClock, faComments, faInfoCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const AssignmentSupportPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'Instant Assignment Help',
      icon: faGraduationCap,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Reliable Experts:</strong> Our team consists of highly qualified Indian experts who have graduated from Australian universities.</li>
          <li><strong>Customized Solutions:</strong> Tailored assignment solutions to meet your specific needs and academic requirements.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock online support in English and Hindi for all subjects.</li>
        </ul>
      )
    },
    {
      title: 'Affordable & Timely Delivery',
      icon: faFileSignature,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Quick Turnaround:</strong> Fast and reliable delivery of assignments within your deadlines.</li>
          <li><strong>Best Price Guarantee:</strong> High-quality work at competitive prices to suit your budget.</li>
          <li><strong>Unique & Error-Free:</strong> Ensuring 100% originality and error-free assignments.</li>
        </ul>
      )
    },
    {
      title: 'Expert Consultation',
      icon: faComments,
      content: (
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Free Consultation:</strong> Get a free expert consultation to understand how we can assist you with your assignments.</li>
          <li><strong>Personalized Guidance:</strong> Receive tailored advice and solutions from professionals.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="text-gray-800">
      <div className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-2 text-white mt-1">
        <span className="text-sm font-medium">Home / Assignment Support</span>
      </div>
      
      {/* Section 1 - Introduction with Image */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            {/* Text Block */}
            <div className="md:w-2/3 mb-8 mr-3">
              <h2 className="text-3xl font-bold text-center text-black mb-4">
                Instant Assignment Help at{" "}
                <span className="text-3xl font-semibold text-orange-600 mb-4">MEGAMINDS</span>
              </h2>
              <p className="text-lg text-justify mb-4">
                Crafting success stories since 2009, MEGAMINDS has been a trusted provider of assignment support services, offering quick and affordable solutions with a professional touch. Our reliable Indian experts, graduated from Australian universities, are dedicated to delivering customized assignment solutions tailored to your needs.
              </p>
              <p className="text-lg text-justify mb-4">
                We pride ourselves on our commitment to timely delivery, ensuring that your assignments are 100% unique and error-free. Our 24/7 online support, available in both English and Hindi, guarantees that you receive the help you need whenever you need it.
              </p>
              <p className="text-lg text-justify mb-4">
                Boost your grades today with our high-quality academic solutions. Stay calm, achieve success, and secure your path to academic excellence with MEGAMINDS.
              </p>
              <p className="text-lg text-justify mb-4">
                Contact us at +91 875 047 8831 for a free expert consultation and discover how our assignment support can make a difference in your academic journey.
              </p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-500">
                Get Assistance
              </button>
            </div>

            {/* Form Block */}
            <div className="md:w-1/3 ml-5">
              <form className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-4 text-white mt-1">
                <h2 className="text-3xl font-semibold text-center text-orange-100 mb-4">
                  Register for Assignment Support
                </h2>

                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
                    Contact Number (Whatsapp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="subject">
                    Select Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    {/* Add more subjects as needed */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="urgency">
                    Select Urgency/Deadline
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="" disabled>Select urgency</option>
                    <option value="24 Hours">24 Hours</option>
                    <option value="3 Days">3 Days</option>
                    <option value="1 Week">1 Week</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
                    Please explain how can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="captcha">
                    Captcha
                  </label>
                  <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-white text-sm">
                    I agree with the <a href="/privacy-policy" className="text-orange-500 underline">Privacy Policy</a> and <a href="/terms-conditions" className="text-orange-500 underline">Terms & Conditions</a> (Recommended)
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Our Assignment Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md ${activeService === index ? 'border-l-4 border-orange-500' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-orange-600 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                </div>
                {activeService === index && service.content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssignmentSupportPage;
