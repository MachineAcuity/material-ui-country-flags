import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gg = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-18-13.5h36v27h-36z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)">
    <path d="M-18-18h36v36h-36z"/>
    <path d="M-18-13.5h36v27h-36z"/>
    <path d="M0-21.586v43.172M-21.586 0h43.172" stroke="#e8112d" stroke-width="7.195"/>
    <g transform="scale(1.75)">
      <path id="b" d="M-6.75 1.5L-6 .75H.75v-1.5H-6l-.75-.75z"/>
      <use  transform="rotate(90)" height="24" width="36"/>
      <use  transform="rotate(-90)" height="24" width="36"/>
      <use  transform="scale(-1)" height="24" width="36"/>
    </g>
  </g>

  </SvgIcon>
);
Gg = pure(Gg);
Gg.displayName = 'Gg';

export default Gg;
