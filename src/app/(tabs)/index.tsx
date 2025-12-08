import {View, FlatList,Dimensions, ViewToken } from 'react-native';
import PostListItem from '@/components/PostListItem';
import posts from '@assets/data/posts.json';
import { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { height } = Dimensions.get('window');
  const [currentIndex, setCuttentIndex] = useState(0);

  const onViewableChanged = useRef{({ viewableItems } : { viewableItems: viewToken[]}) => {
    if (viewableItems.length > 0) {
      setCuttentIndex(viewableItems[0]?.index || 0)
    }
  }}

  console.log(currentidex)
  return (
    <View>

      <View>
        <MaterialIcons name="live-tv" size=(24) color="white"/>
      </View>
  
      <FlatList
      data={posts}
      renderItem= {({ item, index }) => {
        <PostListItem postItem={item} isActive={index === currentIndex} />
      }}
      showsVerticalScrollIndicator={false}
      snapToInterval={height - 80}
      decelerationRate={"fast"}
      disableIntervalMomentum
      onViewableItemsChanged={onViawableItemChanged.current}
      />
    </View>
  )
}