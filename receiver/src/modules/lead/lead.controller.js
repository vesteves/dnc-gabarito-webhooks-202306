const leads = [];

const store = (params) => {
  leads.push({
    name: params.name,
    email: params.email,
    date: params.date,
    status: params.status,
  });
};

const get = () => {
  return leads;
};

module.exports = {
  store,
  get,
};
