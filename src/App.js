import "./App.css";

import SearchBar from "./components/Search_Bar";
import CurrentWeather from "./components/Current_Weather";
import Everything from "./components/Everything";


function App() {
  return (
    <>
     <SearchBar />
      <body>
           <CurrentWeather />

           <Everything />
      </body>
    </>
  );
}

export default App;
