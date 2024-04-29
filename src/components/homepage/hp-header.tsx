const HGHeader = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      {/* Left side - Logo */}
      <div className="flex items-center">
        {/* <Link href="/"> */}
        <a className="text-xl font-bold">LOGO</a>
        {/* </Link> */}
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex items-center">
        {/* Women Popover */}
        {/* <Popover className="relative">
            <Popover.Button
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
              onMouseEnter={() => setShowWomen(true)}
              onMouseLeave={() => setShowWomen(false)}
            >
              Women
            </Popover.Button>
            {showWomen && (
              <Popover.Panel className="absolute z-10 mt-2 w-48">
                <div className="bg-white rounded shadow-lg py-1">
                  {womenCategories.map(category => (
                    <Link href={`/women/${category.toLowerCase()}`} key={category}>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{category}</a>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            )}
          </Popover> */}

        {/* Other navigation links */}
      </div>

      {/* Right side - Search, Help, Cart */}
      <div className="flex items-center">{/* Icons or text for Search, Help, Cart */}</div>
    </nav>
  );
};
export default HGHeader;
