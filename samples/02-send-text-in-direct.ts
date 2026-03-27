import { DirectChannel, SendTextMessageParams } from '@nexconn/chat';
import { TARGET_USER_ID } from '../config';

export async function sendTextInDirect(): Promise<void> {
  console.log('===== Sample 2: Send a Text Message in Direct Channel =====');

  const channel = new DirectChannel(TARGET_USER_ID);
  console.log('[2] DirectChannel created, targetUserId =', TARGET_USER_ID);

  const params = new SendTextMessageParams({ text: 'Hello from Nexconn Chat SDK!' });
  const result = await channel.sendMessage(params);

  if (result.isOk) {
    const message = result.data!;
    console.log('[2] Text message sent successfully');
    console.log('[2] messageId =', message.messageId);
    console.log('[2] sentTime =', message.sentTime);
    console.log('[2] content =', message.content);
  } else {
    console.error('[2] Failed to send text message, code =', result.code);
  }
}
