const express =require("express");
const {connectToMongoDB}=require("./connect");
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app= express();
const PORT =8001;

connectToMongoDB("mongodb+srv://amandeepp4408:Y7YWbeTSx6FQepzE@cluster0.nhwd1hv.mongodb.net/short-url?retryWrites=true&w=majority").then(() => console.log("mongodb connected")
);

app.use(express.json())

app.use("/url",urlRoute);

app.use('/:shortId',async(req,res) => {
   const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate({
    shortId
   },
   { 
    $push:{
    visitHistory : {
        timestamp: Date.now(),
    },
   },
}
);
res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`server Started at PORT: ${PORT}`))

