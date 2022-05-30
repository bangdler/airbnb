import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import SEARCH_INPUT_TEXT from '../../../constants/searchBarText';
import { SearchBarContext } from '@component/header/search-bar/SearchBarProvider';
import SearchInput from '@/component/header/search-bar/SearchInput';

const searchInputText = Object.entries(SEARCH_INPUT_TEXT);

function SearchBar() {
  const { isFocus, resetFocusState } = useContext(SearchBarContext);
  
  return (
    <Form method="POST" onBlur={resetFocusState}>
      <SearchMenu bgColor={isFocus ? 'grey6' : 'white'}>
        {searchInputText.map(([key, { label, placeholder }], index) => (
          <Fragment key={key}>
            <SearchInput
              label={label}
              placeholder={placeholder}
              isLastElement={isLastElement(index)}
              />
          </Fragment>
        ))}
      </SearchMenu>
    </Form>
  );
}

const Form = styled.form`
display: flex;
justify-content: center;
margin-top: 30px;
`;

const SearchMenu = styled.div`
min-width: 1060px;
border: 1px solid ${({ theme }) => theme.color.grey4};
border-radius: ${({ theme }) => theme.borderRadius.radius1};
background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

const isLastElement = index => index === searchInputText.length - 1;

export default SearchBar;
