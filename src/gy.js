import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gy = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M2.426 0h637.557v480H2.426z"/>
    <path d="M.167 0C-.67.073 619.765 241.48 619.765 241.48L-.005 479.77.166 0z"/>
    <path d="M.28 20.186c3.462 0 559.053 217.89 555.893 220.03L1.867 463.266.287 20.186z"/>
    <path d="M1.863.783c1.848 0 290.94 240.92 290.94 240.92L1.863 476.983V.783z"/>
    <path d="M.28 33.902c1.658-14.986 260.9 208.4 260.9 208.4L.268 451.702V33.912z"/>
  </g>

  </SvgIcon>
);
Gy = pure(Gy);
Gy.displayName = 'Gy';

export default Gy;
