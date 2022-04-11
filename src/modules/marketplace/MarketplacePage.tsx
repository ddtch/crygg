import React from 'react';
import stylesMarketplace from "./marketplase.module.scss";


export const MarketplacePage = () => {
  return (
    <div className='cry-app wrapper'>
      <div className="header-top">
        <h1>Marketplace</h1>
      </div>
      <div className="assets-page-holder">
        <aside className={stylesMarketplace["profile-card"]}>



          <header>
            <h1>David & Kian</h1>
            <h2>Mega team</h2>
          </header>

          <div className={stylesMarketplace["profile-bio"]}>
            <p>
              You can start use marketplace and so on
            </p>

          </div>

        </aside>
      </div>
    </div>
  );
};
