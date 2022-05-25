import SEARCH_INPUT_TEXT from '../../constants/searchBarText';
import SearchInput from './SearchInput';

function SearchBar() {
  return (
    <>
      {Object.entries(SEARCH_INPUT_TEXT).map(([key, { label, placeholder }]) => (
        <SearchInput key={key} label={label} placeholder={placeholder} />
      ))}
    </>
  );
}

export default SearchBar;
