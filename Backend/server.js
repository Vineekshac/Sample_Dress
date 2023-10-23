// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const color = require('./models/color');
const connectDb = require('./db/database');


app.use(cors());



connectDb();



const addColor = () => {
  try{
    color.insertMany(data).then((docs) => {
      console.log(docs)
    }).catch((err) => {
      console.log(err)
    })
  }catch(error){
    console.log(error)
  }
}

// addColor();



const getColors = async() => {
  try{
    const colors = await color.find();
    return colors; 
  }catch(error){
    console.log(error);
  }
  
}

app.get('/getSuggestion', async(req, res) => {
  const colors = await getColors();
  const colorName = colors.map(color => color.name);
  const randomColor = colorName[Math.floor(Math.random() * colors.length)];
  res.json({ color: randomColor });
});
app.post("/post", (req, res) => { 
  console.log("Connected to React"); 
  res.redirect("/"); 
}); 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
