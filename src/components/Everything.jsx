import React from 'react'


import { imageChooser } from "../Chooseimage/Chooseimage";

const Everything = ({ response }) => {
  return (
    <div className="everything">
      <p>{response.dt_txt.substring(10, 16)}</p>
      {imageChooser(response.weather[0].main, "w1")}
      <p>{`${response.main.temp}\u00b0C`}</p>
    </div>
  );
};

export default Everything;