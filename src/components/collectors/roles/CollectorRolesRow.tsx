import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/types/collector-roles";
import { RoleAssignment } from "./RoleAssignment";
import { SyncStatusIndicator } from "./SyncStatusIndicator";
import { CollectorInfo } from "@/types/collector-roles";

interface CollectorRolesRowProps {
  collector: CollectorInfo;
  onRoleChange: (userId: string, role: UserRole, action: 'add' | 'remove') => Promise<void>;
  onSync: (userId: string) => Promise<void>;
  permissions?: {
    canManageUsers: boolean;
    canCollectPayments: boolean;
    canAccessSystem: boolean;
    canViewAudit: boolean;
    canManageCollectors: boolean;
  };
}

export const CollectorRolesRow = ({
  collector,
  onRoleChange,
  onSync,
  permissions
}: CollectorRolesRowProps) => {
  return (
    <TableRow className="border-dashboard-cardBorder hover:bg-dashboard-card/5">
      <TableCell className="font-medium text-white">
        {collector.full_name || 'N/A'}
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="bg-dashboard-accent1/10 text-dashboard-accent1">
          {collector.member_number || 'N/A'}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="text-dashboard-text">{collector.email || 'N/A'}</div>
          <div className="text-dashboard-muted">{collector.phone || 'N/A'}</div>
        </div>
      </TableCell>
      <TableCell>
        <RoleAssignment
          userId={collector.auth_user_id || ''}
          currentRoles={collector.roles}
          onRoleChange={onRoleChange}
        />
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          {collector.role_details?.map((detail, index) => (
            <Badge 
              key={`${detail.role}-${index}`}
              variant="outline"
              className="bg-dashboard-accent2/10 text-dashboard-accent2 mr-1"
            >
              {detail.role}
            </Badge>
          ))}
        </div>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          {collector.enhanced_roles?.map((role, index) => (
            <Badge 
              key={`${role.role_name}-${index}`}
              variant="outline"
              className={`${role.is_active ? 'bg-dashboard-accent3/10 text-dashboard-accent3' : 'bg-dashboard-muted/10 text-dashboard-muted'}`}
            >
              {role.role_name}
            </Badge>
          ))}
        </div>
      </TableCell>
      <TableCell>
        <SyncStatusIndicator status={collector.sync_status} />
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => collector.auth_user_id && onSync(collector.auth_user_id)}
          disabled={!collector.auth_user_id}
          className="text-dashboard-accent1 hover:bg-dashboard-accent1/10"
        >
          <Shield className="h-4 w-4 mr-2" />
          Sync Roles
        </Button>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          {permissions && Object.entries(permissions).map(([key, value]) => (
            <Badge 
              key={key}
              variant="outline"
              className={`${value ? 'bg-dashboard-accent3/10 text-dashboard-accent3' : 'bg-dashboard-muted/10 text-dashboard-muted'} mr-1`}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Badge>
          ))}
        </div>
      </TableCell>
    </TableRow>
  );
};