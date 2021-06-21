import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api';

export interface Teacher{
    avatar:string;
    bio:string;
    cost:number;
    name:string;
    subject:string;
    whatsapp:string;
    id:number;
}
interface TeacherItemProps{
    teacher:Teacher;
    favorited:boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) =>{
    const [isfavorited, setIsfavorited] = useState(favorited);
    function createNewConnection(){
        
    }
    function handleLinkTowhatsapp(){
        api.post('connections',{
            user_id:teacher.id,
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }
    async function handleToogleFavorited(){
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray =[]
        if(favorites){
            favoritesArray = JSON.parse(favorites);
       }
        if(isfavorited){
            const favoriteIndex= favoritesArray.findIndex((teacherItem:Teacher)=>{
                return teacherItem.id === teacher.id

            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsfavorited(false); 
        }
        else{
            favoritesArray.push(teacher);
            setIsfavorited(true);    
        }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                source={{uri:teacher.avatar}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, isfavorited ? styles.favorited :{}]}>
                        onPress={handleToogleFavorited}
                        {isfavorited ? <Image source={unfavoriteIcon}/> 
                        : <Image source={heartOutlineIcon}/>}
                        
                    </RectButton>
                    <RectButton onPress={ handleLinkTowhatsapp} style={styles.contactButton}>
                        <Image style={styles.whatsapp} source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default TeacherItem;