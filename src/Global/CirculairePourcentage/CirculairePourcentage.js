import React from 'react'
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function CirculairePourcentage({image  , percentage}) {
  var color="";
  if(percentage <=25){
    color="#10BC10"  //green
  }else if( percentage>25 && percentage<=50){
    color="#FFFF8A"   // yellow
  }else if( percentage>50 && percentage<=75){
    color="#F4BB44"   //orange
  }else if(percentage>75){
    color="#FF2511"   // red
  }
  return (
    <div>

        <CircularProgressbarWithChildren value={percentage}  strokeWidth={10} styles={buildStyles({
            pathColor:`${color}`,
        })}>
          
            <img style={{ width: '60px', marginTop: -5 }} src={image} alt="img" />
            <br/>
            <div style={{ fontSize: 16, marginTop: -22,color:`#FEF1E6` }}>
                <strong>{percentage} %</strong> 
            </div>
        </CircularProgressbarWithChildren>
    </div>
)
}
