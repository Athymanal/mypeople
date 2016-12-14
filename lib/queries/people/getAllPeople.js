'use strict';

module.exports = function (activeOnly) {
  var query = [
    'SELECT',
    'people.id,',
    'first_name,',
    'last_name,',
    'user_type,',
    'email,',
    'phone,',
    'name AS org_name,',
    'job_title,',
    'last_login,',
    'people.active,',
    'people.account_activated',
    'FROM people',
    'LEFT JOIN organisations ON (people.org_id = organisations.id)',
    'ORDER BY first_name, last_name;'
  ];

  if (activeOnly) {
    query.splice(query.length - 1, 0, 'WHERE people.active = true');
  }

  return query.join(' ');
};

/*
SELECT
people.id,
first_name,
last_name,
user_type,
email,
phone,
name,
job_title,
last_login,
people.active  FROM people
LEFT JOIN organisations ON (people.org_id = organisations.id)
WHERE people.active = true
ORDER BY first_name, last_name;
*/