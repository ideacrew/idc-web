import type { TinaField } from "tinacms";

export function careerFields() {
  return [
    {
      name: "draft",
      label: "Draft",
      type: "boolean",
      required: true,
      description: "If this is checked the post will not be published",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "position_type",
      label: "Type",
      options: ["Full Time", "Part Time", "Contractor", "Temporary"],
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "post_date",
      label: "Post Date",
      required: true,
    },
    {
      type: "number",
      name: "base_salary",
      label: "Base Salary",
      required: true,
    },
    {
      type: "number",
      name: "maximum_salary",
      label: "Maximum Salary",
      required: true,
    },
    {
      type: "string",
      name: "location",
      label: "Location(s)",
      list: true,
    },
  ] as TinaField[];
}

export function newsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "datetime",
      name: "publishdate",
      label: "Publish date",
      required: true,
    },
    {
      type: "string",
      name: "canonicalUrl",
      label: "Canonical URL",
    },
  ] as TinaField[];
}

export function workFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      required: true,
    },
    {
      type: "string",
      name: "problem",
      label: "Problem",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "solution",
      label: "Solution",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "quote",
      label: "Quote",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "quote_attribution",
      label: "Quote Attribution",
    },
  ] as TinaField[];
}
