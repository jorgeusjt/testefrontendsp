import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardCartao: {
    backgroundColor: '#7BBDF5',
    borderRadius: 8,
    padding: 20,
    paddingBottom: 27,
    elevation: 6,
    justifyContent: 'space-between',
    width: '100%',
  },
  cardChipCartao: {
    backgroundColor: '#FFDC7E',
    borderRadius: 5,
  },
  cardCircle1: {
    backgroundColor: '#FF8686',
    borderRadius: 100,
  },
  cardCircle2: {
    backgroundColor: '#FFDC7E',
    borderRadius: 100,
  },
  cardCircle3: {
    width: 5,
    height: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 1.5,
  },
  cartaoLabel: {
    color: '#fff',
    fontFamily: 'HelveticaNeueLt',
    fontSize: 9,
  },
  cartaoText: {
    color: '#fff',
    fontFamily: 'HelveticaNeueMed',
    fontSize: 12,
  },
  rowCartao:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
});

export default styles;
