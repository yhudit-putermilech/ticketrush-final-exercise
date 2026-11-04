// Add a valid email address to a copied waitlist.
function joinWaitlist(list, email) {
  const result = list.slice();
  const normalizedEmail = String(email).trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf("@");
  if (atIndex === -1 || normalizedEmail.indexOf(".", atIndex + 1) === -1) return result;
  const exists = result.some(function (current) {
    return String(current).trim().toLowerCase() === normalizedEmail;
  });
  if (!exists) result.push(normalizedEmail);
  return result;
}

if (typeof module !== "undefined") {
  module.exports = { joinWaitlist };
}
