import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  moment: Ember.inject.service(),
  newContent: ``,

  createMessage(newContent) {
    const msg = this.store.createRecord(`message`, { content: newContent });

    msg.save().then(() => {
      this.set(`newContent`, ``);
    });
  },
});
