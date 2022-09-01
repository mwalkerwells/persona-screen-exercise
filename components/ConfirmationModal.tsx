import { useState } from "react";

type State = "default" | "confirmationNeeded" | "completionPending";

type Props = {
  onConfirm: () => void;
};

const ConfirmationModal = (props: Props) => {
  const [state, setState] = useState<State>("default");

  async function onConfirm() {
    setState("completionPending");

    // Simulating a delay
    await props.onConfirm();

    setState("default");
  }

  // prettier-ignore
  return <div>{
    state === 'confirmationNeeded'
      ? <div>
          <span>Are you sure?</span>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={() => { setState("default") }}>Cancel</button>
        </div> :
    state === 'completionPending'
      ? <span>Loading...</span>
      : <button onClick={() => { setState("confirmationNeeded") }}>Delete Something</button>
    }</div>;
};

export default ConfirmationModal;

//
// —— Alternative Approach (1) ——
//
// // prettier-ignore
// const states = {
//   default:
//     <button onClick={() => { setState("confirmationNeeded") }}>Delete Something</button>,
//
//   confirmationNeeded:
//     <div>
//       <span>Are you sure?</span>
//       <button onClick={onConfirm}>Confirm</button>
//       <button onClick={() => { setState("default") }}>Cancel</button>
//     </div>,
//
//   completionPending:
//     <span>Loading...</span>,
// };
//
// return <div>{states[state]}</div>;
