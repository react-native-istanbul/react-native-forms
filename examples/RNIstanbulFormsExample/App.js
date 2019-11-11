import React, { Component } from 'react'
import { Button } from 'react-native'
import { Input, Switch, PickerList, Picker } from '@react-native-istanbul/forms'
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

const genderItems = [
  {
    'key': 'Select Gender',
    'value': ''
  },
  {
    'key': 'Male',
    'value': '1'
  },
  {
    'key': 'Woman',
    'value': '2'
  }
]

const state = {
  name: '',
  saveProfile: false,
  city: '',
  gender : ''
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = state
  }

  clearForm() {
    this.setState(state);
  }

  render() {
    const { name, saveProfile, city, gender } = this.state
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

          <Picker
            label={'Gender'}
            cancelTitleIOS={'Kapat'}
            doneTitleIOS={'Done'}
            onValueChange={(val) => {
              this.setState({gender : val})
            }}
            value={gender}
            data={genderItems}
          />

          <Button
            title={'Clear Form'}
            onPress={() => { this.clearForm() }}
          />
        </Container>
      </>

    )
  }
}