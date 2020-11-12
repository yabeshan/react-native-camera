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
    <Svg width="100%" height="100%" viewBox="0 0 76 76">
      <Path 
        d="M76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38C0 17.0132 17.0132 0 38 0C58.9868 0 76 17.0132 76 38Z" 
        fill="#E52020" fillOpacity="0.3"/>
      <Path 
        d="M63 38C63 51.8071 51.8071 63 38 63C24.1929 63 13 51.8071 13 38C13 24.1929 24.1929 13 38 13C51.8071 13 63 24.1929 63 38Z" 
        fill="#E52020"/>
      <Path 
        d="M38 33.25C35.4667 33.25 33.0125 33.6458 30.7167 34.39V39.2983C30.7167 39.9158 30.3525 40.47 29.83 40.7233C28.2783 41.4992 26.8692 42.4967 25.6183 43.6525C25.3333 43.9375 24.9375 44.0958 24.51 44.0958C24.0667 44.0958 23.6708 43.9217 23.3858 43.6367L19.4592 39.71C19.1742 39.4408 19 39.045 19 38.6017C19 38.1583 19.1742 37.7625 19.4592 37.4775C24.2883 32.9017 30.8117 30.0833 38 30.0833C45.1883 30.0833 51.7117 32.9017 56.5408 37.4775C56.8258 37.7625 57 38.1583 57 38.6017C57 39.045 56.8258 39.4408 56.5408 39.7258L52.6142 43.6525C52.3292 43.9375 51.9333 44.1117 51.49 44.1117C51.0625 44.1117 50.6667 43.9375 50.3817 43.6683C49.1308 42.4967 47.7058 41.515 46.1542 40.7392C45.6317 40.4858 45.2675 39.9475 45.2675 39.3142V34.4058C42.9875 33.6458 40.5333 33.25 38 33.25Z" 
        fill="#FFFFFF"/>
    </Svg>
  </View>
);