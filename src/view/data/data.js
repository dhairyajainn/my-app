import p1_img from '../Assets/product_1.png'
import p2_img from '../Assets/product_2.png'
import p3_img from '../Assets/product_3.avif'
import p4_img from '../Assets/product_4.webp'

let data_product = [
  {
    id:1,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img ,
    new_price:50.00,
    old_price:80.50,
    gender: 'Female',
    smallImage: [
      require('../Assets/product_1.png'),
      require('../images/women1_i1.jpeg'),
      require('../images/women1_i2.jpeg'),
      require('../images/women1_i3.jpeg'),
    ]
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    gender: 'Female',
    smallImage: [
      require('../Assets/product_2.png'),
      require('../images/women2_i1.avif'),
      require('../images/women2_i2.avif'),
      require('../images/women2_i3.avif'),
    ]
  },
  {
    id:3,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p3_img,
    new_price:60.00,
    old_price:100.50,
    gender: 'Female',
    smallImage: [
      require('../Assets/product_3.avif'),
      require('../images/women3_i1.avif'),
      require('../images/women3_i2.avif'),
      require('../images/women3_i3.avif'),
    ]
  },
  {
    id:4,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p4_img,
    new_price:100.00,
    old_price:150.00,
    gender: 'Female',
    smallImage: [
      require('../Assets/product_4.webp'),
      require('../images/woman4_i1.webp'),
      require('../images/woman4_i2.webp'),
      require('../images/woman4_i3.webp'),
    ]
  },
];

export default data_product;
