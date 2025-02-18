const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const index = employee.findIndex((item) => item.id === id);
  employee.splice(index, 1);
  res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  const idExists = employee.some((item) => item.id === id);
  const idIsValid = Number.isInteger(parseInt(id)) && parseInt(id) > 0;

  if (!id || !name || !idIsValid) {
    return res.status(400).json({ message: 'Invalid Request' });
  }
  if (idExists) {
    return res.status(400).json({ message: 'Employee ID already exists. Please use a different ID.' });
  }
  employee.push({ id, name });
  res.status(201).json({ data: employee });
};
