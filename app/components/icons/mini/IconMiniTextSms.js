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
    <Svg width="100%" height="100%" viewBox="0 0 14 14">
      <Path 
        d="M12.6 0H1.4C0.63 0 0 0.63 0 1.4V14L2.8 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM12.6 9.8H2.8L1.4 11.2V1.4H12.6V9.8ZM3.5 4.9H4.9V6.3H3.5V4.9ZM6.3 4.9H7.7V6.3H6.3V4.9ZM9.1 4.9H10.5V6.3H9.1V4.9Z" 
        fill="#3E4757"
      />
    </Svg>
  </View>
);