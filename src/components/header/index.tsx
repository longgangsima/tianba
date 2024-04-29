import HPNavigation from '../navigation';

const HGHeader = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-6">
      <div className="flex items-center">
        <a className="text-xl font-bold">LOGO</a>
      </div>

      <div className="flex items-center">
        {/* Women Popover */}
        <HPNavigation />
      </div>
      <div className="flex items-center">
        {/* Icons or text for Search, Help, Cart */}
        <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Search</a>
        <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
        <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Cart</a>
      </div>
    </nav>
  );
};
export default HGHeader;
