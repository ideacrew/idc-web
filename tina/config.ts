import { defineConfig } from "tinacms";
import { careerFields } from "./templates";
import { newsFields } from "./templates";
import { workFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "trunk";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENTID as string, // Get this from tina.io
  token: process.env.TINA_INDEX_TOKEN as string, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      {
        // Pages
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        // News
        format: "md",
        label: "News",
        name: "news",
        path: "content/news",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...newsFields(),
        ],
      },
      {
        // Careers
        label: "Careers",
        name: "careers",
        path: "content/careers",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...careerFields(),
        ],
      },
      {
        // Work
        format: "md",
        label: "Work",
        name: "work",
        path: "content/work",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...workFields(),
        ],
      },
    ],
  },
});
