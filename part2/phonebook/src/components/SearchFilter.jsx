const SearchFilter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="filter">
      Search Filter: <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchFilter;
