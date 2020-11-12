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
    <Svg width="100%" height="100%" viewBox="0 0 20 14">
      <Path 
        d="M0 13.6667H20V11.4445H0V13.6667ZM0 8.11112H20V5.8889H0V8.11112ZM0 0.333344V2.55557H20V0.333344H0Z" 
        fill="#373F42"
      />
    </Svg>
  </View>
);