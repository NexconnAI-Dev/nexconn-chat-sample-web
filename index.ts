import { initAndConnect } from './samples/01-init-and-connect';
import { sendTextInDirect } from './samples/02-send-text-in-direct';
import { sendFileInDirect } from './samples/03-send-file-in-direct';
import { createGroupAndSend } from './samples/04-create-group-and-send';
import { getChannelList } from './samples/05-get-channel-list';
import { setNoDisturb } from './samples/06-set-no-disturb';
import { getGroupMembers } from './samples/07-get-group-members';

function bindButton(id: string, handler: () => Promise<void>): void {
  const btn = document.getElementById(id) as HTMLButtonElement;
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    try {
      await handler();
    } catch (err) {
      console.error('Execution error:', err);
    } finally {
      btn.disabled = false;
    }
  });
}

bindButton('btn-01', initAndConnect);
bindButton('btn-02', sendTextInDirect);

bindButton('btn-03', async () => {
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (!file) {
    console.error('Please select a file before running Sample 3');
    return;
  }
  await sendFileInDirect(file);
});

bindButton('btn-04', createGroupAndSend);
bindButton('btn-05', getChannelList);
bindButton('btn-06', setNoDisturb);
bindButton('btn-07', getGroupMembers);
