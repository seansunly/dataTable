import React from 'react'
import { Button } from "flowbite-react";

export  function ButtonComponents2({title,handler}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button.Group outline>
          <Button onClick={()=>handler()} color="gray">
            {title}
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}
