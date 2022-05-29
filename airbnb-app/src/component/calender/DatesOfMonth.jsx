import styled from 'styled-components';
import Date from '@component/calender/Date';

function DateOfMonth({ date }) {
  const year = date.year;
  const month = date.month;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month - 1, 0).getDate();
  const dateArray = getDateArray();

  function getDateArray() {
    // 이전달 빈칸
    const blanks = Array(firstDay).fill(0);
    // 이번달
    const dates = Array.from({ length: lastDate }, (_, idx) => idx + 1);

    return [...blanks, ...dates];
  }

  return (
    <StyledDatesWrapper>
      {dateArray.map((date, idx) => (
        <Date key={idx} year={year} month={month} date={date} />
      ))}
    </StyledDatesWrapper>
  );
}

const StyledDatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default DateOfMonth;
