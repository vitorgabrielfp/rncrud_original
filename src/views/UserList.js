import React, { useContext } from "react";
import { Alert, FlatList, View } from "react-native";
import { ListItem, Icon, Avatar  } from "@rneui/themed";
import UsersContext from "../context/UserContext";

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }){
        return (
            <ListItem 
                key={user.id} 
                bottomDivider 
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    name="edit" 
                    size={25} 
                    color="orange" 
                />

                <Icon
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    name="delete" 
                    size={25} 
                    color="red"  
               />
                
            </ListItem>
        )
    }

    return (
       <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
       </View>
    )
}