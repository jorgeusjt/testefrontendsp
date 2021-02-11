import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF8686',
    padding: 10,
    borderRadius: 8,
    marginVertical: 2,
    marginBottom: 27,
    height: 40,
    width: '100%',
  },
  textButton:{
    color: 'white', 
    fontFamily: 'HelveticaNeueMed',
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  textTotal: {
    color: '#707070',
    fontSize: 20,
    fontFamily: 'HelveticaNeueBd',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  input50: {
    width: '50%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 30,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDiscount: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'HelveticaNeue Regular',
  },
});

export default styles;
