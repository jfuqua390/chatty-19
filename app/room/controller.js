import Ember from 'ember';
import moment from 'moment';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.get(`waitAFewSeconds`).perform();
  },

  waitAFewSeconds: task(function * () {
    while(true) {
      yield timeout(1000);
      this.scroll();
      console.log(`polling`);
      this.store.findAll(`message`, { include: `chatter` });
    }
  }),

  moment: Ember.inject.service(),
  newContent: ``,

  createMessage(newContent) {
    const msg = this.store.createRecord(`message`, { content: newContent });

    msg.save().then(() => {
      this.set(`newContent`, ``);
    });
  },
  scroll() {
    var x = $(`.chatroom-box`)
    var scrollheight = x.height;
    x.scrollTop(100000000);
  },
});
