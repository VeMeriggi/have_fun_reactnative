import Tts from 'react-native-tts';
const speak = text => {
  Tts.stop();
  Tts.setDucking(true);
  Tts.getInitStatus().then(() => {
    Tts.speak(text);
  });
  Tts.stop();
};
export default speak;
