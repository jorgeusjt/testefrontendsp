import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,

    //shadow Android
    elevation: 9,

    //shadow IOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardTitle: {
    color: '#707070',
    fontSize: 24,
    fontFamily: 'HelveticaNeueBd',
  },
  cardDescription: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'HelveticaNeueLt',
    paddingTop: 24,
    paddingEnd: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF8686',
    padding: 10,
    borderRadius: 8,
    marginVertical: 2,
    height: 40,
    width: 147,
  },
  priceConstante: {
    color: '#7BBDF5',
    fontFamily: 'HelveticaNeueBd',
    fontSize: 20,
    paddingRight: 8,
  },
  text1: {
    fontSize: 14,
    color: '#707070',
    paddingTop: 20,
    fontFamily: 'HelveticaNeueLt',
  },
  priceContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 20,
    marginBottom: 24,
  },
  price: {
    color: '#7BBDF5',
    fontFamily: 'HelveticaNeueBd',
    fontSize: 30,
  },
  investimento:{
    fontSize: 10,
    color: '#707070',
    fontFamily: 'HelveticaNeueLt',
  },
});

export default styles;
