const { createUser, listUsers, userById } = require('../Model/user_crud');

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
   if(queryListUser.length === 0) return res.status(200).json([]);

   return res.status(200).json(queryListUser);
 }

 const getUserById = async (req, res) => {
  const { id } = req.params;

  const [queryById] = await userById(id);

  if(queryById.length === 0) return res.status(404)
    .json( {"error": true, "message": "Usuário não encontrado" });

  return res.status(200).json(queryById);
 }


 module.exports = {
   user,
   getListUser,
   getUserById,
 }