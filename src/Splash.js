import React, { Component } from 'react'
import { Text, View , Image, StyleSheet, Animated, Dimensions} from 'react-native'

var {height,width} = Dimensions.get('window')

export default class Splash extends Component {
  static navigationOptions = {
    header: null,
  } 
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height/2)
  }
  async componentDidMount() {
    //animations here
    Animated.sequence([
      //animation by sequence
      Animated.timing(this.state.logoOpacity,{
        toValue: 1,
        duration: 1500,
      }),
      //animate text
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
        this.props.navigation.navigate("DashboardTabNavigator")
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image source={require('./assets/bg.jpg')} style={{...styles.logo,opacity: this.state.logoOpacity}}></Animated.Image>
        {/* <Animated.Text style ={{...styles.title,marginTop: this.state.titleMarginTop}}> Welcome to 4Dresult</Animated.Text> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#E6EBF1"
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title:{
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize:21
  }
})
