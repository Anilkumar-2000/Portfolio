import React from 'react';
import './LatestWork.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const LatestWork = () => {
  return (
    <div id="work" className="latest-work">
      <div className="latest-work-cont">
        <h1>My Latest work</h1>
        <img src={theme_pattern} />
      </div>
      <div className="latest-works">
        {mywork_data.map((work, index) => {
          return (
            <div className="latest-work-item" key={index}>
              <img src={work.w_img} />
            </div>
          );
        })}
      </div>
      <button>
        Show More <img src={arrow_icon} />
      </button>
    </div>
  );
};

export default LatestWork;
