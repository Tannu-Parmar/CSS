import React from "react";

const Table = ({ data }) => {
  const getSeatsForRows = (rows) => {
    let seats = [];
    rows?.forEach((row) => {
      for (let i = row.Start; i <= row.End + 10; i++) {
        if (row.Start < row.End) {
          seats.push({
            seatNumber: row.Start,
            isBooked: row.AlreadyBooked.includes(i),
          });
          row.Start = row.Start + 1;
        }
      }
    });
    // console.log(seats);
    return seats;
  };
  console.log(getSeatsForRows(data?.Rows));

  return (
    <div>
      <h1>{data?.MovieName}</h1>
      <table>
        <tbody>
          <tr>
            {getSeatsForRows(data?.Rows).map((ele) => {
              return <td>{ele.seatNumber}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
