import React, { useState } from "react";

const Table = ({ data }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (seat.isBooked) {
      alert("This seat is already booked!");
      return;
    }

    const isAlreadySelected = selectedSeats.some(
      (s) => s.seatNumber === seat.seatNumber
    );
    if (isAlreadySelected) {
      setSelectedSeats(
        selectedSeats.filter((s) => s.seatNumber !== seat.seatNumber)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h1>{data?.MovieName}</h1>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {data?.Rows.map((row) => {
            let seasts = row.End - row.Start + 1;
            return (
              <tr key={row.row}>
                {Array.from({ length: seasts }, (_, i) => i + row.Start).map(
                  (seatNumber) => (
                    <td
                      key={seatNumber}
                      style={{
                        backgroundColor:
                          row.AlreadyBooked.includes(seatNumber) ||
                          selectedSeats.includes(seatNumber)
                            ? "grey"
                            : selectedSeats.some(
                                (s) => s.seatNumber === seatNumber
                              )
                            ? "blue"
                            : "white",
                        cursor: row.AlreadyBooked.includes(seatNumber)
                          ? "default"
                          : "pointer",
                      }}
                      onClick={() =>
                        handleSeatClick({
                          seatNumber,
                          isBooked: row.AlreadyBooked.includes(seatNumber),
                        })
                      }
                    >
                      {seatNumber}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
