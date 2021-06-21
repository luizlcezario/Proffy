import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem,{Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList (){
    const[subject,setSubject] = useState('');
    const[week_day,setWeek_day] = useState('');
    const[time,setTime] = useState('');
    const[teachers,setTeachers] = useState([]);
    async function searchTeacher(e:FormEvent){
        e.preventDefault();
       
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }

    return( 
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeacher}>
                        <Select
                            name="subject"
                            label="Máteria"
                            options= {[
                                {value:'Biologia', label:'Biologia'},
                                {value:'Mátematica', label:'Mátematica'},
                                {value:'Português', label:'Português'},
                                {value:'Artes', label:'Artes'},
                                {value:'Geografia', label:'Geografia'},
                                {value:'Química', label:'Química'},
                                {value:'História', label:'História'},
                                {value:'Filosofia', label:'Filosofia'},
                                {value:'Sociologia', label:'Sociologia'},
                                {value:'Educação Física',label:'Educação Física'}
                            ]}
                            value={subject} 
                            onChange={(e)=>{setSubject(e.target.value)}}
                        />
                        <Select 
                        name="week_day"
                        label="Dia da semana"
                        options= {[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda-feira'},
                            {value:'2', label:'Terça-feira'},
                            {value:'3', label:'Quarta-feira'},
                            {value:'4', label:'Quinta-feira'},
                            {value:'5', label:'Sexta-feira'},
                            {value:'6', label:'Sábado'},
                           ]}
                           value={week_day} 
                           onChange={(e)=>{setWeek_day(e.target.value)}}
                        />
                        
                        <Input type="time" name="time" label="Hora"
                            value={time} 
                            onChange={(e)=>{setTime(e.target.value)
                            }}
                          />
                        <button type="submit">Buscar</button>
                    </form> 
            </PageHeader>   
            <main>
               {teachers.map((teacher: Teacher) =>{
                  return <TeacherItem
                  key={teacher.id}
                  teacher={teacher}/>
               })}
            </main>
        </div>
    )
}

export default TeacherList;