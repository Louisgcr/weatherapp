import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { ISidebarProps } from 'interface';
import { useBackground } from 'context/BackgroundColorContext';
import SidebarWeatherWidget from 'components/widgets/SideBarWeatherWidget';


const SideBar: React.FC<ISidebarProps> = ({ setLatLong, locations, locationData }: ISidebarProps) => {

  const { backgroundColor } = useBackground();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 w-96 h-dvh ${backgroundColor} bg-opacity-100 text-white transform duration-300 z-50 ${isOpen ? 'translate-x-0 ml-0' : '-translate-x-full ml-0.5'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <SearchBar onSelect={setLatLong} />
        {locationData.map((loc, index) => (
          <div className='relative flex p-4 c' onClick={() => setLatLong(locations[index])}>
            <SidebarWeatherWidget key={index} latLong={locations[index]} weatherV3={loc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;