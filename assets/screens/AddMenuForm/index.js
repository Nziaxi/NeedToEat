import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft2, AddSquare, Add} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import theme, {COLORS} from '../../constant';
import {categories} from '../../constant';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AddFoodForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const [menuData, setMenuData] = useState({
    name: '',
    description: '',
    comDescription: '',
    categories: {},
    rating: '',
    price: '',
    calories: '',
    duration: '',
    isFavorite: false,
  });

  const handleChange = (key, value) => {
    setMenuData({
      ...menuData,
      [key]: value,
    });
  };

  const handleChangeCategory = (categoryId, categoryName) => {
    const isCategorySelected = selectedCategories.some(
      categories => categories.id === categoryId,
    );

    if (isCategorySelected) {
      const updatedCategories = selectedCategories.filter(
        categories => categories.id !== categoryId,
      );
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([
        ...selectedCategories,
        {id: categoryId, name: categoryName},
      ]);
    }
  };

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1920,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`menuimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('menu').add({
        name: menuData.name,
        description: menuData.description,
        comDescription: menuData.comDescription,
        categories: selectedCategories,
        rating: menuData.rating,
        price: menuData.price,
        calories: menuData.calories,
        duration: menuData.duration,
        isFavorite: menuData.isFavorite,
        image: url,
      });
      setLoading(false);
      console.log('Menu added!');
      navigation.navigate('Homepage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 color={COLORS.black} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Add New Menu</Text>
        </View>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Name"
            value={menuData.name}
            onChangeText={text => handleChange('name', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.title}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Short description"
            value={menuData.description}
            onChangeText={text => handleChange('description', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={[textInput.borderDashed, {minHeight: 250}]}>
          <TextInput
            placeholder="Description"
            value={menuData.comDescription}
            onChangeText={text => handleChange('comDescription', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Rating"
            value={menuData.rating}
            onChangeText={text => handleChange('rating', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Price"
            value={menuData.price}
            onChangeText={text => handleChange('price', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Calories"
            value={menuData.calories}
            onChangeText={text => handleChange('calories', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Duration"
            value={menuData.duration}
            onChangeText={text => handleChange('duration', text)}
            placeholderTextColor={COLORS.gray2}
            multiline
            style={textInput.content}
            cursorColor={COLORS.primary}
          />
        </View>
        {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={COLORS.white}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={COLORS.gray2} variant="Linear" size={32} />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: COLORS.gray2,
                }}>
                Upload Image
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
              color: COLORS.gray2,
            }}>
            Category
          </Text>
          <View style={category.container}>
            {categories.map((item, index) => {
              const bgColor = selectedCategories.some(
                category => category.id === item.id,
              )
                ? COLORS.black
                : COLORS.lightGray2;
              const color = selectedCategories.some(
                category => category.id === item.id,
              )
                ? COLORS.white
                : COLORS.gray;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleChangeCategory(item.id, item.name)}
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color}]}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFoodForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.black,
  },
  bottomBar: {
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white,
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: COLORS.gray2,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: COLORS.lightGray1,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
});
