import styled from 'styled-components';
import { useState } from 'react';
import CalenderPage from '@component/calender/CalenderPage';
import PrevButton from '@component/calender/PrevButton';
import NextButton from '@component/calender/NextButton';

const today = new Date();

function Calender({ page = 1 }) {
  // option : 보여줄 page 수
  // 상태 : 현재 날짜,
  const [curDate, setCurDate] = useState({ year: today.getFullYear(), month: today.getMonth() + 1 });

  const displayArray = getDisplayArray();

  function getDisplayArray() {
    const displayArray = [curDate];
    for (let i = 1; i < page; i++) {
      const prevYear = displayArray[i - 1].year;
      const prevMonth = displayArray[i - 1].month;
      const newDate = prevMonth === 12 ? { year: prevYear + 1, month: 1 } : { year: prevYear, month: prevMonth + 1 };
      displayArray.push(newDate);
    }
    return displayArray;
  }

  return (
    <StyledContainer page={page}>
      <PrevButton curDate={curDate} setCurDate={setCurDate} />
      <NextButton curDate={curDate} setCurDate={setCurDate} />
      <StyledCalenderPageWrapper page={page}>
        {displayArray.map((date, idx) => (
          <CalenderPage key={idx} date={date} />
        ))}
      </StyledCalenderPageWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  ${({ page }) =>
    `width: ${page === 1 ? 370 : 828}px;
    height: ${382 * Math.ceil(page / 2)}px;
    padding: ${page === 1 ? `65px 44px` : `65px 88px`};
   `}
`;

const StyledCalenderPageWrapper = styled.div`
  display: grid;
  ${({ page }) =>
    `grid-template-columns: ${page > 1 ? `repeat(2, 1fr)` : ``};
    column-gap: ${page > 1 ? 20 : 0}px;
    row-gap: ${page > 2 ? 40 : 0}px;
   `}
  justify-items: center;
`;

export default Calender;
