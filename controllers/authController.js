const register = async (req, res) => {
  return res.send('Register');
};

const login = async (req, res) => {
  return res.send('Login');
};

const updateUser = async (req, res) => {
  return res.send('updateUser');
};

export { register, login, updateUser };
