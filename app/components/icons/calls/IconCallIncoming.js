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
      <Path 
        d="M4.965 8.09249C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 2.99999C2.25 2.58749 2.5875 2.24999 3 2.24999H5.625C6.0375 2.24999 6.375 2.58749 6.375 2.99999C6.375 3.93749 6.525 4.83749 6.8025 5.67749C6.885 5.93999 6.825 6.23249 6.615 6.44249L4.965 8.09249ZM15.12 2.76749L14.5875 2.24249L9.75 6.96749V3.74999H9V8.24999H13.5V7.49999H10.3875L15.12 2.76749Z" 
        fill="black" fillOpacity="0.6"/>
    </Svg>
  </View>
);