import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Input, Switch, PickerList } from '@react-native-istanbul/forms'
import { Container, Header, Title } from 'native-base'

const cityItems = [
  {
    'key': 'Select City',
    'value': ''
  },
  {
    'key': 'Ankara',
    'value': '1'
  },
  {
    'key': 'İstanbul',
    'value': '2'
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      saveProfile: false,
      city: ''
    }
  }
  render() {
    const { name, saveProfile, city } = this.state
    return (
      <>
        <Header>
          <Title>Forms</Title>
        </Header>
        <Container>
          <Input
            placeholder={'Name'}
            onChangeText={(text) => { this.setState({ name: text }) }}
            value={name}
            success={true}
          />
          <Switch
            label={'Save Profile'}
            onValueChange={(text) => { this.setState({ saveProfile: text }) }}
            value={saveProfile}
          />

          <PickerList
            type={'default'}
            headerTitle={'Select City'}
            value={city}
            androidStatusBarColor={'#3949ab'}
            headerbackgroundColor={'#3949ab'}
            iosBarStyle={'default'}
            onChange={(val) => { this.setState({ city: val }) }}
            data={cityItems}
            label={'City'}
          />
        </Container>
      </>

    )
  }
}