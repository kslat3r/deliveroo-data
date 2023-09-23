module.exports = (items) => {
  const sorted = Object.entries(items)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  return sorted;
};