import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8257E5',
        flex:1,
        justifyContent:'center',
        padding:40
    },
    bg:{
        flex:1,
        justifyContent:'center',
        resizeMode:'contain',
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize:32,
        lineHeight:37,
        maxWidth:280,
    },
    description:{
        marginTop:24,
        color:'#d4c2ff',
        fontSize:16,
        lineHeight:26,
        fontFamily:'Poppins_400Regular',
        maxWidth:240,

    },
    okButton:{
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,

    },
    okButtonText:{
        color:'#FFF',
        fontSize:16,
        fontFamily:'Archivo_700Bold',
    },
    
})

export default styles;