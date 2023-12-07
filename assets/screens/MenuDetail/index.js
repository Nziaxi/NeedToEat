import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ArrowLeft2,
  Heart,
  Star1,
  Clock,
  Minus,
  Add,
  Edit,
} from 'iconsax-react-native';
import theme, {COLORS, SIZES, FONTS, menuList} from '../../constant';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';

const MenuDetail = ({route}) => {
  const {menuId} = route.params;
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    getMenuById();
  }, [menuId]);

  const getMenuById = async () => {
    try {
      const response = await axios.get(
        `https://65716495d61ba6fcc01261ec.mockapi.io/needtoeat/menuList/${menuId}`,
      );
      setSelectedMenu(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('EditMenu', {menuId});
  };

  const handleDelete = async () => {
    await axios
      .delete(
        `https://65716495d61ba6fcc01261ec.mockapi.io/needtoeat/menuList/${menuId}`,
      )
      .then(() => {
        closeActionSheet();
        navigation.navigate('Homepage');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{...styles.title, fontSize: 18}}>DETAIL</Text>
        <TouchableOpacity>
          <Heart size="24" color={COLORS.black} variant="Linear" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView>
        {/* Image */}
        <View style={styles.content}>
          {selectedMenu?.image ? (
            <Image
              source={{
                uri: selectedMenu?.image,
                headers: {Authorization: 'someAuthToken'},
              }}
              style={styles.card}
            />
          ) : (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          )}
        </View>
        {/* Title & Description */}
        <View>
          <Text
            style={{
              top: 15,
              paddingHorizontal: 20,
              alignItems: 'center',
              color: COLORS.black,
              ...FONTS.h1,
            }}>
            {selectedMenu?.name}
          </Text>
          <Text
            style={{
              top: 18,
              paddingHorizontal: 20,
              alignItems: 'center',
              color: COLORS.darkGray,
              textAlign: 'justify',
              ...FONTS.body3,
            }}>
            {selectedMenu?.comDescription}
          </Text>
        </View>

        {/* Ratings, Duration & Calories */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.padding,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          {/* Ratings */}
          <View
            style={{
              height: 35,
              width: 75,
              borderRadius: 7,
              marginTop: 10,
              paddingHorizontal: 10,
              paddingRight: 11,
              backgroundColor: COLORS.primary,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Star1 size="24" color={COLORS.black} />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: COLORS.black,
                top: 2,
              }}>
              {selectedMenu?.rating}
            </Text>
          </View>

          {/* Duration */}
          <View
            style={{
              height: 35,
              width: 100,
              borderRadius: 7,
              marginTop: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Clock size="24" color={COLORS.black} />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: COLORS.black,
                top: 2,
                left: 2,
              }}>
              {selectedMenu?.duration} Mins
            </Text>
          </View>
          {/* Calories */}
          <View
            style={{
              height: 35,
              width: 80,
              left: -5,
              borderRadius: 7,
              marginTop: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: COLORS.black,
                top: 2,
                left: 2,
              }}>
              {selectedMenu?.calories} kal
            </Text>
          </View>
        </View>
        <View style={styles.size}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            Sizes:
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 7,
              backgroundColor: COLORS.primary,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 32,
                color: COLORS.white,
                top: 1,
              }}>
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: COLORS.lightGray1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 32,
                color: COLORS.lightGray1,
              }}>
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: COLORS.lightGray1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 32,
                color: COLORS.lightGray1,
                top: 1,
              }}>
              L
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={openActionSheet}>
        <Edit color={COLORS.white} variant="Linear" size={20} />
      </TouchableOpacity>
      {/* Footer */}
      <View style={styles.footer}>
        <View
          style={{
            height: 60,
            width: 140,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            paddingRight: 11,
            backgroundColor: COLORS.lightGray2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Minus size="32" color={COLORS.gray} />
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: COLORS.black,
              fontSize: 24,
              top: 2,
            }}>
            1
          </Text>
          <TouchableOpacity>
            <Add size="32" color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: 180,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            paddingRight: 11,
            backgroundColor: COLORS.primary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: COLORS.white,
              fontSize: 24,
              top: 2,
            }}>
            BUY NOW
          </Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.black,
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.black,
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default MenuDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  card: {
    height: 200,
    width: 350,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray2,
  },
  size: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    marginTop: 4,
    marginBottom: 2,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: COLORS.lightGray1,
    borderWidth: 1,
    height: 100,
  },
  floatingButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    position: 'absolute',
    bottom: 125,
    right: 24,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
