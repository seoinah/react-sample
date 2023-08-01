import { useState, useEffect } from 'react'
import { RecoilRoot } from 'recoil';
import './App.css'

function App() {
    const [pageName, setPageName] = useState("");
    useEffect(() => {
        window.onpopstate = (event) => {
            setPageName(event.state);
        };
    }, []);

    function OnClick1() {
        const pageName = "page1";
        window.history.pushState(pageName, "", "/page1");
        setPageName(pageName);
    }
    function OnClick2() {
        const pageName = "page2";
        window.history.pushState(pageName, "", "/page2");
        setPageName(pageName);
    }

  return (
      <RecoilRoot>
          <div className="App">
              <button onClick={OnClick1}> page1</button>
              <button onClick={OnClick2}> page2</button>
              {!pageName && <Home />}
              {pageName === "page1" && <Page1 />}
              {pageName === "page2" && <Page2 />}
          </div>
      </RecoilRoot>
  )
}

function Home() {
    return <h2>여기는 홈페이지, 원하는 페이지 클릭</h2>;
}
function Page1() {
    return <h2>page1</h2>;
}
function Page2() {
    return <h2>page2</h2>;
}

export default App
