import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { ListItem, CheckBox,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Toolbox1 extends Component{
   
  render() {
    return (
        <Container>
        <Header>
            <Body style={{marginLeft:20}}>
              <Title>Toolbox</Title>
            </Body>
          </Header>
        <Content>
          <ListItem onPress={()=> this.props.navigation.navigate('Toolbox')}>
          <Icon name='stats' style={{color:'blue'}}/>
            <Body>
              <Text style={styles.text}>4D Number Stats & Detail</Text>
            </Body>
          </ListItem>
          <ListItem onPress={()=> this.props.navigation.navigate('LuckySpin')}>
          <Icon name='planet' style={{color:'blue'}}/>
            <Body>
              <Text style={styles.text}>Spin My Luck</Text>
            </Body>
          </ListItem>
          {/* <ListItem>
          <Icon name='ios-list' style={{color:'blue'}}/>
            <Body>
              <Text style={styles.text}>My Numbers</Text>
            </Body>
          </ListItem>
          <ListItem>
          <Icon name='flame' style={{color:'red'}}/>
            <Body>
              <Text style={styles.text}>Hot 4D Numbers</Text>
            </Body>
          </ListItem> */}
        </Content>
      </Container>
    );
  }
}

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
