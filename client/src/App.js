import React, { useEffect, useState } from "react";

import Routes from "./routes";

import { UidContext } from "./AppContext";

import axios from "axios";

import { useDispatch } from "react-redux";

import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const [log, setLog] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
        setLog(true)
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [log, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App