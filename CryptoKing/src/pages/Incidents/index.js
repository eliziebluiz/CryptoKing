import React, { useState ,useEffect } from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'

export default function Incidents(){
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const[page,setPage] = useState(1);
  const[loading, setLoading]= useState(false);
  const navigation = useNavigation();
  const [valueSearch, setSearch] = React.useState('');

  useEffect(()=>{
    if(valueSearch === ''){
     // loadIncidents();
    }
  },[valueSearch])

  async function handleSearch(){
    setLoading(true);
    const {data} = await api.get('coins',{
      params:{
        symbols:"BTC"
      }
    });
    setIncidents(data.data.coins)
    setLoading(false);
  }

  async function loadIncidents(){
      setLoading(true);
      const {data} = await api.get('coins',{
        params:{
          limit:10
        }
      });
      setIncidents(data.data.coins);  
      setLoading(false);
  }
  
  useEffect(()=>{
    loadIncidents();
  }, [])

  return(
    <View style={styles.container}>
      <StatusBar hidden = {false} translucent backgroundColor="transparent" />
        <View style={styles.header}>
          <Image style={styles.imageLogo} source={logoImg}/>
        </View>
        <TouchableOpacity>
          <AntDesign name="star" size={28} color='#FFF010'/>
        </TouchableOpacity>  
        <Text style={styles.description}>Cryptocurrency prices, live rates e list of today.</Text>
        <View style={{
          width:'100%', flexDirection: 'row', 
          justifyContent:'center', alignItems: 'center',
          height: 50, borderRadius: 20, 
          borderWidth: 1, borderColor: '#43DC9C',
          marginBottom: 10, 
          }}>
          <TextInput
              style={styles.search}
              onChangeText={setSearch}
              value={valueSearch}
          />
          <TouchableOpacity onPress={()=>handleSearch()}>
           <Octicons style={{marginLeft: 6}} name="search"  size={24} color='#C7BF02' />  
          </TouchableOpacity>
          
        </View>
        <Text style={{color:'#C7BF02', marginBottom: 15, fontSize:20, textAlign:'center' }}>Top 10</Text>
       <FlatList
          style={styles.incidentsList}
          data={incidents}
          keyExtractor = {incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => (    
              <View style={styles.incident}>
                <Text style={{textAlignVertical:'center', fontSize:36, color: '#FFF504', marginLeft:12}}>{incident.rank}</Text>
                <View style={{marginLeft:20}}>
                    <View>
                      <Text style={{color:'#FFF504',  fontSize:18}}>{incident.name}</Text>
                      <Text style={{color:'#FFF504', fontSize:13}}>{incident.symbol}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#FFF'}}>Price: $ </Text>
                      <Text style={styles.valuesCoins}>
                        {Intl.NumberFormat('en-IN').format(incident.price)}
                      </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#FFF'}}>Market Cap: </Text>
                      <Text style={styles.valuesCoins}>
                        {incident.marketCap}
                      </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'#FFF'}}>Últimas 24hs: </Text>
                      <Text style={incident.change>=0 ? styles.valuesCoins : {color:'#EB0A25'} }>
                        {(incident.change)} %
                      </Text>
                    </View>
              </View>
              <View style={{flex:1, flexDirection:'column', alignItems:'center' ,justifyContent:'center'}}>
              <TouchableOpacity>
                <AntDesign name="staro" size={28} color='#FFF010'/>
              </TouchableOpacity>
              </View> 
            </View>
          )}
       />
    </View>
  );
}