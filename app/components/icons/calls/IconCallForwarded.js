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
    <Svg width="100%" height="100%" viewBox="0 0 18 18">
      <Path d="M13.5 8.25L17.25 4.5L13.5 0.75V3H10.5V6H13.5V8.25ZM15 11.625C14.0625 11.625 13.1625 11.475 12.3225 11.1975C12.06 11.115 11.7675 11.175 11.5575 11.3775L9.9075 13.0275C7.785 11.9475 6.045 10.215 4.965 8.085L6.615 6.4275C6.825 6.2325 6.885 5.94 6.8025 5.6775C6.525 4.8375 6.375 3.9375 6.375 3C6.375 2.5875 6.0375 2.25 5.625 2.25H3C2.5875 2.25 2.25 2.5875 2.25 3C2.25 10.0425 7.9575 15.75 15 15.75C15.4125 15.75 15.75 15.4125 15.75 15V12.375C15.75 11.9625 15.4125 11.625 15 11.625Z" 
        fill="#000000" fillOpacity="0.5"/>
    </Svg>
  </View>
);