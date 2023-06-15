const express = require('express');
const {ObjectId} = require('mongodb')
const {connectToDb, getDb} = require('./db');
const cors = require("cors");
const fs = require("fs");
const { error, log } = require('console');
const path = require("path");
const multer = require("multer")




const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static('uploads'))
app.use(express.json());
app.use(cors());

let db;

const storage = multer.diskStorage({
    destination: function (reg, file, cb){
        return cb(null, "./uploads")
    },
    filename: function (reg, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const upload = multer({storage})

connectToDb((err)=>{
    if(!err){
        app.listen(PORT, (err) =>{
            err ? console.log(err): console.log('Listening port '+ PORT);
        });
        db = getDb();

    }else{
        console.log('DB connection error' + err);
    }
});

app.get('/uploadphoto', (reg, res)=>{
    const Cards = [];
    if(Object.keys(reg.query).length === 0){
        db
    .collection('uploadphoto')
    .find()
    .forEach((card)=>Cards.push(card))
    .then(()=>{
        res
        .status(200)
        .json(Cards);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })

    }else{
        
        
        
        function CheckQuery(inch, screen){
            if((inch).length===0){
                return ({screen: reg.query.screen});
            };
            if((screen).length===0){
                return ({inch: reg.query.inch});
            }
            else{
                return ({inch: reg.query.inch, screen: reg.query.screen});
            }
            
        };
        
    
        db
    .collection('uploadphoto')
    .find(CheckQuery(reg.query.inch, reg.query.screen)).toArray()
    .then((doc)=>{
        res
        .status(200)
        .json(doc);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })
    }
    

    
});
app.get('/uploadphoto/:id', (reg, res)=>{
    console.log(reg.params)
        db
    .collection('uploadphoto')
    .find({ kod: reg.params.id}).toArray()
    .then((doc)=>{
        res
        .status(200)
        .json(doc);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })
   
    
    
});






app.post('/uploadphoto', upload.single('img'), (reg, res)=>{
    
 
    console.log(reg.body);
    console.log(reg.file.path);

    

    const data = {
        dataFile: reg.file.path,
        name: JSON.parse(reg.body.dataPost).name,
        kod: JSON.parse(reg.body.dataPost).kod,
        description: JSON.parse(reg.body.dataPost).description,
        price: JSON.parse(reg.body.dataPost).price,

    };
    
    db
    .collection('uploadphoto')
    .insertOne(data)
    .then((result)=>{
        res
        .status(201)
        .json(result);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })
});

app.post('/Orders', (reg, res)=>{
    
 
    console.log(reg.body);
    
    // sendMessage.send(reg.body.name, reg.body.secName, reg.body.model, reg.body.mail);
    


    
    db
    .collection('Orders')
    .insertOne(reg.body)
    .then((result)=>{
        res
        .status(201)
        .json(result);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })
});

app.get('/Orders', (reg, res)=>{
    const Cards = [];
    
        db
    .collection('Orders')
    .find()
    .forEach((card)=>Cards.push(card))
    .then(()=>{
        res
        .status(200)
        .json(Cards);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    });

    
    

    
});

app.patch('/Orders/:id', (reg, res)=>{
    
    let str = db.collection('Orders').findOne({ _id: new ObjectId(reg.params.id)}).then( (result) => {
            
            // sendMessageTrue.sendTrue(result.name, result.secName, result.model, result.mail);
      })
    
   
        db
    .collection('Orders')
    .updateOne({ _id: new ObjectId(reg.params.id)}, {$set: reg.body})
    .then((doc)=>{
        res
        .status(200)
        .json(doc);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "что то не так"});
    })
   
    
    
});

