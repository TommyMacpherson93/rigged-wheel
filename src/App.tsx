import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Wheel from "./components/Wheel";
import ParticipantTracker from "./components/ParticipantTracker";
import { useState } from "react";

function App() {
  const [showWheel, setShowWheel] = useState(false);
  const [participants, setParticipants] = useState<string[]>([]);
  const colours = [
    "Blue",
    "Green",
    "Red",
    "Orange",
    "Purple",
    "Cyan",
    "Pink",
    "Grey",
  ];

  const getSegments = () => {
    const segments = [];

    for (var participant of participants) {
      const colour_idx = Math.floor(Math.random() * colours.length);
      const colour = colours[colour_idx];
      segments.push({
        segmentText: "Austeen",
        segColor: colour,
      });
    }

    return segments;
  };

  // TODO - use immer
  const addParticipant = (participant: string) => {
    if (participants.includes(participant)) {
      console.log(`Items already contains element ${participant}`);
      return;
    }

    setParticipants([...participants, participant]);
  };

  const removeParticipant = (participant: string) => {
    setParticipants(participants.filter((item) => item !== participant));
  };

  return (
    <>
      <div className="container">
        {showWheel ? <Wheel segments={getSegments()} /> : null}
        <div className="participant-manager-container">
          <ParticipantTracker
            participants={participants}
            addParticipant={addParticipant}
            removeParticipant={removeParticipant}
          />
          <button
            type="button"
            className="btn btn-success generate-button"
            onClick={() => setShowWheel(true)}
          >
            Generate Wheel
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
