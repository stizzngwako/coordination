import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from "react-native";
import { useVideoPlayer, VideoView } from 'expo-video';
import { Flex } from "@chakra-ui/react";
import { Touchable } from "react-native/types_generated/index";
import { Ionicons } from '@expo/vector-icons';
import { post } from "@/types/types";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

type VideoItemPostProps = {
  postItem: post;
  isActive: boolean;
}

  export default function PostListItem({postItem,isActive}: VideoItemPostProps) {
   const { height } = Dimensions.get( 'window');
   const {nrOfComments, nrOfLikes,nrOfShares,description,user, video_url} = postItem;

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
  });

  useFocusEffect(
    useCallback{() => {
      if (player) return;
    }}
  )
  


  return [
    <View style = {{ height: height - 80}} > 
      <VideoView 
      style={ Flex: 1} 
      player={player} 
      contentfit="cover"
      nativecontrols={false} 
      />
      <view style= { styles.interactionBar}>
        <TouchableOpacity style= {styles.interactionButton} onPress={() => console.log('Like Pressed')}>
          < Ionicons name="heart" size={ 33 } color="#fff" /> 
         <Text style = {styles.interactionText}>{'nrOfLike'[0]?.Count || 0}</Text>
         </TouchableOpacity>

         <TouchableOpacity style= {styles.interactionButton} onPress={() => console.log('comment Pressed')}>
          < Ionicons name="chatbubble" size={ 33 } color="#fff" /> 
         <Text style = {styles.interactionText} >{'nrOfComments'[0]?.count || 0}</Text>
         </TouchableOpacity>

         <TouchableOpacity style={ styles.interactionButton} onPress={() => console.log('share Pressed')}>
          < Ionicons name="arror-redo" size={ 33 } color="#fff" /> 
         <Text style = {styles.interactionText} >{ 'nrOfShares'[0]?.count || 0}</Text>
         </TouchableOpacity>

         <TouchableOpacity style={ styles.avatar} onPress={() => console.log('profile Pressed')}>
           <View>
             <Text style = { styles.avatarText}>{ user?.username.charAt(0).toUpperCase()}</Text>
           </View>
         
         </TouchableOpacity>

      </view>

      <View style = { styles.videoInfo}>
        <Text style={styles.userName}>{user.username}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  ]
 };

  const styles = StyleSheet.create({
    interactionBar: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      alignItems: 'center',
      gap: 25
    },

    interactionButton: {
      alignItems: 'center',
      gap: 5
    },

    interactionText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',


    },

    avatar: {
      width: 35,
      height: 35,
      backgroundColor: '#fff',
      borderRadius: 20, 
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarText: {
      fontSize: 25,
      fontWeight: 'bold',
    },

    videoInfo: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 100,
      gap: 5
    },

    userName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },

    description: {
      color: '#fff'
    }
});
