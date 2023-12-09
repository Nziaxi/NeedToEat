import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {
  HambergerMenu,
  Bill,
  SearchNormal1,
  ArrowDown2,
  ProfileCircle,
  Wallet,
  Edit,
} from 'iconsax-react-native';
import theme, {COLORS, SIZES, FONTS} from '../../constant';
import {categoryList, categories} from '../../constant';
import firestore from '@react-native-firebase/firestore';

// ===== App =====
export default function Homepage() {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    navigation.setOptions({
      tabBarStyle: isSidebarOpen
        ? {
            paddingBottom: 5,
            paddingTop: 20,
            height: 60,
          }
        : {display: 'none'},
    });
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);

    navigation.setOptions({
      tabBarStyle: {
        paddingBottom: 5,
        paddingTop: 20,
        height: 60,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header toggleSidebar={toggleSidebar} />
      <Content />
      {isSidebarOpen && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={{paddingBottom: 5}} onPress={toggleSidebar}>
            <HambergerMenu size="24" color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'flex-end', gap: 10}}>
            <ProfileCircle size="24" color={COLORS.white} />
            <Text style={styles.text}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'flex-end', gap: 10}}>
            <Wallet size="24" color={COLORS.white} />
            <Text style={styles.text}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'flex-end', gap: 10}}
            onPress={() => navigation.navigate('AddFood')}>
            <Edit size="24" color={COLORS.white} />
            <Text style={styles.text}>Add New Menu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// ===== Header =====
const Header = ({toggleSidebar}) => {
  return (
    <View style={header.container}>
      <TouchableOpacity onPress={toggleSidebar}>
        <HambergerMenu size="24" color={COLORS.black} />
      </TouchableOpacity>
      <Text style={header.title}>NEED TO EAT</Text>
      <TouchableOpacity>
        <Bill size="24" color={COLORS.black} variant="Linear" />
      </TouchableOpacity>
    </View>
  );
};

// ===== Content =====
const Content = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const subscriber = firestore()
      .collection('menu')
      .onSnapshot(querySnapshot => {
        const menus = [];
        querySnapshot.forEach(documentSnapshot => {
          menus.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setMenuData(menus);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('menu')
        .onSnapshot(querySnapshot => {
          const menus = [];
          querySnapshot.forEach(documentSnapshot => {
            menus.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(menus);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* Ads */}
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{width: '100%', height: 200}}
      />

      {/* Search */}
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SearchPage')}>
        <View style={search.panel}>
          <SearchNormal1
            size="21"
            color={COLORS.gray}
            style={{paddingHorizontal: 12}}
          />
          <Text style={search.text}>Find some food...</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Location */}
      <View style={{marginHorizontal: 25, marginTop: 40}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: COLORS.primary,
          }}>
          DELIVERY TO
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.black,
            }}>
            No.45, Jln Kemana Saja, Kambeng
          </Text>
          <ArrowDown2
            size="24"
            color={COLORS.primary}
            style={{marginHorizontal: 5, alignContent: 'center'}}
          />
        </TouchableOpacity>
      </View>

      {/* Category */}
      <View style={{marginTop: 8}}>
        <FlatListCategory />
      </View>

      {/* Food Browse */}
      <View style={{marginBottom: 5}}>
        <Text
          style={{
            marginLeft: 25,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: COLORS.black,
          }}>
          Browse cuisines
        </Text>
      </View>

      <HorizontalScroll categories={categories} />

      {/* Food Menu */}
      <View>
        <Text style={itemVertical.title}>Top picks for you</Text>
        <Text style={itemVertical.subTitle}>
          Good food, good mood, good day!
        </Text>

        {loading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : (
          menuData.map((item, index) => <MenuList item={item} key={index} />)
        )}
      </View>
    </ScrollView>
  );
};

