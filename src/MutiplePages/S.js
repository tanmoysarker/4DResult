import React, { Component } from 'react'
import { DatePicker,Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet,Text,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";

export class S extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      date1:'',
      month:'',
      year:'',
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableHead5: [],
      tableData6: [],
      tableData7: [],
      tableData8: [],
      tableData9: [],
      tableData10: [],
      tableData11: [],
      tableData12: [],
      tableData13: [],
      tableData14: [],
      toggle: false
    }
  }

  async componentDidMount() {
   
    await fetch('https://fourdresult.herokuapp.com/sabah88', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        let first = response.magnum[0]
        let firstTo = first.slice(1)
        this.setState({ tableData5: firstTo })
        let second = response.magnum[1]
        let secondTo = second.slice(1)
        this.setState({ tableData6: secondTo })
        let third = response.magnum[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData7: thirdTo })
        const date = response.date
        this.setState({ date: date })

        let data1 = response.special[0]
        let data2 = response.special[1]
        let data3 = response.special[2]
        let newData = data1.concat(data2, data3)
        this.setState({ tableData8: newData })

        let data4 = response.consolation[0]
        let data5 = response.consolation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData9: newData1 })
      })
        await fetch('https://fourdresult.herokuapp.com/stc', {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((response) => {
            let first = response.magnum[0]
            let firstTo = first.slice(1)
            this.setState({ tableData10: firstTo })
            let second = response.magnum[1]
            let secondTo = second.slice(1)
            this.setState({ tableData11: secondTo })
            let third = response.magnum[2]
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

          await fetch('https://fourdresult.herokuapp.com/cashSweep', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((response) => {
          let first = response.magnum[0]
          let firstTo = first.slice(1)
          this.setState({ tableData: firstTo })
          let second = response.magnum[1]
          let secondTo = second.slice(1)
          this.setState({ tableData1: secondTo })
          let third = response.magnum[2]
          let thirdTo = third.slice(1)
          this.setState({ tableData2: thirdTo })
          const date = response.date
          this.setState({ date: date })
  
          let data1 = response.special[0]
          let data2 = response.special[1]
          let data3 = response.special[2]
          let newData = data1.concat(data2, data3)
          this.setState({ tableData4: newData })
  
          let data4 = response.consolation[0]
          let data5 = response.consolation[1]
          let newData1 = data4.concat(data5)
          this.setState({ tableData3: newData1 })
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
              <Card style={{ backgroundColor: '#CFD7DC', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/sabah88.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>{this.state.toggle ?"沙巴萬字"  : "Sabah 88"}</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6  }}>
                  <Icon name='calendar' style={{ color: '#000', paddingTop: 10, fontSize: 18 }} />
                  <DatePicker
                    defaultDate={this.state.date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
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
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='refresh' style={{ color: '#000', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>
              
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"首獎"  : "1ST Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData5} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"二獎"  : "2ND Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData6} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"三獎"  : "3RD Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData7} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"特別獎"  : "Special"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData8} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"安慰獎"  : "Consolation"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData9} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
              


              <View>
              <Card style={{ backgroundColor: '#CFD7DC', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/stc.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>{this.state.toggle ?"山打根赛马会"  : "STC 4D"}</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6  }}>
                  <Icon name='calendar' style={{ color: '#000', paddingTop: 10, fontSize: 18 }} />
                  <DatePicker
                    defaultDate={this.state.date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
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
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='refresh' style={{ color: '#000', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"首獎"  : "1ST Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData10} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"二獎"  : "2ND Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData11} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"三獎"  : "3RD Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData12} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"特別獎"  : "Special"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData13} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"安慰獎"  : "Consolation"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData14} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>

              <View>
              <Card style={{ backgroundColor: '#CFD7DC', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/cashsweep.png')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>{this.state.toggle ?"砂勞越大萬"  : "Cash Sweep"}</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6  }}>
                  <Icon name='calendar' style={{ color: '#000', paddingTop: 10, fontSize: 18 }} />
                  <DatePicker
                    defaultDate={this.state.date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
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
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='refresh' style={{ color: '#000', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"首獎"  : "1ST Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"二獎"  : "2ND Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData1} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"三獎"  : "3RD Prize"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData2} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"特別獎"  : "Special"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData4} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={this.state.toggle ?"安慰獎"  : "Consolation"} style={{ width: 110, height: 30, backgroundColor: '#F7F7F7' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData3} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
      
      
            
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: '#CFD7DC', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20, color: '#000',fontWeight:'bold' }}>{this.state.toggle ? "分享" : "Share"}</Text></Button>
          </View>
      </View>
    )
  }
}

export default withNavigation(S)

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