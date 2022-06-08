import { useMemo, useContext } from 'react';
import styled from 'styled-components';
import { SearchBarContext } from '@/context/SearchBarProvider';
import SEARCH_INPUT_TEXT from '@/constants/searchBarText';
import Calender from '@calender/Calender';
import Personnel from '@personnel/Personnel';
import Price from '@price/Price';

function SearchInputModal() {
  const { currentInput, resetFocusState } = useContext(SearchBarContext);

  const handleContainerClick = e => {
    if (e.target.classList.contains('dim')) {
      resetFocusState();
    }
  };

  const modal = useMemo(() => {
    switch (currentInput) {
      case SEARCH_INPUT_TEXT.CHECKIN.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.CHECKOUT.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.PRICE.label:
        return <Price />;
      case SEARCH_INPUT_TEXT.PERSONNEL.label:
        return <Personnel />;
      default:
        return null;
    }
  }, [currentInput]);

  return (
    <>
      {modal ? (
        <Container className="dim" onClick={handleContainerClick}>
          {modal}
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`;

export default SearchInputModal;
