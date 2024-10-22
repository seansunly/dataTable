import React from 'react'
import { Card } from "flowbite-react";

export default function CardProductDetail({image,description,price,title}) {
  return (
    <Card className="max-w-sm">
      <div>
        <img
          className=" h-[250px] "
          src={
            image
              ? image
              : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          alt="no image"
        />
      </div>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p>{description}</p>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>
      </div>
    </Card>
  );
}
