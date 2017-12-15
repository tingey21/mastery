require('dotenv').config();
module.exports = {
    
    getUsers: (req, res) => {
        const db = req.app.get("db");
       
      
   db.select_all().then( (resp) => res.send(resp) ) 
    },


    getByID: function(req, res){
        const db = req.app.get("db");
        db.get_one(req.params.id).then( (resp) => res.send(resp))
        
    },


    
      updateById: (req, res) => {
        const db = req.app.get("db");
        db.update_user([req.params.id, 'req.body.name']).then( res.send("updated") )

      },

      addUser: (req, res) =>{
        const db = req.app.get("db");
        
        db.add_user([req.body.name, req.body.age]).then( (resp) =>  res.send(resp))
      },


      delete: (req, res) => {
        const db = req.app.get("db");
        db.delete_all().then( res.send("You monster") )
      }

}