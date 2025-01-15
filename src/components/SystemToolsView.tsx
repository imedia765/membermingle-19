import { DashboardTabs, DashboardTabsContent, DashboardTabsList, DashboardTabsTrigger } from "@/components/ui/dashboard-tabs";
import SystemHealthCheck from "./system/SystemHealthCheck";
import GitOperationsCard from "./system/GitOperationsCard";
import RoleManagementCard from "./system/RoleManagementCard";
import UserManual from "./documentation/UserManual";
import AnnouncementsManager from "./system/AnnouncementsManager";

const SystemToolsView = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">System Tools</h1>
        <p className="text-dashboard-muted">Manage system settings and monitor performance</p>
      </header>

      <DashboardTabs defaultValue="health" className="space-y-6">
        <div className="bg-dashboard-card rounded-lg p-1">
          <DashboardTabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
      </DashboardTabs>
    </div>
  );
};

export default SystemToolsView;