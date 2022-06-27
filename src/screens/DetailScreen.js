
import React,{ useEffect, useState } from 'react';
import { Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen({ route, navigation }) {

   const { item } = route.params;

  return (

    <SafeAreaView>
      <Text>Id: {item.id}</Text>
      <Text>Area: {item.area}</Text>
      <Text>Pin: {item.pin}</Text>
      <Text>Estatus: {item.status ? "Encendido" : "Apagado"}</Text>
      <Button onPress={() =>{
        navigation.navigate('Home');
      }} title="REGRESAR" />
    </SafeAreaView>
  );
}