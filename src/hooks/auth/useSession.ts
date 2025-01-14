import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const useSession = () => {
  return useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    }
  });
};