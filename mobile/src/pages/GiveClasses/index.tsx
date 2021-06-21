import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import giveCLassesBG from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const {navigate} = useNavigation();

    function handleNavigatorToLanding(){
        navigate('Landing')
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={giveCLassesBG} resizeMode="contain" style={styles.bg}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web</Text>
            </ImageBackground>
            <RectButton onPress={handleNavigatorToLanding} style={styles.okButton}>
            <Text style={styles.okButtonText} >Tudo Bem </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;