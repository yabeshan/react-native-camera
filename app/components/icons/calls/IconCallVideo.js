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
    <Svg width="100%" height="100%" viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="16" fill="#E5EAFF"/>
      <Path 
        d="M20.4444 14.6667V11.5556C20.4444 11.0667 20.0444 10.6667 19.5556 10.6667H8.88889C8.4 10.6667 8 11.0667 8 11.5556V20.4445C8 20.9334 8.4 21.3334 8.88889 21.3334H19.5556C20.0444 21.3334 20.4444 20.9334 20.4444 20.4445V17.3334L24 20.8889V11.1111L20.4444 14.6667Z" 
        fill="#5A76DE"/>
    </Svg>
  </View>
);