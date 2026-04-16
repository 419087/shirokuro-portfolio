// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const addTargetBlankToLinks = () => {
  return (tree) => {
    const visit = (node) => {
      if (!node || typeof node !== 'object') {
        return;
      }

      if (node.type === 'element' && node.tagName === 'a') {
        node.properties = {
          ...(node.properties || {}),
          target: '_blank',
          rel: 'noopener noreferrer',
        };
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
};

// https://astro.build/config
export default defineConfig({
  site: 'https://419087.github.io',
  base: '/shirokuro-portfolio/',

  markdown: {
    rehypePlugins: [addTargetBlankToLinks],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});