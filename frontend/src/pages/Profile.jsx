import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    
      <div className="max-w-[1450px] mx-auto p-4 md:p-6">
        <div className="flex max-[1110px]:flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left section */}
          <div className="w-full md:w-1/4 h-48 mt-8 shadow-md rounded-lg p-6 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Jhone Doe</h1>
            <p className="text-lg text-gray-600 mb-4">Jhone@gmail.com</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer">
              Logout
            </button>
          </div>

          {/* Right section – Order Table */}
          <div className="w-full md:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    
  );
};

export default Profile;
