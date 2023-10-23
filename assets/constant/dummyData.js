export const categoryList = [
  {
    id: 1,
    categoryName: 'Popular',
  },
  {
    id: 2,
    categoryName: 'New',
  },
  {
    id: 3,
    categoryName: 'Discount',
  },
  {
    id: 4,
    categoryName: 'Favorite',
  },
  {
    id: 5,
    categoryName: 'Latest Order',
  },
];

export const categories = [
  {
    id: 1,
    name: 'Chicken',
    image:
      'https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
  },
  {
    id: 2,
    name: 'Beef',
    image:
      'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Rice',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Noodles',
    image:
      'https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBub29kbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Snack',
    image:
      'https://media.istockphoto.com/id/1456584076/photo/thai-deep-fried-sweet-potato-balls.webp?b=1&s=170667a&w=0&k=20&c=UHiaoKhYTSUVZyCZluR0YhGg3G60XfHSJ8wIdTTryJk=',
  },
  {
    id: 6,
    name: 'Beverage',
    image:
      'https://images.unsplash.com/photo-1624781748172-7151704a42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    name: 'Fast Food',
    image:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    name: 'Coffee',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 9,
    name: 'Bakery',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 10,
    name: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlYWZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export const menuList = [
  {
    id: 1,
    name: 'Ayam Bakar Madu',
    description: 'Ayam dengan bumbu madu',
    categories: [1, 3],
    price: 'Rp51.000',
    calories: 275,
    isFavorite: true,
    image:
      'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112550-1-bumbu-oles-ayam-bakar-lengkap-dengan-resepnya-mudah-dipraktikkan-008-ayu-isti.jpg',
  },
  {
    id: 2,
    name: 'Ayam Goreng Lengkuas',
    description: 'Ayam goreng khas Sunda',
    categories: [1, 3],
    price: 'Rp15.000',
    calories: 260,
    isFavorite: false,
    image:
      'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112554-4-ilustrasi-ayam-goreng-lengkuas-001-tantri-setyorini.jpg',
  },
  {
    id: 3,
    name: 'Ayam Teriyaki',
    description: 'Ayam bumbu khas Jepang',
    categories: [1, 3],
    price: 'Rp24.000',
    calories: 375,
    isFavorite: false,
    image:
      'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112556-2-7-cara-membuat-ayam-teriyaki-enak-dan-praktis-cocok-untuk-menu-makan-siang-004-ayu-isti.jpg',
  },
  {
    id: 4,
    name: 'Ayam Geprek',
    description: 'Ayam yang digeprek',
    categories: [1, 3],
    price: 'Rp21.000',
    calories: 246,
    isFavorite: true,
    image:
      'https://cdns.klimg.com/merdeka.com/i/w/news/2021/11/29/1381128/content_images/670x335/20211129112557-3-cara-bikin-ayam-geprek-003-khulafa-pinta-winastya.jpg',
  },
  {
    id: 5,
    name: 'Sate Lilit Ayam',
    description: 'Varian sate asal Bali',
    categories: [1, 5],
    price: 'Rp29.000',
    calories: 60,
    isFavorite: true,
    image:
      'https://akcdn.detik.net.id/community/media/visual/2020/09/17/sate-lilit-ayam-khas-bali-1.jpeg?w=700&q=90',
  },
];
