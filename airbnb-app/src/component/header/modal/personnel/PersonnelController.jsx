import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { PERSONNEL_MIN as MIN, PERSONNEL_MAX as MAX } from '@/constants/PersonnelText';
import { PersonnelContext } from '@/context/PersonnelProvider';
import { AddButton, RemoveButton } from '@personnel/ControllerButtons';

function PersonnelController({ title }) {
  const theme = useTheme();
  const { personnel, addPerson, removePerson } = useContext(PersonnelContext);

  const addBtnStyle = {
    width: '30px',
    fill: isMax(personnel[title]) ? theme.color.grey5 : theme.color.grey3,
  };

  const removeBtnStyle = {
    width: '30px',
    fill: isMin(personnel[title]) ? theme.color.grey5 : theme.color.grey3,
  };

  return (
    <>
      <RemoveButton
        onClick={() => {
          removePerson(title);
        }}
        style={removeBtnStyle}
      />
      <SelectedNum>{personnel[title]}</SelectedNum>
      <AddButton
        onClick={() => {
          addPerson(title);
        }}
        style={addBtnStyle}
      />
    </>
  );
}

const SelectedNum = styled.span`
  display: block;

  width: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.grey1};
`;

const isMax = num => num === MAX;
const isMin = num => num === MIN;

export default PersonnelController;
