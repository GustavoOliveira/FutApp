import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios'


const Campeonatos = (props) => {
    const {navigation} = props

    token = 'live_2c4a81445f9dce49de8a3de371af06'
    url = 'https://api.api-futebol.com.br/v1/campeonatos'
    const [campeonatos, setCampeonatos] = useState([])
  
    const getCampeonatos = () => {
        axios.get(url, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
        })
        .then((retorno) => {
            setCampeonatos(retorno.data)
            console.log(retorno.data)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
    
    const getFases = (campeonato_id) =>{
        console.log(campeonato_id)
        navigation.replace("Fases", {campeonato_id})
    }

    useEffect(
    () => {
        getCampeonatos()

    }, []
    )

    return (
        <View style={styles.container}>      
            <FlatList
            data={campeonatos}
            renderItem={
                ({ item }) =>
                <TouchableOpacity
                    onPress={() => getFases(item.campeonato_id)}
                >
                    <Text style={styles.item}>
                    {item.nome}
                    </Text>
                </TouchableOpacity>
            }
            keyExtractor={(item) => item.campeonato_id}
            />

        </View>
    );
}

export default Campeonatos

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    }, item: {
    borderWidth: 1,
    borderColor: "gray",
    height : 50,
    width: "90%",
    marginLeft: "5%",
    marginTop: 5,
    padding: 3,
    textAlign: 'center'
    }, tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: 200
    }, containerFoto: {
    width: "100%",
    alignItems: "center"
    }
});
