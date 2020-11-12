import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 50,
  },

  logo: {
    width: 135,
    height: 183,
  },

  button: {
    backgroundColor: '#445EE9',
    borderRadius: 6, 
    height: 40, 
    width: '80%', 
    maxWidth: 350,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 15,
  },

  textButton: {
    flexDirection: "row", 
    // backgroundColor: 'red'
  },

  buttonLabel: {
    color: '#FFFFFF'
  },

  formTextInput: {
    height: 40, 
    width: '80%', 
    maxWidth: 350,
    borderBottomWidth: 1,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },

  borderRed: {
    borderColor: 'red',
  },

  borderGray: {
    borderColor: '#AAAAAA',
  },

  errorText: {
    width: '80%',
    maxWidth: 350,
    textAlign: 'left',
    color:'red',
    paddingLeft: 10,
  },

  textGray: {
    color: '#999999',
    fontSize: 12,
    fontWeight: 'bold'
  },

  textBlue: {
    color: '#445EE9',
    fontSize: 12,
    fontWeight: 'bold'
  },

})

export default styles