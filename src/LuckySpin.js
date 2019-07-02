import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,Animated} from 'react-native';
import { ListItem, CheckBox,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';


export default class LuckySpin extends Component{
  constructor(props) {
    super(props);
    this.state={
      numberHolder1 : 0,
      numberHolder2 : 0,
      numberHolder3 : 0,
      numberHolder4 : 0,
      toggle: 0
    }
  }
  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
       this.changeLang()
    });
  }
   async changeLang () {
    try {
      const value = await AsyncStorage.getItem('toggle')
       this.setState({ toggle: JSON.parse(value) })
    } catch(e) {
      // error reading value
    }
  }
  generateRandom =()=>{
    let randomNumber1 =  Math.floor((Math.random()*8) + 1)
    this.setState({
      numberHolder1 : randomNumber1
    })
    let randomNumber2 =  Math.floor((Math.random()*8) + 1)
    this.setState({
      numberHolder2 : randomNumber2
    })
    let randomNumber3 =  Math.floor((Math.random()*8) + 1)
    this.setState({
      numberHolder3 : randomNumber3
    })
    let randomNumber4 =  Math.floor((Math.random()*8) + 1)
    this.setState({
      numberHolder4 : randomNumber4
    })
  }
  
  render() {
    return (
        <Container>
        <Header>
            <Body style={{marginLeft:20}}>
              <Title>{(this.state.toggle) === 0 ? "Lucky Spin" : (this.state.toggle) === 1 ? "幸运的旋转": "bertuah berputar"}</Title>
            </Body>
          </Header>
          <Content>
        <View style={{alignItems:'center',paddingVertical:20}}>
            <Text style={{fontSize:20,fontWeight:'300'}}>{(this.state.toggle) === 0 ? "4D Number !" : (this.state.toggle) === 1 ? "4D 号码 !": "4D Nombor !"}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={styles.viewers}><Text style={styles.text}>{this.state.numberHolder1}</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>{this.state.numberHolder2}</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>{this.state.numberHolder3}</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>{this.state.numberHolder4}</Text></View>
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:40,flexDirection:'row'}}>
                {(this.state.numberHolder1)!== 0 ? <Left><Button onPress={()=>this.props.navigation.navigate('Toolbox',{
                  id : (this.state.numberHolder1)+''+(this.state.numberHolder2)+''+(this.state.numberHolder3)+''+(this.state.numberHolder4)
                })}style={{backgroundColor:'#f4392c',borderRadius:4,width:140,height:50,alignItems:'center',justifyContent:'center'}}><Text style={styles.text2}>{(this.state.toggle) === 0 ? "Number History" : (this.state.toggle) === 1 ? "号码历史": "Nombor Sejarah"}</Text></Button></Left> : null}
                <Right><Button style={{backgroundColor:'#2165a5',borderRadius:4,width:165,height:50,alignItems:'center',justifyContent:'center'}} onPress={()=>this.generateRandom()}><Text style={styles.text2}>{(this.state.toggle) === 0 ? "Spin My Luck" : (this.state.toggle) === 1 ? "旋转我的运气": "berputar saya nasib"}</Text></Button></Right>    
            </View>
           
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewers: {
    borderWidth:2,width:65,height:70,borderRadius:8
  },
  viewers2:{
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    
  },
  text: {fontSize:40,fontWeight:'400',alignSelf:'center' },
  text3:{fontSize:20,fontWeight:'400',alignSelf:'center'},
  text2:{color:'#fff',fontSize:18},
  head: { height: 40, backgroundColor: '#000' },

});
