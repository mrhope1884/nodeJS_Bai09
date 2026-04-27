const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const listUser = [
    {
      fullName: "Vũ Viết Quân",
      email: "vuvietquan1884@gmail.com",
      cccd: {
        fullName: "Vũ Viết Quân",
        number: "18/08/2004"
      }
    },
    {
      fullName: "Vũ Viết Quan",
      email: "vietquan1884@gmail.com",
    }
  ];
  console.log(listUser)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