// ===== Content Components (Category) =====
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? COLORS.primary : COLORS.grey;
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={categoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      contentContainerStyle={{paddingHorizontal: 18}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

// ===== Content Components (Browse cuisines) =====
const HorizontalScroll = ({categories}) => {
  const [highlightedItem, setHighlightedItem] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePress = categoryId => {
    setHighlightedItem(categoryId);
  };

  // Membagi data kategori menjadi dua baris
  const halfLength = Math.ceil(categories.length / 2);
  const firstRow = categories.slice(0, halfLength);
  const secondRow = categories.slice(halfLength);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        flexDirection: 'column',
        paddingHorizontal: 25,
      }}>
      {/* Baris Pertama */}
      <View style={{flexDirection: 'row'}}>
        {firstRow.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => handlePress(category.id)}
            style={{
              ...itemHorizontal.cardItem,
              marginRight: index !== firstRow.length - 1 ? 15 : 0,
            }}>
            <Image
              style={{
                ...itemHorizontal.cardImage,
                borderWidth: highlightedItem === category.id ? 3 : 0,
                borderColor: COLORS.primary,
              }}
              source={{uri: category.image}}
            />
            <View style={itemHorizontal.cardContent}>
              <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Baris Kedua */}
      <View style={{flexDirection: 'row'}}>
        {secondRow.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => handlePress(category.id)}
            style={{
              ...itemHorizontal.cardItem,
              marginRight: index !== firstRow.length - 1 ? 15 : 0,
            }}>
            <Image
              style={{
                ...itemHorizontal.cardImage,
                borderWidth: highlightedItem === category.id ? 3 : 0,
                borderColor: COLORS.primary,
              }}
              source={{uri: category.image}}
            />
            <View style={itemHorizontal.cardContent}>
              <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// ===== Content Components (Food Menu) =====
const MenuList = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={itemVertical.card}
      onPress={() => navigation.navigate('MenuDetail', {menuId: item.id})}>
      <Image
        source={{
          uri: item.image,
        }}
        style={itemVertical.cardImage}
      />
      <View style={{flex: 1}}>
        {/* Name */}
        <Text style={itemVertical.cardTitle}>{item.name}</Text>
        {/* Description */}
        <Text style={itemVertical.cardSubTitle}>{item.description}</Text>
        {/* Price */}
        <Text style={itemVertical.cardPrice}>{item.price}</Text>
      </View>

      {/* Calories */}
      <View style={itemVertical.cardCalories}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
          }}
          style={{width: 22, height: 22}}
        />
        <Text style={itemVertical.cardCaloriesText}>{item.calories}</Text>
      </View>
    </TouchableOpacity>
  );
};

// ===== Style =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sidebar: {
    position: 'absolute',
    width: 250,
    height: '100%',
    backgroundColor: COLORS.primary,
    zIndex: 1,
    elevation: 8,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
  text: {
    color: COLORS.white,
    ...FONTS.h3,
    paddingTop: 15,
  },
});

const header = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    ...FONTS.h3,
    alignItems: 'center',
    color: COLORS.black,
  },
});

const search = StyleSheet.create({
  panel: {
    position: 'absolute',
    top: 175,
    left: 24,
    right: 24,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray2,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    ...FONTS.body3,
    color: COLORS.gray,
    paddingHorizontal: 8,
  },
});

const category = StyleSheet.create({
  item: {
    marginBottom: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: COLORS.lightGray2,
    marginHorizontal: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.grey,
  },
});

const itemHorizontal = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  cardItem: {
    borderRadius: 25,
    width: 100,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 17,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.black,
  },
  cardText: {
    fontSize: 10,
    color: COLORS.black,
    fontFamily: 'Poppins-Medium',
    marginTop: -8,
  },
});

const itemVertical = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: COLORS.black,
    marginHorizontal: 25,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: COLORS.black,
    marginHorizontal: 25,
    marginTop: -6,
    marginBottom: 10,
  },
  card: {
    width: 345,
    height: 120,
    flexDirection: 'row',
    marginHorizontal: 25,
    marginBottom: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: COLORS.black,
    marginTop: 10,
    marginHorizontal: 10,
  },
  cardSubTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: COLORS.darkGray2,
    marginTop: -4,
    marginHorizontal: 10,
  },
  cardPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: COLORS.black,
    marginTop: 8,
    marginHorizontal: 10,
  },
  cardCalories: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    right: 8,
  },
  cardCaloriesText: {
    color: COLORS.darkGray2,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
