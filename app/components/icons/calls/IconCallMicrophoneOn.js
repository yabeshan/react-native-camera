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
    <Svg width="100%" height="100%" viewBox="0 0 50 50">
      <Path 
        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" 
        fill="#373F42" fillOpacity="0.8"/>
      <Path 
        d="M25 28.5C27.075 28.5 28.75 26.825 28.75 24.75V17.25C28.75 15.175 27.075 13.5 25 13.5C22.925 13.5 21.25 15.175 21.25 17.25V24.75C21.25 26.825 22.925 28.5 25 28.5Z" 
        fill="#FFFFFF"/>
      <Path 
        d="M31.25 24.75C31.25 28.2 28.45 31 25 31C21.55 31 18.75 28.2 18.75 24.75H16.25C16.25 29.1625 19.5125 32.7875 23.75 33.4V37.25H26.25V33.4C30.4875 32.7875 33.75 29.1625 33.75 24.75H31.25Z" 
        fill="#FFFFFF"/>
    </Svg>
  </View>
);