const register = (req, res) => {
  res.send('Register');
};

const login = (req, res) => {
  res.send('Login');
};

const updateUser = (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };