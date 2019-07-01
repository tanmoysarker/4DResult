import React, { Component } from 'react'
import { DatePicker,Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet,Text,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";

export class FiveD6D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      tableData10: [],
      tableData11: [],
      tableData12: [],
      tableData13: [],
      tableData14: [],
      toggle: 0
    }
    this.setDate = this.setDate.bind(this)
  }

  async componentDidMount() {
        await fetch('https://fourdresult.herokuapp.com/singapore4d', {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((response) => {
            let first = response.magnum2[0]
            let firstTo = first.slice(1)
            this.setState({ tableData10: firstTo })
            let second = response.magnum2[1]
            let secondTo = second.slice(1)
            this.setState({ tableData11: secondTo })
            let third = response.magnum2[2]
            let thirdTo = third.slice(1)
            this.setState({ tableData12: thirdTo })
            const date = response.date
            this.setState({ date: date })
    
            let data1 = response.special[0]
            let data2 = response.special[1]
            let data3 = response.special[2]
            let newData = data1.concat(data2, data3)
            this.setState({ tableData13: newData })
    
            let data4 = response.consolation[0]
            let data5 = response.consolation[1]
            let newData1 = data4.concat(data5)
            this.setState({ tableData14: newData1 })
          })
  }
  async setDate(newDate) {
    let day = newDate.getDate()
    console.log('date', day)
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    day = String(day).length > 1 ? day : '0' + day
    month = String(month).length > 1 ? month : '0' + month
    let fullDate = 'https://fourdresult.herokuapp.com/singapore4d2/' + year+'-'+month+'-'+day
    console.log('date', fullDate)
    // this.newStates(fullDate);
    await fetch(fullDate, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        let first = response.magnum2[0]
        let firstTo = first.slice(1)
        this.setState({ tableData10: firstTo })
        let second = response.magnum2[1]
        let secondTo = second.slice(1)
        this.setState({ tableData11: secondTo })
        let third = response.magnum2[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData12: thirdTo })
        const date = response.date
        this.setState({ date: date })

        let data1 = response.special[0]
        let data2 = response.special[1]
        let data3 = response.special[2]
        let newData = data1.concat(data2, data3)
        this.setState({ tableData13: newData })

        let data4 = response.consolation[0]
        let data5 = response.consolation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData14: newData1 })
      })
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
    const state = this.state;
    return (
      <View>
          <View style={{ paddingTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <View>
              <Card style={{ backgroundColor: '#CFD7DC', height: 200, width: 115, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/singapore.jpeg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Singapore 4D</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6  }}>
                  <Icon name='calendar' style={{ color: '#000', paddingTop: 10, fontSize: 18 }} />
                  <DatePicker
                    defaultDate={this.state.date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2019, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={this.state.date}
                    textStyle={{ color: "#000", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    placeHolderTextStyle={{ color: "#000", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </View>
                <View>
                  <Icon name='refresh' style={{ color: '#000', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "1ST Prize" : (this.state.toggle) === 1 ? "首獎": "Hadiah 1ST"} style={{ width: 115, height: 40, backgroundColor: '#CFD7DC' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData10} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "2ND Prize" : (this.state.toggle) === 1 ? "二獎": "Hadiah 2ND"} style={{ width: 115, height: 40, backgroundColor: '#CFD7DC' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData11} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "3RD Prize" : (this.state.toggle) === 1 ? "三獎": "Hadiah 3RD"} style={{ width: 115, height: 40, backgroundColor: '#CFD7DC' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData12} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Special" : (this.state.toggle) === 1 ? "特別獎": "Khas"} style={{ width: 115, height: 40, backgroundColor: '#CFD7DC' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550 }}>
                      <Col data={state.tableData13} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Consolation" : (this.state.toggle) === 1 ? "安慰獎": "Penghiburan"} style={{ width: 115, height: 40, backgroundColor: '#CFD7DC' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550}}>
                      <Col data={state.tableData14} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
            
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: '#CFD7DC', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20, color: '#000',fontWeight:'bold' }}>{(this.state.toggle) === 0 ? "Share" : (this.state.toggle) === 1 ? "分享" : "Kongsi"}</Text></Button>
          </View>
      </View>
    )
  }
}

export default withNavigation(FiveD6D)

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'center',fontSize:18,color: '#000',fontWeight:'bold' },
  imageStyle: {
    width: 40, height: 40
  },
  textStyle: {
    color: '#000', paddingTop: 10,fontSize:18,fontWeight:'bold'
  },
  textStyle2: {
    color: '#000', paddingTop: 10,fontSize:16,fontWeight:'bold'
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30

  }, wrapper: { flexDirection: 'row' },
  title: {  backgroundColor: '#f6f8fa' },
});