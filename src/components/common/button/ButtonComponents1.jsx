import React from 'react'
import { Button } from "flowbite-react";

export default function ButtonComponents1({ pops, handle,  }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group outline>
        
        <Button onClick={handle} color="gray">
          {pops}
        </Button>
      </Button.Group>
    </div>
  );
}
