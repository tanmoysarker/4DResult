import React, { Component } from 'react'
import { Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet, AsyncStorage, Text,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export class FiveD6D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableHead5: [],
      tableData6: [],
      tableData7: [],
      tableData8: [],
      tableData9: []

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

      await fetch('https://fourdresult.herokuapp.com/cashSweep', {
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
  }
  render() {
    const state = this.state;
    return (
      <View>
          <View style={{ paddingTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View>
              <Card style={{ backgroundColor: 'red', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/logo1.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Toto 5D</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>{this.state.date}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data={"1ST Prize"} style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="2ND Prize" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData1} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="3RD Prize" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData2} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Special" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData4} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Consolation" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData3} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>

              <View>
              <Card style={{ backgroundColor: '#448be2', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/logo3.png')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Cash Sweep</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>{this.state.date}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="1ST Prize" style={{ width: 110, height: 30, backgroundColor: '#448be2' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData10} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="2ND Prize" style={{ width: 110, height: 30, backgroundColor: '#448be2' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData11} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="3RD Prize" style={{ width: 110, height: 30, backgroundColor: '#448be2' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData12} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Special" style={{ width: 110, height: 30, backgroundColor: '#448be2' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData13} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Consolation" style={{ width: 110, height: 30, backgroundColor: '#448be2' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData14} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
      
            
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 18, color: '#fff' }}>Share</Text></Button>
          </View>
      </View>
    )
  }
}

export default FiveD6D 

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'center' },
  imageStyle: {
    width: 40, height: 40
  },
  textStyle: {
    color: '#fff', paddingTop: 10
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30

  }, wrapper: { flexDirection: 'row' },
  title: {  backgroundColor: '#f6f8fa' },
});