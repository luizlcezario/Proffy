import React, { useState } from 'react';
import { View , ScrollView } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage'
import {useFocusEffect} from '@react-navigation/native'

function Favorites(){
    const [favorites, setFavorites] = useState([]);
    function loadfavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){
                const favoritedTeachers =JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        })
    }
   useFocusEffect(()=>{loadfavorites();});
    return(
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
        
            <ScrollView
            style={styles.teacherlist}
            contentContainerStyle={{
                paddingBottom:16,
                paddingHorizontal:16,
            }}>
                {favorites.map((teacher:Teacher)=>{
                    return(
                        <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                        ></TeacherItem>
                    )
                })}
            </ScrollView>
        
        </View>
        
    )
}
export default Favorites;