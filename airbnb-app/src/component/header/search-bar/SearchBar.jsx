import styled from 'styled-components';
import SEARCH_INPUT_TEXT from '../../../constants/searchBarText';
import SearchInput from './SearchInput';
import { useState, Fragment } from 'react';

const searchInputText = Object.entries(SEARCH_INPUT_TEXT);

function SearchBar() {
  const [currentInput, setCurrentInput] = useState(null);
  const isLastElement = index => index === searchInputText.length - 1;
  const isCurrentInput = label => label === currentInput;
  const isFocus = currentInput !== null;

  const handleBlur = () => {
    setCurrentInput(null);
  };

  return (
    <Form method="POST">
      <SearchMenu bgColor={isFocus ? 'grey6' : 'white'} tabIndex="0" onBlur={handleBlur}>
        {searchInputText.map(([key, { label, placeholder }], index) => (
          <Fragment key={key}>
            <SearchInput
              label={label}
              placeholder={placeholder}
              isLastElement={isLastElement(index)}
              isCurrentInput={isCurrentInput(label)}
              isFocus={isFocus}
              setCurrentInput={setCurrentInput}
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
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

export default SearchBar;
