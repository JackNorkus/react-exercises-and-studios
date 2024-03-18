import React from "react";
import classes from "./ChoresList.module.css";

const ChoresList = () => {
   const chores = ["Dishes", "Laundry", "Mow Lawn", "Walk Dog"];

   return (
      <div>
         <h3 className={classes.choresHeading}>Chores:</h3>
         <ol>
            {chores.map((chore, index) => (
               <li key={index} className={classes.choresText}>
                  {chore}
               </li>
            ))}
         </ol>
      </div>
   );
};

export default ChoresList;