import React, { useContext } from "react";
import "../Css/SeatBooking.css";
import BsCxt from "../context/Bscontext";
const SeatBooking = () => {
  const context = useContext(BsCxt)
  const {noOfSeat,changeNoOfSeats} = context
  const {selectedSeats, lockedSeats} = context;

  const toggleSeatSelection = (row, seat) => {
    changeNoOfSeats({...noOfSeat,[row]:[...noOfSeat[row],seat]});

                window.localStorage.setItem(
                "seats",
                JSON.stringify({
                    ...noOfSeat,
                })
                )
    if (lockedSeats[`${row}-${seat}`]) return;

    setSelectedSeats((prev) => {
      const newSelection = prev.includes(`${row}-${seat}`)
        ? prev.filter((s) => s !== `${row}-${seat}`)
        : [...prev, `${row}-${seat}`];

      setLockedSeats((prevLocks) => {
        const newLocks = { ...prevLocks };
        if (!prev.includes(`${row}-${seat}`)) {
          newLocks[`${row}-${seat}`] = true;
          setTimeout(() => {
            setLockedSeats((locks) => {
              const updatedLocks = { ...locks };
              delete updatedLocks[`${row}-${seat}`];
              window.localStorage.clear()
              return updatedLocks;
            });
          }, 5000);
        }

        return newLocks;
      });
      setTimeout(()=>{
        setSelectedSeats((newS)=>{
          const select = newS.filter((s)=>s!==`${row}-${seat}`)
          return select;
        })
      },5000);
      return newSelection;
    });
  };

  return (
    <div className="seat-container">
      {rows.map((row) => (
        <div key={row.id} className="row">
          <span className="row-label">{row.id}</span>
          {row.seats.map((seat) => (
            <button
              key={seat}
              className={`seat ${selectedSeats.includes(`${row.id}-${seat}`) ? "selected" : ""} ${lockedSeats[`${row.id}-${seat}`] ? "locked" : ""}`}
              onClick={() => toggleSeatSelection(row.id, seat)}
              disabled={lockedSeats[`${row.id}-${seat}`]}
              name={row.id}
              >
              {seat}
            </button>
          ))}
        </div>
      ))}
      <div className="screen-panel">All eyes this way please!</div>
    </div>
  );
};

export default SeatBooking;
