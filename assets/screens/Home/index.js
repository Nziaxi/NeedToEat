import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  HambergerMenu,
  Bill,
  SearchNormal1,
  Home,
  BagHappy,
  Heart,
  Notification,
  ArrowDown2,
} from 'iconsax-react-native';
import theme, {COLORS, SIZES, FONTS, categoryList} from '../../constant';

// ===== App =====
export default function Homepage() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

// ===== Header =====
const Header = () => {
  return (
    <View style={header.container}>
      <TouchableOpacity>
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
  return (
    <ScrollView>
      {/* Ads */}
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{width: '100%', height: 200}}
      />

      {/* Search */}
      <View style={search.panel}>
        <SearchNormal1
          size="21"
          color={COLORS.gray}
          style={{paddingHorizontal: 12}}
        />
        <Text style={search.text}>Find some food...</Text>
      </View>

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

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 15}}>
        <View>
          <View style={itemHorizontal.row}>
            <TouchableOpacity
              style={{...itemHorizontal.cardItem, marginLeft: 24}}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Chicken
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Beef
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Rice
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBub29kbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Noodles
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...itemHorizontal.cardItem, marginRight: 24}}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://media.istockphoto.com/id/1456584076/photo/thai-deep-fried-sweet-potato-balls.webp?b=1&s=170667a&w=0&k=20&c=UHiaoKhYTSUVZyCZluR0YhGg3G60XfHSJ8wIdTTryJk=',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Snack
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={itemHorizontal.row}>
            <TouchableOpacity
              style={{...itemHorizontal.cardItem, marginLeft: 24}}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1624781748172-7151704a42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Beverage
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Fast Food
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Coffee
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={itemHorizontal.cardItem}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Bakery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...itemHorizontal.cardItem, marginRight: 24}}>
              <Image
                style={itemHorizontal.cardImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlYWZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={itemHorizontal.cardContent}>
                <Text style={{...itemHorizontal.cardText, fontSize: 14}}>
                  Seafood
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Food Menu */}
      <View>
        <Text style={itemVertical.title}>Top picks for you</Text>
        <Text style={itemVertical.subTitle}>
          Good food, good mood, good day!
        </Text>
        <TouchableOpacity style={itemVertical.card}>
          <Image
            source={{
              uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112550-1-bumbu-oles-ayam-bakar-lengkap-dengan-resepnya-mudah-dipraktikkan-008-ayu-isti.jpg',
            }}
            style={itemVertical.cardImage}
          />
          <View style={{flex: 1}}>
            {/* Name */}
            <Text style={itemVertical.cardTitle}>Ayam Bakar Madu</Text>
            {/* Description */}
            <Text style={itemVertical.cardSubTitle}>
              Ayam dengan bumbu madu
            </Text>
            {/* Price */}
            <Text style={itemVertical.cardPrice}>Rp51.000</Text>
          </View>

          {/* Calories */}
          <View style={itemVertical.cardCalories}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text style={itemVertical.cardCaloriesText}>275 kal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={itemVertical.card}>
          <Image
            source={{
              uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112554-4-ilustrasi-ayam-goreng-lengkuas-001-tantri-setyorini.jpg',
            }}
            style={itemVertical.cardImage}
          />
          <View style={{flex: 1}}>
            <Text style={itemVertical.cardTitle}>Ayam Goreng Lengkuas</Text>
            {/* Description */}
            <Text style={itemVertical.cardSubTitle}>
              Ayam goreng khas Sunda
            </Text>
            {/* Price */}
            <Text style={itemVertical.cardPrice}>Rp15.000</Text>
          </View>

          {/* Calories */}
          <View style={itemVertical.cardCalories}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text style={itemVertical.cardCaloriesText}>260 kal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={itemVertical.card}>
          <Image
            source={{
              uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112556-2-7-cara-membuat-ayam-teriyaki-enak-dan-praktis-cocok-untuk-menu-makan-siang-004-ayu-isti.jpg',
            }}
            style={itemVertical.cardImage}
          />
          <View style={{flex: 1}}>
            <Text style={itemVertical.cardTitle}>Ayam Teriyaki</Text>
            {/* Description */}
            <Text style={itemVertical.cardSubTitle}>
              Ayam bumbu khas Jepang
            </Text>
            {/* Price */}
            <Text style={itemVertical.cardPrice}>Rp24.000</Text>
          </View>

          {/* Calories */}
          <View style={itemVertical.cardCalories}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text style={itemVertical.cardCaloriesText}>375 kal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={itemVertical.card}>
          <Image
            source={{
              uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112557-3-cara-bikin-ayam-geprek-003-khulafa-pinta-winastya.jpg',
            }}
            style={itemVertical.cardImage}
          />
          <View style={{flex: 1}}>
            <Text style={itemVertical.cardTitle}>Ayam Geprek</Text>
            {/* Description */}
            <Text style={itemVertical.cardSubTitle}>Ayam yang digeprek</Text>
            {/* Price */}
            <Text style={itemVertical.cardPrice}>Rp21.000</Text>
          </View>

          {/* Calories */}
          <View style={itemVertical.cardCalories}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text style={itemVertical.cardCaloriesText}>246 kal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={itemVertical.card}>
          <Image
            source={{
              uri: 'https://akcdn.detik.net.id/community/media/visual/2020/09/17/sate-lilit-ayam-khas-bali-1.jpeg?w=700&q=90',
            }}
            style={itemVertical.cardImage}
          />
          <View style={{flex: 1}}>
            {/* Name */}
            <Text style={itemVertical.cardTitle}>Sate Lilit Ayam</Text>
            {/* Description */}
            <Text style={itemVertical.cardSubTitle}>Varian sate asal Bali</Text>
            {/* Price */}
            <Text style={itemVertical.cardPrice}>Rp29.000</Text>
          </View>

          {/* Calories */}
          <View style={itemVertical.cardCalories}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/icons/calories.png',
              }}
              style={{width: 22, height: 22}}
            />
            <Text style={itemVertical.cardCaloriesText}>60 kal</Text>
          </View>
        </TouchableOpacity>
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

