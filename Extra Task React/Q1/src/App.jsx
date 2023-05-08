import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { useEffect } from "react";

function App() {
  const [Data, setData] = useState([]);

  const PushData = () => {
    let LoopData = [];
    for (let index = 1; index <= 20; index++) {
      const Obj = {
        slot: index,
        carNumber: "",
        inTime: "",
        occupied: false,
        form: false,
      };
      LoopData.push(Obj);
    }
    setData(LoopData);
  };

  useEffect(() => {
    PushData();
  }, []);

  const ShowForm = (slot) => {
    const subData = [...Data];
    subData[slot - 1].form = true;
    setData(subData);
  };

  const HideForm = (slot) => {
    const subData = [...Data];
    subData[slot - 1].form = false;
    setData(subData);
  };

  const HandleData = (Value, slot) => {
    const { carNumber, inTime } = Value;
    const subData = [...Data];
    subData[slot - 1].carNumber = carNumber;
    subData[slot - 1].inTime = inTime;
    subData[slot - 1].occupied = true;
    setData(subData);
    HideForm(slot);
  };

  const LeaveTime = (slot) => {
    const CurrentTime = new Date(
      new Date().toString().substring(0, 16) + Data[slot - 1].inTime
    );
    const hours = new Date() - CurrentTime;

    const subData = [...Data];
    subData[slot - 1].carNumber = "";
    subData[slot - 1].inTime = "";
    subData[slot - 1].occupied = false;
    setData(subData);
    HideForm(slot);
    CalculateCharge(hours / 3600000);
  };

  const CalculateCharge = (hour) => {
    if (hour <= 1) {
      alert("Your Charge is : 20");
    } else if (1 < hour && hour <= 4) {
      alert("Your Charge is : 40");
    } else if (4 < hour && hour <= 6) {
      alert("Your Charge is : 100");
    } else if (6 < hour && hour < 8) {
      alert("Your Charge is : 200");
    }
  };
  return (
    <>
      <div className="Container">
        {Data.map((e) => {
          return (
            <div key={e.slot}>
              <div
                onClick={() => ShowForm(e.slot)}
                className={`slot ${e.occupied ? `ActiveSlot` : null}`}
              >
                {e.slot}
                <p>{e.carNumber}</p>
                <p>{e.inTime}</p>
              </div>
              {e.form ? (
                <Form
                  slot={e.slot}
                  HideForm={HideForm}
                  HandleData={HandleData}
                  LeaveTime={LeaveTime}
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <b>
        Booked Slot :{Data.filter((e) => e.occupied == true).length} | Empty
        Slots: {20 - Data.filter((e) => e.occupied == true).length}
      </b>
    </>
  );
}

export default App;
