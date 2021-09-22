const express= require("express");
const router= express.Router()
const Person= require("../models/personSchema")
router.post("/newperson", (req,res)=> {
    let newperson= new Person({...req.body});
    newperson.save((err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});
router.post("/newpersons", (req,res)=> {
    Person.create(req.body,(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.get("/findperson", (req,res)=> {
    Person.find({name:'Mounir'},(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.get("/findoneperson", (req,res)=> {
    Person.findOne({name:'Mounir'},(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.get("/findbyid/:id", (req,res)=> {
    Person.findById(req.params.id,(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.put("/findandupdate", (req,res)=> {
    Person.findOneAndUpdate({name:'rafik'},req.body,(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.delete("/removebyid/:id", (req,res)=> {
    Person.findByIdAndRemove(req.params.id,(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.delete("/remove", (req,res)=> {
    Person.remove({name:"Mounir"},(err,data)=> {
        if (err) throw err;
        else res.send(data)
    });
});

router.get('/findselected',(req,res)=>{
    Person.find({favoriteFoods:"frekasse"}).sort('name').limit(2).select('-age').exec((err,data)=> {
        if (err) throw err;
        else res.send(data)
    })
})

module.exports= router;