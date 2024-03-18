import React from "react";
import classes from "./HobbyLinks.module.css";

const HobbyLinks = () => {
   const hobbyLinks = ["https://www.sequenceclimb.com/", "https://www.ultimate-guitar.com/"];

   return (
      <div>
         <h3 className={classes.hobbyLinksHeading}>Hobby Links:</h3>
         <a href={hobbyLinks[0]}>Rock Climbing</a>
         <br></br>
         <a href={hobbyLinks[1]}>Guitar</a>
      </div>
   );
};

export default HobbyLinks;