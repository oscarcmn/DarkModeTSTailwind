import React from "react";
import Card from "./Card";
import User from "./User";

function CardList() {
  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1">
        <User />
      </div>
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Bio" content="Lorem ipsum dolor sit amet..." />
        <Card
          title="Personality"
          content=""
          list={["Hardworking", "Smart", "Expressive", "Thoughtful"]}
        />
        <Card title="Pain points" content="Lorem ipsum dolor sit amet..." />
        <Card title="Goals" content="Lorem ipsum dolor sit amet..." />
      </div>
    </div>
  );
}

export default CardList;
