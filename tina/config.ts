import { defineConfig } from 'tinacms'
import { careerFields } from './templates'
import { newsFields } from './templates'
import { workFields } from './templates'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: '1698d3ba-1db0-402d-923a-77f6e2fe0bb2', // Get this from tina.io
	token: '0c6a1c7d0001cc88c17a5744a655392a3c5130de', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'static',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static',
		},
	},
	search: {
		tina: {
			indexerToken: '87a85bcfb6bf3f4e76860fc8352686265368f874',
			stopwordLanguages: ['eng'],
		},
		indexBatchSize: 100,
		maxSearchIndexFieldLength: 100,
	},
	schema: {
		collections: [
			{
				// Pages
				format: 'md',
				label: 'Pages',
				name: 'pages',
				path: 'content/pages',
				match: {
					include: '*',
					exclude: '_index',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
				],
			},
			{
				// News
				format: 'md',
				label: 'News',
				name: 'news',
				path: 'content/news',
				match: {
					include: '**/*',
					exclude: '_index',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
					...newsFields(),
				],
			},
			{
				// Careers
				label: 'Careers',
				name: 'careers',
				path: 'content/careers',
				match: {
					include: '*',
					exclude: '_index',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
					...careerFields(),
				],
			},
			{
				// Work
				format: 'md',
				label: 'Work',
				name: 'work',
				path: 'content/work',
				frontmatterFormat: 'yaml',
				match: {
					include: '*',
					exclude: '_index',
				},
				fields: [
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body of Document',
						description: 'This is the markdown body',
						isBody: true,
					},
					...workFields(),
				],
			},
		],
	},
})
