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
        d="M9.33333 3.8889V10.1111H1.55556V3.8889H9.33333ZM10.1111 2.33334H0.777778C0.35 2.33334 0 2.68334 0 3.11112V10.8889C0 11.3167 0.35 11.6667 0.777778 11.6667H10.1111C10.5389 11.6667 10.8889 11.3167 10.8889 10.8889V8.16668L14 11.2778V2.72223L10.8889 5.83334V3.11112C10.8889 2.68334 10.5389 2.33334 10.1111 2.33334Z" 
        fill="#3E4757"
      />
    </Svg>
  </View>
);