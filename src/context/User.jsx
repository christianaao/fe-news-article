import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "butter_bridge",
        name: "jonny",
        avatar_url: "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg"
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}