import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faWifi } from "@fortawesome/free-solid-svg-icons";

function FeedBox(props) {
  return (
    <div className="flex flex-row gap-5 py-4">
      <FontAwesomeIcon icon={props.icon} size="xl" />
      <div className="flex-1 w-28  whitespace-nowrap text-ellipsis overflow-hidden">
        {props.name}
      </div>
      {/* State of following */}
      {(() => {
        if (props.state !== undefined) {
          if (props.state) {
            return (
              <FontAwesomeIcon icon={faCircle} size="2xs" className="w-5" />
            );
          } else {
            return <FontAwesomeIcon icon={faWifi} className="w-5" />;
          }
        }
        // State of notify
        else if (props.num) {
          return (
            <div className="bg-orange-600 text-white px-1 rounded-full">
              {props.num}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default FeedBox;
