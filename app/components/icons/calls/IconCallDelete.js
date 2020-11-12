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
    <Svg width="100%" height="100%" viewBox="0 0 37 26">
      <Path 
        d="M11.9375 1H36V25H11.9375L1 13L11.9375 1Z" 
        fill="#F5F7FE" stroke="#DFE2E7"/>
      <Path 
        d="M31 7.41L29.59 6L24 11.59L18.41 6L17 7.41L22.59 13L17 18.59L18.41 20L24 14.41L29.59 20L31 18.59L25.41 13L31 7.41Z" 
        fill="#000000"/>
    </Svg>
  </View>
);