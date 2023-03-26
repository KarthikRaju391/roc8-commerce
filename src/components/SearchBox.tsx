import React from "react";

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input className="p-3 border-2 rounded-md font-semibold" placeholder="Search Products" type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </div>
  );
};
