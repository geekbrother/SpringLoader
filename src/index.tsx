import { useEffect } from "react";
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import React from "react";

export enum AnimationTypes {
  Spring,
  Wave
}

export type SpringLoaderProps = {
  loading: boolean,
  width: number,
  height: number,
  strokeWidth: number,
  animationType:  AnimationTypes,
  gradientsArray: Array<string>,
  showHideDuration?: number,
  paddings?: number,
  springParams?: {
    mass?: number,
    stiffness?: number,
    restSpeedThreshold?: number,
  }
  waveParams?: {
    duration?: number,
  },
}

export const SpringLoader = ({
  loading,
  width = 300,
  height = 100,
  strokeWidth = 30,
  animationType,
  gradientsArray,
  showHideDuration = 200,
  paddings = strokeWidth,
  springParams = {
    mass: 0.9,
    stiffness: 200,
    restSpeedThreshold: 100
  },
  waveParams = {
    duration: 500,
  }

}: SpringLoaderProps) => { 
  const secondDotPosition = useSharedValue(height - paddings);
  const currentStrokeWidth = useSharedValue(0);
  const AnimatedPath = Animated.createAnimatedComponent(Path);

  function startSpring() {
    secondDotPosition.value = height - paddings;
    secondDotPosition.value = withRepeat(withSpring(paddings, springParams), 0, true);
    currentStrokeWidth.value = withTiming(strokeWidth, {duration: showHideDuration});
  }

  function startWave() {
    secondDotPosition.value = height - paddings;
    secondDotPosition.value = withRepeat(withTiming(paddings, waveParams), 0, true);
    currentStrokeWidth.value = withTiming(strokeWidth, {duration: showHideDuration});
  }

  function stop() {
    currentStrokeWidth.value = withTiming(0, {duration: showHideDuration});
  }

  useEffect(() => {
    if (loading){
      if (animationType == AnimationTypes.Spring){
        startSpring();
      }else{
        startWave();
      }
    }else{
      stop();
    }
  });

  const animatedProps = useAnimatedProps(() => {
    const svgPath = `
    M ${ paddings }, ${ height / 2 } 
    Q ${ width / 4 } ${ secondDotPosition.value }, ${ width / 2 } ${ height / 2 }, 
    T ${ width - paddings } ${ height / 2 }
    `;
    return {
      d: svgPath,
      strokeWidth: currentStrokeWidth.value,
    };
  });

  let i:number = 0;
  return (
      <Svg height={ height } width={ width }>
        <Defs>
          <LinearGradient id={'gradient'} x1="0%" y1="0%" x2="100%" y2="0%">
          {gradientsArray.map((gradient) => {
            const offset = ((100 / gradientsArray.length) * i) + "%";
            i++;
            return (<Stop key={ gradient } offset={ offset } stopColor={ gradient } />);
          })}
          </LinearGradient>
        </Defs>
        <AnimatedPath 
          animatedProps={animatedProps}
          stroke="url(#gradient)"
          strokeLinecap="round"
          fill="none" 
        />
      </Svg>
  );
};

export default SpringLoader;
