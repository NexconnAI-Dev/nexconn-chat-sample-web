import { GroupChannel, GroupMemberInfo, GroupMemberRole } from '@nexconn/chat';
import { GROUP_ID } from '../config';

const RoleName: Record<number, string> = {
  [GroupMemberRole.UNDEF]: 'Undef',
  [GroupMemberRole.NORMAL]: 'Normal',
  [GroupMemberRole.MANAGER]: 'Manager',
  [GroupMemberRole.OWNER]: 'Owner',
};

export async function getGroupMembers(): Promise<void> {
  console.log('===== Sample 7: Get Group Channel Member Info =====');

  const query = GroupChannel.createGroupMembersByRoleQuery({
    groupId: GROUP_ID,
    role: GroupMemberRole.UNDEF,
    pageSize: 20,
  });

  const result = await query.loadNextPage();

  if (result.isOk) {
    const { totalCount, data: list } = result.data!;
    console.log('[7] Total members:', totalCount);
    console.log('[7] Members on this page:', list.length);

    list.forEach((member: GroupMemberInfo, index: number) => {
      console.log(
        `[7] #${index + 1}`,
        `userId=${member.userId}`,
        `name=${member.name}`,
        `role=${RoleName[member.role!] ?? member.role}`,
      );
    });

    if (query.hasNext) {
      console.log('[7] More members available, call query.loadNextPage() to continue');
    } else {
      console.log('[7] All members loaded');
    }
  } else {
    console.error('[7] Failed to get group members, code =', result.code);
  }
}
