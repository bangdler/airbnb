import DayOfWeek from '@component/calender/DayOfWeek';
import DateOfMonth from '@component/calender/DateOfMonth';
import styled from 'styled-components';

// 캘린더 페이지
// 해당 연, 월을 바탕으로 만든다. day 를 렌더링한다.
// 해당 연, 월의 1일이 무슨 요일인지, 마지막날이 몇일까지 있는지 확인한다.
// 1주차의 1일 이전 날들은 0 으로 1주차 배열을 만든다. ex) [0,0,0,1,2,3,4]
// 2주차부터 마지막날까지 배열을 만든다.

function CalenderPage({ date }) {

  return (
    <StyledContainer>
      <StyledTitle>
        {date.year}년 {date.month}월
      </StyledTitle>
      <DayOfWeek />
      <DateOfMonth date={date} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 336px;
`;

const StyledTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 24px;
`;

export default CalenderPage;
