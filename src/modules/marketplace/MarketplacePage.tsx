import React from 'react';
import stylesMarketplace from "./marketplase.module.scss";

import item1 from '../../assets/mkls/01.png';
import item2 from '../../assets/mkls/02.png';
import item3 from '../../assets/mkls/03.png';
import item4 from '../../assets/mkls/04.jpeg';
import item5 from '../../assets/mkls/05.jpeg';
import item6 from '../../assets/mkls/06.jpeg';

import icon1 from '../../assets/01-eth.svg';

const mockItems = [
  {
    id: 'hf9ds',
    src: item1,
    title: 'Slip sparks',
    price: '1.398',
    cur: 'ETH'
  },
  {
    id: 'hf91gds',
    src: item2,
    title: 'Grupi',
    price: '1.312498',
    cur: 'ETH'
  },
  {
    id: 'hf9ss2ds',
    src: item3,
    title: 'Kimomoto',
    price: '1.398',
    cur: 'ETH'
  },
  {
    id: 'hf932ds',
    src: item4,
    title: 'Bubblee',
    price: '1.398',
    cur: 'ETH'
  },
  {
    id: 'hf9fgfds',
    src: item5,
    title: 'Cap',
    price: '0.134398',
    cur: 'ETH'
  },
  {
    id: 'hf9ss12ds',
    src: item6,
    title: 'Cap\'s girl',
    price: '3.398',
    cur: 'ETH'
  },
]

export const MarketplacePage = () => {
  return (
    <div className='cry-app wrapper'>
      <div className="header-top">
        <h1>Marketplace</h1>
      </div>
      <div className="assets-page-holder">
        <aside className={stylesMarketplace["profile-card"]}>

          <div className={stylesMarketplace["profile-bio"]}>
            <div className={stylesMarketplace.mklsHolder}>
            {
              mockItems.map(el =>
                <div className={stylesMarketplace.mklsItem} key={el.id}>
                  <div className={stylesMarketplace.imgHolder}>
                    <img src={el.src} />
                  </div>
                  <div className={stylesMarketplace.meta}>
                    <div style={{width: '100%', display: 'flex', marginBottom: 4}}>
                      <span><b>{el.title}</b></span>
                      <img style={{
                        display: "flex",
                        marginLeft: 'auto',
                        justifySelf: 'flex-end',
                        width: '16px',
                        height: '16px',
                        borderRadius: '100%',
                        overflow: "hidden",
                        border: '1px solid #fff',
                      }}
                        src={`https://randomuser.me/api/portraits/${(Math.random()>=0.5)? 'men' : 'women'}/${Math.round(Math.random() * 45)}.jpg`}/>
                    </div>
                    <span style={{fontSize: '12px'}}>
                      <img src={icon1} style={{width: 10, height: 10,}}/> {el.price} {el.cur}
                    </span>
                    <br/>
                    <span style={{
                      color: '#0a59f1', fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '12px'}}>place a bid</span>
                  </div>
                </div>
              )
            }
            </div>

          </div>

        </aside>
      </div>
    </div>
  );
};
