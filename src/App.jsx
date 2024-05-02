import { useState } from 'react';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const tabsData = ['Tab 1 is selected', 'Tab 2 is selected', 'Tab 3 is selected'];

  const tabClicked = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <>
      <div>
        <button 
          onClick={() => tabClicked("tab1")} 
          style={{ backgroundColor: selectedTab === "tab1" ? 'gray' : '' }}
        >
          Tab1
        </button>
        <button 
          onClick={() => tabClicked("tab2")} 
          style={{ backgroundColor: selectedTab === "tab2" ? 'gray' : '' }}
        >
          Tab2
        </button>
        <button 
          onClick={() => tabClicked("tab3")} 
          style={{ backgroundColor: selectedTab === "tab3" ? 'gray' : '' }}
        >
          Tab3
        </button>
      </div>
      <div className="tab">
        <p>
          {selectedTab === "tab1" ? tabsData[0] :
            selectedTab === "tab2" ? tabsData[1] :
            selectedTab === "tab3" ? tabsData[2] :
            "Please select a Tab"
          }
        </p>
      </div>
    </>
  );
}

export default App;
