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
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path 
        d="M0.5 12.375V15.5H3.625L12.8417 6.28331L9.71667 3.15831L0.5 12.375ZM15.2583 3.86664C15.5833 3.54164 15.5833 3.01664 15.2583 2.69164L13.3083 0.741644C12.9833 0.416644 12.4583 0.416644 12.1333 0.741644L10.6083 2.26664L13.7333 5.39164L15.2583 3.86664Z" 
        fill="#383B41"
      />
    </Svg>
  </View>
);