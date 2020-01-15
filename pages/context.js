import React, { useContext } from React;

export default ApplicationContext = React.createContext();

var userData = {
    name: "Mayank",
    age: 20
}

function ApplicationComponent() {
    return (
        <ApplicationContext.Provider value={userData}>
            <div>
                <h1>User Name: {userData.name}</h1>
            </div>
        </ApplicationContext.Provider>
    ) 
}


function ChildComponent() {
    
}