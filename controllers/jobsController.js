const createJob = async (req, res) => {
  return res.send('createJob');
};

const getAllJobs = async (req, res) => {
  return res.send('getAllJobs');
};

const deleteJob = async (req, res) => {
  return res.send('deleteJob');
};

const updateJob = async (req, res) => {
  return res.send('updateJob');
};

const showStats = async (req, res) => {
  return res.send('showStats');
};

export { createJob, getAllJobs, deleteJob, updateJob, showStats };
