import Text from "@mui/material/Typography";

export default (p: any) => {
  return (
    <div>
      <Text variant="h1">{p.count}. Embedded Snippets</Text>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PTXaIBGYDNc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <iframe
        title="Figma Embedd"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FL19Wqnsarzdmf7nunjwDiG%2F%F0%9F%90%85-Tiger-team-Tradie-acquisition%3Fnode-id%3D136%253A2084"
        allowFullScreen
      />
    </div>
  );
};
