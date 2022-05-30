import styled from 'styled-components';
import { useContext } from 'react';
import { CalenderDateContext } from '@/component/header/calender/CalenderDateProvider';
import { CALENDER_MODE, DATE_CHECK_STATE } from '@/constants/calenderText';

function DateBox({ year, month, date }) {
  const { mode, setMode, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate } = useContext(CalenderDateContext);

  const current = new Date(`${year}-${month}-${date}`);
  const checkIn =
    checkInDate === null ? new Date(0) : new Date(`${checkInDate.year}-${checkInDate.month}-${checkInDate.date}`);
  const checkOut =
    checkOutDate === null ? new Date(0) : new Date(`${checkOutDate.year}-${checkOutDate.month}-${checkOutDate.date}`);

  const checkState = getCheckStateOfCurrent({ current, checkIn, checkOut });

  function handleClick() {
    // 검색바에서 체크인을 누른 경우 - 체크인을 바꾼다. 체크아웃 날짜와 비교
    if (mode === CALENDER_MODE.CHECKIN) {
      if (checkInDate && checkOutDate && current > checkOut) {
        setCheckOutDate(null);
      }
      setCheckInDate({ year, month, date });
      setMode(CALENDER_MODE.CHECKOUT);
      return;
      // 검색바에서 체크아웃을 누른 경우 -  체크아웃을 바꾼다. 체크인 날짜와 비교
    } else if (mode === CALENDER_MODE.CHECKOUT) {
      if (checkInDate && checkOutDate && checkIn > current) {
        setCheckOutDate(null);
        setCheckInDate({ year, month, date });
        return;
      }
      setCheckOutDate({ year, month, date });
      return;
    }
  }

  return (
    <StyledBackground checkState={checkState}>
      <StyledDate checkState={checkState} onClick={handleClick}>
        {date === 0 ? `` : date}
      </StyledDate>
    </StyledBackground>
  );
}

function getCheckStateOfCurrent({ current, checkIn, checkOut }) {
  if (current.getTime() === checkIn.getTime()) return DATE_CHECK_STATE.CHECKIN;
  if (current.getTime() === checkOut.getTime()) return DATE_CHECK_STATE.CHECKOUT;
  if (current > checkIn && current < checkOut) return DATE_CHECK_STATE.BETWEEN;
  return false;
}

const StyledBackground = styled.div`
  ${({ checkState }) => {
    if (checkState === DATE_CHECK_STATE.CHECKIN) {
      return `background: linear-gradient(90deg, #fff 50%, #F5F5F7 50%)`;
    } else if (checkState === DATE_CHECK_STATE.CHECKOUT) {
      return `background: linear-gradient(90deg, #F5F5F7 50%, #fff 50%)`;
    } else if (checkState === DATE_CHECK_STATE.BETWEEN) {
      return `background-color: #F5F5F7`;
    }
  }}
`;
const StyledDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  cursor: pointer;
  border: 1px solid white;
  ${({ checkState }) => {
    if (checkState === DATE_CHECK_STATE.CHECKIN || checkState === DATE_CHECK_STATE.CHECKOUT) {
      return `background-color: black; color:white; font-weight:600;`;
    }
    if (checkState === DATE_CHECK_STATE.BETWEEN) {
      return `border: 1px solid #F5F5F7;`;
    }
  }}

  &:hover {
    border: 1px solid black;
  }
`;

export default DateBox;
