import type { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  title?: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;