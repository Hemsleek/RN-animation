import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {emojis} from './data';

const App = () => {
  const [activeEmoji, setActiveEmoji] = useState(-1);
  const handleAnimation = (emojiIndex: number) => {
    setActiveEmoji(emojiIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.emojisWrapper}>
        {emojis.map(({emoji, emojiName}, emojiIndex) => (
          <Pressable
            key={emojiIndex}
            onPress={() => handleAnimation(emojiIndex)}>
            <View style={[styles.emojiWrapper]}>
              <Text
                style={[
                  styles.emoji,
                  activeEmoji === emojiIndex && styles.transformEmoji,
                ]}>
                {emoji}
              </Text>
              <Text
                style={[
                  styles.emojiName,
                  activeEmoji === emojiIndex && styles.transformEmojiText,
                ]}>
                {emojiName}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojisWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
  },
  emojiWrapper: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  transformEmoji: {
    transform: [{scale: 1.5}],
  },
  transformEmojiText: {
    transform: [{scale: 1.2}],
  },
  emojiName: {
    color: 'rgba(128,128,128,0.5)',
    marginTop: 7,
  },
});

export default App;
