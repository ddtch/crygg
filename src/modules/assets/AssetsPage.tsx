import React, {useEffect} from 'react';
import './assets.styles.scss';
import icon1 from '../../assets/01-eth.svg';
import icon2 from '../../assets/02-sol.svg';
import icon3 from '../../assets/03-hpb.svg';
import icon4 from '../../assets/04-hsr.svg';
import icon5 from '../../assets/05-mana.svg';
import icon6 from '../../assets/06-act.svg';
import icon7 from '../../assets/07-matic.svg';
import icon8 from '../../assets/08-gxs.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ChartOptions,
} from 'chart.js';
import { Bubble, Line } from 'react-chartjs-2';

//@ts-ignore
import faker from 'faker';

export const mockAssets = [
  {
    id: 1,
    image: icon1,
    title: 'Etherium',
    amount: 0.73186547
  },
  {
    id: 2,
    image: icon2,
    title: 'Solala',
    amount: 4.73186547
  },
  {
    id: 3,
    image: icon3,
    title: 'Hbp',
    amount: 2.73186547
  },
  {
    id: 4,
    image: icon4,
    title: 'Hsr',
    amount: 1.73186547
  },
  {
    id: 5,
    image: icon5,
    title: 'Mana',
    amount: 5.56186547
  },
  {
    id: 6,
    image: icon6,
    title: 'Action',
    amount: 0.73186547
  },
  {
    id: 7,
    image: icon7,
    title: 'Matic',
    amount: 3.73186547
  },
  {
    id: 8,
    image: icon8,
    title: 'Gxs',
    amount: 3.73186547
  },
]

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'My Assets Growing trend',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      color: '#fff'
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export const AssetsPage = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
  }, []);
  return (
    <div className='cry-app wrapper'>
      <div className="header-top">
        <h1>My Assets</h1>
      </div>
      <div className="assets-page-holder">
        <div className="assets-holder">
          {
            mockAssets.map(el =>
              <div className="asset-wrapper" key={el.id}>
                <div className="asset-avatar">
                  <img src={el.image}/>
                </div>
                <div className="asset-title-holder">
                  {el.title} <br/>
                  <span>{el.amount}</span>
                </div>
              </div>
            )
          }
        </div>

        <div className="charts-holder">
          <Line options={options} data={data} style={{height: '320px', background: 'rgba(0,0,0,.4)', color: '#fff'}} />
        </div>
      </div>
    </div>
  );
};
