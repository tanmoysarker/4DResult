import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { ListItem, CheckBox,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { withNavigation } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';
class Toolbox1 extends Component{
   
  constructor(props) {
    super(props);
    this.state = {
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
  
  render() {
    return (
        <Container>
        <Header>
            <Body style={{marginLeft:20}}>
              <Title>{(this.state.toggle) === 0 ? "Toolbox" : (this.state.toggle) === 1 ? "工具箱": "Kotak peralatan"}</Title>
            </Body>
          </Header>
        <Content>
          <ListItem onPress={()=> this.props.navigation.navigate('Toolbox')}>
          <Icon name='stats' style={{color:'blue'}}/>
            <Body>
              <Text style={styles.text}>{(this.state.toggle) === 0 ? "4D Number Stats & Detail" : (this.state.toggle) === 1 ? "4D 数字统计和细节": "Nombor Statistik 4D & Butiran"}</Text>
            </Body>
          </ListItem>
          <ListItem onPress={()=> this.props.navigation.navigate('LuckySpin')}>
          <Icon name='planet' style={{color:'blue'}}/>
            <Body>
              <Text style={styles.text}>{(this.state.toggle) === 0 ? "Spin My Luck" : (this.state.toggle) === 1 ? "旋转我的运气": "berputar saya nasib"}</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
export default withNavigation(Toolbox1)

const styles = StyleSheet.create({
  viewers: {
    flexDirection:'row',
    paddingVertical:10,
    justifyContent:'space-between'
  },
  button1:{
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    
  },
  text: { marginLeft: 15,fontSize:18,fontWeight:'400' },
  text2:{alignSelf:'center',color:'#000'},
  head: { height: 40, backgroundColor: '#000' },

});
