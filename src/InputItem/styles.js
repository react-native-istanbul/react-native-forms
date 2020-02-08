import styled from 'styled-components/native'

const borderBottomColor = '#c9c9c9';
const backgroundColor = '#ffffff';
const textSize = 17;
const rightText = '#8f8e95'

export const Item = styled.View`
flex: 1;
borderBottomColor: ${borderBottomColor};
height: 44; 
borderBottomWidth: 0.5;
backgroundColor: ${backgroundColor};
flexDirection: row;
`;

export const LeftItem = styled.View`
flex: 0.5;
justifyContent: center;
`;

export const RightItem = styled.View`
flex: 0.5;
paddingRight: 15;
alignItems: flex-end;
justifyContent: center;
`;

export const ItemLeftText = styled.Text`
fontSize: ${textSize};
marginLeft: 10; 
`;

export const ItemRightText = styled.Text`
color: ${rightText};
fontSize: ${textSize};
marginLeft: 10; 
`;

export const TextInput = styled.TextInput`
height: 44;
flex: 1; 
marginRight: 10; 
fontSize: ${textSize};
`;

export const ListItem = styled.TouchableHighlight`
paddingTop : 10;
paddingLeft : 10;
borderBottomWidth: 0.5;
height: 44;
paddingBottom : 5;
borderBottomColor: ${borderBottomColor};
flexDirection: row;
`;

export const HeaderContainer = styled.SafeAreaView`
flex: 1;
flexDirection: row;
maxHeight: 90;
`;
