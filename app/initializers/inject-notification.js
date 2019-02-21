export function initialize(application) {
  application.inject('controller', 'notifications', 'service:notification-messages');
  application.inject('component', 'notifications', 'service:notification-messages');
}

export default {
  name: 'inject-notification',
  initialize
};