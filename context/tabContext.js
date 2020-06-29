import React, { useState } from "react";

const TabContext = React.createContext([1, () => {}]);

const TabProvider = (props) => {
	const [activeTab, setActiveTab] = useState(1);
	console.log(activeTab);
	return (
		<TabContext.Provider value={[activeTab, setActiveTab]}>
			{props.children}
		</TabContext.Provider>
	);
};

export { TabContext, TabProvider };
