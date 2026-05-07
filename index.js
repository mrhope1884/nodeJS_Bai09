const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products-test-t5');

const Products = mongoose.model('Products', { 
  title: String,
  price: Number,
  thumbnail: String
});
const app = express()
const port = 6969

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Trang chủ ',
    message: 'Xin chào các bạn!' })
})

// app.get('/', (req, res) => {
//   const listUser = [
//     {
//       fullName: "Vũ Viết Quân",
//       email: "vuvietquan1884@gmail.com",
//       cccd: {
//         fullName: "Vũ Viết Quân",
//         number: "18/08/2004"
//       }
//     },
//     {
//       fullName: "Vũ Viết Quan",
//       email: "vietquan1884@gmail.com",
//     }
//   ];
//   console.log(listUser)
//   res.send('Hello World!')
// })

app.get('/Products', async (req, res) => {
    const product = await Products.find({});
    console.log(product);
    res.render('product', {
      title: 'Products',
      message: 'Trang danh sách sản phẩm',
      information: 'Thông tin',
      products: product
    });
})

app.get('/Contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact ',
    message: 'Trang liên hệ  ',
    information: 'Thông tin '})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
