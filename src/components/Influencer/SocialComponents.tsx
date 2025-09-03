interface TikTokEmbedProps {
  videoUrl: string;
}

export const TikTokEmbed = ({ videoUrl }: TikTokEmbedProps) => {
  const videoId = videoUrl.split('/').pop();
  return (
    <blockquote
      className="tiktok-embed"
      cite={videoUrl}
      data-video-id={videoId}
      style={{ maxWidth: '325px', minWidth: '280px' }}
    >
      <section>
        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@mspepo"></a>
      </section>
    </blockquote>
  );
};

export const InstagramEmbed = ({postUrl} : {postUrl? :string}) => (
  <blockquote
    className="instagram-media"
    data-instgrm-permalink={postUrl}
    data-instgrm-version="14"
    style={{ maxWidth: '540px', minWidth: '300px', margin: '0 auto' }}
  ></blockquote>
);