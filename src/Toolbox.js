import React, { Component } from 'react'
import { Container, Content, Body, Icon, Item, Input, Button, Left, Right, Card, CardItem, Header, Title } from 'native-base'
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS, alterNode, makeTableRenderer } from 'react-native-render-html-table-bridge';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';


const config = {
  WebViewComponent: WebView
};

const renderers = {
  table: makeTableRenderer(config)
};

const htmlConfig = {
  alterNode,
  renderers,
  ignoredTags: IGNORED_TAGS
};

export class Toolbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num4d: '',
      result: null,
      first:'',
      second:'',
      third:'',
      special:'',
      consolation:'',
      sg:'',
      mg:'',
      cash:'',
      toto:'',
      sabah:'',
      stc:'',
      dama:'',
      ninty:'',
      toggle: 0,
      data:''
    }
  }

  searchResult = (num4d) => {
    console.log('alkjs', num4d)
    let formData = new FormData()
    formData.append('num4d', num4d)
    formData.append('magnum', 1)
    formData.append('damacai', 1)
    formData.append('sportstoto', 1)
    formData.append('sg4d', 1)
    formData.append('stc4d', 1)
    formData.append('sabah88', 1)
    formData.append('stec', 1)

    fetch('https://www.check4d.com/statapiweb.php', {
      method: 'POST',
      body: formData
    }).then(response => response.text()).then(data => {
      console.log(data)
      var data = data
      var count1 = (data.match(/1st/g) || []).length;
      var count2 = (data.match(/2nd/g) || []).length;
      var count3 = (data.match(/3rd/g) || []).length;
      var scount = (data.match(/Special/g) || []).length;
      var ccount = (data.match(/Consolation/g) || []).length;
      var sg = (data.match(/logo_sg4d.gif/g) || []).length;
      var stc = (data.match(/logo_stc4d.gif/g) || []).length;
      var cash = (data.match(/logo_cashsweep.gif/g) || []).length;
      var toto = (data.match(/logo_toto.gif/g) || []).length;
      var mg = (data.match(/logo_magnum.gif/g) || []).length;
      var sabah = (data.match(/logo_sabah88.gif/g) || []).length;
      var dama = (data.match(/logo_damacai.gif/g) || []).length;
      var ninty = (data.match(/993pm/g) || []).length;
      let strng = data
      let addStrng = this.replaceAll(data, 'img src="', 'img src="https://www.check4d.com')
      this.setState({ 
        result: addStrng,
        first: count1,
        second: count2,
        third: count3,
        special: scount,
        consolation: ccount,
        mg: mg,
        dama: dama,
        stc: stc,
        sabah: sabah,
        cash: cash,
        toto: toto,
        sg: sg,
        ninty: ninty,
        data: data,
        id:''
      })
    })
      .catch((error) => {
        console.log(error)
      })
      .done()
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      this.changeLang()
    });
    this.setState({num4d: navigation.getParam('id')})
  }
  async changeLang() {
    try {
      const value = await AsyncStorage.getItem('toggle')
      this.setState({ toggle: JSON.parse(value) })
    } catch (e) {
      // error reading value
    }
  }
  componentDidMount() {
    if (this.state.id !== '') {
      this.searchResult(this.state.num4d)
    }
  }
  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
      </View>
    }
    console.log('dsa',this.state.data)
    return (
      <Container>
        <Content>
          <Header>
            <Body style={{ marginLeft: 20 }}>
              <Title>{(this.state.toggle) === 0 ? "4D Number Stats & Detail" : (this.state.toggle) === 1 ? "4D 数字统计和细节": "Nombor Statistik 4D & Butiran"}</Title>
            </Body>
          </Header>
          <View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20 }}>
              <Left>
                <Item style={{ width: 280, height: 40, borderRadius: 5, backgroundColor: '#F2F3F4', marginRight: 5 }}>
                  <Icon name="ios-search" />
                  <TextInput placeholder="Number" keyboardType="number-pad"
                    onChangeText={(text) => this.setState({ num4d: text })} value={this.state.num4d}/>
                </Item></Left>
              <Right>
                <Button onPress={() => this.searchResult(this.state.num4d)} style={{ backgroundColor: '#BDC3C7', width: 70, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', }}><Text style={{ color: '#fff', fontSize: 18 }}>{(this.state.toggle) === 0 ? "Search" : (this.state.toggle) === 1 ? "搜索": "Carian"}</Text></Button>
              </Right>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Divider style={styles.divider}></Divider></View>
            <View style={{ paddingVertical: 20 }}>
              <Button info style={styles.button1}><Text style={{ color: '#fff', fontSize: 20 }}>{(this.state.toggle) === 0 ? "Search Options" : (this.state.toggle) === 1 ? "搜索选项": "Carian Pilihan"}</Text></Button>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Divider style={styles.divider}></Divider></View>
            {/* <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: '400', paddingHorizontal: 20 }}>{this.state.toggle ? "财富数字意义" : "Fortune Number Meaning"}</Text>
            <Card style={{ paddingVertical: 5 }}>
              <CardItem>
                <Body>
                </Body>
              </CardItem>
            </Card> */}
            <View style= {[this.state.data === null ? { display: 'none' } : '']}>
              <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: '400', paddingHorizontal: 20 }}>{(this.state.toggle) === 0 ? "Total Win History" : (this.state.toggle) === 1 ? "总胜利历史": "jumlahnya Menang Sejarah"}</Text>
              <Card style={{ paddingVertical: 5, alignItems: 'center', justifyContent: 'center',paddingBottom:30 }}>
                <CardItem>
                  <Body>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                     <Image style={{ width: 30, height: 30,borderRadius:10}}
                        source={require('./assets/993.png')}
                      />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10  }}
                        source={require('./assets/magnum.jpg')} />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10 }}
                        source={require('./assets/damacai.png')}
                      />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10 }}
                        source={require('./assets/toto.png')}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 10}}>
                     <Text>{this.state.ninty}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.mg}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.dama}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.toto}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 40 }}>
                     <Image style={{ width: 30, height: 30,borderRadius:10}}
                        source={require('./assets/singapore.jpeg')}
                      />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10  }}
                        source={require('./assets/cashsweep.png')} />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10 }}
                        source={require('./assets/sabah88.jpg')}
                      />
                      <Image style={{ width: 30, height: 30, marginLeft: 40,borderRadius:10 }}
                        source={require('./assets/stc.jpg')}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 10}}>
                     <Text>{this.state.sg}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.cash}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.sabah}</Text>
                     <Text style={{  marginLeft: 60  }}>{this.state.stc}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 40 }}>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>1ST</Text></Button>
                      <Button style={styles.button4}><Text style={{ color: '#fff' }}>2ND</Text></Button>
                      <Button style={styles.button4}><Text style={{ color: '#fff' }}>3RD</Text></Button>
                      <Button style={styles.button5}><Text style={{ color: '#fff' }}>SPE</Text></Button>
                      <Button style={styles.button5}><Text style={{ color: '#fff' }}>CON</Text></Button>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 10}}>
                     <Text>{this.state.first}</Text>
                     <Text style={{  marginLeft: 55  }}>{this.state.second}</Text>
                     <Text style={{  marginLeft: 55  }}>{this.state.third}</Text>
                     <Text style={{  marginLeft: 55  }}>{this.state.special}</Text>
                     <Text style={{  marginLeft: 55  }}>{this.state.consolation}</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <ScrollView>
                <HTML html={this.state.result} {...htmlConfig} />
              </ScrollView>
            </View>

          </View>
        </Content>
      </Container>
    )
  }
}

export default Toolbox

const styles = StyleSheet.create({
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  divider: {
    flexDirection: 'row',
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button1: {
    width: '100 %',
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button3: {
    width: 60, height: 25, borderRadius: 10, alignItems: 'center', justifyContent: 'center',backgroundColor:'red'
  },
  button4: {
    width: 60, height: 25, borderRadius: 10, alignItems: 'center', justifyContent: 'center',backgroundColor:'red',marginLeft:5
  },
  button5: {
    width: 60, height: 25, borderRadius: 10, alignItems: 'center', justifyContent: 'center',marginLeft:5
  },
  textinvalid:{
    display:'none'
  },
  textvalid:{
    paddingBottom:2
  }
});