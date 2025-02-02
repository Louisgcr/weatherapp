import React, { useEffect, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useKeyPress from 'hooks/useKeyPress';
import { CloseIcon, SearchIcon } from 'assets/icons/icons';
import { ILatLongDescription } from 'interface';

interface ISearchBarProps {
  onSelect: (latLon: ILatLongDescription) => void;
}

const SearchBar = ({ onSelect }: ISearchBarProps) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 1000,
  });

  const [search, setSearch] = useState('');
  const [idx, setIdx] = useState(-1);

  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const enterPressed = useKeyPress('Enter');

  const menuRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setSearch('');
        clearSuggestions();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    if (search.length <= 0) {
      return
    }

    if (arrowDownPressed) {
      setIdx((prev) => (prev + 1) % data.length);
    }

    if (arrowUpPressed) {
      if (idx === -1) {
        setIdx(() => (data.length - 1));
      } else {
        setIdx((prev) => (prev - 1 + data.length) % data.length);
      }
    }

    if (enterPressed) {
      handleSelect(data[idx].description);
    }

  }, [arrowDownPressed, arrowUpPressed, enterPressed]);

  const handleSelect = async (description: string) => {
    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      onSelect({ description: description, lat, long: lng }); // Pass lat/lon to the parent component
      clearSuggestions();
      setValue(description, false);
      setSearch("")
      setIdx(-1);
    } catch (error) {
      console.error("Error getting geolocation:", error);
    }
  };


  return (
    <div ref={menuRef} className="group flex  relative w-full bg-blue-600 bg-opacity-30 rounded-lg p-4">
      <div className={`absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none ${search?.length === 0 ? "motion-rotate-in-[90deg] motion-opacity-in-100" : "opacity-0"}`}>
        <SearchIcon className='fill-current' />
      </div>
      <div className={`absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer hover:text-blue-500 ${search?.length !== 0 ? "motion-rotate-in-[-90deg] motion-opacity-in-100" : "opacity-0"}`}
        onClick={() => setSearch('')}>
        <CloseIcon className='fill-current' />
      </div>

      <input ref={inputRef}
        type='text'
        className='flex w-full pl-10 text-white placeholder-slate-300 border border-slate-300 rounded-lg bg-transparent focus:border-white outline-none'
        placeholder='Search for a location'
        value={search}
        onChange={handleChange}
        onFocus={() => { }}>
      </input>

      <div className='absolute top-14 left-0 w-full bg-slate-300 rounded-lg shadow-lg'>
        {search?.length > 0 && data.map((item, index) => (
          <div key={index} className={`p-4 cursor-pointer hover:bg-gray-100 hover:rounded-lg ${index === idx ? 'bg-gray-100 rounded-lg' : ''}`}
            onClick={() => handleSelect(item.description)}>
            <p className='text-gray-800'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;