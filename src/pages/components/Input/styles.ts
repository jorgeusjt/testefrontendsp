import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 7,
  },
  textInput:{ 
    height: 40,
     fontSize: 16, 
     color: '#707070', 
     borderWidth: 1, 
     borderColor: '#CCCCCC',
     borderRadius:8,
     paddingHorizontal:15,
     paddingVertical:11,
    },
    textLabel:{
    marginLeft:10,
    paddingHorizontal:3,
    backgroundColor:'white',
    position: 'absolute',
    left: 0,
    fontFamily:'HelveticaNeue Regular',
    color:'#707070',
    }
});

export default styles;