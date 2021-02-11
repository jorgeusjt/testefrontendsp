import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF8686',
    padding: 10,
    borderRadius: 8,
    marginVertical: 2,
    height: 40,
    width: '100%',
  },
  textTitle: {
    color: '#707070',
    fontSize: 24,
    fontFamily: 'HelveticaNeue Regular',
  },
  textSubTitle: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'HelveticaNeue Regular',
  },
  checkContainer: {
    marginTop: 58,
    marginBottom: 38,
    width: 120,
  },
  containerSuccess:{
    marginHorizontal: 61,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 148,
  },
  textButton:{
    color: 'white', 
    fontFamily: 'HelveticaNeueMed'
  },
});

export default styles;
