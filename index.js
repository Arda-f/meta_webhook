const fs = require("fs")

const modules = fs.readdirSync("./commands", "utf-8")
modules.forEach(module => {
  console.log(module)
    const imported_modules = require("./commands/" + module)
})



// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Body-parser middleware'ini kullanarak gelen istekleri işleyelim
// app.use(bodyParser.json());

// // Webhook isteği için POST yönlendirmesi
// app.get('/webhook', (req, res) => {
//   // Gelen webhook isteğini işleyelim
//   const payload = req.body;
//   console.log('Webhook isteği alındı:', payload);

//   let challange=req.query["hub.challenge"];

//   // İsteğe uygun şekilde yanıt verelim
//   res.status(200).send(challange)
// });

// // Sunucuyu dinlemeye başlayalım
// app.listen(port, () => {
//   console.log(`Webhook sunucusu ${port} numaralı port üzerinde çalışıyor.`);
// });
