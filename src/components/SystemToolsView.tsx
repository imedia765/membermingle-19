import { SystemHealthCheck } from "./system/SystemHealthCheck";
import { GitOperationsCard } from "./system/git/GitOperationsCard";
import { RoleManagementCard } from "./system/roles/RoleManagementCard";
import { UserManual } from "./documentation/UserManual";
import { AnnouncementsManager } from "./system/AnnouncementsManager";
import { DashboardTabs, DashboardTabsContent, DashboardTabsList, DashboardTabsTrigger } from "./ui/dashboard-tabs";

const SystemToolsView = () => {
  return (
    <div className="space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-white">System Tools</h1>
        <p className="text-dashboard-muted">Manage system settings and monitor performance</p>
      </header>

      <DashboardTabs defaultValue="health" className="space-y-6">
        <div className="bg-dashboard-card rounded-lg p-2 overflow-x-auto">
          <DashboardTabsList className="w-full min-w-[600px] md:min-w-0 grid grid-cols-5 gap-2">
            <DashboardTabsTrigger value="health">
              System Health
            </DashboardTabsTrigger>
            <DashboardTabsTrigger value="git">
              Git Operations
            </DashboardTabsTrigger>
            <DashboardTabsTrigger value="roles">
              Role Management
            </DashboardTabsTrigger>
            <DashboardTabsTrigger value="manual">
              User Manual
            </DashboardTabsTrigger>
            <DashboardTabsTrigger value="announcements">
              Announcements
            </DashboardTabsTrigger>
          </DashboardTabsList>
        </div>

        <div className="mt-6">
          <DashboardTabsContent value="health" className="space-y-4">
            <SystemHealthCheck />
          </DashboardTabsContent>

          <DashboardTabsContent value="git" className="space-y-4">
            <GitOperationsCard />
          </DashboardTabsContent>

          <DashboardTabsContent value="roles" className="space-y-4">
            <RoleManagementCard />
          </DashboardTabsContent>

          <DashboardTabsContent value="manual" className="space-y-4">
            <UserManual />
          </DashboardTabsContent>

          <DashboardTabsContent value="announcements" className="space-y-4">
            <AnnouncementsManager />
          </DashboardTabsContent>
        </div>
      </DashboardTabs>
    </div>
  );
};

export default SystemToolsView;