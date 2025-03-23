import { defineConfig } from 'vitepress'
import { OramaPlugin } from '@orama/plugin-vitepress';

export default {
  base: '/site-dac/',
  extends: {
    vite: {
      plugins: [OramaPlugin()],
    },
  },
  lang: "pt-BR",
  title: "Jornal Científico",
  description: "",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  externalLinkIcon: true,
  themeConfig: {
    lastUpdatedText: 'Última atualização em 2025',
    siteTitle: "Jornal Científico",
    // Navbar Link
    nav: [
      {
        text: "Editorial",
        link: "editorial"
      },
      {
        text: "Sobre",
        link: "sobre",
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "instagram", link: "https://instagram.com" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "📚 Editorial",
        collapsible: true,
        items: [
          { text: "Janeiro | 2025", link: "2025/janeiro" },
        ],
      },
      {
        text: "📑 Recomendado",
        collapsible: true,
        items: [
          { text: "ℹ️ Sobre", link: "sobre" },
          { text: "📖 Dicionário", link: "util/dicionario" },
          { text: "📚 Glossário", link: "util/glossario" },
          { text: "🔗 Publicações úteis", link: "publicacoes" },
          { text: "🗺️ Guias", link: "guias" },
          { text: "🔒 Privacidade", link: "privacidade" }
        ],
      },
    ],
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: "© 2025 Jornal Científico DAC",
    },
    markdown: {
      attrs: false,
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  },
};