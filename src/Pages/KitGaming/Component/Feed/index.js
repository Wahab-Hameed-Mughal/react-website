import React, { useEffect, useState } from "react";

import {
  faCircleChevronDown,
  faCircleUser,
  faCommentDots,
  faGamepad,
  faGear,
  faRectangleList,
  faSquarePollVertical,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import FeedBox from "../feedBox";

function Feed(props) {
  var [name, setname] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setname(props.name.split(" "));
    }, 100);
  }, [props.name]);

  var feed = <></>;
  const feedlist = [
    {
      name: "News Feed",
      icon: faGamepad,
    },
    {
      name: "Trending",
      icon: faSquarePollVertical,
    },
    {
      name: "Folllowing",
      icon: faUser,
    },
    {
      name: "Your Videos",
      icon: faVideo,
    },
    {
      name: "PlayList",
      icon: faRectangleList,
    },
  ];
  const following = [
    {
      name: "Abdul Wahab Mughal",
      icon: faCircleUser,
      state: true,
    },
    {
      name: "Wahab",
      icon: faCircleUser,
      state: false,
    },
    {
      name: "Abdul Wahab Mughal",
      icon: faCircleUser,
      state: true,
    },
    {
      name: "Wahab",
      icon: faCircleUser,
      state: false,
    },
    {
      name: "Abdul Wahab Mughal",
      icon: faCircleUser,
      state: true,
    },
    {
      name: "Wahab",
      icon: faCircleUser,
      state: false,
    },
    {
      name: "Load More",
      icon: faCircleChevronDown,
    },
  ];
  const setting = [
    {
      name: "Chat",
      icon: faCommentDots,
      num: 20,
    },
    {
      name: "Settings",
      icon: faGear,
    },
  ];

  // feed
  if (props.set === "feed") {
    feed = feedlist.map((d) => {
      return <FeedBox name={d.name} icon={d.icon} />;
    });
  }
  // follow
  else if (props.set === "follow") {
    feed = following.map((d) => {
      return <FeedBox name={d.name} icon={d.icon} state={d.state} />;
    });
  }
  // setting
  else if (props.set === "setting") {
    feed = setting.map((d) => {
      return <FeedBox name={d.name} icon={d.icon} num={d.num} />;
    });
  }

  return (
    <>
      <div className="feed ms-5 border-t-2 me-5 border-gray-700">
        <div className="feedname py-4 flex justify-start">
          <span className="me-2">{name[name.length - 2]} </span>{" "}
          {name[name.length - 1]}
        </div>
        {feed}
      </div>
    </>
  );
}

export default Feed;
