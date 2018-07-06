const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;
    User.findOne({ email })
      .then(user => {
        if (!user) {
          throw Error();
        }

        return User.validatePassword(password, user.password).then(() => {
          // handle login
          completeLogin(request, response, user);
        });
      })
      .catch(_error => {
        response.status(403).json({ error: 'user/pass combo not found' });
      });
  },
  register(request, response) {
    console.log('registering user', request.body);
    User.create(request.body)
      .then(user => {
        // handle login
        completeLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID', { path: '/' });
    response.clearCookie('expiration', { path: '/' });
    response.json(true);
  },
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}
