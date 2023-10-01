import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColorL: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 17,
    padding: 9,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  formTitle: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10
  },
  buttonStyle: {
    margin: 15,
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 20,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: 'black'
  },
  isButtonDisabled: {
    backgroundColor: 'gray'
  },
  errorMessage: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'red',
    fontSize: 17,
    fontWeight: '600'
  },
  container: {
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    height: 250,
    marginTop: 160,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  showTitle:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'600',
    marginTop:20,
  },
  showTitle2:{
    fontSize:15,
    fontWeight:'400',
    marginBottom:20,
    marginTop:15,
  }


})