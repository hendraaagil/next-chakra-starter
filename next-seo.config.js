const title = 'Next.js Chakra Starter | Hendra Agil';
const description =
  'An opinionated starter project with Next.js and Chakra UI. Created by hendraaagil';
const url = 'https://nextjs-chakra-hendraaagil.vercel.app';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: `https://og-image.vercel.app/**Next.js%20Chakra**%20Starter.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fchakra-ui%2Fchakra-ui%2Fbf775929a6d73a3aa69e44d5d38542449871475c%2Flogo%2Flogomark-colored.svg`,
        alt: title,
        width: 2048,
        height: 1170,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@hendraaagil',
    site: '@hendraaagil',
  },
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
};

export default SEO;
