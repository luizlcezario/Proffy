import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HeaderTitle } from '@react-navigation/stack';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8257e5',
        padding:40,
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    title:{

        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:40,
    },
    logo:{
       flexDirection:"row",
       alignItems:'center',
       justifyContent:"space-between",
    }
    
})

export default styles;