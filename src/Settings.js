import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Separator, Body, Title, Icon } from 'native-base'
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { languageCode: 'ru' };

  }
  changeLanguage(languageCode) {
    this.setState({ languageCode: languageCode });
  }
  render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyB5ip6KC-9KCIjO9Q7Rm47dYJDmOdjLgM0', this.state.languageCode)
    return (
      <Container>
        <Header>
          <Body style={{ marginLeft: 20 }}>
            <Title >Settings</Title>
          </Body>
        </Header>
        <Content>
          <View style={{ flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}>
            <Icon name='lock' style={{ color: '#bde814', marginRight: 10 }} />
            <PowerTranslator style={{ fontSize: 20, fontWeight: '400', color: '#42a6ed' }} text={'Sign In'} />
          </View>
          <Separator bordered>
            <Text style={{ fontSize: 20, fontWeight: '400' }}>Language</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <TouchableOpacity onPress={() => { this.changeLanguage('ru') }}>
            <ListItem last>
              <Text>Chinese</Text>
            </ListItem>
          </TouchableOpacity>
          <Separator bordered>
            <Text style={{ fontSize: 20, fontWeight: '400' }}>Voice</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Chinese</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 20, fontWeight: '400' }}>Others</Text>
          </Separator>
          <ListItem>
            <Text>English</Text>
          </ListItem>
          <ListItem last>
            <Text>Chinese</Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

export default Settings
