import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      Category: 'social',
      recipientId: 'example-id',
    })
  
    expect(notification).toBeTruthy();
  });
})