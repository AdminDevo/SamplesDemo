import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 0,
    flexDirection: 'column',
  },
  uperView: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  secondView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
  },
  horiView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  otherButton: {
    backgroundColor: 'white',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  otherView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  textMiddle: {alignSelf: 'center', marginVertical: 8},
  text: {flexDirection: 'row', alignItems: 'center'},
});
