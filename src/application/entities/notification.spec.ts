import { Content } from './notification-content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('novo conteudo'),
      category: 'social',
      recipientId: 'uuid from crypto',
      readAt: null,
    });

    expect(notification).toBeTruthy;
  });
});
