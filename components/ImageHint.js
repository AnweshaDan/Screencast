import React, { Component } from "react";

export default function ResponsiveImage( { src, width, height } ) {
  return (
    <div className="responsive-image">
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}