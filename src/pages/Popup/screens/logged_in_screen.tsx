import React from "react";
import LoadingSpinner from "../components/loading_spinner";
import { userDataKey } from "../constants";
import LogoutIcon from "../icons/logout_icon";
import { FetchState } from "../types/fetch_state";
import { UserData } from "../types/user_data";

type LoggedInViewProps = {
  userData: UserData;
  onLogout: () => void;
};

export default function LoggedInView({
  userData,
  onLogout,
}: LoggedInViewProps) {
  const [fetchState, setFetchState] = React.useState(FetchState.None);

  const sendURLToBackend = async (url: string) => {
    setFetchState(FetchState.Loading);

    try {
      const response = await fetch(
        `https://backend.artickl.com/api/v1/extension/job_request/`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ url, userId: userData.id }),
        },
      );

      if (!response.ok) {
        setFetchState(FetchState.Error);
      } else {
        setFetchState(FetchState.Success);
      }
    } catch (e) {
      console.error(e);
      setFetchState(FetchState.Error);
    }
  };

  const sendCurrentTab = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;

      if (url) {
        sendURLToBackend(url);
      }
    });
  };

  const logout = () => {
    chrome.storage.sync.remove(userDataKey, onLogout);
  };

  return (
    <div className="flex flex-col space-y-2 w-full items-center pt-4 px-4">
      <div className="flex flex-row w-full justify-end">
        <button className="text-warmGray-500" onClick={logout}>
          <LogoutIcon />
        </button>
      </div>
      <div className="flex flex-col py-2">
        <p className="text-center text-lg">You're signed in as</p>
        <p className="font-bold text-lg text-center">{userData.email}</p>
      </div>
      <button
        className="bg-gradient-to-r from-purple-600 to-pink-400 shadow-sm text-white font-bold rounded-md py-1.5 px-3 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none w-32"
        type="button"
        onClick={sendCurrentTab}
      >
        Add job to Artickl
      </button>

      {fetchState === FetchState.Loading && <LoadingSpinner />}
      {fetchState === FetchState.Success && (
        <p className="text-center">Great! We'll get on it!</p>
      )}
      {fetchState === FetchState.Error && (
        <p className="text-center">
          Sorry, something went wrong. Please let us know.
        </p>
      )}
    </div>
  );
}
