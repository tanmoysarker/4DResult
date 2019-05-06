import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { ListItem, CheckBox,Container,Content, Header, Title, Button, Left, Right, Body, Icon,Card,Footer, FooterTab,Badge } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class LuckySpin extends Component{
   
  render() {
    return (
        <Container>
        <Header>
            <Body style={{marginLeft:20}}>
              <Title>Lucky Spin</Title>
            </Body>
          </Header>
          <Content>
        <View style={{alignItems:'center',paddingVertical:20}}>
            <Text style={{fontSize:20,fontWeight:'300'}}>4D Number !</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={styles.viewers}><Text style={styles.text}>3</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>4</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>8</Text></View>
                <View style={styles.viewers}><Text style={styles.text}>7</Text></View>
            </View>
            <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20}}>
                <Left><Button style={{backgroundColor:'#f4392c',borderRadius:4,width:140,height:50,alignItems:'center',justifyContent:'center'}}><Text style={styles.text2}>Number History</Text></Button></Left>
                <Right><Button style={{backgroundColor:'#2165a5',borderRadius:4,width:140,height:50,alignItems:'center',justifyContent:'center'}}><Text style={styles.text2}>Spin My Luck !</Text></Button></Right>    
            </View>
            <View style={{paddingVertical:20,alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'300'}}>Jackpot Number</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={styles.viewers2}><Text style={styles.text3}>3</Text></View>
                <View style={styles.viewers2}><Text style={styles.text3}>4</Text></View>
                <View style={styles.viewers2}><Text style={styles.text3}>8</Text></View>
                <View style={styles.viewers2}><Text style={styles.text3}>7</Text></View>
                <View style={styles.viewers2}><Text style={styles.text3}>7</Text></View>
                <View style={styles.viewers2}><Text style={styles.text3}>7</Text></View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',paddingVertical:20}}>
                <Button style={{backgroundColor:'#f4392c',width:50,height:30,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff'}}>6/58</Text></Button>
                <Button style={{backgroundColor:'#fff',width:50,height:30,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text>6/57</Text></Button>
                <Button style={{backgroundColor:'#fff',width:50,height:30,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text>6/55</Text></Button>
                <Button style={{backgroundColor:'#fff',width:50,height:30,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text>6/53</Text></Button>
                <Button style={{backgroundColor:'#fff',width:50,height:30,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text>6/52</Text></Button>
            </View>
            <View style={{paddingVertical:30,alignSelf:'center'}}>
                <Button style={{backgroundColor:'#2165a5',width:140,height:50,borderRadius:4,alignItems:'center',justifyContent:'center'}}><Text style={styles.text2}>Spin My Luck</Text></Button>
            </View>
            
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewers: {
    borderWidth:2,width:60,height:70
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
