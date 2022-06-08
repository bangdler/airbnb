import styled, { useTheme } from 'styled-components';
import { ModalContainer } from '@/styled-component/ModalContainer';
import { Title } from '@/styled-component/Title';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import PriceSlider from '@price/PriceSlider';
import { priceData } from '@/mock-data/priceData';

ChartJS.register(...registerables);

const priceGraphData = Object.entries(priceData).map(key => {
  return { x: key[0], y: key[1] };
});

function Price() {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: priceGraphData,
        borderColor: 'transparent',
        backgroundColor: theme.color.black,
        fill: true,
        lineTension: 0.5,
        pointBackgroundColor: 'transparent',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <>
      <Container>
        <Title>가격 범위</Title>
        <Line type="line" height={'150px'} data={data} options={options} />
        <PriceSlider />
      </Container>
    </>
  );
}

const Container = styled(ModalContainer)`
  width: 400px;
`;

export default Price;
