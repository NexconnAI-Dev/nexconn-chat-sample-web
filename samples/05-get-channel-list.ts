import { BaseChannel, ChannelType } from '@nexconn/chat';

const ChannelTypeName: Record<number, string> = {
  [ChannelType.DIRECT]: 'Direct',
  [ChannelType.GROUP]: 'Group',
  [ChannelType.OPEN]: 'Open',
  [ChannelType.SYSTEM]: 'System',
  [ChannelType.COMMUNITY]: 'Community',
};

export async function getChannelList(): Promise<void> {
  console.log('===== Sample 5: Get Recent Direct and Group Channel List =====');

  const query = BaseChannel.createChannelsQuery({ pageSize: 20 });
  const result = await query.loadNextPage();

  if (result.isOk) {
    const channels = result.data!.data;
    console.log('[5] Fetched', channels.length, 'channel(s)');

    channels.forEach((channel, index) => {
      const typeName = ChannelTypeName[channel.channelType] ?? 'Unknown';
      console.log(
        `[5] #${index + 1}`,
        `type=${typeName}`,
        `channelId=${channel.channelId}`,
        `unreadCount=${channel.unreadCount}`,
      );

      const latestMsg = channel.latestMessage;
      if (latestMsg) {
        console.log(
          `[5]   latestMessage: type=${latestMsg.messageType}`,
          `sender=${latestMsg.senderUserId}`,
          `time=${latestMsg.sentTime}`,
        );
      }
    });
  } else {
    console.error('[5] Failed to get channel list, code =', result.code);
  }
}
