import { useEffect } from "react";

interface LinkProp {
  link: string;
}
const Tembed = ({ link }: LinkProp) => {
  useEffect(() => {
    // Load Twitter script only once
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="w-full h-full overflow-hidden rounded-md mb-2">
      <blockquote className="twitter-tweet h-[200px] overflow-hidden ">
        <a href={link}></a>
      </blockquote>
    </div>
  );
};

export default Tembed;
