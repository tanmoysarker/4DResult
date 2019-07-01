import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DatePicker, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge } from 'native-base';
import { Table, Row, Rows, Col, Cols, TableWrapper  } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from "react-navigation";
class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      date1:'',
      draw: '',
      tableHead2: ['Special'],
      tableHead6: ['特別獎'],
      tableHead8: ['Khas'],
      tableHead3: ['Consolation'],
      tableHead5: ['安慰獎'],
      tableHead9: ['Penghiburan'],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableHead4: ['Bonus Payout'],
      tableHead7: ['奖金支付'],
      tableHead10: ['Bonus Pembayaran'],
      tableData4: [
        ['1ST Prize', '5000'],
        ['2ND Prize', '2000'],
        ['3RD Prize', '1000'],
        ['Special', ''],
        ['Consolation', '']
      ],
      tableData5: [
        ['首獎', '5000'],
        ['二獎', '2000'],
        ['三獎', '1000'],
        ['特別獎', ''],
        ['安慰獎', '']
      ],
      tableData11: [
        ['Hadiah 1ST', '5000'],
        ['Hadiah 2ND', '2000'],
        ['Hadiah 3RD', '1000'],
        ['Khas', ''],
        ['Penghiburan', '']
      ],
      chosenDate: new Date(),
      toggle: 0,
      tableTitle: ['1st', '2nd', '3rd']
    }
    this.setDate = this.setDate.bind(this)
  }

  async componentDidMount() {
    var today = new Date()
    var time = today.getHours()
    console.log(today)
    let day = today.getDate()
    if (time >= 19) {
      day = today.getDate() 
    } else {
      day = today.getDate() - 1
    }
    console.log('date', day)
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    day = String(day).length > 1 ? day : '0' + day
    month = String(month).length > 1 ? month : '0' + month
    
    await fetch('https://fourdresult.herokuapp.com/nine972/'+year+month+day, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        const first = response.First
        console.log(first)
        this.setState({ tableData1: first })
        const second = response.Special
        this.setState({ tableData2: second })
        const third = response.Consolidation
        this.setState({ tableData3: third })
        let date = response.Date[1]
        let month = response.Date[0]
        let year = response.Date[2]
        let date1 = date+'/'+month+'/'+year
        this.setState({date1:date1})
      })
  }
  async setDate(newDate) {
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
        console.log('new', response)
        const first = response.First
        this.setState({ tableData1: first })
        const second = response.Special
        this.setState({ tableData2: second })
        const third = response.Consolidation
        this.setState({ tableData3: third })
        let date = response.Date[1]
        let month = response.Date[0]
        let year = response.Date[2]
        let date1 = date+'/'+month+'/'+year
        this.setState({date1:date1})
      })
  }
  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      this.changeLang()
    });
  }
  async changeLang() {
    try {
      const value = await AsyncStorage.getItem('toggle')
      this.setState({ toggle: JSON.parse(value) })
    } catch (e) {
      // error reading value
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={{ backgroundColor: '#F4F8E5' }}>
        <View>
          <Card style={{ backgroundColor: '#ED1E24', height: 100, paddingTop: 10 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
              <Left></Left>
              <Body><Text style={{ color: '#fff', fontSize: 20, fontWeight: "bold" }}>{(this.state.toggle) === 0 ? "99 7PM" : (this.state.toggle) === 1 ? "99下午7点": "99 7Petang"}</Text></Body>
              <Right><Image source={require('../assets/993.png')} style={{ width: 40, height: 40 }}
              /></Right>
            </View>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
              <Left style={{ flexDirection: 'row', paddingLeft: 10 }}>
                <Icon name='calendar' style={{ color: '#fff', fontSize: 20, paddingTop: 10 }} />
                <DatePicker
                  defaultDate={this.state.date}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2019, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText={this.state.date1}
                  textStyle={{ color: "#fff", fontSize: 18, paddingRight: 5 }}
                  placeHolderTextStyle={{ color: "#fff", fontSize: 18, paddingRight: 5 }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </Left>
              <Body></Body>
              <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 10 }}><Icon name='refresh' style={{ color: '#fff', fontSize: 24, marginRight: 15 }} /></Right>

            </View>
          </Card>
        </View>
        <View style={{ backgroundColor: '#fff' }}>
          <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 2, borderColor: '#000' }}>
            {/* Left Wrapper */}
            <TableWrapper style={{ width: '60%' }}>
              <Col data={state.tableTitle} style={styles.head2} textStyle={styles.text3}></Col>
            </TableWrapper>

            {/* Right Wrapper */}
            <TableWrapper style={{ flex: 1 }}>
              <Cols data={state.tableData1} textStyle={styles.text2} />
            </TableWrapper>
          </Table>
        </View>

        <View style={{ backgroundColor: '#fff' }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#000' }}>
            <Row data={(this.state.toggle) === 0 ? (this.state.tableHead2) : (this.state.toggle) === 1 ? (this.state.tableHead6): (this.state.tableHead8)} style={styles.head} textStyle={styles.text} />
            <Rows data={state.tableData2} textStyle={styles.text2} />
          </Table>
        </View>
        <View style={{ backgroundColor: '#fff' }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#000' }}>
            <Row data={(this.state.toggle) === 0 ? (this.state.tableHead3) : (this.state.toggle) === 1 ? (this.state.tableHead5): (this.state.tableHead9)} style={styles.head} textStyle={styles.text} />
            <Rows data={state.tableData3} textStyle={styles.text2} />
          </Table>
        </View>
        <View style={{ backgroundColor: '#fff' }}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#000' }}>
            <Row data={(this.state.toggle) === 0 ? (this.state.tableHead4) : (this.state.toggle) === 1 ? (this.state.tableHead7): (this.state.tableHead10)} style={styles.head} textStyle={styles.text} />
            <Rows data={(this.state.toggle) === 0 ? (this.state.tableData4) : (this.state.toggle) === 1 ? (this.state.tableData5): (this.state.tableData11)} textStyle={styles.text2} />
          </Table>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Button style={{ width: '100%', backgroundColor: '#ED1E24', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: "bold" }}>{(this.state.toggle) === 0 ? "Share" : (this.state.toggle) === 1 ? "分享" : "Kongsi"}</Text></Button>
        </View>
      </View>
    );
  }
}

export default withNavigation(Second)

const styles = StyleSheet.create({
  viewers: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,

  },
  text: { margin: 6, color: '#fff', alignSelf: 'center', fontSize: 18, fontWeight: "bold" },
  text2: { alignSelf: 'center', color: '#000', fontSize: 18, fontWeight: 'bold' },
  text3: { alignSelf: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold' },
  head: { height: 40, backgroundColor: '#ED1E24' },
  head2: { backgroundColor: '#ED1E24' }
});
