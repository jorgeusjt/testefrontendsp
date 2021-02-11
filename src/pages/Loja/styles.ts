import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'HelveticaNeueLt',
    lineHeight: 40,
    fontSize: 32,
    textAlign: 'left',
    padding: 24,
    color: '#FF8686',
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: '#FF8686',
  },
  inactiveDot: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF8686',
    width: 13,
    height: 13,
    borderRadius: 10,
  },
});

export default styles;