// ===== Content Components (Food Menu) =====
// const MenuList = () => {
//   // Category Selected Item
//   const [selectedMenuType, setSelectedMenuType] = React.useState(1);
//   const [menuList, setMenuList] = React.useState([]);

//   React.useEffect(() => {
//     handleChangeCategory(selectedCategoryId, selectedMenuType);
//   }, []);

//   // Handler
//   function handleChangeCategory(categoryId, menuTypeId) {
//     // Find the menu based on the menuTypeId
//     let selectedMenu = dummyData.menuList.find(m => m.id == menuTypeId);

//     // Set the menu based on the categoryId
//     setMenuList(
//       selectedMenu?.list.filter(m => m.categories.include(categoryId)),
//     );
//   }
//   const renderItem = ({item}) => {
//     return <ItemCategory item={item} onPress={() => setSelected(item.id)} />;
//   };
//   return (
//     <FlatList
//       data={menuList}
//       keyExtractor={item => item.categories}
//       showsVerticalScrollIndicator={false}
//       renderItem={({item}) => {
//         return <Text>{item.name}</Text>;
//       }}
//     />
//   );
// };

// ===== Footer =====
const Footer = () => {
  return (
    <View style={footer.container}>
      <TouchableOpacity style={footer.item}>
        <Home
          size="24"
          color={COLORS.primary}
          style={footer.icon}
          variant="Broken"
        />
        <Text style={{...footer.text, color: COLORS.primary}}> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity style={footer.item}>
        <BagHappy size="24" color={COLORS.black} style={footer.icon} />
        <Text style={footer.text}> Order </Text>
      </TouchableOpacity>
      <TouchableOpacity style={footer.item}>
        <Heart size="24" color={COLORS.black} style={footer.icon} />
        <Text style={footer.text}> Favorite </Text>
      </TouchableOpacity>
      <TouchableOpacity style={footer.item}>
        <Notification size="24" color={COLORS.black} style={footer.icon} />
        <Text style={footer.text}> Notification </Text>
      </TouchableOpacity>
    </View>
  );
};

// ===== Style =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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

const footer = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 2,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: COLORS.black,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
