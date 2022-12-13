import { Content } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('voce recebeu uma solicitação');

    expect(content).toBeTruthy;
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
