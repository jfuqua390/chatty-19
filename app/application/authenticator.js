import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';

export default Loopback.extend({
  loginEndpoint: `https://chatty-tn-api.herokuapp.com/api/chatters/login?include=user`,
});
