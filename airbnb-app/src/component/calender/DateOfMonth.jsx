import styled from 'styled-components';

function DateOfMonth({ date }) {
  const firstDay = new Date(date.year, date.month - 1, 1).getDay();
  const lastDate = new Date(date.year, date.month - 1, 0).getDate();
  const dateArray = getDateArray();

  function getDateArray() {
    // 이전달 빈칸
    const blanks = Array(firstDay).fill(0);
    // 이번달
    const dates = Array.from({ length: lastDate }, (_, idx) => idx + 1);

    return [...blanks, ...dates];
  }

  return (
    <StyledDateWrapper>
      {dateArray.map((date, idx) => (
        <StyledDate key={idx}>{date === 0 ? `` : date}</StyledDate>
      ))}
    </StyledDateWrapper>
  );
}

const StyledDateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 48px;
  height: 48px;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  cursor: pointer;
`;

export default DateOfMonth;
