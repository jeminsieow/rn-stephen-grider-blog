import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return <>
    <Text>{ blogPost.title }</Text>
    <Text>{ blogPost.content }</Text>
  </>
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={
        () => navigation.navigate('Edit', {id: navigation.getParam('id')})
      }
      >
        <FontAwesome name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({

})

export default ShowScreen;