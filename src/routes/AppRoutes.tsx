import { Routes, Route } from "react-router";

//admin
import AdminProtectedRoute from "@/routes/protected_routes/AdminProtectedRoute";
import { AdminLayout } from "@/pages/admin/AdminLayout";

//profile
// import ProfileLayout from "../pages/profile/ProfileLayout";
// import ProfileProtectedRoute from "../protected_routes/ProfileProtectedRoute";
// import { ProfileDashboard } from "../pages/profile/ProfileDashboard";
// import { ProfileSettings } from "../pages/profile/ProfileSettings";

//user
// import { UserLayout } from "../pages/user/UserLayout";
// import { UserDashboard } from "../pages/user/UserDashboard";
// import { UserProtectedRoute } from "../protected_routes/UserProtectedRoute";
import { NotFound } from "@/pages/NotFound";

export const AppRoutes = ({ userRole }: { userRole: string }) => {
  if (userRole === "admin")
    return (
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute role={userRole} redirectPath="*">
               <AdminLayout role={userRole} />
            </AdminProtectedRoute>
          }
        >
          {/* <Route index element={<AdminDashboard role={userRole} />} /> */}
          {/* <Route path="users" element={<AdminUsers />} /> */}
          {/* <Route path="goals" element={<GoalsLayout />} /> */}
          {/* <Route path="divisions" element={<DivisionsLayout />} /> */}
          {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Route>
        <Route path="*" element={<NotFound role={userRole} />} />
      </Routes>
    );

  // if (userRole === "profile")
  //   return (
  //     <Routes>
  //       <Route
  //         path="/profile"
  //         element={
  //           <ProfileProtectedRoute role={userRole} redirectPath="*">
  //             <ProfileLayout role={userRole} />
  //           </ProfileProtectedRoute>
  //         }
  //       >
  //         <Route index element={<ProfileDashboard />} />
  //         <Route path="settings" element={<ProfileSettings />} />
  //       </Route>
  //       <Route path="*" element={<NotFound role={userRole} />} />
  //     </Routes>
  //   );
  //
  // if (userRole === "user")
  //   return (
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <UserProtectedRoute role={userRole} redirectPath="*">
  //             <UserLayout role={userRole} />
  //           </UserProtectedRoute>
  //         }
  //       >
  //         <Route index element={<UserDashboard />} />
  //
  //       </Route>
  //       <Route path="*" element={<NotFound role={userRole} />} />
  //     </Routes>
  //   );
};
