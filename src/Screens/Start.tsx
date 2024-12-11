import React from "react";
import { View,TouchableOpacity, Text } from "react-native";
import { HomeScreenProps } from "../services/types";

const HomeScreen=({ navigation }:HomeScreenProps)=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('UserList')} style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray',paddingVertical:20,paddingHorizontal:50,borderRadius:10}}>
                <Text>
                    Start
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;