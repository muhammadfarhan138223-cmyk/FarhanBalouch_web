import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
};

const SITE_URL = 'https://farhanbalouch.com'; // placeholder — update with real domain

/** Lightweight per-page SEO: updates <title>, meta description, OG tags, and canonical link. */
export function Seo({ title, description, path = '/', ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
      if (selector.startsWith('link')) {
        let link = document.head.querySelector(selector) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement('link');
          if (selector.includes('canonical')) link.rel = 'canonical';
          document.head.appendChild(link);
        }
        if (attr === 'href') link.href = value;
      } else {
        let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
        if (!meta) {
          meta = document.createElement('meta');
          const match = selector.match(/\[(?:name|property)="(.+?)"\]/);
          const name = match ? match[1] : '';
          if (selector.includes('property')) meta.setAttribute('property', name);
          else meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.content = value;
      }
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`);
    if (ogImage) setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`);
  }, [title, description, path, ogImage]);

  return null;
}
