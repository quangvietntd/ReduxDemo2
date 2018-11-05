import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: 20
    },
    ...common
  
});

export default styles;