import styled from 'styled-components';
import { useContext } from 'react';
import { CalenderDateContext } from '@/context/CalenderDateProvider';
import { CALENDER_MODE, DATE_CHECK_STATE } from '@/constants/calenderText';
import { SearchBarContext } from '@/context/SearchBarProvider';

function DateBox({ year, month, date, lastDate, disabled }) {
  const { setCheckInInfo, setCheckOutInfo, checkInTime, checkOutTime } = useContext(CalenderDateContext);
  const { updateFocusState, currentInput } = useContext(SearchBarContext);

  const currentTime = new Date(`${year}-${month}-${date}`).getTime();
  const checkState = getCheckStateOfCurrent({ currentTime, checkInTime, checkOutTime });

  const isRequiredExpandBackground = checkState === DATE_CHECK_STATE.BETWEEN && (date === 1 || date === lastDate);

  function handleClick() {
    // 검색바에서 체크인을 누른 경우 - 체크인을 바꾼다. 체크아웃 날짜와 비교
    if (currentInput === CALENDER_MODE.CHECKIN) {
      if (currentTime > checkOutTime) {
        setCheckOutInfo(null);
      }
      setCheckInInfo({ year, month, date });
      updateFocusState(CALENDER_MODE.CHECKOUT);
      return;
      // 검색바에서 체크아웃을 누른 경우 -  체크아웃을 바꾼다. 체크인 날짜와 비교
    }
    if (currentInput === CALENDER_MODE.CHECKOUT) {
      if (checkInTime > currentTime) {
        setCheckOutInfo(null);
        setCheckInInfo({ year, month, date });
        return;
      }
      if (!checkInTime) {
        setCheckOutInfo({ year, month, date });
        updateFocusState(CALENDER_MODE.CHECKIN);
        return;
      }
      setCheckOutInfo({ year, month, date });
      return;
    }
  }

  return (
    <StyledBackground checkState={checkState}>
      {date ? (
        <StyledDate disabled={disabled} checkState={checkState} onClick={handleClick}>
          {date}
        </StyledDate>
      ) : null}
      {isRequiredExpandBackground ? <StyledExpandBackground date={date} lastDate={lastDate} /> : null}
    </StyledBackground>
  );
}

function getCheckStateOfCurrent({ currentTime, checkInTime, checkOutTime }) {
  if (currentTime === checkInTime) return DATE_CHECK_STATE.CHECKIN;
  if (currentTime === checkOutTime) return DATE_CHECK_STATE.CHECKOUT;
  if (checkInTime && checkOutTime && currentTime > checkInTime && currentTime < checkOutTime) {
    return DATE_CHECK_STATE.BETWEEN;
  }
  return false;
}

const StyledBackground = styled.div`
  position: relative;
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

const StyledExpandBackground = styled.div`
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
  ${({ date, lastDate }) => {
    if (date === 1) {
      return `
      left: -50px;
      background: linear-gradient(270deg, #F5F5F7 30%, #fff);
      `;
    }
    if (date === lastDate) {
      return `
      right: -50px;
      background: linear-gradient(90deg, #F5F5F7 30%, #fff);
      `;
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
  &:hover {
    border: 1px solid black;
  }
  ${({ checkState }) => {
    if (checkState === DATE_CHECK_STATE.CHECKIN || checkState === DATE_CHECK_STATE.CHECKOUT) {
      return `background-color: black; color:white; font-weight:600;`;
    }
    if (checkState === DATE_CHECK_STATE.BETWEEN) {
      return `border: 1px solid #F5F5F7;`;
    }
  }}
  ${({ disabled }) => {
    if (disabled) {
      return `
      color: #BDBDBD;
      pointer-events: none;
      `;
    }
  }}
`;

export default DateBox;
