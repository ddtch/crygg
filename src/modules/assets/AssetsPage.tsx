import React, {useEffect} from 'react';
import './assets.styles.scss';
import stylesAssets from '../marketplace/marketplase.module.scss';

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
    amount: 0.73186547,
    cur: 'EHT 20'
  },
  {
    id: 2,
    image: icon2,
    title: 'Solana',
    amount: 4.73186547,
    cur: 'SOL 1:20'
  },
  {
    id: 3,
    image: icon3,
    title: 'High Perf Blockchain',
    amount: 2.73186547,
    cur: 'HBP 12:20'
  },
  {
    id: 4,
    image: icon4,
    title: 'Hshare Price ',
    amount: 1.73186547,
    cur: 'HSR 17:28'
  },
  {
    id: 5,
    image: icon5,
    title: 'Decentraland',
    amount: 5.56186547,
    cur: 'Mana'
  },
  {
    id: 6,
    image: icon6,
    title: 'Action',
    amount: 0.73186547,
    cur: 'EHT 18'
  },
  {
    id: 7,
    image: icon7,
    title: 'Polygon',
    amount: 3.73186547,
    cur: 'Matic'
  },
  // {
  //   id: 8,
  //   image: icon8,
  //   title: 'Gold Secured Currency',
  //   amount: 3.73186547,
  //   cur: 'GSX sk27'
  // },
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

const mockAvatars = [
  {
    id: 19820,
    src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
  },
  {
    id: 198243,
    src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
  },
  {
    id: 190,
    src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
  },
  {
    id: 1290,
    src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
  },
];

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

  const getRandomVal = (negative: boolean) => {
    const num = Math.round(Math.random() * 31);
    return negative ? `-${num}` : `+${num}`;
  }

  const getUsers = () => {
    return [
      {
        id: 19820,
        src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
      },
      {
        id: 198243,
        src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
      },
      {
        id: 190,
        src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
      },
      {
        id: 1290,
        src: `https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`,
      },
    ]
  }

  const randomNegative = (): boolean => {
    return Math.ceil((Math.random() - 0.5) * 2) < 1
  }

  return (
    <div className='cry-app wrapper'>
      <div className="header-top">
        <h1>My Assets</h1>
      </div>
      <div className="assets-page-holder">
        <aside className={stylesAssets["profile-card"]}>
          <div className={stylesAssets["profile-bio"]}>
            <table cellPadding={0} cellSpacing={0}>
              <thead>
              <tr>
                <td>Name</td>
                <td>Balance</td>
                <td>Price</td>
                <td>Allocation</td>
                <td>Followers</td>
              </tr>
              </thead>
              <tbody>
              {
                mockAssets.map(el =>
                  <tr key={el.id}>
                    <td>
                      <div className="asset-wrapper">
                        <div className="asset-avatar">
                          <img src={el.image}/>
                        </div>
                        <div className="titles">
                          <span className={'main'}>{el.title}</span>
                          <span className={'secondary'}>{el.cur}</span>
                        </div>
                      </div>
                    </td>
                    <td>

                      <strong>${+(el.amount * Math.round(Math.random() * 188)).toFixed(2) * 10}</strong>
                      <br/>
                      <span className={'sum-descr'}>
                  {el.amount.toFixed(Math.round(Math.random() * 6))}
                        &nbsp;&nbsp;<span className={'secondary'}>{el.cur}</span>
                  </span>
                    </td>
                    <td>
                      <div className="mainPrice">
                        ${(el.amount * (Math.random() * 18)).toFixed(2)}
                      </div>
                      <div className={"shift"}>
                        {
                          randomNegative() ?
                            <span className={"red"}>{getRandomVal(true)}%</span> :
                            <span className={"green"}>{getRandomVal(false)}%</span>
                        }
                      </div>
                    </td>
                    <td>
                      {Math.round(Math.random() * 47)}%
                    </td>
                    <td>
                      <div className="av-holders">
                        {
                          getUsers().map(el => <div className="av-holder" key={el.id}>
                            <img src={el.src}/>
                          </div>)
                        }
                      </div>
                    </td>
                  </tr>
                )
              }
              </tbody>
            </table>

          </div>

        </aside>



        {/*
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
        */}

        {/*<div className="charts-holder">*/}
        {/*  <Line options={options} data={data} style={{height: '320px', background: 'rgba(0,0,0,.4)', color: '#fff'}} />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
