import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {console.log(list)}
      {console.log(Object.keys(list))}
      {list.map((tile, index) => (
        <Tile
          name={tile.name}
          description={
            Object.keys(list[0]).some((key) => key === "phone")
              ? { phone: tile.phone, email: tile.email }
              : { date: tile.date, time: tile.time, contact: tile.contact }
          }
          key={index}
        />
      ))}
    </div>
  );
};
