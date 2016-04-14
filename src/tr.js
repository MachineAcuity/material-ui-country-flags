import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Tr = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0h640v480H0z"/>
    <path d="M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z"/>
    <path d="M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z"/>
    <path d="M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z"/>
  </g>

  </SvgIcon>
);
Tr = pure(Tr);
Tr.displayName = 'Tr';

export default Tr;
