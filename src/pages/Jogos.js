import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios'

const Jogos = (props) => {
    const {route} = props
    console.log({route})
    const {campeonato_id} = route.params
    const {idFase} = route.params

    
    token = 'live_2c4a81445f9dce49de8a3de371af06'
    url = `https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}/fases/${idFase}`
    console.log(url)
    const [chaveslist, setChaveslist] = useState([])
    const [ntem, setNtem] = useState('')

  
    const getJogos = () => {
        axios.get(url, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
        })
        .then(response => {
            
            var teste = []
            for (var prop in response.data.chaves) {
                console.log(response.data.chaves[prop]);
                teste.push(response.data.chaves[prop])
            }

            if (teste[0].ida[0] != undefined) {
                setChaveslist(teste)
            } else {
                setNtem('Sem partidas nesta fase ainda')
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect(
    () => {
        getJogos()

    }, []
    )
    return (
        <View style={styles.container}>
            <Text>
                {ntem}
            </Text>
            <FlatList
                data={chaveslist}
                renderItem={
                    ({ item }) =>

                        <Text style={styles.item}>
                            {item.ida[0].placar}
                        </Text>

                }
                keyExtractor={(item) => item.partida_id}
            />

        </View>
    )
}

export default Jogos;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    }, item: {
        borderWidth: 1,
        borderColor: "gray",
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
    }
});