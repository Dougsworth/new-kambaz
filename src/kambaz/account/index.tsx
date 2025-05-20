import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin" } />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}