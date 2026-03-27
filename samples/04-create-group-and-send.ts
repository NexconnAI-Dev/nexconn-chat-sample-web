import { GroupChannel, SendTextMessageParams } from '@nexconn/chat';
import { GROUP_ID, GROUP_NAME, INVITEE_USER_IDS } from '../config';

export async function createGroupAndSend(): Promise<void> {
  console.log('===== Sample 4: Create Group Channel and Send a Text Message =====');

  const createResult = await GroupChannel.createGroup({
    groupId: GROUP_ID,
    groupName: GROUP_NAME,
    inviteeUserIds: INVITEE_USER_IDS,
  });

  if (createResult.isOk) {
    console.log('[4] Group created successfully, groupId =', GROUP_ID);
  } else {
    console.error('[4] Failed to create group, code =', createResult.code);
    return;
  }

  const channel = new GroupChannel(GROUP_ID);
  const params = new SendTextMessageParams({ text: 'Hello Group!' });
  const sendResult = await channel.sendMessage(params);

  if (sendResult.isOk) {
    const message = sendResult.data!;
    console.log('[4] Group text message sent successfully');
    console.log('[4] messageId =', message.messageId);
    console.log('[4] sentTime =', message.sentTime);
    console.log('[4] content =', message.content);
  } else {
    console.error('[4] Failed to send group text message, code =', sendResult.code);
  }
}
