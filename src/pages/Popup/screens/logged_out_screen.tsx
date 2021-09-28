import React, { FormEvent } from "react";
import FloatingLabelInputWithValue from "../components/floating_label_input";
import LoadingSpinner from "../components/loading_spinner";
import { userDataKey } from "../constants";
import { FetchState } from "../types/fetch_state";
import { UserData } from "../types/user_data";

type LoggedOutViewProps = {
  onLogin: (userData: UserData) => void;
};

export default function LoggedOutView({ onLogin }: LoggedOutViewProps) {
  const [email, setEmail] = React.useState("");
  const [fetchState, setFetchState] = React.useState(FetchState.None);
  const [errorString, setErrorString] = React.useState("");

  const storeUserData = (userData: UserData) => {
    chrome.storage.sync.set({ [userDataKey]: JSON.stringify(userData) }, () => {
      onLogin(userData);
    });
  };

  const logInUser = async () => {
    setFetchState(FetchState.Loading);

    try {
      const response = await fetch(
        "https://backend.artickl.com/api/v1/extension/login/",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        setFetchState(FetchState.Error);
        setErrorString("Sorry, this doesn't look like the right email");
        return;
      }

      const data = await response.json();
      storeUserData(data);
      setFetchState(FetchState.None);
    } catch (e) {
      console.error(e);
      setFetchState(FetchState.Error);
      setErrorString("Sorry, something went wrong. Let us know!");
    }
  };

  return (
    <div className="flex flex-col space-y-6 justify-center items-center w-full pt-16">
      <div className="flex flex-col items-center space-y-8 w-full px-8">
        {/* <p className="text-center text-lg">Log in with your Artickl email</p> */}
        <FloatingLabelInputWithValue
          label="Email"
          error={errorString}
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          className="w-full"
        />
        <button
          className={`w-32 bg-gradient-to-r from-purple-600 to-pink-400 shadow-sm text-white font-bold rounded-md py-1.5 px-3 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none`}
          type="button"
          onClick={logInUser}
        >
          Login
        </button>
      </div>
      {fetchState === FetchState.Loading && <LoadingSpinner />}
    </div>
  );
}
