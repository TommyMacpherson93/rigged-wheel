import ListGroup from "./ListGroup";
import NameInput from "./NameInput";

interface Props {
  participants: string[];
  addParticipant(participant: string): void;
  removeParticipant(participant: string): void;
}

function ParticipantTracker({
  participants,
  addParticipant,
  removeParticipant,
}: Props) {
  return (
    <>
      <NameInput onClick={addParticipant} />
      <ListGroup items={participants} onClick={removeParticipant} />
    </>
  );
}

export default ParticipantTracker;
