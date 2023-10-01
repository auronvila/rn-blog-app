import {StyleSheet} from 'react-native';

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
    marginTop:40,
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 20,
    paddingHorizontal: 40,
    borderWidth:1,
    borderRadius: 9,
    borderColor: 'black'
  }
})