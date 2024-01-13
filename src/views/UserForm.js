import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default props => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    return(
       <View style={style.form}>
            <Text style={style.text}>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})} //pega todos os elementos de 'user' e sobreescreve em 'name'
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})} //pega todos os elementos de 'user' e sobreescreve em 'name'
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text style={style.text}>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})} //pega todos os elementos de 'user' e sobreescreve em 'name'
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    props.navigation.goBack()
                }}
            />
       </View>
       
    )
}

const style = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        padding: 5,
    },
    form: {
        padding: 15,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,        
        marginLeft: 5
    }
})