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
        d="M35.4 14.9H31.279L28.9 12.3H21.1L18.721 14.9H14.6C13.17 14.9 12 16.07 12 17.5V33.1C12 34.53 13.17 35.7 14.6 35.7H35.4C36.83 35.7 38 34.53 38 33.1V17.5C38 16.07 36.83 14.9 35.4 14.9ZM25 31.8C21.412 31.8 18.5 28.888 18.5 25.3H15.9L19.15 22.05L22.4 25.3H19.8C19.8 28.173 22.127 30.5 25 30.5C25.754 30.5 26.469 30.331 27.106 30.045L28.068 31.007C27.145 31.488 26.118 31.8 25 31.8ZM30.85 28.55L27.6 25.3H30.2C30.2 22.427 27.873 20.1 25 20.1C24.246 20.1 23.531 20.269 22.894 20.555L21.932 19.606C22.855 19.112 23.882 18.8 25 18.8C28.588 18.8 31.5 21.712 31.5 25.3H34.1L30.85 28.55Z" 
        fill="#FFFFFF"/>
    </Svg>
  </View>
);