import React, { Component } from 'react'
import { DatePicker,Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet,Text,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";

export class MPT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      date1:'',
      date2:'',
      month2:'',
      year2:'',
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
      tableData15: [
        ['5000'],
        ['2000'],
        ['1000']
      ],
      tableHead16: ['Special'],
      tableData5: [
        ['','']
      ],
      tableHead17: ['Consolation'],
      tableData6: [
        ['','']
      ],
      toggle: 0

    }
    this.setDate1 = this.setDate1.bind(this)
    this.setDate2 = this.setDate2.bind(this)
  }

  async componentDidMount() {
    var today = new Date()
    var time = today.getHours()
    console.log(today)
    let day = today.getDate()
    if (time >= 15) {
      day = today.getDate() 
    } else {
      day = today.getDate() - 1
    }
    console.log('date', day)
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    day = String(day).length > 1 ? day : '0' + day
    month = String(month).length > 1 ? month : '0' + month
    
    await fetch('https://fourdresult.herokuapp.com/nine932/'+year+month+day, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        let first = response.First2[0]
        let firstTo = first.slice(1)
        this.setState({ tableData: firstTo })
        let second = response.First2[1]
        let secondTo = second.slice(1)
        this.setState({ tableData1: secondTo })
        let third = response.First2[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData2: thirdTo })
        const date1 = response.Date[1]
        this.setState({date1: date1})
        const month = response.Date[0]
        this.setState({month: month})
        const year = response.Date[2]
        this.setState({year: year})

        let data1 = response.Special[0]
        let data2 = response.Special[1]
        let newData = data1.concat(data2)
        this.setState({ tableData4: newData })

        let data4 = response.Consolidation[0]
        let data5 = response.Consolidation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData3: newData1 })

      })

      var today1 = new Date()
      var time1 = today1.getHours()
      console.log(today1)
      let day1 = today1.getDate()
      if (time1 >= 19) {
        day1 = today1.getDate() 
      } else {
        day1 = today1.getDate() - 1
      } 
      console.log('date', day1)
      let month1 = today1.getMonth() + 1
      let year1 = today1.getFullYear()
      day1 = String(day1).length > 1 ? day1 : '0' + day1
      month1 = String(month1).length > 1 ? month1 : '0' + month1
      
      await fetch('https://fourdresult.herokuapp.com/nine972/'+year1+month1+day1, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((response) => {
        let first = response.First2[0]
        let firstTo = first.slice(1)
        this.setState({ tableData5: firstTo })
        let second = response.First2[1]
        let secondTo = second.slice(1)
        this.setState({ tableData6: secondTo })
        let third = response.First2[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData7: thirdTo })
        const date1 = response.Date[1]
        this.setState({date1: date1})
        const month = response.Date[0]
        this.setState({month: month})
        const year = response.Date[2]
        this.setState({year: year})

        let data1 = response.Special[0]
        let data2 = response.Special[1]
        let newData = data1.concat(data2)
        this.setState({ tableData8: newData })

        let data4 = response.Consolidation[0]
        let data5 = response.Consolidation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData9: newData1 })
      })
  }
  dateText1 = () => {
    return (
      <Text>{this.state.date1}/{this.state.month}/{this.state.year}</Text>
    )
  }
  dateText2 = () => {
    return (
      <Text>{this.state.date1}/{this.state.month}/{this.state.year}</Text>
    )
  }
  async setDate1(newDate) {
    let day = newDate.getDate()
    console.log('date', day)
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    day = String(day).length > 1 ? day : '0' + day
    month = String(month).length > 1 ? month : '0' + month
    let fullDate = 'https://fourdresult.herokuapp.com/nine932/'+year+month+day
    console.log('date', fullDate)
    // this.newStates(fullDate);
    await fetch(fullDate, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        if(response === null){
          this.setState({ 
            tableData: [],
            tableData1: [],
            tableData2: [],
            tableData3: [],
            tableData4: [],
          })
        } else {
        console.log('new', response)
        let first = response.First2[0]
        let firstTo = first.slice(1)
        this.setState({ tableData: firstTo })
        let second = response.First2[1]
        let secondTo = second.slice(1)
        this.setState({ tableData1: secondTo })
        let third = response.First2[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData2: thirdTo })
        const date1 = response.Date[0]
        this.setState({date1: date1})
        const month = response.Date[1]
        this.setState({month: month})
        const year = response.Date[2]
        this.setState({year: year})

        let data1 = response.Special[0]
        let data2 = response.Special[1]
        let newData = data1.concat(data2)
        this.setState({ tableData4: newData })

        let data4 = response.Consolidation[0]
        let data5 = response.Consolidation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData3: newData1 })
        }
      })
  }
  async setDate2(newDate) {
    let day = newDate.getDate()
    console.log('date', day)
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    day = String(day).length > 1 ? day : '0' + day
    month = String(month).length > 1 ? month : '0' + month
    let fullDate = 'https://fourdresult.herokuapp.com/nine972/'+year+month+day
    console.log('date', fullDate)
    // this.newStates(fullDate);
    await fetch(fullDate, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        if(response === null){
          this.setState({ 
            tableData5: [],
            tableData6: [],
            tableData7: [],
            tableData8: [],
            tableData9: [],
          })
        } else {
        console.log('new', response)
        let first = response.First2[0]
        let firstTo = first.slice(1)
        this.setState({ tableData5: firstTo })
        let second = response.First2[1]
        let secondTo = second.slice(1)
        this.setState({ tableData6: secondTo })
        let third = response.First2[2]
        let thirdTo = third.slice(1)
        this.setState({ tableData7: thirdTo })
        const date2 = response.Date[0]
        this.setState({date2: date2})
        const month2 = response.Date[1]
        this.setState({month2: month2})
        const year2 = response.Date[2]
        this.setState({year2: year2})

        let data1 = response.Special[0]
        let data2 = response.Special[1]
        let newData = data1.concat(data2)
        this.setState({ tableData8: newData })

        let data4 = response.Consolidation[0]
        let data5 = response.Consolidation[1]
        let newData1 = data4.concat(data5)
        this.setState({ tableData9: newData1 })
        }
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
              <Card style={{ backgroundColor: '#f6eb13', height: 200, width: 115, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/993.png')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>{(this.state.toggle) === 0 ? "99 3PM" : (this.state.toggle) === 1 ? "99下午3点": "99 3Petang"}</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6 }}>
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
                    placeHolderText={this.dateText1()}
                    textStyle={{ color: "#000", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    placeHolderTextStyle={{ color: "#000", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    onDateChange={this.setDate1}
                    disabled={false}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='refresh' style={{ color: '#000', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "1ST Prize" : (this.state.toggle) === 1 ? "首獎": "Hadiah 1ST"} style={{ width: 115, height: 40, backgroundColor: '#f6eb13' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "2ND Prize" : (this.state.toggle) === 1 ? "二獎": "Hadiah 2ND"} style={{ width: 115, height: 40, backgroundColor: '#f6eb13' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData1} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "3RD Prize" : (this.state.toggle) === 1 ? "三獎": "Hadiah 3RD"} style={{ width: 115, height: 40, backgroundColor: '#f6eb13' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData2} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Special" : (this.state.toggle) === 1 ? "特別獎": "Khas"} style={{ width: 115, height: 40, backgroundColor: '#f6eb13' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550 }}>
                      <Col data={state.tableData4} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Consolation" : (this.state.toggle) === 1 ? "安慰獎": "Saguhat"} style={{ width: 115, height: 40, backgroundColor: '#f6eb13' }} textStyle={{ color: '#000', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550 }}>
                      <Col data={state.tableData3} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
              
              
            <View>
              <Card style={{ backgroundColor: 'red', height: 200, width: 115, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/993.png')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={{color: '#fff', paddingTop: 10,fontSize:18,fontWeight:'bold'}}>{(this.state.toggle) === 0 ? "99 7PM" : (this.state.toggle) === 1 ? "99下午7点": "99 7Petang"}</Text>
                </View>
                <View style={{ flexDirection: 'row',paddingLeft:6 }}>
                  <Icon name='calendar' style={{ color: '#fff', paddingTop: 10, fontSize: 18 }} />
                  <DatePicker
                    defaultDate={this.state.date}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2019, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={this.dateText2()}
                    textStyle={{ color: "#fff", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    placeHolderTextStyle={{ color: "#fff", fontSize: 16,fontWeight:'bold', paddingTop: 10,paddingRight:8 }}
                    onDateChange={this.setDate2}
                    disabled={false}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='refresh' style={{ color: '#fff', fontSize: 24, marginTop: 15 }} />
                </View>
              </Card>
              
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "1ST Prize" : (this.state.toggle) === 1 ? "首獎": "Hadiah 1ST"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData5} style={styles.title}  textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "2ND Prize" : (this.state.toggle) === 1 ? "二獎": "Hadiah 2ND"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData6} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "3RD Prize" : (this.state.toggle) === 1 ? "三獎": "Hadiah 3RD"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData7} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Special" : (this.state.toggle) === 1 ? "特別獎": "Khas"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550 }}>
                      <Col data={state.tableData8} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Consolation" : (this.state.toggle) === 1 ? "安慰獎": "Saguhat"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row',height:550 }}>
                      <Col data={state.tableData9} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Bonus Payout" : (this.state.toggle) === 1 ? "奖金支付": "Bonus Pembayaran"}  style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData15} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Special" : (this.state.toggle) === 1 ? "特別獎": "Khas"}  style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData16} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 115 }}>
                    <Cell data={(this.state.toggle) === 0 ? "Consolation" : (this.state.toggle) === 1 ? "安慰獎": "Saguhat"} style={{ width: 115, height: 40, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center',fontWeight:'bold' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData17} style={styles.title} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
              
            
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: '#f6eb13', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20, color: '#000',fontWeight:'bold' }}>{(this.state.toggle) === 0 ? "Share" : (this.state.toggle) === 1 ? "分享" : "Kongsi"}</Text></Button>
          </View>
      </View>
    )
  }
}

export default withNavigation(MPT)

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'center',fontSize:18,color: '#000',fontWeight:'bold'},
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