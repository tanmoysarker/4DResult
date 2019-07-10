import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const numberRange = Array(10)
  .fill()
  .map((x, i) => i);

const getPosition = (value, height) => parseInt(value, 10) * height * -1;
const getTranslateStyle = position => ({
  transform: [
    {
      translateY: position,
    },
  ],
});

export default class Tick extends Component {
  
  componentWillMount() {
    this.animation = new Animated.Value(getPosition(this.props.value, this.props.height));
  }
  
  componentDidMount(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      Animated.timing(this.animation, {
        toValue: getPosition(this.props.value, this.props.height),
        duration: 500,
        useNativeDriver: true,
      }).start(function onComplete() {
        console.log('done')
      });
      setTimeout(() => {
        Animated.timing(this.animation).stop();
      }, 3000);
    }
  }
  
//   shouldComponentUpdate() {
//     setTimeout(() => {
//         Animated.timing(this.animation).stop();
//       }, 3000);
//     return false
//   } 
  render() {
    const transformStyle = getTranslateStyle(this.animation);

    return (
      <Animated.View style={transformStyle}>
        {numberRange.map(v => {
          return (
            <Text key={v} style={styles.text}>
              {v}
            </Text>
          );
        })}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: "#333",
    textAlign: 'center',
  },
})

