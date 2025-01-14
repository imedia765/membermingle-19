import { supabase } from "@/integrations/supabase/client";
import type { UserRole } from '../useRoleAccess';

export const getRoleFromData = (roleData: Array<{ role: string }>) => {
  if (roleData.some(r => r.role === 'admin')) return 'admin' as UserRole;
  if (roleData.some(r => r.role === 'collector')) return 'collector' as UserRole;
  return 'member' as UserRole;
};

export const fetchUserRole = async (userId: string, memberNumber?: string): Promise<UserRole> => {
  // Special case for admin
  if (memberNumber === 'TM10003') {
    return 'admin';
  }

  const { data: roleData, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId);

  if (error) throw error;
  if (roleData?.length > 0) {
    return getRoleFromData(roleData);
  }

  return 'member';
};