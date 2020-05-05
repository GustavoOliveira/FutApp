import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios'

const Fases = (props) => {
    console.log(campeonato_id)
    const {route} = props
    const {navigation} = props
    const {campeonato_id} = route.params
    
    token = 'live_2c4a81445f9dce49de8a3de371af06'
    url = `https://api.api-futebol.com.br/v1/campeonatos/${campeonato_id}`
    const [fases, setFases] = useState([])
    const [msg, setMsg] = useState([])

    const getFases = () => {
        console.log(url)
        axios.get(url, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
        })
        .then((retorno) => {
            if (retorno.data.fases.length > 0){
                setFases(retorno.data.fases)
            }else{
                setMsg("Campeonato sem fases")
            }
            
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    const getJogos = (idFase) =>{
        navigation.replace("Jogos", {campeonato_id, idFase})
    }

    useEffect(
    () => {
        getFases()

    }, []
    )

    return (
        <View style={styles.container}>      
            <Text>
                {msg}
            </Text>
            <FlatList
            data={fases}
            renderItem={
                ({ item }) =>
                <TouchableOpacity
                    onPress={() => getJogos(item.fase_id)}
                >
                    <Text style={styles.item}>
                    {item.nome}
                    </Text>
                </TouchableOpacity>
            }
            keyExtractor={(item) => item.fase_id}
            />

        </View>
    );
}

export default Fases

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
