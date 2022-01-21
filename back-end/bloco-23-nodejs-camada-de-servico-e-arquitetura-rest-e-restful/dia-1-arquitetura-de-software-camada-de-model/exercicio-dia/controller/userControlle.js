const { createUser, listUsers } = require('../Model/user_crud');

const verificacao = (firstName, lastName, email, password) => {

  if (!firstName) return { "error": true, message: 'O firstName é obrigatório' };
  if (!lastName) return { "error": true, message: 'O lastName é obrigatório' };
  if (!email) return { "error": true, message: 'O email é obrigatório' };
  if (typeof password !== 'string' || password.length < 6) return {
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
};

return false;
}

const user = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  
  const verif = verificacao(firstName, lastName, email, password);

  if(verif) return res.status(400).json( verif.message );
  if (!verif) {
    await createUser(firstName, lastName, email, password);
    return res.status(201).json({firstName, lastName, email, password});
  }
 }

 const getListUser = async (req, res) => {
   const [queryListUser] = await listUsers();
  console.log(queryListUser);
   if(!queryListUser) return res.status(200).json([]);

   return res.status(200).json(queryListUser);

   
  console.log(req.body);
 }


 module.exports = {
   user,
   getListUser,
 }