import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mn = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M213.333 0h213.333v480H213.333z"/>
  <circle cx="106.667" cy="189.333" r="29.333"/>
  <circle cx="106.667" cy="176" r="32"/>
  <circle cx="106.667" cy="181.333" r="21.333"/>
  <path d="M93.333 141.333a13.333 13.333 0 0 0 26.667 0c0-5.333-3.333-6-3.333-8s2-4.666-2-8c2 3.334-1.334 4-1.334 7.334 0 3.333 1.334 3.333 1.334 6M48 224v128h26.667V224zm90.667 0v128h26.666V224zM80 245.333V256h53.333v-10.667zM80 320v10.667h53.333V320zm0-96h53.333l-26.666 16zm0 112h53.333l-26.666 16z"/>
  <g transform="translate(0 80) scale(.13333)" stroke="#c4272f" stroke-width="24">
    <circle r="212" cy="1560" cx="800"/>
    <path d="M800 1348a106 106 0 0 1 0 212 106 106 0 0 0 0 212"/>
  </g>
  <g transform="translate(0 80) scale(.13333)">
    <circle cx="800" cy="1454" r="40"/>
    <circle cx="800" cy="1666" r="40"/>
  </g>

  </SvgIcon>
);
Mn = pure(Mn);
Mn.displayName = 'Mn';

export default Mn;
