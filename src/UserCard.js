import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

  const UserCard=(props)=>{

  render(){
    return(
      <View style={{ display:flex }}>
        <Text> thumbnail_url</Text>
        <View>
          <text>{props.title}</text>
          <text>{props.profile_image_url} </text><text>{props.user}</text>
          <text>{props.gamename}</text>
          <text>{props.started_at}</text>
        </View>
      </View>
    )
  }
}
export default UserCard
