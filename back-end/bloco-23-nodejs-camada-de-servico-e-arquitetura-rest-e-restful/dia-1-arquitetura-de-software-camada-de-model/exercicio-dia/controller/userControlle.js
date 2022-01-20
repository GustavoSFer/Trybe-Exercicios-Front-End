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
  
  const verif = await verificacao(firstName, lastName, email, password);

  console.log(verif);
  if(verif) return res.status(400).json( verif.message );
  if (!verif) return res.status(201).json({firstName, lastName, email, password});
 }

 module.exports = {
   user,
 }