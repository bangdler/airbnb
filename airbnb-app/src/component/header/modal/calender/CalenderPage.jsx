import Days from '@calender/Days';
import DatesOfMonth from '@calender/DatesOfMonth';
import styled from 'styled-components';

function CalenderPage({ date }) {
  return (
    <StyledContainer>
      <StyledTitle>
        {date.year}년 {date.month}월
      </StyledTitle>
      <Days />
      <DatesOfMonth date={date} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 350px;
`;

const StyledTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 24px;
`;

export default CalenderPage;
