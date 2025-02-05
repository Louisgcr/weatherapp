import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { ISidebarProps } from 'interface';


const SideBar: React.FC<ISidebarProps> = ({ setLatLong }: ISidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 w-72 h-dvh bg-gray-500 text-white transform duration-300 z-50 ${isOpen ? 'translate-x-0 ml-0' : '-translate-x-full ml-0.5'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        <SearchBar onSelect={setLatLong} />
      </div>
    </div>
  );
};

export default SideBar;