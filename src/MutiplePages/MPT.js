import React, { Component } from 'react'
import { Tab,Tabs,Container, Content, Header, Title, Button, Left, Right, Body, Icon, Card, Footer, FooterTab, Badge, TabHeading } from 'native-base';
import { View, Image,StyleSheet, AsyncStorage, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export class MPT extends Component {
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
                  <Icon name='calendar' style={{ color: '#fff', marginRight: 5, paddingTop: 10, fontSize: 18 }} /><Text style={styles.textStyle}>24/05/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='megaphone' style={{ color: '#fff', fontSize: 22, marginTop: 15 }} /><Icon name='refresh' style={{ color: '#fff', fontSize: 22, marginLeft: 15, marginTop: 15 }} />
                </View>
              </Card>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: '#000' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: '#000' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: '#000' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: '#000' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: '#000' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
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
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
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
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead1} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData1} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead2} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData2} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead3} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData3} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead4} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData4} textStyle={styles.text} />
              </Table>
              <Table borderStyle={{ borderWidth: 4, borderColor: '#c5cbd6' }}>
                <Row data={this.state.tableHead5} style={{ height: 30, backgroundColor: 'red' }} textStyle={{color:'#fff',margin:6,alignSelf:'center'}} />
                <Rows data={this.state.tableData5} textStyle={styles.text} />
              </Table>
            </View>
          </View>
          <View style={{paddingVertical:10}}>
        <Button style={{height:50,width:'100%',backgroundColor:'#a80505',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:18,color:'#fff'}}>Share</Text></Button>
        </View>

        </Content>
      </Container>
    )
  }
}

export default MPT
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6,alignSelf:'center' },
  imageStyle: {
    width: 40, height: 40
  },
  textStyle: {
    color: '#fff', paddingTop: 10
  },
  button1:{
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    
  },
});