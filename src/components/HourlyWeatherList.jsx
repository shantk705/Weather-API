import Everything from "./Everything";

function HourlyWeatherList({ response }) {
  return (
    <div className="days">
      <div className="time">
        {response &&
          response.list.map(
            (el, index) => index > 0 && <Everything response={el} />
          )}
      </div>
    </div>
  );
}
export default HourlyWeatherList;