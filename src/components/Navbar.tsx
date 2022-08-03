import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-4 lg:px-0">
      <Link to="/" className="text-2xl font-extrabold ">
        WAGPAY
      </Link>
      <button className="inline-flex items-center justify-center px-6 py-2 font-medium text-white bg-gradient-to-r from-wid-indigo to-wid-purple rounded-full">
        Claim ID
      </button>
    </div>
  );
};

export default Navbar;
