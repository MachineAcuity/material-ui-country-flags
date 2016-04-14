import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bh = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)">
    <path d="M-32.5 0h720v480h-720z"/>
    <path d="M114.25 479.77L-32.5 480V0l146.06.075 94.242 30.306-93.554 29.542 93.554 30.458-93.554 29.542 93.554 30.458-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54"/>
  </g>

  </SvgIcon>
);
Bh = pure(Bh);
Bh.displayName = 'Bh';

export default Bh;
