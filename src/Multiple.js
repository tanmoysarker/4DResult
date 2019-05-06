import React, { Component } from 'react'
import { Tab, Tabs, Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image, StyleSheet, AsyncStorage, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import BKW from './MutiplePages/BKW'
import MPT from './MutiplePages/MPT'
import S from './MutiplePages/S'
import FiveD6D from './MutiplePages/FiveD6D'

export class Multiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead1: ['1ST Prize'],
      tableData1: [
        ['----']
      ],
      tableHead2: ['2ND Prize'],
      tableData2: [
        ['----']
      ],
      tableHead3: ['3RD Prize'],
      tableData3: [
        ['----']
      ],
      tableHead4: ['Special'],
      tableData4: [
        ['----']
      ],
      tableHead5: ['Consolation'],
      tableData5: [
        ['----']
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title>Multiple</Title>
          </Body>
        </Header>
        {/* <Footer style={{ height: 50, paddingHorizontal: 10, backgroundColor: '#fff' }}>
          <FooterTab style={{ paddingHorizontal: 10, backgroundColor: '#fff', alignItems: 'center' }}>
            <Text>MPT</Text>
            <Text>BKW</Text>
            <Text>S</Text>
            <Text>5D6D</Text>
          </FooterTab>
        </Footer> */}
        <Content>
          <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, backgroundColor: 'blue' }}>
            <Tab heading="MPT" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <MPT />
            </Tab>
            <Tab heading="BKW" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <BKW />
            </Tab>
            <Tab heading="S" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <S />
            </Tab>
            <Tab heading="5D6D" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#000' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: 'blue', fontWeight: 'normal' }}>
              <FiveD6D />
            </Tab>
          </Tabs>

          <View style={{ paddingTop: 10, spaddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View>
              <Card style={{ backgroundColor: '#a80505', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('./assets/logo4.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Sabah 88</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: '#a80505' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: '#a80505' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: '#a80505' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: '#a80505' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: '#a80505' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
            </View>

            <View>
              <Card style={{ backgroundColor: '#05a82d', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('./assets/logo2.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>STC 4D</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
            </View>

            <View>
              <Card style={{ backgroundColor: '#05a82d', height: 200, width: 110, paddingTop: 10, alignItems: 'center' }}>
                <View >
                  <Image source={require('./assets/logo4.jpg')} style={styles.imageStyle}
                  /></View>
                <View>
                  <Text style={styles.textStyle}>Cash Sweep</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: '#05a82d' }} textStyle={{ color: '#fff', margin: 6, alignSelf: 'center' }} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Button style={{ height: 50, width: '100%', backgroundColor: '#a80505', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 18, color: '#fff' }}>Share</Text></Button>
          </View>



        </Content>
      </Container>
    )
  }
}

export default Multiple
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
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
    height: 30,

  },
});