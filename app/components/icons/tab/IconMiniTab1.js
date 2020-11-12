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

export default ({ style={}, colorFill="#C1C7D0" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Path 
        d="M14.43 10L12 2L9.57 10H2L8.18 14.41L5.83 22L12 17.31L18.18 22L15.83 14.41L22 10H14.43Z" 
        fill={colorFill}
      />
    </Svg>
  </View>
);