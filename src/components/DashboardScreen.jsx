import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const FourBoxesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileName, setProfileName] = useState('');

  // Image Picker Operation
  const pickImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Box 1: Image Picker */}
      <View style={styles.box}>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Pick an Image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>

      {/* Box 2: Scrollable List */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Scrollable Items</Text>
        <ScrollView style={styles.scrollView}>
          {Array.from({ length: 10 }, (_, index) => (
            <Text key={index} style={styles.scrollItem}>
              Item {index + 1}
            </Text>
          ))}
        </ScrollView>
      </View>

      {/* Box 3: Update Profile */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Update Profile</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          value={profileName}
          onChangeText={setProfileName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`Profile updated for ${profileName}`)}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    width: '45%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  scrollView: {
    width: '100%',
    marginTop: 10,
  },
  scrollItem: {
    padding: 5,
    backgroundColor: '#dcdcdc',
    marginBottom: 5,
    textAlign: 'center',
  },
  boxTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default FourBoxesPage;
