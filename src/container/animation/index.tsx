import React from 'react';
import { MoveBox } from './move';
import './asset/index.less';
interface Props {}

const AnimationContainer = (props: Props) => {
  return (
    <div className="animation-container">
      <div className="animation-area">
        <MoveBox></MoveBox>
      </div>
    </div>
  );
};

export default AnimationContainer;
