import React, { useState, useEffect } from 'react';
import { View , ScrollView, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import api from '../../services/api';


function TeacherList(){
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    const[teachers,setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [visibelFilter, setvisibelFilter] = useState(false);
    function loadfavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){
                const favoritedTeachers =JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
            }
        })
    }
    
    
    function handleToogleFilter(){
        setvisibelFilter(!visibelFilter);
    }
    async function handleFIlterSubmit(){
        loadfavorites()
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
            
        })
        setvisibelFilter(false);
        setTeachers(response.data);
    }
    
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
            <BorderlessButton onPress={handleToogleFilter}>
                <Feather name="filter" size={20} color="#FFF"/>
            </BorderlessButton>
            )}>
               { visibelFilter && ( 
                    <View style={styles.searchform}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            placeholderTextColor="#c1bccc" 
                            style={styles.input} 
                            placeholder="qual a matéria?"
                            value={subject}
                            onChangeText={text => setSubject(text)}

                        />
                    
                
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input} 
                                    placeholder="qual o Dia?"
                                    value={week_day}
                                     onChangeText={text => setWeek_day(text)}
                                />

                        </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horario</Text>
                                <TextInput 
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input} 
                                    placeholder="qual o Horario?"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />

                            </View>
                        </View>
                        <RectButton onPress={handleFIlterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            
            <ScrollView
            style={styles.teacherlist}
            contentContainerStyle={{
                paddingBottom:16,
                paddingHorizontal:16,
            }}>
               {teachers.map((teacher: Teacher) =>{
                  return (
                  <TeacherItem
                    key={teacher.id}
                    teacher={teacher}
                    favorited={favorites.includes(teacher.id)}/>
                    )
               })}
            </ScrollView>
        </View>
    )
}
export default TeacherList;