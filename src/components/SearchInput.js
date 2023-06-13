import "./css/Search.css"
const SearchInput = ({ value, onChange }) => {

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <img src="images/icons/search-icon.png" alt="search-icon"></img>
    </div>
  );
};
export default SearchInput