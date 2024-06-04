import { createContext, } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async () => {
  var res = await axios.get("/api/auth/profile");
  return res.data.message;
};

export const AuthContext = createContext();

const Context = ({ children }) => {
  var {data,refetch} = useQuery('session',fetchUser)

  const chats = useQuery(
    ["meatings"],
    async () => {
      var res = await axios.get(
        `/api/chats`
      );
      return res.data.message;
    }
  );

  return (
    <AuthContext.Provider value={{ user: data || null, refetch,chats:chats.data,refetchChats:chats.refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
