const { Task } = require('../models/index')

class Controller {
    static home(req,res){
        Task.findAll()
        .then(data=>{
            res.render('home', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static getAdd(req,res){
        res.render('addtask')
    }
    static postAdd(req,res){
        const body = req.body
        Task.create(body)
        .then(data=>{
            res.redirect("/")
        })
        .catch(err=>{
            res.send(err)
            console.log(err);
        })
    }
    static complete(req,res){
        const id = req.params.id
        Task.update({status: "complete"}, {where: {id: id}}, {order: [["updatedAt", "DESC"]]})
        .then(data=>{
            res.redirect("/")
        })
        .catch(err=>{
          res.send(err)  
        })
    }
    static uncomplete(req,res){
        const id = req.params.id
        Task.update({status: "uncomplete"}, {where: {id: id}}, {order: [["updatedAt", "DESC"]]})
        .then(data=>{
            res.redirect("/")
        })
        .catch(err=>{
          res.send(err)  
        })
    }
    static deleted(req,res){
        const id = req.params.id
        Task.destroy({where:{id:+id}})
        .then(data=>{
            res.redirect("/")
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller