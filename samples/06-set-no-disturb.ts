import {
  DirectChannel,
  GroupChannel,
  ChannelNoDisturbLevel,
} from '@nexconn/chat';
import { TARGET_USER_ID, GROUP_ID } from '../config';

export async function setNoDisturb(): Promise<void> {
  console.log('===== Sample 6: Set Do Not Disturb for Direct and Group Channel =====');

  const directChannel = new DirectChannel(TARGET_USER_ID);
  const directResult = await directChannel.setNoDisturbLevel(ChannelNoDisturbLevel.MUTED);

  if (directResult.isOk) {
    console.log('[6] DirectChannel Do Not Disturb set to MUTED, targetUserId =', TARGET_USER_ID);
  } else {
    console.error('[6] Failed to set DirectChannel Do Not Disturb, code =', directResult.code);
  }

  const groupChannel = new GroupChannel(GROUP_ID);
  const groupResult = await groupChannel.setNoDisturbLevel(ChannelNoDisturbLevel.MUTED);

  if (groupResult.isOk) {
    console.log('[6] GroupChannel Do Not Disturb set to MUTED, groupId =', GROUP_ID);
  } else {
    console.error('[6] Failed to set GroupChannel Do Not Disturb, code =', groupResult.code);
  }

  console.log('[6] Available Do Not Disturb levels:');
  console.log('  ChannelNoDisturbLevel.ALL_MESSAGE =', ChannelNoDisturbLevel.ALL_MESSAGE, '(receive all message notifications)');
  console.log('  ChannelNoDisturbLevel.DEFAULT     =', ChannelNoDisturbLevel.DEFAULT, '(follow global settings)');
  console.log('  ChannelNoDisturbLevel.MENTION     =', ChannelNoDisturbLevel.MENTION, '(notify on @mentions only)');
  console.log('  ChannelNoDisturbLevel.MUTED       =', ChannelNoDisturbLevel.MUTED, '(fully muted)');
}
