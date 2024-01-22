import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Eric Turner a'boot me",
    description: "Quick portfolio and resume and someday maybe other things like a PDF generator of my resume and more!",
    image: "https://turner.li/images/eric-faces.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* Bluseky??? <meta name="twitter:card" content="summary_large_image" /> */}
        {/* Bluseky??? <meta name="twitter:site" content="@yourname" /> */}
        {/* Bluseky??? <meta name="twitter:title" content={meta.title} /> */}
        {/* Bluseky??? <meta name="twitter:description" content={meta.description} /> */}
        {/* Bluseky??? <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
