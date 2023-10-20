
import { StyleSheet, Text, View, Image } from 'react-native';
import image from './assets/image-qr-code.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View  style={styles.containerBox}>
            <Image source={image} style={styles.styleImg}/>
            <View style={styles.textArea}>
                <Text style={styles.textTitle}>
                Improve your front-end skills by building projects  
                </Text>
                <Text style={styles.textSub}>
                Scan the QR code to visit Frontend Mento and take your coding skills to the next level
                </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#d6e1f0",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
  },
  styleImg:{
    width: 350,
    height: 350,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 100 ,

  },
  textTitle:{
    fontWeight: 'bold',
    fontSize: 25,
    width: 350,
    margin: 0,
    color: "#383D4D",
    textAlign: 'center',
  },
  textSub:{
    width: 350,
    margin: 0,
    marginTop: 15,
    color: '#A4A4A6',
    textAlign: 'center',
    fontSize: 18,
  }
  
});
