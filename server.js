const express = require("express");
const app = express();

app.get("/musica", (req, res) => {

  const musica = req.query.search;

  if(!musica){
    return res.send("Digite uma musica");
  }

  const url = "https://api.vevioz.com/api/button/mp3/" + encodeURIComponent(musica);

  res.redirect(url);

});

app.listen(3000, () => {
  console.log("API JBL rodando");
});
