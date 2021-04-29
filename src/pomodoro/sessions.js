import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./progressBar";
import { secondsToDuration } from "../utils/duration";

function Sessions({ session, isPaused }) {
  if (session === null) return null;
  return (
    <div>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">
            {/* Focusing for 25:00 minutes */}
            {`${session.label} for ${session.duration} minutes`}
          </h2>
          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {/* 25:00 remaining */}
            {`${secondsToDuration(session.timeRemaining)} remaining`}
          </p>
          {isPaused && <h3>PAUSED</h3>}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <ProgressBar percentComplete={session.percentComplete} />
        </div>
      </div>
    </div>
  );
}
Sessions.propTypes = {
  session: PropTypes.shape({
    label: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    timeRemaining: PropTypes.number.isRequired,
    percentComplete: PropTypes.number.isRequired,
  }),
  isPaused: PropTypes.bool.isRequired,
};
export default Sessions;
