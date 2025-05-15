interface LinkProp {
  link: string;
}
function getYouTubeEmbedLink(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/
  );
  return videoIdMatch
    ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
    : url;
}

const Yembed = ({ link }: LinkProp) => {
  link = getYouTubeEmbedLink(link);

  return (
    <div className="max-h-[400px] w-full aspect-video mb-2">
      <iframe
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-md"
      ></iframe>
    </div>
  );
};

export default Yembed;
