import {
  NCEngine,
  ConnectionStatusHandler,
  ConnectionStatus,
} from '@nexconn/chat';
import { APPKEY, TOKEN } from '../config';

export async function initAndConnect(): Promise<void> {
  console.log('===== Sample 1: Initialize and Connect Chat SDK =====');

  NCEngine.initialize({ appKey: APPKEY });
  console.log('[1] SDK initialized');

  NCEngine.addConnectionStatusHandler(
    'sample',
    new ConnectionStatusHandler({
      onConnectionStatusChanged({ status, code }) {
        switch (status) {
          case ConnectionStatus.CONNECTED:
            console.log('[1] Connection status: Connected');
            break;
          case ConnectionStatus.CONNECTING:
            console.log('[1] Connection status: Connecting...');
            break;
          case ConnectionStatus.DISCONNECTED:
            console.log('[1] Connection status: Disconnected, code =', code);
            break;
          case ConnectionStatus.SUSPENDED:
            console.log('[1] Connection status: Suspended, code =', code);
            break;
          default:
            console.log('[1] Connection status changed, status =', status, 'code =', code);
            break;
        }
      },
    }),
  );
  console.log('[1] Connection status handler registered');

  const result = await NCEngine.connect({ token: TOKEN });
  if (result.isOk) {
    console.log('[1] Connected successfully, userId =', result.data!.userId);
  } else {
    console.error('[1] Connection failed, code =', result.code);
  }
}
