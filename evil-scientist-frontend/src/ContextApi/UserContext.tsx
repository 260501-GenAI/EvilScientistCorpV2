import React, { createContext, useState, useContext } from "react";

//Defining two types - this one will model the User data we intend to store
export type User = {
  id: number
  username: string
  email: string
}

//...THIS one defines the data being stored in th UserContext, as well as the mutator (setUser)
type UserContextType = {
  user: User | null
  setUser: (u:User|null) => void
}

//Create the context using what we defined above, and set some default values for the fields
const UserContext = createContext<UserContextType>({
    user:null,
    setUser: () => {}
})

//This provider will be used in main.tsx, PROVIDING this context to the entire app
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//custom hook! we'll use this in any component that needs access to the User data
export const useUser = () => useContext(UserContext)