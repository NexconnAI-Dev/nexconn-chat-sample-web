import { DirectChannel, SendFileMessageParams, Message, Helper } from '@nexconn/chat';
import { TARGET_USER_ID } from '../config';

export async function sendFileInDirect(file: File): Promise<void> {
  console.log('===== Sample 3: Send a File Message in Direct Channel =====');

  if (!file) {
    console.error('[3] Please select a file first');
    return;
  }

  const channel = new DirectChannel(TARGET_USER_ID);
  console.log('[3] DirectChannel created, targetUserId =', TARGET_USER_ID);

  const { isOk, data: params, msg } = await Helper.createSendFileMessageParams(file);

  if (!isOk) {
    console.error('[3] Failed to create send file message params, msg =', msg);
    return;
  }

  params!.onUploadProgress = (progress, message) => {
    console.log('[3] Upload progress:', `${progress}%`);
  };

  params!.onUploadComplete = (remoteUrl, message) => {
    console.log('[3] Upload complete, remoteUrl =', remoteUrl);
  };

  params!.onUploadError = (code, message) => {
    console.error('[3] Upload failed, code =', code);
  };

  const result = await channel.sendMediaMessage(params!);

  if (result.isOk) {
    const message = result.data!;
    console.log('[3] File message sent successfully');
    console.log('[3] messageId =', message.messageId);
    console.log('[3] content =', message.content);
  } else {
    console.error('[3] Failed to send file message, code =', result.code);
  }
}
