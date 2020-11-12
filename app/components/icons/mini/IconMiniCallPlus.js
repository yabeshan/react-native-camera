import React from 'react'
import { View } from 'react-native' 
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg'

export default ({ style={} }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 20 20">
      <Path 
        d="M18.8889 13.8889C17.5 13.8889 16.1667 13.6667 14.9222 13.2556C14.5333 13.1333 14.1 13.2222 13.7889 13.5222L11.3444 15.9667C8.2 14.3667 5.62222 11.8 4.02222 8.64444L6.46667 6.18889C6.77778 5.9 6.86667 5.46667 6.74444 5.07778C6.33333 3.83333 6.11111 2.5 6.11111 1.11111C6.11111 0.5 5.61111 0 5 0H1.11111C0.5 0 0 0.5 0 1.11111C0 11.5444 8.45556 20 18.8889 20C19.5 20 20 19.5 20 18.8889V15C20 14.3889 19.5 13.8889 18.8889 13.8889ZM20 3.33333H16.6667V0H14.4444V3.33333H11.1111V5.55556H14.4444V8.88889H16.6667V5.55556H20V3.33333Z" 
        fill="#373F42"
      />
    </Svg>
  </View>
);