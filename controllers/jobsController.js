import Job from '../models/Job.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError('Please Provide All Values');
  }
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
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
