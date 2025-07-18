import type { INodeProperties } from 'n8n-workflow';

export const contentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		description: 'Choose an operation',
		required: true,
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark', 'comment'],
			},
		},
		options: [
			{
				name: 'Add Assignee',
				value: 'addAssignee',
				description: 'Add assignee to content',
				action: 'Add assignee to content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc'],
					},
				},
			},
			{
				name: 'Add Label',
				value: 'addLabel',
				description: 'Add label to content',
				action: 'Add label to content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc', 'bookmark'],
					},
				},
			},
			{
				name: 'Admin Delete',
				value: 'adminDelete',
				description: 'Delete comment by admin permanently',
				action: 'Admin delete comment',
				displayOptions: {
					show: {
						resource: ['comment'],
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create content',
				action: 'Create content',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete content',
				action: 'Delete content',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get content',
				action: 'Get content',
			},
			{
				name: 'Get Many',
				value: 'list',
				description: 'Get many contents',
				action: 'Get many contents',
			},
			{
				name: 'Pin',
				value: 'pin',
				description: 'Pin content',
				action: 'Pin content',
				displayOptions: {
					show: {
						resource: ['discussion', 'comment'],
						operation: ['pin'],
					},
				},
			},
			{
				name: 'Publish',
				value: 'publish',
				description: 'Publish content',
				action: 'Publish content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog'],
						operation: ['publish'],
					},
				},
			},
			{
				name: 'Remove Assignee',
				value: 'removeAssignee',
				description: 'Remove assignee from content',
				action: 'Remove assignee from content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc'],
					},
				},
			},
			{
				name: 'Remove Label',
				value: 'removeLabel',
				description: 'Remove label from content',
				action: 'Remove label from content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc'],
					},
				},
			},
			{
				name: 'Unpin',
				value: 'unpin',
				description: 'Unpin content',
				action: 'Unpin content',
				displayOptions: {
					show: {
						resource: ['discussion', 'comment'],
						operation: ['unpin'],
					},
				},
			},
			{
				name: 'Update Content',
				value: 'update',
				action: 'Update content',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc', 'comment'],
					},
				},
			},
			{
				name: 'Update Settings',
				value: 'settings',
				description: 'Update content settings',
				action: 'Update content settings',
				displayOptions: {
					show: {
						resource: ['discussion', 'blog', 'doc'],
						operation: ['settings'],
					},
				},
			},
		],
		default: 'create',
	},
];

export const contentFields: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc'],
				operation: ['create', 'update'],
			},
		},
		default: '',
		description: 'Title of the discussion',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'comment'],
				operation: ['create', 'update'],
			},
		},
		default: '',
		description: 'Content of the discussion (JSON string)',
	},
	{
		displayName: 'Board',
		name: 'boardId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark'],
				operation: ['create', 'update', 'list'],
			},
		},
		default: '',
		description: 'ID of the board to which this discussion belongs',
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'string',
		default: '',
		description: 'Comma-separated labels for the discussion',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark'],
				operation: ['create', 'update'],
			},
		},
	},
	{
		displayName: 'Assignees',
		name: 'assignees',
		type: 'string',
		default: '',
		description: 'Comma-separated DIDs of assignees',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc'],
				operation: ['create', 'update'],
			},
		},
	},
	{
		displayName: 'Publish',
		name: 'publish',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog'],
				operation: ['create'],
			},
		},
		default: true,
		description: 'Whether to publish the content',
	},

	{
		displayName: 'Content ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark'],
				operation: [
					'get',
					'update',
					'publish',
					'delete',
					'pin',
					'unpin',
					'addLabel',
					'removeLabel',
					'addAssignee',
					'removeAssignee',
					'settings',
				],
			},
		},
		default: '',
		description: 'ID of the content',
	},
	{
		displayName: 'Language',
		name: 'locale',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['blog', 'doc'],
				operation: ['create'],
			},
		},
		default: 'en',
		description: 'Language of the content',
	},
	{
		displayName: 'Slug',
		name: 'slug',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['blog', 'doc', 'discussion'],
				operation: ['create', 'update', 'settings'],
			},
		},
		default: '',
		description: 'Slug of the content',
	},
	{
		displayName: 'Parent ID',
		name: 'parentId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['doc'],
				operation: ['create', 'update'],
			},
		},
		default: '',
		description: 'ID of the parent content',
	},
	{
		displayName: 'Display Order',
		name: 'order',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['doc'],
				operation: ['create', 'update'],
			},
		},
		default: -1,
		description: 'Display order of the content',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['bookmark'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'URL of the bookmark',
	},

	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark', 'comment'],
				operation: ['list'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark', 'comment'],
				operation: ['list'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		default: '',
		description: 'Label for the content',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc', 'bookmark'],
				operation: ['addLabel', 'removeLabel'],
			},
		},
	},
	{
		displayName: 'Assignee',
		name: 'assignee',
		type: 'string',
		default: '',
		description: 'Assignee for the content',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc'],
				operation: ['addAssignee', 'removeAssignee'],
			},
		},
	},
	{
		displayName: 'Cover Image',
		name: 'cover',
		type: 'string',
		default: '',
		description: 'Cover image for the content',
		displayOptions: {
			show: {
				resource: ['discussion', 'blog', 'doc'],
				operation: ['settings'],
			},
		},
	},

	{
		displayName: 'Object ID',
		name: 'objectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create', 'list'],
			},
		},
		default: '',
		description: 'ID of the object',
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['update', 'delete', 'pin', 'unpin'],
			},
		},
		default: '',
		description: 'ID of the comment',
	},
	{
		displayName: 'User DID',
		name: 'userDid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['adminDelete'],
			},
		},
		default: '',
		description: 'ID of the user',
	},
];
