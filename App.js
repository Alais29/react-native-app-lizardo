import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const background = {
  uri: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100",
};
const profilePic = {
  uri: "https://alfonsinalizardo.netlify.app/static/profile-94572249a479ed221c862d2bac96b159.jpg",
};

export default function App() {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={profilePic} />
        <Text style={styles.title}>Alfonsina Lizardo</Text>
        <Text style={styles.content}>
          Hi! I'm Alfonsina Lizardo, previously MD, now Fullstack MERN
          Developer. I enjoy solving problems, building web applications and I
          love videogames!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 32,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderColor: "rgba(255, 255, 255, 0.125)",
    borderRadius: 12,
    borderWidth: 1,
  },
  title: {
    color: "#fff",
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "rgba(255, 255, 255, 0.125)",
    borderWidth: 5,
  },
});
