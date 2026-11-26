function joinWaitlist(list, email) {
  if (typeof email !== 'string') return list.slice();

  const clean = email.trim().toLowerCase();

  const at = clean.indexOf('@');
  const validEmail = at !== -1 && clean.indexOf('.', at + 1) !== -1;
  if (!validEmail) return list.slice();

  if (list.includes(clean)) return list.slice();

  return list.concat(clean);
}

module.exports = { joinWaitlist };
