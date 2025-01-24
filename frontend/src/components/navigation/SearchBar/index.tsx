import React, { useEffect, useState } from 'react';
import useKeyPress from 'hooks/useKeyPress';
import { CloseIcon, SearchIcon } from 'assets/icons/icons';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const enterPressed = useKeyPress('Enter');

  const menuRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div ref={menuRef} className="flex relative w-full my-3">
      <div className={`absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none ${search?.length === 0 ? "motion-rotate-in-[90deg] motion-opacity-in-100" : "opacity-0"}`}>
        <SearchIcon className='fill-current' />
      </div>
      <div className={`absolute inset-y-0 right-0 flex items-center pr-2.5 cursor-pointer hover:text-blue-500 ${search?.length !== 0 ? "motion-rotate-in-[-90deg] motion-opacity-in-100" : "opacity-0"}`}
        onClick={() => setSearch('')}>
        <CloseIcon className='fill-current' />
      </div>

      <input ref={inputRef}
        type='text'
        className='flex w-full pl-10 border border-gray-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500'
        placeholder='Search for a country'
        value={search}
        onChange={handleChange}
        onFocus={() => { }}>
      </input>


    </div>
  );
}

export default SearchBar;