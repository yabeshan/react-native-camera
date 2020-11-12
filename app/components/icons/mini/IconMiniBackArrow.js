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

export default ({ style={}, colorFill="#373F42" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 20 8">
      <Path 
        d="M-3.49691e-07 4L4.21053 8L4.21053 5L20 5L20 3L4.21053 3L4.21052 -5.26989e-07L-3.49691e-07 4Z" 
        fill={colorFill}
      />
    </Svg>
  </View>
);