import React from 'react';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

function Home() {
  return (
    <View>
      <YouTube
        videoId="afhAqMeeQJk" // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => {}}
        onChangeState={e => {}}
        onChangeQuality={e => {}}
        onError={e => {}}
        style={{ alignSelf: 'stretch', height: 300 }}
      />
      <View style={styles.separator} />
      <YouTube
        videoId="XMv53orNKnc" // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => {}}
        onChangeState={e => {}}
        onChangeQuality={e => {}}
        onError={e => {}}
        style={{ alignSelf: 'stretch', height: 300 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  video: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
  },
  separator: {
    height: 10,
  },
});
export default Home;
