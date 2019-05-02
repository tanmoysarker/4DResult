import React, { Component } from 'react'
import { Container, Content, Body, Icon, Item, Input, Button, Left, Right, Card, CardItem, Header, Title } from 'native-base'
import { View, Image, StyleSheet, AsyncStorage, Text, TouchableOpacity } from 'react-native';

export class Toolbox extends Component {
  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <Container>
        <Content>
          <Header>
            <Body style={{marginLeft:20}}>
              <Title>4D Number Stats & Detail</Title>
            </Body>
          </Header>
          <View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20 }}>
              <Left>
                <Item style={{ width: 280, height: 40, borderRadius: 5, backgroundColor: '#F2F3F4', marginRight: 5 }}>
                  <Icon name="ios-search" />
                  <Input placeholder="Number" />
                </Item></Left>
              <Right>
                <Button style={{ backgroundColor: '#BDC3C7', width: 70, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center', }}><Text style={{ color: '#fff', fontSize: 18 }}> Search </Text></Button>
              </Right>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Divider style={styles.divider}></Divider></View>
            <View style={{ paddingVertical: 20 }}>
              <Button info style={styles.button1}><Text style={{ color: '#fff', fontSize: 20 }}> Search Options </Text></Button>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Divider style={styles.divider}></Divider></View>
            <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: '800', paddingHorizontal: 20 }}>Fortune Number Meaning</Text>
            <Card style={{ paddingVertical: 5 }}>
              <CardItem>
                <Body>
                </Body>
              </CardItem>
            </Card>
            <View>
              <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: '800', paddingHorizontal: 20 }}>Total Win History</Text>
              <Card style={{ paddingVertical: 5, alignItems: 'center', justifyContent: 'center' }}>
                <CardItem>
                  <Body>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')} />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')} />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                      <Image style={{ width: 60, height: 60 }}
                        source={require('./assets/add.png')}
                      />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>1ST</Text></Button>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>2ND</Text></Button>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>3RD</Text></Button>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>SPE</Text></Button>
                      <Button style={styles.button3}><Text style={{ color: '#fff' }}>CON</Text></Button>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View>
              <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: '800', paddingHorizontal: 20 }}>Winning History</Text>
              <Card style={{ paddingVertical: 5 }}>
                <CardItem>
                  <Body>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end',paddingHorizontal:10 }}>
                      <Button style={{
                        width: 80, backgroundColor: '#42f471', borderRadius: 8, alignItems: 'center',
                        justifyContent: 'center'
                      }}><Text style={{ color: '#fff' }}>4D</Text></Button>
                      <Button style={{
                        width: 80, backgroundColor: '#f44149', borderRadius: 8, alignItems: 'center',
                        justifyContent: 'center'
                      }}><Text style={{ color: '#fff' }}>Price</Text></Button>
                      <Button style={{
                        width: 120, backgroundColor: '#f4d041', borderRadius: 8, alignItems: 'center',
                        justifyContent: 'center'
                      }}><Text style={{ color: '#fff' }}>Date</Text></Button>
                      <Button style={{
                        width: 80, backgroundColor: '#41d9f4', borderRadius: 8, alignItems: 'center',
                        justifyContent: 'center'
                      }}><Text style={{ color: '#fff' }}>Gap</Text></Button>
                    </View>
                  </Body>
                </CardItem>
              </Card>
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
    width: 60,
    height: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});