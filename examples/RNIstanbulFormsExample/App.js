import React, { Component } from 'react'
import { Button } from 'react-native'
import { Input, Switch, PickerList, Picker, DateTimePicker } from '@react-native-istanbul/forms'
import { Container, Header, Title, Content, Separator, Text } from 'native-base'

const darkMode = true

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

const carsItems = [
  {
    'key': 'Select Car',
    'value': ''
  },
  {
    'key': 'Mercedes',
    'value': '1'
  },
  {
    'key': 'Audi',
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
  car: '',
  date: new Date(),
  gender: ''
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
    const { name, saveProfile, city, gender, car, date } = this.state
    return (
      <>
        <Header>
          <Title>Forms</Title>
        </Header>
        <Container>
          <Content>
            <PickerList
              headerTitle={'Select City'}
              value={city}
              separatorTitle={true}
              androidStatusBarColor={'#3949ab'}
              headerbackgroundColor={'#3949ab'}
              iosBarStyle={'default'}
              onChange={(val) => { this.setState({ city: val }) }}
              data={cityItems}
              label={'City'}
            />
            <Separator>
              <Text>{''}</Text>
            </Separator>
            <PickerList
              headerTitle={'Select City'}
              value={car}
              separatorTitle={false}
              androidStatusBarColor={'#3949ab'}
              headerbackgroundColor={'#3949ab'}
              iosBarStyle={'default'}
              onChange={(val) => { this.setState({ car: val }) }}
              data={carsItems}
              label={'Car'}
            />
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

            <Picker
              label={'Gender'}
              cancelTitleIOS={'Close'}
              darkMode={darkMode}
              doneTitleIOS={'Done'}
              onValueChange={(val) => {
                this.setState({ gender: val })
              }}
              value={gender}
              data={genderItems}
            />

            <DateTimePicker
              label={'Date'}
              darkMode={darkMode}
              cancelTitleIOS={'Close'}
              doneTitleIOS={'Done'}
              dateFormat={'DD.MM.YYYY'}
              androidDisplay={'spinner'}
              minimumDate={new Date('2000-06-12T14:42:42')}
              maximumDate={new Date()}
              onValueChange={(val) => {
                this.setState({ date: val })
              }}
              value={date}
            />

            <Button
              title={'Clear Form'}
              onPress={() => { this.clearForm() }}
            />
          </Content>
        </Container>
      </>

    )
  }
}