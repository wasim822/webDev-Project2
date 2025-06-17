function Footer() {
  return (
    <footer>
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold tracking-wide">Follow us on</h3>
                <p className="space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Facebook</a>
                    <span>|</span>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">Twitter</a>
                    <span>|</span>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">Instagram</a>
                </p>
                <p className="space-x-4">
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Events</a>
                </p>
                <div className="text-xs text-gray-400 text-center">
                    <p>&copy; 2025 school.com</p>
                    <p>All contents are copyright of their authors.</p>
                </div>
            </div>
        </footer>
    </footer>
  );
}

export default Footer;