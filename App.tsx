import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, Animated} from 'react-native';
import {emojis} from './data';

const App = () => {
  const [activeEmoji, setActiveEmoji] = useState({emoji: '', animate: false});

  const transformValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animationStart = () => {
      transformValue.setValue(1);

      Animated.timing(transformValue, {
        toValue: 1.4,
        duration: 1500,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          Animated.timing(transformValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
          }).start();
        }
      });
    };
    if (activeEmoji.animate) {
      animationStart();
    }
  }, [activeEmoji, transformValue]);

  const animatedStyle = {
    transform: [{scale: transformValue}],
  };

  return (
    <View style={styles.container}>
      <View style={styles.emojisWrapper}>
        {emojis.map(({emoji, emojiName}, emojiIndex) => (
          <Pressable
            key={emojiIndex}
            onPress={() => setActiveEmoji({emoji, animate: true})}>
            <Animated.View
              style={[
                styles.emojiWrapper,
                activeEmoji.emoji === emoji && animatedStyle,
              ]}>
              <Text style={styles.emoji}>{emoji}</Text>
              <Text style={styles.emojiName}>{emojiName}</Text>
            </Animated.View>
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
    paddingHorizontal: '6.5%',
  },
  emojisWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  emojiWrapper: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  emojiName: {
    color: 'rgba(128,128,128,0.7)',
    fontSize: 12,
  },
});

export default App;
