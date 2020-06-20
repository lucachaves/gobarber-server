db.createUser({
  user: 'docker',
  pwd: 'docker',
  roles: ['readWrite'],
});
db.createCollection('notifications');
