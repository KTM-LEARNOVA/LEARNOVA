export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">LEARNOVA</h3>
            <p>Empowering learning through innovation</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a></li>
              <li><a href="/testimonials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="/payment" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Enroll Now</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@learnova.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 LEARNOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

