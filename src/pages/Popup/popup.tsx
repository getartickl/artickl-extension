import React from "react";
import { userDataKey } from "./constants";
import LoggedInView from "./screens/logged_in_screen";
import LoggedOutView from "./screens/logged_out_screen";
import { UserData } from "./types/user_data";

export default function Popup() {
  const [userData, setUserData] = React.useState<UserData | undefined>(
    undefined,
  );

  React.useEffect(() => {
    chrome.storage.sync.get([userDataKey], function (result) {
      console.log("Value currently is " + result[userDataKey]);
      console.log(result);

      const storedUserData = JSON.parse(result[userDataKey]) as UserData;

      if (result) {
        setUserData(storedUserData);
      }
    });
  }, []);

  return (
    <div className="font-sans text-md bg-warmGray-50 text-warmGray-800 w-96 border-4 border-gradient-r-purple-pink flex flex-col space-y-4 items-center h-56">
      {userData && (
        <LoggedInView
          userData={userData}
          onLogout={() => setUserData(undefined)}
        />
      )}
      {!userData && <LoggedOutView onLogin={setUserData} />}
    </div>
  );
}
