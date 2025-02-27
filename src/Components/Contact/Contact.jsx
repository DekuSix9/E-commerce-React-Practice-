import Footer from "../Footer/Footer";

const Contact = () => {
    
    return (
      <div>
          <div className="max-w-5xl mx-auto ">
      <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700"> We would love to hear from you! Reach out to us anytime.</p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg font-medium"><span className="text-blue-600 text-2xl">📧</span> contact@shop.com</p>
            <p className="flex items-center gap-3 text-lg font-medium"><span className="text-green-600 text-2xl">📞</span> +123 456 7890</p>
            <p className="flex items-center gap-3 text-lg font-medium"><span className="text-red-600 text-2xl">📍</span> 123 E-Commerce St, City</p>
          </div>
        </div>
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6 animate-slide-up">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 transition duration-300"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg hover:opacity-90 transition duration-300 transform hover:scale-105">Send Message</button>
        </form>
      </div>
    </div>
    <Footer ></Footer>
      </div>
       
    
    );
};

export default Contact;