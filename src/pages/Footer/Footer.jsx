const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="font-bold text-xl">Task Management Platform</p>
          <p className="text-sm">Enhancing and improving task management</p>
        </div>
        <div className="flex space-x-4">
          <a href="#developers" className="hover:text-gray-500">Developers</a>
          <a href="#professionals" className="hover:text-gray-500">Professionals</a>
          <a href="#bankers" className="hover:text-gray-500">Bankers</a>
        </div>
        <div className="flex space-x-4">
          <a href="#facebook" className="hover:text-gray-500"><i className="fab fa-facebook"></i></a>
          <a href="#twitter" className="hover:text-gray-500"><i className="fab fa-twitter"></i></a>
          <a href="#linkedin" className="hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
