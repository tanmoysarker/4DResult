import React, { Component } from 'react'
import { Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet, AsyncStorage, Text,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export class MPT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      date: '',
      tableHead: ['1ST Prize'],
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableHead3: [],
      tableData3: [],
      tableHead4: ['Special'],
      tableData4: [],
      tableHead5: ['Consolation'],
      tableData5: ['----'],
    }
  }

  async componentDidMount() {
    await fetch('https://fourdresult.herokuapp.com/magnum', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        const first = response.magnum[0]
        this.setState({ tableData: first })
        const second = response.magnum[1]
        this.setState({ tableData1: second })
        const third = response.magnum[2]
        this.setState({ tableData2: third })
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
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <Container>
        <Content>
          <View style={{ paddingTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View>
              <Card style={{ backgroundColor: '#000', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/logo1.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Magnum</Text>
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
                    <Cell data={"1ST Prize"} style={{ width: 110, height: 30, backgroundColor: '#000' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="2ND Prize" style={{ width: 110, height: 30, backgroundColor: '#000' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData1} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="3RD Prize" style={{ width: 110, height: 30, backgroundColor: '#000' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData2} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Special" style={{ width: 110, height: 30, backgroundColor: '#000' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData4} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Consolation" style={{ width: 110, height: 30, backgroundColor: '#000' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData3} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
              
              
            <View>
              <Card style={{ backgroundColor: 'red', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/logo2.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Damacai</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>
              
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="1ST Prize" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
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
                      <Col data={state.tableData3} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="Consolation" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                    <TableWrapper style={{ flexDirection: 'row' }}>
                      <Col data={state.tableData4} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.text} ></Col>
                    </TableWrapper>
                  </TableWrapper>
                </Table>
              </View>
              </View>
              


            <View>
              <Card style={{ backgroundColor: 'red', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('../assets/logo3.png')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Toto</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>

              <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                  <TableWrapper style={{ width: 110 }}>
                    <Cell data="1ST Prize" style={{ width: 110, height: 30, backgroundColor: 'red' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
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
      
            
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: '#a80505', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 18, color: '#fff' }}>Share</Text></Button>
          </View>

        </Content>
      </Container>
      </ScrollView>
    )
  }
}

export default MPT
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
  title: { flex: 2, backgroundColor: '#f6f8fa' },
});