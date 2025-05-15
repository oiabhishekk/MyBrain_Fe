import { useEffect } from "react";
import { ShareIcon } from "../assets/Icons";
import Tembed from "./tembed";
import Yembed from "./yembed";

interface cardProps {
  title: string;
  icon: any;
  link: string;
  type: "youtube" | "twitter";
  tags?: string[];
  date: string;
}

const Card = ({ link, title, type, tags, date }: cardProps) => {
  return (
    <div className=" bg-white rounded-xl shadow-sm p-4 w-full max-w-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-600 flex items-center gap-1">
          <span className="text-xl">📄</span> {title}
        </h3>
        <div className="flex gap-2">
          <ShareIcon />
          <ShareIcon />
        </div>
      </div>

      {/* Content
      {content && (
        <div className="text-gray-900 font-semibold text-lg mb-2">
          {content}
        </div>
      )} */}

      {type == "youtube" ? <Yembed link={link} /> : <Tembed link={link} />}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2 mb-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Date */}
      <p className="text-xs text-gray-400">Added on {date}</p>
    </div>
  );
};

export default Card;
