import React, { useState } from 'react';
import { ReactFloatingBalloons } from 'react-floating-balloons';
 
import "./BalloonPage.css"
export default function App() {
 
  const [balloonsPopulated, setBalloonsPopulated] = useState(false);
  
  const handlePopulateBalloons = () => {
    setBalloonsPopulated(true);
  };

  return (
    <div className="Baloon">
      
      
      <button onClick={handlePopulateBalloons} className='but'>Populate Inflated Balloons</button>
      {balloonsPopulated && (  
        <ReactFloatingBalloons
          count={10}
          msgText="inflated baloon"
          colors={["yellow","purple","red","green","grey"]}
          popVolumeLevel={0.1}
          autoPopulate={false}
        />
      )}
    </div>
  );
}
