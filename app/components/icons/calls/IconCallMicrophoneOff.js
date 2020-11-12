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
        d="M33.75 24.75H31.625C31.625 25.675 31.425 26.5375 31.0875 27.3125L32.625 28.85C33.325 27.625 33.75 26.2375 33.75 24.75ZM28.725 24.9625C28.725 24.8875 28.75 24.825 28.75 24.75V17.25C28.75 15.175 27.075 13.5 25 13.5C22.925 13.5 21.25 15.175 21.25 17.25V17.475L28.725 24.9625ZM15.3375 14.75L13.75 16.3375L21.2625 23.85V24.75C21.2625 26.825 22.925 28.5 25 28.5C25.275 28.5 25.55 28.4625 25.8125 28.4L27.8875 30.475C27 30.8875 26.0125 31.125 25 31.125C21.55 31.125 18.375 28.5 18.375 24.75H16.25C16.25 29.0125 19.65 32.5375 23.75 33.15V37.25H26.25V33.15C27.3875 32.9875 28.4625 32.5875 29.425 32.025L34.6625 37.25L36.25 35.6625L15.3375 14.75Z" 
        fill="#FFFFFF"/>
    </Svg>
  </View>
);