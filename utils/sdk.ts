export namespace WorkflowsV1 {
    /**
     * Object type for the "comment" object in the route /workflows/v1/comments.
     */
    export type Comment = {
        /** Unique identifier for the comment. */
        id: number;
        /** The ID of the user object, if author was a user. */
        author: number;
        /** Email address for the comment author. */
        author_email: string;
        /** IP address for the comment author. */
        author_ip: string;
        /** Display name for the comment author. */
        author_name: string;
        /** URL for the comment author. */
        author_url: string;
        /** User agent for the comment author. */
        author_user_agent: string;
        /** The content for the comment. */
        content: {
            /** Content for the comment, as it exists in the database. */
            raw: string;
            /** HTML content for the comment, transformed for display. */
            rendered: string;
        };
        /** The date the comment was published, in the site's timezone. */
        date: string;
        /** The date the comment was published, as GMT. */
        date_gmt: string;
        /** URL to the comment. */
        link: string;
        /** The ID for the parent of the comment. */
        parent: number;
        /** The ID of the associated post object. */
        post: number;
        /** State of the comment. */
        status: string;
        /** Type of the comment. */
        type: string;
        /** Avatar URLs for the comment author. */
        author_avatar_urls: {
            /** Avatar URL with image size of 24 pixels. */
            24: string;
            /** Avatar URL with image size of 48 pixels. */
            48: string;
            /** Avatar URL with image size of 96 pixels. */
            96: string;
        };
        /** Meta fields. */
        meta: {};
    };
    /**
     * Endpoint request arguments for the GET /workflows/v1/comments route.
     */
    export type GetCommentsRequestArguments = {
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** Current page of the collection. */
        page?: number;
        /** Maximum number of items to be returned in result set. */
        per_page?: number;
        /** Limit results to those matching a string. */
        search?: string;
        /** Limit response to comments published after a given ISO8601 compliant date. */
        after?: string;
        /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
        author?: number[]
        ;
        /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
        author_exclude?: number[]
        ;
        /** Limit result set to that from a specific author email. Requires authorization. */
        author_email?: string;
        /** Limit response to comments published before a given ISO8601 compliant date. */
        before?: string;
        /** Ensure result set excludes specific IDs. */
        exclude?: number[]
        ;
        /** Limit result set to specific IDs. */
        include?: number[]
        ;
        /** Offset the result set by a specific number of items. */
        offset?: number;
        /** Order sort attribute ascending or descending. */
        order?: 'asc' | 'desc';
        /** Sort collection by comment attribute. */
        orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
        /** Limit result set to comments of specific parent IDs. */
        parent?: number[]
        ;
        /** Ensure result set excludes specific parent IDs. */
        parent_exclude?: number[]
        ;
        /** Limit result set to comments assigned to specific post IDs. */
        post: number[]
        ;
        /** Limit result set to comments assigned a specific status. Requires authorization. */
        status?: string;
        /** Limit result set to comments assigned a specific type. Requires authorization. */
        type?: string;
        /** The password for the post if it is password protected. */
        password?: string;
    };
    /**
     * Endpoint request arguments for the POST /workflows/v1/comments route.
     */
    export type CreateCommentRequestArguments = {
        /** The ID of the user object, if author was a user. */
        author?: number;
        /** Email address for the comment author. */
        author_email?: string;
        /** IP address for the comment author. */
        author_ip?: string;
        /** Display name for the comment author. */
        author_name?: string;
        /** URL for the comment author. */
        author_url?: string;
        /** User agent for the comment author. */
        author_user_agent?: string;
        /** The content for the comment. */
        content?: {
            /** Content for the comment, as it exists in the database. */
            raw: string;
            /** HTML content for the comment, transformed for display. */
            rendered: string;
        };
        /** The date the comment was published, in the site's timezone. */
        date?: string;
        /** The date the comment was published, as GMT. */
        date_gmt?: string;
        /** The ID for the parent of the comment. */
        parent?: number;
        /** The ID of the associated post object. */
        post?: number;
        /** State of the comment. */
        status?: string;
        /** Meta fields. */
        meta?: {};
    };
    /**
     * Endpoint request arguments for the GET /workflows/v1/comments/(?P<id>[\d]+) route.
     */
    export type GetCommentRequestArguments = {
        /** Unique identifier for the comment. */
        id: number;
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** The password for the parent post of the comment (if the post is password protected). */
        password?: string;
    };
    /**
     * Endpoint request arguments for the PATCH,POST,PUT /workflows/v1/comments/(?P<id>[\d]+) route.
     */
    export type UpdateCommentRequestArguments = {
        /** Unique identifier for the comment. */
        id: number;
        /** The ID of the user object, if author was a user. */
        author?: number;
        /** Email address for the comment author. */
        author_email?: string;
        /** IP address for the comment author. */
        author_ip?: string;
        /** Display name for the comment author. */
        author_name?: string;
        /** URL for the comment author. */
        author_url?: string;
        /** User agent for the comment author. */
        author_user_agent?: string;
        /** The content for the comment. */
        content?: {
            /** Content for the comment, as it exists in the database. */
            raw: string;
            /** HTML content for the comment, transformed for display. */
            rendered: string;
        };
        /** The date the comment was published, in the site's timezone. */
        date?: string;
        /** The date the comment was published, as GMT. */
        date_gmt?: string;
        /** The ID for the parent of the comment. */
        parent?: number;
        /** The ID of the associated post object. */
        post?: number;
        /** State of the comment. */
        status?: string;
        /** Meta fields. */
        meta?: {};
    };
    /**
     * Endpoint request arguments for the DELETE /workflows/v1/comments/(?P<id>[\d]+) route.
     */
    export type DeleteCommentRequestArguments = {
        /** Unique identifier for the comment. */
        id: number;
        /** Whether to bypass Trash and force deletion. */
        force?: boolean;
        /** The password for the parent post of the comment (if the post is password protected). */
        password?: string;
    };
    /**
     * Object type for the "hm_workflow" object in the route /workflows/v1/workflows.
     */
    export type HmWorkflow = {
        /** The date the post was published, in the site's timezone. */
        date: string | null;
        /** The date the post was published, as GMT. */
        date_gmt: string | null;
        /** The globally unique identifier for the post. */
        guid: {
            /** GUID for the post, as it exists in the database. */
            raw: string;
            /** GUID for the post, transformed for display. */
            rendered: string;
        };
        /** Unique identifier for the post. */
        id: number;
        /** URL to the post. */
        link: string;
        /** The date the post was last modified, in the site's timezone. */
        modified: string;
        /** The date the post was last modified, as GMT. */
        modified_gmt: string;
        /** An alphanumeric identifier for the post unique to its type. */
        slug: string;
        /** A named status for the post. */
        status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** Type of post. */
        type: string;
        /** A password to protect access to the content and excerpt. */
        password: string;
        /** The title for the post. */
        title: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The theme file to use to display the post. */
        template: string;
        /** */
        ab_tests: Record<string, unknown>;
        /** The event object */
        event: {
            /** A registered Event ID or an action name. */
            id: string;
            /** Associated data passed to the event callback. */
            data: Record<string, unknown>;
        };
        /** The workflows notification subject line */
        subject: string;
        /** The workflows notification subject line */
        message: string;
        /** */
        recipients: {
            /** */
            id: string;
            /** */
            value: string[]
            ;
        }[];
        /** */
        destinations: {
            /** */
            id: string;
            /** */
            data: Record<string, unknown>;
        }[];
    };
    /**
     * Endpoint request arguments for the GET /workflows/v1/workflows route.
     */
    export type GetHmWorkflowsRequestArguments = {
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** Current page of the collection. */
        page?: number;
        /** Maximum number of items to be returned in result set. */
        per_page?: number;
        /** Limit results to those matching a string. */
        search?: string;
        /** Limit response to posts published after a given ISO8601 compliant date. */
        after?: string;
        /** Limit response to posts modified after a given ISO8601 compliant date. */
        modified_after?: string;
        /** Limit response to posts published before a given ISO8601 compliant date. */
        before?: string;
        /** Limit response to posts modified before a given ISO8601 compliant date. */
        modified_before?: string;
        /** Ensure result set excludes specific IDs. */
        exclude?: number[]
        ;
        /** Limit result set to specific IDs. */
        include?: number[]
        ;
        /** Offset the result set by a specific number of items. */
        offset?: number;
        /** Order sort attribute ascending or descending. */
        order?: 'asc' | 'desc';
        /** Sort collection by post attribute. */
        orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
        /** Limit result set to posts with one or more specific slugs. */
        slug?: string[]
        ;
        /** Limit result set to posts assigned one or more statuses. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
        ;
    };
    /**
     * Endpoint request arguments for the POST /workflows/v1/workflows route.
     */
    export type CreateHmWorkflowRequestArguments = {
        /** The date the post was published, in the site's timezone. */
        date?: string | null;
        /** The date the post was published, as GMT. */
        date_gmt?: string | null;
        /** An alphanumeric identifier for the post unique to its type. */
        slug?: string;
        /** A named status for the post. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** A password to protect access to the content and excerpt. */
        password?: string;
        /** The title for the post. */
        title?: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The theme file to use to display the post. */
        template?: string;
        /** */
        ab_tests?: Record<string, unknown>;
        /** The event object */
        event?: {
            /** A registered Event ID or an action name. */
            id: string;
            /** Associated data passed to the event callback. */
            data: Record<string, unknown>;
        };
        /** The workflows notification subject line */
        subject?: string;
        /** The workflows notification subject line */
        message?: string;
        /** */
        recipients?: {
            /** */
            id: string;
            /** */
            value: string[]
            ;
        }[];
        /** */
        destinations?: {
            /** */
            id: string;
            /** */
            data: Record<string, unknown>;
        }[];
    };
    /**
     * Endpoint request arguments for the GET /workflows/v1/workflows/(?P<id>[\d]+) route.
     */
    export type GetHmWorkflowRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** The password for the post if it is password protected. */
        password?: string;
    };
    /**
     * Endpoint request arguments for the PATCH,POST,PUT /workflows/v1/workflows/(?P<id>[\d]+) route.
     */
    export type UpdateHmWorkflowRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** The date the post was published, in the site's timezone. */
        date?: string | null;
        /** The date the post was published, as GMT. */
        date_gmt?: string | null;
        /** An alphanumeric identifier for the post unique to its type. */
        slug?: string;
        /** A named status for the post. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** A password to protect access to the content and excerpt. */
        password?: string;
        /** The title for the post. */
        title?: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The theme file to use to display the post. */
        template?: string;
        /** */
        ab_tests?: Record<string, unknown>;
        /** The event object */
        event?: {
            /** A registered Event ID or an action name. */
            id: string;
            /** Associated data passed to the event callback. */
            data: Record<string, unknown>;
        };
        /** The workflows notification subject line */
        subject?: string;
        /** The workflows notification subject line */
        message?: string;
        /** */
        recipients?: {
            /** */
            id: string;
            /** */
            value: string[]
            ;
        }[];
        /** */
        destinations?: {
            /** */
            id: string;
            /** */
            data: Record<string, unknown>;
        }[];
    };
    /**
     * Endpoint request arguments for the DELETE /workflows/v1/workflows/(?P<id>[\d]+) route.
     */
    export type DeleteHmWorkflowRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** Whether to bypass Trash and force deletion. */
        force?: boolean;
    };

    /**
     * Get comments objects from the /workflows/v1/comments route.
     */
    export async function getComments(args?: GetCommentsRequestArguments): Promise<Comment[]> {
        const url = new URL('https://humanmade.com/wp-json/workflows/v1/comments');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Comment[];
        return request;
    }

    /**
     * Create a comment object at the /workflows/v1/comments route.
     */
    export async function createComment(properties: CreateCommentRequestArguments): Promise<Comment> {
        const url = new URL('https://humanmade.com/wp-json/workflows/v1/comments');
        const request = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(properties),
        });
        const response = await request.json() as Comment;
        return response;
    }

    /**
     * Get a comment object from the /workflows/v1/comments/(?P<id>[\d]+) route.
     */
    export async function getComment(args?: GetCommentRequestArguments): Promise<Comment> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Comment[];
        return request;
    }

    /**
     * Update a comment object from the /workflows/v1/comments/(?P<id>[\d]+) route.
     */
    export async function updateComment(args?: UpdateCommentRequestArguments): Promise<Comment> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Comment[];
        return request;
    }

    /** Delete a comment object from the /workflows/v1/comments/(?P<id>[\d]+) route. */
    export async function deleteComment(args?: DeleteCommentRequestArguments): Promise<Comment> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Comment[];
        return request;
    }

    /**
     * Get hm_workflows objects from the /workflows/v1/workflows route.
     */
    export async function getHmWorkflows(args?: GetHmWorkflowsRequestArguments): Promise<HmWorkflow[]> {
        const url = new URL('https://humanmade.com/wp-json/workflows/v1/workflows');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as HmWorkflow[];
        return request;
    }

    /**
     * Create a hm_workflow object at the /workflows/v1/workflows route.
     */
    export async function createHmWorkflow(properties: CreateHmWorkflowRequestArguments): Promise<HmWorkflow> {
        const url = new URL('https://humanmade.com/wp-json/workflows/v1/workflows');
        const request = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(properties),
        });
        const response = await request.json() as HmWorkflow;
        return response;
    }

    /**
     * Get a hm_workflow object from the /workflows/v1/workflows/(?P<id>[\d]+) route.
     */
    export async function getHmWorkflow(args?: GetHmWorkflowRequestArguments): Promise<HmWorkflow> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as HmWorkflow[];
        return request;
    }

    /**
     * Update a hm_workflow object from the /workflows/v1/workflows/(?P<id>[\d]+) route.
     */
    export async function updateHmWorkflow(args?: UpdateHmWorkflowRequestArguments): Promise<HmWorkflow> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as HmWorkflow[];
        return request;
    }

    /** Delete a hm_workflow object from the /workflows/v1/workflows/(?P<id>[\d]+) route. */
    export async function deleteHmWorkflow(args?: DeleteHmWorkflowRequestArguments): Promise<HmWorkflow> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as HmWorkflow[];
        return request;
    }
}

export namespace AnalyticsV1 {
    /**
     * Object type for the "audience" object in the route /analytics/v1/audiences.
     */
    export type Audience = {
        /** The date the post was published, in the site's timezone. */
        date: string | null;
        /** The date the post was published, as GMT. */
        date_gmt: string | null;
        /** The globally unique identifier for the post. */
        guid: {
            /** GUID for the post, as it exists in the database. */
            raw: string;
            /** GUID for the post, transformed for display. */
            rendered: string;
        };
        /** Unique identifier for the post. */
        id: number;
        /** URL to the post. */
        link: string;
        /** The date the post was last modified, in the site's timezone. */
        modified: string;
        /** The date the post was last modified, as GMT. */
        modified_gmt: string;
        /** An alphanumeric identifier for the post unique to its type. */
        slug: string;
        /** A named status for the post. */
        status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** Type of post. */
        type: string;
        /** A password to protect access to the content and excerpt. */
        password: string;
        /** The title for the post. */
        title: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The excerpt for the post. */
        excerpt: {
            /** Excerpt for the post, as it exists in the database. */
            raw: string;
            /** HTML excerpt for the post, transformed for display. */
            rendered: string;
            /** Whether the excerpt is protected with a password. */
            protected: boolean;
        };
        /** The order of the post in relation to other posts. */
        menu_order: number;
        /** The theme file to use to display the post. */
        template: string;
        /** */
        audience: {
            /** */
            include: 'any' | 'all' | 'none';
            /** */
            groups: {
                /** */
                include: 'any' | 'all' | 'none';
                /** */
                rules: {
                    /** */
                    field: string;
                    /** */
                    operator: '=' | '!=' | '*=' | '!*' | '^=' | 'gte' | 'lte' | 'gt' | 'lt';
                    /** */
                    value: string | number;
                }[];
            }[];
        };
        /** */
        estimate: {
            /** */
            count: number;
            /** */
            total: number;
            /** */
            histogram: {
                /** */
                index: number;
                /** */
                count: number;
            }[];
        };
        /** */
        ab_tests: Record<string, unknown>;
    };
    /**
     * Endpoint request arguments for the GET /analytics/v1/audiences route.
     */
    export type GetAudiencesRequestArguments = {
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** Current page of the collection. */
        page?: number;
        /** Maximum number of items to be returned in result set. */
        per_page?: number;
        /** Limit results to those matching a string. */
        search?: string;
        /** Limit response to posts published after a given ISO8601 compliant date. */
        after?: string;
        /** Limit response to posts modified after a given ISO8601 compliant date. */
        modified_after?: string;
        /** Limit response to posts published before a given ISO8601 compliant date. */
        before?: string;
        /** Limit response to posts modified before a given ISO8601 compliant date. */
        modified_before?: string;
        /** Ensure result set excludes specific IDs. */
        exclude?: number[]
        ;
        /** Limit result set to specific IDs. */
        include?: number[]
        ;
        /** Limit result set to posts with a specific menu_order value. */
        menu_order?: number;
        /** Offset the result set by a specific number of items. */
        offset?: number;
        /** Order sort attribute ascending or descending. */
        order?: 'asc' | 'desc';
        /** Sort collection by post attribute. */
        orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
        /** Limit result set to posts with one or more specific slugs. */
        slug?: string[]
        ;
        /** Limit result set to posts assigned one or more statuses. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
        ;
    };
    /**
     * Endpoint request arguments for the POST /analytics/v1/audiences route.
     */
    export type CreateAudienceRequestArguments = {
        /** The date the post was published, in the site's timezone. */
        date?: string | null;
        /** The date the post was published, as GMT. */
        date_gmt?: string | null;
        /** An alphanumeric identifier for the post unique to its type. */
        slug?: string;
        /** A named status for the post. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** A password to protect access to the content and excerpt. */
        password?: string;
        /** The title for the post. */
        title?: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The excerpt for the post. */
        excerpt?: {
            /** Excerpt for the post, as it exists in the database. */
            raw: string;
            /** HTML excerpt for the post, transformed for display. */
            rendered: string;
            /** Whether the excerpt is protected with a password. */
            protected: boolean;
        };
        /** The order of the post in relation to other posts. */
        menu_order?: number;
        /** The theme file to use to display the post. */
        template?: string;
        /** */
        audience?: {
            /** */
            include: 'any' | 'all' | 'none';
            /** */
            groups: {
                /** */
                include: 'any' | 'all' | 'none';
                /** */
                rules: {
                    /** */
                    field: string;
                    /** */
                    operator: '=' | '!=' | '*=' | '!*' | '^=' | 'gte' | 'lte' | 'gt' | 'lt';
                    /** */
                    value: string | number;
                }[];
            }[];
        };
        /** */
        estimate?: {
            /** */
            count: number;
            /** */
            total: number;
            /** */
            histogram: {
                /** */
                index: number;
                /** */
                count: number;
            }[];
        };
        /** */
        ab_tests?: Record<string, unknown>;
    };
    /**
     * Endpoint request arguments for the GET /analytics/v1/audiences/(?P<id>[\d]+) route.
     */
    export type GetAudienceRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** The password for the post if it is password protected. */
        password?: string;
    };
    /**
     * Endpoint request arguments for the PATCH,POST,PUT /analytics/v1/audiences/(?P<id>[\d]+) route.
     */
    export type UpdateAudienceRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** The date the post was published, in the site's timezone. */
        date?: string | null;
        /** The date the post was published, as GMT. */
        date_gmt?: string | null;
        /** An alphanumeric identifier for the post unique to its type. */
        slug?: string;
        /** A named status for the post. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** A password to protect access to the content and excerpt. */
        password?: string;
        /** The title for the post. */
        title?: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The excerpt for the post. */
        excerpt?: {
            /** Excerpt for the post, as it exists in the database. */
            raw: string;
            /** HTML excerpt for the post, transformed for display. */
            rendered: string;
            /** Whether the excerpt is protected with a password. */
            protected: boolean;
        };
        /** The order of the post in relation to other posts. */
        menu_order?: number;
        /** The theme file to use to display the post. */
        template?: string;
        /** */
        audience?: {
            /** */
            include: 'any' | 'all' | 'none';
            /** */
            groups: {
                /** */
                include: 'any' | 'all' | 'none';
                /** */
                rules: {
                    /** */
                    field: string;
                    /** */
                    operator: '=' | '!=' | '*=' | '!*' | '^=' | 'gte' | 'lte' | 'gt' | 'lt';
                    /** */
                    value: string | number;
                }[];
            }[];
        };
        /** */
        estimate?: {
            /** */
            count: number;
            /** */
            total: number;
            /** */
            histogram: {
                /** */
                index: number;
                /** */
                count: number;
            }[];
        };
        /** */
        ab_tests?: Record<string, unknown>;
    };
    /**
     * Endpoint request arguments for the DELETE /analytics/v1/audiences/(?P<id>[\d]+) route.
     */
    export type DeleteAudienceRequestArguments = {
        /** Unique identifier for the post. */
        id: number;
        /** Whether to bypass Trash and force deletion. */
        force?: boolean;
    };
    /**
     * Object type for the "xb" object in the route /analytics/v1/xbs.
     */
    export type Xb = {
        /** The date the post was published, in the site's timezone. */
        date: string | null;
        /** The date the post was published, as GMT. */
        date_gmt: string | null;
        /** The globally unique identifier for the post. */
        guid: {
            /** GUID for the post, as it exists in the database. */
            raw: string;
            /** GUID for the post, transformed for display. */
            rendered: string;
        };
        /** Unique identifier for the post. */
        id: number;
        /** URL to the post. */
        link: string;
        /** The date the post was last modified, in the site's timezone. */
        modified: string;
        /** The date the post was last modified, as GMT. */
        modified_gmt: string;
        /** An alphanumeric identifier for the post unique to its type. */
        slug: string;
        /** A named status for the post. */
        status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** Type of post. */
        type: string;
        /** A password to protect access to the content and excerpt. */
        password: string;
        /** The ID for the parent of the post. */
        parent: number;
        /** The title for the post. */
        title: {
            /** Title for the post, as it exists in the database. */
            raw: string;
            /** HTML title for the post, transformed for display. */
            rendered: string;
        };
        /** The content for the post. */
        content: {
            /** Content for the post, as it exists in the database. */
            raw: string;
            /** HTML content for the post, transformed for display. */
            rendered: string;
            /** Version of the content block format used by the post. */
            block_version: number;
            /** Whether the content is protected with a password. */
            protected: boolean;
        };
        /** The theme file to use to display the post. */
        template: string;
        /** */
        ab_tests: Record<string, unknown>;
        /** */
        ab_test_xb: string[]
        ;
        /** The type of experience block */
        subtype: string;
        /** */
        variants: {
            /** */
            id: number;
            /** */
            fallback: boolean;
            /** */
            goal: string;
            /** */
            title: string;
            /** */
            percent: number;
        }[];
    };
    /**
     * Endpoint request arguments for the GET /analytics/v1/xbs route.
     */
    export type GetXbsRequestArguments = {
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
        /** Current page of the collection. */
        page?: number;
        /** Maximum number of items to be returned in result set. */
        per_page?: number;
        /** Limit results to those matching a string. */
        search?: string;
        /** Limit response to posts published after a given ISO8601 compliant date. */
        after?: string;
        /** Limit response to posts modified after a given ISO8601 compliant date. */
        modified_after?: string;
        /** Limit response to posts published before a given ISO8601 compliant date. */
        before?: string;
        /** Limit response to posts modified before a given ISO8601 compliant date. */
        modified_before?: string;
        /** Ensure result set excludes specific IDs. */
        exclude?: number[]
        ;
        /** Limit result set to specific IDs. */
        include?: number[]
        ;
        /** Offset the result set by a specific number of items. */
        offset?: number;
        /** Order sort attribute ascending or descending. */
        order?: 'asc' | 'desc';
        /** Sort collection by post attribute. */
        orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
        /** Limit result set to items with particular parent IDs. */
        parent?: number[]
        ;
        /** Limit result set to all items except those of a particular parent ID. */
        parent_exclude?: number[]
        ;
        /** Limit result set to posts with one or more specific slugs. */
        slug?: string[]
        ;
        /** Limit result set to posts assigned one or more statuses. */
        status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
        ;
    };
    /**
     * Endpoint request arguments for the GET /analytics/v1/xbs/(?P<id>[a-z\d-]+) route.
     */
    export type GetXbRequestArguments = {
        /** Unique identifier for the object. */
        id: number | string;
        /** Scope under which the request is made; determines fields present in response. */
        context?: 'view' | 'embed' | 'edit';
    };

    /**
     * Get audiences objects from the /analytics/v1/audiences route.
     */
    export async function getAudiences(args?: GetAudiencesRequestArguments): Promise<Audience[]> {
        const url = new URL('https://humanmade.com/wp-json/analytics/v1/audiences');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Audience[];
        return request;
    }

    /**
     * Create a audience object at the /analytics/v1/audiences route.
     */
    export async function createAudience(properties: CreateAudienceRequestArguments): Promise<Audience> {
        const url = new URL('https://humanmade.com/wp-json/analytics/v1/audiences');
        const request = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(properties),
        });
        const response = await request.json() as Audience;
        return response;
    }

    /**
     * Get a audience object from the /analytics/v1/audiences/(?P<id>[\d]+) route.
     */
    export async function getAudience(args?: GetAudienceRequestArguments): Promise<Audience> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Audience[];
        return request;
    }

    /**
     * Update a audience object from the /analytics/v1/audiences/(?P<id>[\d]+) route.
     */
    export async function updateAudience(args?: UpdateAudienceRequestArguments): Promise<Audience> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Audience[];
        return request;
    }

    /** Delete a audience object from the /analytics/v1/audiences/(?P<id>[\d]+) route. */
    export async function deleteAudience(args?: DeleteAudienceRequestArguments): Promise<Audience> {
        const url = new URL('undefined');
        url.search = new URLSearchParams(args as Record<string, string>).toString();
        const request = await (await fetch(url)).json() as Audience[];
        return request;
    }
}

export namespace AltisReusableBlocksV1 {
    /**
     * Object type for the "Block relationships" object in the route /altis-reusable-blocks/v1/relationships.
     */
    export type BlockRelationships = {
        /** Unique identifier for the object. */
        id: number;
        /** A named status for the object. */
        status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
        /** Type of Post for the object. */
        type: string;
        /** The title for the object. */
        title: {
            /** HTML title for the object, transformed for display. */
            rendered: string;
        };
    };
    /**
     * Endpoint request arguments for the GET /altis-reusable-blocks/v1/relationships route.
     */
    export type GetBlockRelationshipsRequestArguments = {
        /** */
        context?: unknown;
        /** Block ID to get the relationship data for. */
        block_id: number;
    };
}
/**
 * Object type for the "post" object in the route /wp/v2/posts.
 */
export type Post = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** Permalink template for the post. */
    permalink_template: string;
    /** Slug automatically generated from the post title. */
    generated_slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author: number;
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media: number;
    /** Whether or not comments are open on the post. */
    comment_status: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status: 'open' | 'closed';
    /** The format for the post. */
    format: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    /** Meta fields. */
    meta: {
        /** */
        assignees: number[]
        ;
    };
    /** Whether or not the post should be treated as sticky. */
    sticky: boolean;
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the category taxonomy. */
    categories: number[]
    ;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags: number[]
    ;
    /** */
    ab_tests: Record<string, unknown>;
    /** */
    ab_test_titles: string[]
    ;
    /** */
    ab_test_featured_images: number[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts route.
 */
export type GetPostsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit result set to posts assigned to specific authors. */
    author?: number[]
    ;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: number[]
    ;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the categories taxonomy. */
    categories?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the categories taxonomy. */
    categories_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the tags taxonomy. */
    tags?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the tags taxonomy. */
    tags_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items that are sticky. */
    sticky?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/posts route.
 */
export type CreatePostRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The format for the post. */
    format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** Whether or not the post should be treated as sticky. */
    sticky?: boolean;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the category taxonomy. */
    categories?: number[]
    ;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type GetPostRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type UpdatePostRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The format for the post. */
    format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** Whether or not the post should be treated as sticky. */
    sticky?: boolean;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the category taxonomy. */
    categories?: number[]
    ;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/posts/(?P<id>[\d]+) route.
 */
export type DeletePostRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "post-revision" object in the route /wp/v2/posts/(?P<parent>[\d]+)/revisions.
 */
export type PostRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/posts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetPostRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeletePostRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/posts/(?P<id>[\d]+)/autosaves route.
 */
export type CreatePostRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The format for the post. */
    format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** Whether or not the post should be treated as sticky. */
    sticky?: boolean;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the category taxonomy. */
    categories?: number[]
    ;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Object type for the "page" object in the route /wp/v2/pages.
 */
export type Page = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** Permalink template for the post. */
    permalink_template: string;
    /** Slug automatically generated from the post title. */
    generated_slug: string;
    /** The ID for the parent of the post. */
    parent: number;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author: number;
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media: number;
    /** Whether or not comments are open on the post. */
    comment_status: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status: 'open' | 'closed';
    /** The order of the post in relation to other posts. */
    menu_order: number;
    /** Meta fields. */
    meta: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** */
    ab_tests: Record<string, unknown>;
    /** */
    ab_test_titles: string[]
    ;
    /** */
    ab_test_featured_images: number[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages route.
 */
export type GetPagesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit result set to posts assigned to specific authors. */
    author?: number[]
    ;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: number[]
    ;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Limit result set to posts with a specific menu_order value. */
    menu_order?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
    /** Limit result set to items with particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/pages route.
 */
export type CreatePageRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The ID for the parent of the post. */
    parent?: number;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The order of the post in relation to other posts. */
    menu_order?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type GetPageRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type UpdatePageRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The ID for the parent of the post. */
    parent?: number;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The order of the post in relation to other posts. */
    menu_order?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/pages/(?P<id>[\d]+) route.
 */
export type DeletePageRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "page-revision" object in the route /wp/v2/pages/(?P<parent>[\d]+)/revisions.
 */
export type PageRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/pages/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetPageRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeletePageRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/pages/(?P<id>[\d]+)/autosaves route.
 */
export type CreatePageRevisionRequestArguments = {
    /** The ID for the parent of the post. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The order of the post in relation to other posts. */
    menu_order?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_titles?: string[]
    ;
    /** */
    ab_test_featured_images?: number[]
    ;
};
/**
 * Object type for the "attachment" object in the route /wp/v2/media.
 */
export type Attachment = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** Permalink template for the post. */
    permalink_template: string;
    /** Slug automatically generated from the post title. */
    generated_slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The ID for the author of the post. */
    author: number;
    /** Whether or not comments are open on the post. */
    comment_status: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status: 'open' | 'closed';
    /** Meta fields. */
    meta: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** */
    ab_tests: Record<string, unknown>;
    /** Alternative text to display when attachment is not displayed. */
    alt_text: string;
    /** The attachment caption. */
    caption: {
        /** Caption for the attachment, as it exists in the database. */
        raw: string;
        /** HTML caption for the attachment, transformed for display. */
        rendered: string;
    };
    /** The attachment description. */
    description: {
        /** Description for the attachment, as it exists in the database. */
        raw: string;
        /** HTML description for the attachment, transformed for display. */
        rendered: string;
    };
    /** Attachment type. */
    media_type: 'image' | 'file';
    /** The attachment MIME type. */
    mime_type: string;
    /** Details about the media file, specific to its type. */
    media_details: Record<string, unknown>;
    /** The ID for the associated post of the attachment. */
    post: number;
    /** URL to the original attachment file. */
    source_url: string;
    /** List of the missing image sizes of the attachment. */
    missing_image_sizes: string[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/media route.
 */
export type GetAttachmentsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit result set to posts assigned to specific authors. */
    author?: number[]
    ;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: number[]
    ;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to items with particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'inherit' | 'private' | 'trash'[]
    ;
    /** Limit result set to attachments of a particular media type. */
    media_type?: 'image' | 'video' | 'audio' | 'application';
    /** Limit result set to attachments of a particular MIME type. */
    mime_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/media route.
 */
export type CreateAttachmentRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: {
        /** Caption for the attachment, as it exists in the database. */
        raw: string;
        /** HTML caption for the attachment, transformed for display. */
        rendered: string;
    };
    /** The attachment description. */
    description?: {
        /** Description for the attachment, as it exists in the database. */
        raw: string;
        /** HTML description for the attachment, transformed for display. */
        rendered: string;
    };
    /** The ID for the associated post of the attachment. */
    post?: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/media/(?P<id>[\d]+) route.
 */
export type GetAttachmentRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/media/(?P<id>[\d]+) route.
 */
export type UpdateAttachmentRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: {
        /** Caption for the attachment, as it exists in the database. */
        raw: string;
        /** HTML caption for the attachment, transformed for display. */
        rendered: string;
    };
    /** The attachment description. */
    description?: {
        /** Description for the attachment, as it exists in the database. */
        raw: string;
        /** HTML description for the attachment, transformed for display. */
        rendered: string;
    };
    /** The ID for the associated post of the attachment. */
    post?: number;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/media/(?P<id>[\d]+) route.
 */
export type DeleteAttachmentRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "nav_menu_item" object in the route /wp/v2/menu-items.
 */
export type NavMenuItem = {
    /** The title for the object. */
    title: string | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the object. */
    id: number;
    /** The singular label used to describe this type of menu item. */
    type_label: string;
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
    /** A named status for the object. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the parent of the object. */
    parent: number;
    /** Text for the title attribute of the link element for this menu item. */
    attr_title: string;
    /** Class names for the link element of this menu item. */
    classes: string[]
    ;
    /** The description of this menu item. */
    description: string;
    /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
    menu_order: number;
    /** The type of object originally represented, such as "category", "post", or "attachment". */
    object: string;
    /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
    object_id: number;
    /** The target attribute of the link element for this menu item. */
    target: '_blank' | '';
    /** The URL to which this menu item points. */
    url: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn: string[]
    ;
    /** Whether the menu item represents an object that no longer exists. */
    invalid: boolean;
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus: number;
    /** Meta fields. */
    meta: {
        /** */
        assignees: number[]
        ;
    };
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items route.
 */
export type GetNavMenuItemsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the menus taxonomy. */
    menus?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the menus taxonomy. */
    menus_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to posts with a specific menu_order value. */
    menu_order?: number;
};
/**
 * Endpoint request arguments for the POST /wp/v2/menu-items route.
 */
export type CreateNavMenuItemRequestArguments = {
    /** The title for the object. */
    title?: string | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
    };
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
    /** A named status for the object. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the parent of the object. */
    parent?: number;
    /** Text for the title attribute of the link element for this menu item. */
    attr_title?: string;
    /** Class names for the link element of this menu item. */
    classes?: string[]
    ;
    /** The description of this menu item. */
    description?: string;
    /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
    menu_order?: number;
    /** The type of object originally represented, such as "category", "post", or "attachment". */
    object?: string;
    /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
    object_id?: number;
    /** The target attribute of the link element for this menu item. */
    target?: '_blank' | '';
    /** The URL to which this menu item points. */
    url?: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn?: string[]
    ;
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type GetNavMenuItemRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type UpdateNavMenuItemRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The title for the object. */
    title?: string | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
    };
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
    /** A named status for the object. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the parent of the object. */
    parent?: number;
    /** Text for the title attribute of the link element for this menu item. */
    attr_title?: string;
    /** Class names for the link element of this menu item. */
    classes?: string[]
    ;
    /** The description of this menu item. */
    description?: string;
    /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
    menu_order?: number;
    /** The type of object originally represented, such as "category", "post", or "attachment". */
    object?: string;
    /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
    object_id?: number;
    /** The target attribute of the link element for this menu item. */
    target?: '_blank' | '';
    /** The URL to which this menu item points. */
    url?: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn?: string[]
    ;
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export type DeleteNavMenuItemRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "nav_menu_item-revision" object in the route /wp/v2/menu-items/(?P<id>[\d]+)/autosaves.
 */
export type NavMenuItemRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** GUID for the revision, as it exists in the database. */
    guid: string;
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the object. */
    title: string | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
    };
    /** Preview link for the post. */
    preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-items/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetNavMenuItemRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/menu-items/(?P<id>[\d]+)/autosaves route.
 */
export type CreateNavMenuItemRevisionRequestArguments = {
    /** The ID for the parent of the object. */
    parent?: number;
    /** The title for the object. */
    title?: string | {
        /** Title for the object, as it exists in the database. */
        raw: string;
        /** HTML title for the object, transformed for display. */
        rendered: string;
    };
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
    /** A named status for the object. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Text for the title attribute of the link element for this menu item. */
    attr_title?: string;
    /** Class names for the link element of this menu item. */
    classes?: string[]
    ;
    /** The description of this menu item. */
    description?: string;
    /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
    menu_order?: number;
    /** The type of object originally represented, such as "category", "post", or "attachment". */
    object?: string;
    /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
    object_id?: number;
    /** The target attribute of the link element for this menu item. */
    target?: '_blank' | '';
    /** The URL to which this menu item points. */
    url?: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn?: string[]
    ;
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus?: number;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "wp_block" object in the route /wp/v2/blocks.
 */
export type WPBlock = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the wp_block_category taxonomy. */
    wp_block_category: number[]
    ;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks route.
 */
export type GetWPBlocksRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the wp_block_category taxonomy. */
    wp_block_category?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the wp_block_category taxonomy. */
    wp_block_category_exclude?: Record<string, unknown> | unknown[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/blocks route.
 */
export type CreateWPBlockRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the wp_block_category taxonomy. */
    wp_block_category?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type GetWPBlockRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type UpdateWPBlockRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the wp_block_category taxonomy. */
    wp_block_category?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export type DeleteWPBlockRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "wp_block-revision" object in the route /wp/v2/blocks/(?P<parent>[\d]+)/revisions.
 */
export type WPBlockRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/blocks/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPBlockRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/blocks/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPBlockRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/blocks/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPBlockRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the wp_block_category taxonomy. */
    wp_block_category?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "wp_template" object in the route /wp/v2/templates.
 */
export type WPTemplate = {
    /** ID of template. */
    id: string;
    /** Unique slug identifying the template. */
    slug: string;
    /** Theme identifier for the template. */
    theme: string;
    /** Type of template. */
    type: string;
    /** Source of template */
    source: string;
    /** Source of a customized template */
    origin: string;
    /** Content of template. */
    content: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description: string;
    /** Status of template. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Post ID. */
    wp_id: number;
    /** Theme file exists. */
    has_theme_file: boolean;
    /** The ID for the author of the template. */
    author: number;
    /** Whether a template is a custom template. */
    is_custom: boolean;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates route.
 */
export type GetWPTemplatesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: string;
    /** Post type to get the templates for. */
    post_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/templates route.
 */
export type CreateWPTemplateRequestArguments = {
    /** Unique slug identifying the template. */
    slug: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type GetWPTemplateRequestArguments = {
    /** The id of a template */
    id: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type UpdateWPTemplateRequestArguments = {
    /** The id of a template */
    id: string;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type DeleteWPTemplateRequestArguments = {
    /** The id of a template */
    id: string;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "wp_template-revision" object in the route /wp/v2/templates/(?P<parent>[\d]+)/revisions.
 */
export type WPTemplateRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** GUID for the revision, as it exists in the database. */
    guid: string;
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** Title of template. */
    title: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Content of template. */
    content: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/templates/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPTemplateRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/templates/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPTemplateRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/templates/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPTemplateRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "wp_template_part" object in the route /wp/v2/template-parts.
 */
export type WPTemplatePart = {
    /** ID of template. */
    id: string;
    /** Unique slug identifying the template. */
    slug: string;
    /** Theme identifier for the template. */
    theme: string;
    /** Type of template. */
    type: string;
    /** Source of template */
    source: string;
    /** Source of a customized template */
    origin: string;
    /** Content of template. */
    content: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description: string;
    /** Status of template. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Post ID. */
    wp_id: number;
    /** Theme file exists. */
    has_theme_file: boolean;
    /** The ID for the author of the template. */
    author: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area: string;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts route.
 */
export type GetWPTemplatePartsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: string;
    /** Post type to get the templates for. */
    post_type?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/template-parts route.
 */
export type CreateWPTemplatePartRequestArguments = {
    /** Unique slug identifying the template. */
    slug: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type GetWPTemplatePartRequestArguments = {
    /** The id of a template */
    id: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type UpdateWPTemplatePartRequestArguments = {
    /** The id of a template */
    id: string;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export type DeleteWPTemplatePartRequestArguments = {
    /** The id of a template */
    id: string;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "wp_template_part-revision" object in the route /wp/v2/template-parts/(?P<parent>[\d]+)/revisions.
 */
export type WPTemplatePartRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** GUID for the revision, as it exists in the database. */
    guid: string;
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** Title of template. */
    title: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Content of template. */
    content: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/template-parts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPTemplatePartRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/template-parts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPTemplatePartRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/template-parts/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPTemplatePartRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: {
        /** Content for the template, as it exists in the database. */
        raw: string;
        /** Version of the content block format used by the template. */
        block_version: number;
    } | string;
    /** Title of template. */
    title?: {
        /** Title for the template, as it exists in the database. */
        raw: string;
        /** HTML title for the template, transformed for display. */
        rendered: string;
    } | string;
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "wp_navigation" object in the route /wp/v2/navigation.
 */
export type WPNavigation = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation route.
 */
export type GetWPNavigationsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/navigation route.
 */
export type CreateWPNavigationRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type GetWPNavigationRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type UpdateWPNavigationRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export type DeleteWPNavigationRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "wp_navigation-revision" object in the route /wp/v2/navigation/(?P<parent>[\d]+)/revisions.
 */
export type WPNavigationRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/navigation/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetWPNavigationRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/navigation/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteWPNavigationRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/navigation/(?P<id>[\d]+)/autosaves route.
 */
export type CreateWPNavigationRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "hm_workflow-revision" object in the route /wp/v2/workflows/(?P<id>[\d]+)/autosaves.
 */
export type HmWorkflowRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** Preview link for the post. */
    preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/workflows/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetHmWorkflowRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/workflows/(?P<id>[\d]+)/autosaves route.
 */
export type CreateHmWorkflowRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** The event object */
    event?: {
        /** A registered Event ID or an action name. */
        id: string;
        /** Associated data passed to the event callback. */
        data: Record<string, unknown>;
    };
    /** The workflows notification subject line */
    subject?: string;
    /** The workflows notification subject line */
    message?: string;
    /** */
    recipients?: {
        /** */
        id: string;
        /** */
        value: string[]
        ;
    }[];
    /** */
    destinations?: {
        /** */
        id: string;
        /** */
        data: Record<string, unknown>;
    }[];
};
/**
 * Object type for the "case-study" object in the route /wp/v2/case-study.
 */
export type CaseStudy = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** Permalink template for the post. */
    permalink_template: string;
    /** Slug automatically generated from the post title. */
    generated_slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author: number;
    /** The ID of the featured media for the post. */
    featured_media: number;
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the client taxonomy. */
    client: number[]
    ;
    /** The terms assigned to the post in the industry taxonomy. */
    industry: number[]
    ;
    /** The terms assigned to the post in the service taxonomy. */
    service: number[]
    ;
    /** The terms assigned to the post in the technology taxonomy. */
    technology: number[]
    ;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/case-study route.
 */
export type GetCaseStudiesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit result set to posts assigned to specific authors. */
    author?: number[]
    ;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: number[]
    ;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the client taxonomy. */
    client?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the client taxonomy. */
    client_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the industry taxonomy. */
    industry?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the industry taxonomy. */
    industry_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the service taxonomy. */
    service?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the service taxonomy. */
    service_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the technology taxonomy. */
    technology?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the technology taxonomy. */
    technology_exclude?: Record<string, unknown> | unknown[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/case-study route.
 */
export type CreateCaseStudyRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the client taxonomy. */
    client?: number[]
    ;
    /** The terms assigned to the post in the industry taxonomy. */
    industry?: number[]
    ;
    /** The terms assigned to the post in the service taxonomy. */
    service?: number[]
    ;
    /** The terms assigned to the post in the technology taxonomy. */
    technology?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/case-study/(?P<id>[\d]+) route.
 */
export type GetCaseStudyRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/case-study/(?P<id>[\d]+) route.
 */
export type UpdateCaseStudyRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the client taxonomy. */
    client?: number[]
    ;
    /** The terms assigned to the post in the industry taxonomy. */
    industry?: number[]
    ;
    /** The terms assigned to the post in the service taxonomy. */
    service?: number[]
    ;
    /** The terms assigned to the post in the technology taxonomy. */
    technology?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/case-study/(?P<id>[\d]+) route.
 */
export type DeleteCaseStudyRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "case-study-revision" object in the route /wp/v2/case-study/(?P<id>[\d]+)/autosaves.
 */
export type CaseStudyRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** Preview link for the post. */
    preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/case-study/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetCaseStudyRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/case-study/(?P<id>[\d]+)/autosaves route.
 */
export type CreateCaseStudyRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The ID for the author of the post. */
    author?: number;
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the client taxonomy. */
    client?: number[]
    ;
    /** The terms assigned to the post in the industry taxonomy. */
    industry?: number[]
    ;
    /** The terms assigned to the post in the service taxonomy. */
    service?: number[]
    ;
    /** The terms assigned to the post in the technology taxonomy. */
    technology?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "curated_archive" object in the route /wp/v2/curated_archive.
 */
export type CuratedArchive = {
    /** The date the post was published, in the site's timezone. */
    date: string | null;
    /** The date the post was published, as GMT. */
    date_gmt: string | null;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the post. */
    id: number;
    /** URL to the post. */
    link: string;
    /** The date the post was last modified, in the site's timezone. */
    modified: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug: string;
    /** A named status for the post. */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the custom-post-type taxonomy. */
    'custom-post-type': number[]
    ;
    /** */
    ab_tests: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/curated_archive route.
 */
export type GetCuratedArchivesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the custom-post-type taxonomy. */
    'custom-post-type'?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the custom-post-type taxonomy. */
    'custom-post-type_exclude'?: Record<string, unknown> | unknown[];
};
/**
 * Endpoint request arguments for the POST /wp/v2/curated_archive route.
 */
export type CreateCuratedArchiveRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the custom-post-type taxonomy. */
    'custom-post-type'?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/curated_archive/(?P<id>[\d]+) route.
 */
export type GetCuratedArchiveRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/curated_archive/(?P<id>[\d]+) route.
 */
export type UpdateCuratedArchiveRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the custom-post-type taxonomy. */
    'custom-post-type'?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/curated_archive/(?P<id>[\d]+) route.
 */
export type DeleteCuratedArchiveRequestArguments = {
    /** Unique identifier for the post. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
};
/**
 * Object type for the "curated_archive-revision" object in the route /wp/v2/curated_archive/(?P<id>[\d]+)/autosaves.
 */
export type CuratedArchiveRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** Preview link for the post. */
    preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/curated_archive/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetCuratedArchiveRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/curated_archive/(?P<id>[\d]+)/autosaves route.
 */
export type CreateCuratedArchiveRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the custom-post-type taxonomy. */
    'custom-post-type'?: number[]
    ;
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "audience-revision" object in the route /wp/v2/audiences/(?P<parent>[\d]+)/revisions.
 */
export type AudienceRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/audiences/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetAudienceRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/audiences/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+) route.
 */
export type DeleteAudienceRevisionRequestArguments = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id?: number;
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
};
/**
 * Endpoint request arguments for the POST /wp/v2/audiences/(?P<id>[\d]+)/autosaves route.
 */
export type CreateAudienceRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** The order of the post in relation to other posts. */
    menu_order?: number;
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    audience?: {
        /** */
        include: 'any' | 'all' | 'none';
        /** */
        groups: {
            /** */
            include: 'any' | 'all' | 'none';
            /** */
            rules: {
                /** */
                field: string;
                /** */
                operator: '=' | '!=' | '*=' | '!*' | '^=' | 'gte' | 'lte' | 'gt' | 'lt';
                /** */
                value: string | number;
            }[];
        }[];
    };
    /** */
    estimate?: {
        /** */
        count: number;
        /** */
        total: number;
        /** */
        histogram: {
            /** */
            index: number;
            /** */
            count: number;
        }[];
    };
    /** */
    ab_tests?: Record<string, unknown>;
};
/**
 * Object type for the "xb-revision" object in the route /wp/v2/xbs/(?P<id>[\d]+)/autosaves.
 */
export type XbRevision = {
    /** The ID for the author of the revision. */
    author: number;
    /** The date the revision was published, in the site's timezone. */
    date: string;
    /** The date the revision was published, as GMT. */
    date_gmt: string;
    /** The globally unique identifier for the post. */
    guid: {
        /** GUID for the post, as it exists in the database. */
        raw: string;
        /** GUID for the post, transformed for display. */
        rendered: string;
    };
    /** Unique identifier for the revision. */
    id: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt: string;
    /** The ID for the parent of the revision. */
    parent: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug: string;
    /** The title for the post. */
    title: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** Preview link for the post. */
    preview_link: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/xbs/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+) route.
 */
export type GetXbRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/xbs/(?P<id>[\d]+)/autosaves route.
 */
export type CreateXbRevisionRequestArguments = {
    /** The ID for the parent of the post. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'dp-rewrite-republish' | 'wp_stream_enabled' | 'wp_stream_disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    };
    /** The content for the post. */
    content?: {
        /** Content for the post, as it exists in the database. */
        raw: string;
        /** HTML content for the post, transformed for display. */
        rendered: string;
        /** Version of the content block format used by the post. */
        block_version: number;
        /** Whether the content is protected with a password. */
        protected: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** */
    ab_tests?: Record<string, unknown>;
    /** */
    ab_test_xb?: string[]
    ;
    /** The type of experience block */
    subtype?: string;
    /** */
    variants?: {
        /** */
        id: number;
        /** */
        fallback: boolean;
        /** */
        goal: string;
        /** */
        title: string;
        /** */
        percent: number;
    }[];
};
/**
 * Object type for the "type" object in the route /wp/v2/types.
 */
export type Type = {
    /** All capabilities used by the post type. */
    capabilities: Record<string, unknown>;
    /** A human-readable description of the post type. */
    description: string;
    /** Whether or not the post type should have children. */
    hierarchical: boolean;
    /** Whether or not the post type can be viewed. */
    viewable: boolean;
    /** Human-readable labels for the post type for various contexts. */
    labels: Record<string, unknown>;
    /** The title for the post type. */
    name: string;
    /** An alphanumeric identifier for the post type. */
    slug: string;
    /** All features, supported by the post type. */
    supports: Record<string, unknown>;
    /** Taxonomies associated with post type. */
    taxonomies: string[]
    ;
    /** REST base route for the post type. */
    rest_base: string;
    /** REST route's namespace for the post type. */
    rest_namespace: string;
    /** The visibility settings for the post type. */
    visibility: {
        /** Whether to generate a default UI for managing this post type. */
        show_ui: boolean;
        /** Whether to make the post type is available for selection in navigation menus. */
        show_in_nav_menus: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/types route.
 */
export type GetTypesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the GET /wp/v2/types/(?P<type>[\w-]+) route.
 */
export type GetTypeRequestArguments = {
    /** An alphanumeric identifier for the post type. */
    type: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Object type for the "status" object in the route /wp/v2/statuses.
 */
export type Status = {
    /** The title for the status. */
    name: string;
    /** Whether posts with this status should be private. */
    private: boolean;
    /** Whether posts with this status should be protected. */
    protected: boolean;
    /** Whether posts of this status should be shown in the front end of the site. */
    public: boolean;
    /** Whether posts with this status should be publicly-queryable. */
    queryable: boolean;
    /** Whether to include posts in the edit listing for their post type. */
    show_in_list: boolean;
    /** An alphanumeric identifier for the status. */
    slug: string;
    /** Whether posts of this status may have floating published dates. */
    date_floating: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/statuses/(?P<status>[\w-]+) route.
 */
export type GetStatusRequestArguments = {
    /** An alphanumeric identifier for the status. */
    status: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Object type for the "taxonomy" object in the route /wp/v2/taxonomies.
 */
export type Taxonomy = {
    /** All capabilities used by the taxonomy. */
    capabilities: Record<string, unknown>;
    /** A human-readable description of the taxonomy. */
    description: string;
    /** Whether or not the taxonomy should have children. */
    hierarchical: boolean;
    /** Human-readable labels for the taxonomy for various contexts. */
    labels: Record<string, unknown>;
    /** The title for the taxonomy. */
    name: string;
    /** An alphanumeric identifier for the taxonomy. */
    slug: string;
    /** Whether or not the term cloud should be displayed. */
    show_cloud: boolean;
    /** Types associated with the taxonomy. */
    types: string[]
    ;
    /** REST base route for the taxonomy. */
    rest_base: string;
    /** REST namespace route for the taxonomy. */
    rest_namespace: string;
    /** The visibility settings for the taxonomy. */
    visibility: {
        /** Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users. */
        public: boolean;
        /** Whether the taxonomy is publicly queryable. */
        publicly_queryable: boolean;
        /** Whether to generate a default UI for managing this taxonomy. */
        show_ui: boolean;
        /** Whether to allow automatic creation of taxonomy columns on associated post-types table. */
        show_admin_column: boolean;
        /** Whether to make the taxonomy available for selection in navigation menus. */
        show_in_nav_menus: boolean;
        /** Whether to show the taxonomy in the quick/bulk edit panel. */
        show_in_quick_edit: boolean;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/taxonomies route.
 */
export type GetTaxonomiesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit results to taxonomies associated with a specific post type. */
    type?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/taxonomies/(?P<taxonomy>[\w-]+) route.
 */
export type GetTaxonomyRequestArguments = {
    /** An alphanumeric identifier for the taxonomy. */
    taxonomy: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Object type for the "category" object in the route /wp/v2/categories.
 */
export type Category = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/categories route.
 */
export type GetCategoriesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/categories route.
 */
export type CreateCategoryRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type GetCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type UpdateCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/categories/(?P<id>[\d]+) route.
 */
export type DeleteCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "tag" object in the route /wp/v2/tags.
 */
export type Tag = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'post_tag';
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/tags route.
 */
export type GetTagsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/tags route.
 */
export type CreateTagRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type GetTagRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type UpdateTagRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/tags/(?P<id>[\d]+) route.
 */
export type DeleteTagRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "nav_menu" object in the route /wp/v2/menus.
 */
export type NavMenu = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Meta fields. */
    meta: {};
    /** The locations assigned to the menu. */
    locations: string[]
    ;
    /** Whether to automatically add top level pages to this menu. */
    auto_add: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menus route.
 */
export type GetNavMenusRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/menus route.
 */
export type CreateNavMenuRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
    /** The locations assigned to the menu. */
    locations?: string[]
    ;
    /** Whether to automatically add top level pages to this menu. */
    auto_add?: boolean;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type GetNavMenuRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type UpdateNavMenuRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
    /** The locations assigned to the menu. */
    locations?: string[]
    ;
    /** Whether to automatically add top level pages to this menu. */
    auto_add?: boolean;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/menus/(?P<id>[\d]+) route.
 */
export type DeleteNavMenuRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "client" object in the route /wp/v2/client.
 */
export type Client = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'client';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/client route.
 */
export type GetClientsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/client route.
 */
export type CreateClientRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/client/(?P<id>[\d]+) route.
 */
export type GetClientRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/client/(?P<id>[\d]+) route.
 */
export type UpdateClientRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/client/(?P<id>[\d]+) route.
 */
export type DeleteClientRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "industry" object in the route /wp/v2/industry.
 */
export type Industry = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'industry';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/industry route.
 */
export type GetIndustriesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/industry route.
 */
export type CreateIndustryRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/industry/(?P<id>[\d]+) route.
 */
export type GetIndustryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/industry/(?P<id>[\d]+) route.
 */
export type UpdateIndustryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/industry/(?P<id>[\d]+) route.
 */
export type DeleteIndustryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "service" object in the route /wp/v2/service.
 */
export type Service = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'service';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/service route.
 */
export type GetServicesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/service route.
 */
export type CreateServiceRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/service/(?P<id>[\d]+) route.
 */
export type GetServiceRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/service/(?P<id>[\d]+) route.
 */
export type UpdateServiceRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/service/(?P<id>[\d]+) route.
 */
export type DeleteServiceRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "technology" object in the route /wp/v2/technology.
 */
export type Technology = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'technology';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/technology route.
 */
export type GetTechnologiesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/technology route.
 */
export type CreateTechnologyRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/technology/(?P<id>[\d]+) route.
 */
export type GetTechnologyRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/technology/(?P<id>[\d]+) route.
 */
export type UpdateTechnologyRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/technology/(?P<id>[\d]+) route.
 */
export type DeleteTechnologyRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "custom-post-type" object in the route /wp/v2/custom-post-type.
 */
export type CustomPostType = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'custom-post-type';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/custom-post-type route.
 */
export type GetCustomPostTypesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/custom-post-type route.
 */
export type CreateCustomPostTypeRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/custom-post-type/(?P<id>[\d]+) route.
 */
export type GetCustomPostTypeRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/custom-post-type/(?P<id>[\d]+) route.
 */
export type UpdateCustomPostTypeRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/custom-post-type/(?P<id>[\d]+) route.
 */
export type DeleteCustomPostTypeRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "wp_block_category" object in the route /wp/v2/wp_block_category.
 */
export type WPBlockCategory = {
    /** Unique identifier for the term. */
    id: number;
    /** Number of published posts for the term. */
    count: number;
    /** HTML description of the term. */
    description: string;
    /** URL of the term. */
    link: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug: string;
    /** Type attribution for the term. */
    taxonomy: 'wp_block_category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/wp_block_category route.
 */
export type GetWPBlockCategoriesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: boolean;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: string[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/wp_block_category route.
 */
export type CreateWPBlockCategoryRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the GET /wp/v2/wp_block_category/(?P<id>[\d]+) route.
 */
export type GetWPBlockCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/wp_block_category/(?P<id>[\d]+) route.
 */
export type UpdateWPBlockCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {};
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/wp_block_category/(?P<id>[\d]+) route.
 */
export type DeleteWPBlockCategoryRequestArguments = {
    /** Unique identifier for the term. */
    id: number;
    /** Required to be true, as terms do not support trashing. */
    force?: boolean;
};
/**
 * Object type for the "user" object in the route /wp/v2/users.
 */
export type User = {
    /** Unique identifier for the user. */
    id: number;
    /** Login name for the user. */
    username: string;
    /** Display name for the user. */
    name: string;
    /** First name for the user. */
    first_name: string;
    /** Last name for the user. */
    last_name: string;
    /** The email address for the user. */
    email: string;
    /** URL of the user. */
    url: string;
    /** Description of the user. */
    description: string;
    /** Author URL of the user. */
    link: string;
    /** Locale for the user. */
    locale: '' | 'en_US';
    /** The nickname for the user. */
    nickname: string;
    /** An alphanumeric identifier for the user. */
    slug: string;
    /** Registration date for the user. */
    registered_date: string;
    /** Roles assigned to the user. */
    roles: string[]
    ;
    /** Password for the user (never included). */
    password: string;
    /** All capabilities assigned to the user. */
    capabilities: Record<string, unknown>;
    /** Any extra capabilities assigned to the user. */
    extra_capabilities: Record<string, unknown>;
    /** Avatar URLs for the user. */
    avatar_urls: {
        /** Avatar URL with image size of 24 pixels. */
        24: string;
        /** Avatar URL with image size of 48 pixels. */
        48: string;
        /** Avatar URL with image size of 96 pixels. */
        96: string;
    };
    /** Meta fields. */
    meta: {};
    /** The users simple local avatar */
    simple_local_avatar: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/me route.
 */
export type GetUsersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/users route.
 */
export type CreateUserRequestArguments = {
    /** Login name for the user. */
    username: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: '' | 'en_US';
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[]
    ;
    /** Password for the user (never included). */
    password: string;
    /** Meta fields. */
    meta?: {};
    /** The users simple local avatar */
    simple_local_avatar?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/(?P<id>[\d]+) route.
 */
export type GetUserRequestArguments = {
    /** Unique identifier for the user. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/users/me route.
 */
export type UpdateUserRequestArguments = {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: '' | 'en_US';
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[]
    ;
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {};
    /** The users simple local avatar */
    simple_local_avatar?: Record<string, unknown>;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/users/me route.
 */
export type DeleteUserRequestArguments = {
    /** Required to be true, as users do not support trashing. */
    force?: boolean;
    /** Reassign the deleted user's posts and links to this user ID. */
    reassign: number;
};
/**
 * Object type for the "application-password" object in the route /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords.
 */
export type ApplicationPassword = {
    /** The unique identifier for the application password. */
    uuid: string;
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id: string;
    /** The name of the application password. */
    name: string;
    /** The generated password. Only available after adding an application. */
    password: string;
    /** The GMT date the application password was created. */
    created: string;
    /** The GMT date the application password was last used. */
    last_used: string | null;
    /** The IP address the application password was last used by. */
    last_ip: string | null;
};
/**
 * Endpoint request arguments for the GET /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type GetApplicationPasswordRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the POST /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords route.
 */
export type CreateApplicationPasswordRequestArguments = {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type DeleteApplicationPasswordRequestArguments = {};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export type UpdateApplicationPasswordRequestArguments = {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name?: string;
};
/**
 * Object type for the "comment" object in the route /wp/v2/comments.
 */
export type Comment = {
    /** Unique identifier for the comment. */
    id: number;
    /** The ID of the user object, if author was a user. */
    author: number;
    /** Email address for the comment author. */
    author_email: string;
    /** IP address for the comment author. */
    author_ip: string;
    /** Display name for the comment author. */
    author_name: string;
    /** URL for the comment author. */
    author_url: string;
    /** User agent for the comment author. */
    author_user_agent: string;
    /** The content for the comment. */
    content: {
        /** Content for the comment, as it exists in the database. */
        raw: string;
        /** HTML content for the comment, transformed for display. */
        rendered: string;
    };
    /** The date the comment was published, in the site's timezone. */
    date: string;
    /** The date the comment was published, as GMT. */
    date_gmt: string;
    /** URL to the comment. */
    link: string;
    /** The ID for the parent of the comment. */
    parent: number;
    /** The ID of the associated post object. */
    post: number;
    /** State of the comment. */
    status: string;
    /** Type of the comment. */
    type: string;
    /** Avatar URLs for the comment author. */
    author_avatar_urls: {
        /** Avatar URL with image size of 24 pixels. */
        24: string;
        /** Avatar URL with image size of 48 pixels. */
        48: string;
        /** Avatar URL with image size of 96 pixels. */
        96: string;
    };
    /** Meta fields. */
    meta: {
        /** */
        assignees: number[]
        ;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/comments route.
 */
export type GetCommentsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to comments published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
    author?: number[]
    ;
    /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
    author_exclude?: number[]
    ;
    /** Limit result set to that from a specific author email. Requires authorization. */
    author_email?: string;
    /** Limit response to comments published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific IDs. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by comment attribute. */
    orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
    /** Limit result set to comments of specific parent IDs. */
    parent?: number[]
    ;
    /** Ensure result set excludes specific parent IDs. */
    parent_exclude?: number[]
    ;
    /** Limit result set to comments assigned to specific post IDs. */
    post?: number[]
    ;
    /** Limit result set to comments assigned a specific status. Requires authorization. */
    status?: string;
    /** Limit result set to comments assigned a specific type. Requires authorization. */
    type?: string;
    /** The password for the post if it is password protected. */
    password?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/comments route.
 */
export type CreateCommentRequestArguments = {
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: {
        /** Content for the comment, as it exists in the database. */
        raw: string;
        /** HTML content for the comment, transformed for display. */
        rendered: string;
    };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
};
/**
 * Endpoint request arguments for the GET /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type GetCommentRequestArguments = {
    /** Unique identifier for the comment. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the parent post of the comment (if the post is password protected). */
    password?: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type UpdateCommentRequestArguments = {
    /** Unique identifier for the comment. */
    id: number;
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: {
        /** Content for the comment, as it exists in the database. */
        raw: string;
        /** HTML content for the comment, transformed for display. */
        rendered: string;
    };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: {
        /** */
        assignees: number[]
        ;
    };
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/comments/(?P<id>[\d]+) route.
 */
export type DeleteCommentRequestArguments = {
    /** Unique identifier for the comment. */
    id: number;
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
    /** The password for the parent post of the comment (if the post is password protected). */
    password?: string;
};
/**
 * Object type for the "search-result" object in the route /wp/v2/search.
 */
export type SearchResult = {
    /** Unique identifier for the object. */
    id: number | string;
    /** The title for the object. */
    title: string;
    /** URL to the object. */
    url: string;
    /** Object type. */
    type: 'post' | 'term' | 'post-format';
    /** Object subtype. */
    subtype: 'post' | 'page' | 'case-study' | 'category' | 'post_tag' | 'client' | 'industry' | 'service' | 'technology' | 'custom-post-type';
};
/**
 * Endpoint request arguments for the GET /wp/v2/search route.
 */
export type GetSearchResultsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit results to items of an object type. */
    type?: 'post' | 'term' | 'post-format';
    /** Limit results to items of one or more object subtypes. */
    subtype?: 'post' | 'page' | 'case-study' | 'category' | 'post_tag' | 'client' | 'industry' | 'service' | 'technology' | 'custom-post-type' | 'any'[]
    ;
};
/**
 * Object type for the "rendered-block" object in the route /wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+).
 */
export type RenderedBlock = {
    /** The rendered block. */
    rendered: string;
};
/**
 * Object type for the "block-type" object in the route /wp/v2/block-types.
 */
export type BlockType = {
    /** Version of block API. */
    api_version: number;
    /** Title of block type. */
    title: string;
    /** Unique name identifying the block type. */
    name: string;
    /** Description of block type. */
    description: string;
    /** Icon of block type. */
    icon: string | null;
    /** Block attributes. */
    attributes: {} | null;
    /** Context provided by blocks of this type. */
    provides_context: {};
    /** Context values inherited by blocks of this type. */
    uses_context: string[]
    ;
    /** Block supports. */
    supports: {};
    /** Block category. */
    category: string | null;
    /** Is the block dynamically rendered. */
    is_dynamic: boolean;
    /** Editor script handle. */
    editor_script: string | null;
    /** Public facing and editor script handle. */
    script: string | null;
    /** Public facing script handle. */
    view_script: string | null;
    /** Editor style handle. */
    editor_style: string | null;
    /** Public facing and editor style handle. */
    style: string | null;
    /** Block style variations. */
    styles: {
        /** Unique name identifying the style. */
        name: string;
        /** The human-readable label for the style. */
        label: string;
        /** Inline CSS code that registers the CSS class required for the style. */
        inline_style: string;
        /** Contains the handle that defines the block style. */
        style_handle: string;
    }[];
    /** Block variations. */
    variations: {
        /** The unique and machine-readable name. */
        name: string;
        /** A human-readable variation title. */
        title: string;
        /** A detailed variation description. */
        description: string;
        /** Block category. */
        category: string | null;
        /** Icon of block type. */
        icon: string | null;
        /** Indicates whether the current variation is the default one. */
        isDefault: boolean;
        /** The initial values for attributes. */
        attributes: Record<string, unknown>;
        /** The list of inner blocks used in the example. */
        innerBlocks: {
            /** The name of the inner block. */
            name: string;
            /** The attributes of the inner block. */
            attributes: Record<string, unknown>;
            /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
            innerBlocks: unknown[];
        }[];
        /** Block example. */
        example: {
            /** The attributes used in the example. */
            attributes: Record<string, unknown>;
            /** The list of inner blocks used in the example. */
            innerBlocks: {
                /** The name of the inner block. */
                name: string;
                /** The attributes of the inner block. */
                attributes: Record<string, unknown>;
                /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
                innerBlocks: unknown[];
            }[];
        } | null;
        /** The list of scopes where the variation is applicable. When not provided, it assumes all available scopes. */
        scope: 'block' | 'inserter' | 'transform'[]
        | null;
        /** Block keywords. */
        keywords: string[]
        ;
    }[];
    /** Public text domain. */
    textdomain: string | null;
    /** Parent blocks. */
    parent: string[]
    | null;
    /** Block keywords. */
    keywords: string[]
    ;
    /** Block example. */
    example: {
        /** The attributes used in the example. */
        attributes: Record<string, unknown>;
        /** The list of inner blocks used in the example. */
        innerBlocks: {
            /** The name of the inner block. */
            name: string;
            /** The attributes of the inner block. */
            attributes: Record<string, unknown>;
            /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
            innerBlocks: unknown[];
        }[];
    } | null;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-types route.
 */
export type GetBlockTypesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Block namespace. */
    namespace?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+) route.
 */
export type GetBlockTypeRequestArguments = {
    /** Block name. */
    name?: string;
    /** Block namespace. */
    namespace: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Object type for the "wp_global_styles" object in the route /wp/v2/global-styles/(?P<id>[\/\w-]+).
 */
export type WPGlobalStyles = {
    /** ID of global styles config. */
    id: string;
    /** Global styles. */
    styles: Record<string, unknown>;
    /** Global settings. */
    settings: Record<string, unknown>;
    /** Title of the global styles variation. */
    title: {
        /** Title for the global styles variation, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    } | string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/global-styles/(?P<id>[\/\w-]+) route.
 */
export type GetWPGlobalStylesRequestArguments = {
    /** The id of a template */
    id: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/global-styles/(?P<id>[\/\w-]+) route.
 */
export type UpdateWPGlobalStylesRequestArguments = {
    /** Global styles. */
    styles?: Record<string, unknown>;
    /** Global settings. */
    settings?: Record<string, unknown>;
    /** Title of the global styles variation. */
    title?: {
        /** Title for the global styles variation, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
    } | string;
};
/**
 * Object type for the "settings" object in the route /wp/v2/settings.
 */
export type Settings = {
    /** Google Search Console verification meta tag */
    altis_google_site_verification: string;
    /** Site title. */
    title: string;
    /** Site tagline. */
    description: string;
    /** A city in the same timezone as you. */
    timezone: string;
    /** A date format for all date strings. */
    date_format: string;
    /** A time format for all time strings. */
    time_format: string;
    /** A day number of the week that the week should start on. */
    start_of_week: number;
    /** WordPress locale code. */
    language: string;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    use_smilies: boolean;
    /** Default post category. */
    default_category: number;
    /** Default post format. */
    default_post_format: string;
    /** Blog pages show at most. */
    posts_per_page: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status: 'open' | 'closed';
    /** Allow people to submit comments on new posts. */
    default_comment_status: 'open' | 'closed';
    /** Site logo. */
    site_logo: number;
    /** Site icon. */
    site_icon: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/settings route.
 */
export type GetSettingsRequestArguments = {};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/settings route.
 */
export type UpdateSettingsRequestArguments = {
    /** Google Search Console verification meta tag */
    altis_google_site_verification?: string;
    /** Site title. */
    title?: string;
    /** Site tagline. */
    description?: string;
    /** A city in the same timezone as you. */
    timezone?: string;
    /** A date format for all date strings. */
    date_format?: string;
    /** A time format for all time strings. */
    time_format?: string;
    /** A day number of the week that the week should start on. */
    start_of_week?: number;
    /** WordPress locale code. */
    language?: string;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    use_smilies?: boolean;
    /** Default post category. */
    default_category?: number;
    /** Default post format. */
    default_post_format?: string;
    /** Blog pages show at most. */
    posts_per_page?: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status?: 'open' | 'closed';
    /** Allow people to submit comments on new posts. */
    default_comment_status?: 'open' | 'closed';
    /** Site logo. */
    site_logo?: number;
    /** Site icon. */
    site_icon?: number;
};
/**
 * Object type for the "theme" object in the route /wp/v2/themes.
 */
export type Theme = {
    /** The theme's stylesheet. This uniquely identifies the theme. */
    stylesheet: string;
    /** The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet. */
    template: string;
    /** The theme author. */
    author: {
        /** The theme author's name, as found in the theme header. */
        raw: string;
        /** HTML for the theme author, transformed for display. */
        rendered: string;
    };
    /** The website of the theme author. */
    author_uri: {
        /** The website of the theme author, as found in the theme header. */
        raw: string;
        /** The website of the theme author, transformed for display. */
        rendered: string;
    };
    /** A description of the theme. */
    description: {
        /** The theme description, as found in the theme header. */
        raw: string;
        /** The theme description, transformed for display. */
        rendered: string;
    };
    /** The name of the theme. */
    name: {
        /** The theme name, as found in the theme header. */
        raw: string;
        /** The theme name, transformed for display. */
        rendered: string;
    };
    /** The minimum PHP version required for the theme to work. */
    requires_php: string;
    /** The minimum WordPress version required for the theme to work. */
    requires_wp: string;
    /** The theme's screenshot URL. */
    screenshot: string;
    /** Tags indicating styles and features of the theme. */
    tags: {
        /** The theme tags, as found in the theme header. */
        raw: string[]
        ;
        /** The theme tags, transformed for display. */
        rendered: string;
    };
    /** The theme's text domain. */
    textdomain: string;
    /** Features supported by this theme. */
    theme_supports: {
        /** Whether theme opts in to wide alignment CSS class. */
        'align-wide': boolean;
        /** Whether posts and comments RSS feed links are added to head. */
        'automatic-feed-links': boolean;
        /** Custom background if defined by the theme. */
        'custom-background': boolean | {
            /** */
            'default-image': string;
            /** */
            'default-preset': 'default' | 'fill' | 'fit' | 'repeat' | 'custom';
            /** */
            'default-position-x': 'left' | 'center' | 'right';
            /** */
            'default-position-y': 'left' | 'center' | 'right';
            /** */
            'default-size': 'auto' | 'contain' | 'cover';
            /** */
            'default-repeat': 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat';
            /** */
            'default-attachment': 'scroll' | 'fixed';
            /** */
            'default-color': string;
        };
        /** Custom header if defined by the theme. */
        'custom-header': boolean | {
            /** */
            'default-image': string;
            /** */
            'random-default': boolean;
            /** */
            width: number;
            /** */
            height: number;
            /** */
            'flex-height': boolean;
            /** */
            'flex-width': boolean;
            /** */
            'default-text-color': string;
            /** */
            'header-text': boolean;
            /** */
            uploads: boolean;
            /** */
            video: boolean;
        };
        /** Custom logo if defined by the theme. */
        'custom-logo': boolean | {
            /** */
            width: number;
            /** */
            height: number;
            /** */
            'flex-width': boolean;
            /** */
            'flex-height': boolean;
            /** */
            'header-text': string[]
            ;
            /** */
            'unlink-homepage-logo': boolean;
        };
        /** Whether the theme enables Selective Refresh for Widgets being managed with the Customizer. */
        'customize-selective-refresh-widgets': boolean;
        /** Whether theme opts in to the dark editor style UI. */
        'dark-editor-style': boolean;
        /** Whether the theme disables custom colors. */
        'disable-custom-colors': boolean;
        /** Whether the theme disables custom font sizes. */
        'disable-custom-font-sizes': boolean;
        /** Whether the theme disables custom gradients. */
        'disable-custom-gradients': boolean;
        /** Custom color palette if defined by the theme. */
        'editor-color-palette': boolean | {
            /** */
            name: string;
            /** */
            slug: string;
            /** */
            color: string;
        }[];
        /** Custom font sizes if defined by the theme. */
        'editor-font-sizes': boolean | {
            /** */
            name: string;
            /** */
            size: number;
            /** */
            slug: string;
        }[];
        /** Custom gradient presets if defined by the theme. */
        'editor-gradient-presets': boolean | {
            /** */
            name: string;
            /** */
            gradient: string;
            /** */
            slug: string;
        }[];
        /** Whether theme opts in to the editor styles CSS wrapper. */
        'editor-styles': boolean;
        /** Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption. */
        html5: boolean |
        'search-form' | 'comment-form' | 'comment-list' | 'gallery' | 'caption' | 'script' | 'style'[]
        ;
        /** Post formats supported. */
        formats: string[]
        ;
        /** The post types that support thumbnails or true if all post types are supported. */
        'post-thumbnails': boolean |
        string[]
        ;
        /** Whether the theme supports responsive embedded content. */
        'responsive-embeds': boolean;
        /** Whether the theme can manage the document title tag. */
        'title-tag': boolean;
        /** Whether theme opts in to default WordPress block styles for viewing. */
        'wp-block-styles': boolean;
    };
    /** The URI of the theme's webpage. */
    theme_uri: {
        /** The URI of the theme's webpage, as found in the theme header. */
        raw: string;
        /** The URI of the theme's webpage, transformed for display. */
        rendered: string;
    };
    /** The theme's current version. */
    version: string;
    /** A named status for the theme. */
    status: 'inactive' | 'active';
};
/**
 * Endpoint request arguments for the GET /wp/v2/themes route.
 */
export type GetThemesRequestArguments = {
    /** Limit result set to themes assigned one or more statuses. */
    status?: 'active' | 'inactive'[]
    ;
};
/**
 * Endpoint request arguments for the GET /wp/v2/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?) route.
 */
export type GetThemeRequestArguments = {
    /** The theme's stylesheet. This uniquely identifies the theme. */
    stylesheet: string;
};
/**
 * Object type for the "plugin" object in the route /wp/v2/plugins.
 */
export type Plugin = {
    /** The plugin file. */
    plugin: string;
    /** The plugin activation status. */
    status: 'inactive' | 'active' | 'network-active';
    /** The plugin name. */
    name: string;
    /** The plugin's website address. */
    plugin_uri: string;
    /** The plugin author. */
    author: Record<string, unknown>;
    /** Plugin author's website address. */
    author_uri: string;
    /** The plugin description. */
    description: {
        /** The raw plugin description. */
        raw: string;
        /** The plugin description formatted for display. */
        rendered: string;
    };
    /** The plugin version number. */
    version: string;
    /** Whether the plugin can only be activated network-wide. */
    network_only: boolean;
    /** Minimum required version of WordPress. */
    requires_wp: string;
    /** Minimum required version of PHP. */
    requires_php: string;
    /** The plugin's text domain. */
    textdomain: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/plugins route.
 */
export type GetPluginsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit results to those matching a string. */
    search?: string;
    /** Limits results to plugins with the given status. */
    status?: 'inactive' | 'active' | 'network-active'[]
    ;
};
/**
 * Endpoint request arguments for the POST /wp/v2/plugins route.
 */
export type CreatePluginRequestArguments = {
    /** WordPress.org plugin directory slug. */
    slug: string;
    /** The plugin activation status. */
    status?: 'inactive' | 'active' | 'network-active';
};
/**
 * Endpoint request arguments for the GET /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type GetPluginRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** */
    plugin: string;
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type UpdatePluginRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** */
    plugin: string;
    /** The plugin activation status. */
    status?: 'inactive' | 'active' | 'network-active';
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export type DeletePluginRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** */
    plugin: string;
};
/**
 * Object type for the "sidebar" object in the route /wp/v2/sidebars.
 */
export type Sidebar = {
    /** ID of sidebar. */
    id: string;
    /** Unique name identifying the sidebar. */
    name: string;
    /** Description of sidebar. */
    description: string;
    /** Extra CSS class to assign to the sidebar in the Widgets interface. */
    class: string;
    /** HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element. */
    before_widget: string;
    /** HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element. */
    after_widget: string;
    /** HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element. */
    before_title: string;
    /** HTML content to append to the sidebar title when displayed. Default is a closing h2 element. */
    after_title: string;
    /** Status of sidebar. */
    status: 'active' | 'inactive';
    /** Nested widgets. */
    widgets: Record<string, unknown> | string[];
};
/**
 * Endpoint request arguments for the GET /wp/v2/sidebars route.
 */
export type GetSidebarsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the GET /wp/v2/sidebars/(?P<id>[\w-]+) route.
 */
export type GetSidebarRequestArguments = {
    /** The id of a registered sidebar */
    id: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/sidebars/(?P<id>[\w-]+) route.
 */
export type UpdateSidebarRequestArguments = {
    /** Nested widgets. */
    widgets?: Record<string, unknown> | string[];
};
/**
 * Object type for the "widget-type" object in the route /wp/v2/widget-types.
 */
export type WidgetType = {
    /** Unique slug identifying the widget type. */
    id: string;
    /** Human-readable name identifying the widget type. */
    name: string;
    /** Description of the widget. */
    description: string;
    /** Whether the widget supports multiple instances */
    is_multi: boolean;
    /** Class name */
    classname: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widget-types route.
 */
export type GetWidgetTypesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the GET /wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+) route.
 */
export type GetWidgetTypeRequestArguments = {
    /** The widget type id. */
    id: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Object type for the "widget" object in the route /wp/v2/widgets.
 */
export type Widget = {
    /** Unique identifier for the widget. */
    id: string;
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base: string;
    /** The sidebar the widget belongs to. */
    sidebar: string;
    /** HTML representation of the widget. */
    rendered: string;
    /** HTML representation of the widget admin form. */
    rendered_form: string;
    /** Instance settings of the widget, if supported. */
    instance: {
        /** Base64 encoded representation of the instance settings. */
        encoded: string;
        /** Cryptographic hash of the instance settings. */
        hash: string;
        /** Unencoded instance settings, if supported. */
        raw: Record<string, unknown>;
    };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widgets route.
 */
export type GetWidgetsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The sidebar to return widgets for. */
    sidebar?: string;
};
/**
 * Endpoint request arguments for the POST /wp/v2/widgets route.
 */
export type CreateWidgetRequestArguments = {
    /** Unique identifier for the widget. */
    id?: string;
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar: string;
    /** Instance settings of the widget, if supported. */
    instance?: {
        /** Base64 encoded representation of the instance settings. */
        encoded: string;
        /** Cryptographic hash of the instance settings. */
        hash: string;
        /** Unencoded instance settings, if supported. */
        raw: Record<string, unknown>;
    };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type GetWidgetRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the PATCH,POST,PUT /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type UpdateWidgetRequestArguments = {
    /** Unique identifier for the widget. */
    id: string;
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar?: string;
    /** Instance settings of the widget, if supported. */
    instance?: {
        /** Base64 encoded representation of the instance settings. */
        encoded: string;
        /** Cryptographic hash of the instance settings. */
        hash: string;
        /** Unencoded instance settings, if supported. */
        raw: Record<string, unknown>;
    };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
};
/**
 * Endpoint request arguments for the DELETE /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export type DeleteWidgetRequestArguments = {
    /** Whether to force removal of the widget, or move it to the inactive sidebar. */
    force?: boolean;
};
/**
 * Object type for the "block-directory-item" object in the route /wp/v2/block-directory/search.
 */
export type BlockDirectoryItem = {
    /** The block name, in namespace/block-name format. */
    name: string;
    /** The block title, in human readable format. */
    title: string;
    /** A short description of the block, in human readable format. */
    description: string;
    /** The block slug. */
    id: string;
    /** The star rating of the block. */
    rating: number;
    /** The number of ratings. */
    rating_count: number;
    /** The number sites that have activated this block. */
    active_installs: string;
    /** The average rating of blocks published by the same author. */
    author_block_rating: number;
    /** The number of blocks published by the same author. */
    author_block_count: number;
    /** The WordPress.org username of the block author. */
    author: string;
    /** The block icon. */
    icon: string;
    /** The date when the block was last updated. */
    last_updated: string;
    /** The date when the block was last updated, in fuzzy human readable format. */
    humanized_updated: string;
};
/**
 * Endpoint request arguments for the GET /wp/v2/block-directory/search route.
 */
export type GetBlockDirectoryItemsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit result set to blocks matching the search term. */
    term: string;
};
/**
 * Object type for the "pattern-directory-item" object in the route /wp/v2/pattern-directory/patterns.
 */
export type PatternDirectoryItem = {
    /** The pattern ID. */
    id: number;
    /** The pattern title, in human readable format. */
    title: string;
    /** The pattern content. */
    content: string;
    /** The pattern's category slugs. */
    categories: string[]
    ;
    /** The pattern's keyword slugs. */
    keywords: string[]
    ;
    /** A description of the pattern. */
    description: string;
    /** The preferred width of the viewport when previewing a pattern, in pixels. */
    viewport_width: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/pattern-directory/patterns route.
 */
export type GetPatternDirectoryItemsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed';
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit results to those matching a category ID. */
    category?: number;
    /** Limit results to those matching a keyword ID. */
    keyword?: number;
};
/**
 * Object type for the "menu-location" object in the route /wp/v2/menu-locations.
 */
export type MenuLocation = {
    /** The name of the menu location. */
    name: string;
    /** The description of the menu location. */
    description: string;
    /** The ID of the assigned menu. */
    menu: number;
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-locations route.
 */
export type GetMenuLocationsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
/**
 * Endpoint request arguments for the GET /wp/v2/menu-locations/(?P<location>[\w-]+) route.
 */
export type GetMenuLocationRequestArguments = {
    /** An alphanumeric identifier for the menu location. */
    location: string;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};

/**
 * Get posts objects from the /wp/v2/posts route.
 */
export async function getPosts(args?: GetPostsRequestArguments): Promise<Post[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/posts');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Post[];
    return request;
}

/**
 * Create a post object at the /wp/v2/posts route.
 */
export async function createPost(properties: CreatePostRequestArguments): Promise<Post> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/posts');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Post;
    return response;
}

/**
 * Get a post object from the /wp/v2/posts/(?P<id>[\d]+) route.
 */
export async function getPost(args?: GetPostRequestArguments): Promise<Post> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Post[];
    return request;
}

/**
 * Update a post object from the /wp/v2/posts/(?P<id>[\d]+) route.
 */
export async function updatePost(args?: UpdatePostRequestArguments): Promise<Post> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Post[];
    return request;
}

/** Delete a post object from the /wp/v2/posts/(?P<id>[\d]+) route. */
export async function deletePost(args?: DeletePostRequestArguments): Promise<Post> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Post[];
    return request;
}

/**
 * Get pages objects from the /wp/v2/pages route.
 */
export async function getPages(args?: GetPagesRequestArguments): Promise<Page[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/pages');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Page[];
    return request;
}

/**
 * Create a page object at the /wp/v2/pages route.
 */
export async function createPage(properties: CreatePageRequestArguments): Promise<Page> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/pages');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Page;
    return response;
}

/**
 * Get a page object from the /wp/v2/pages/(?P<id>[\d]+) route.
 */
export async function getPage(args?: GetPageRequestArguments): Promise<Page> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Page[];
    return request;
}

/**
 * Update a page object from the /wp/v2/pages/(?P<id>[\d]+) route.
 */
export async function updatePage(args?: UpdatePageRequestArguments): Promise<Page> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Page[];
    return request;
}

/** Delete a page object from the /wp/v2/pages/(?P<id>[\d]+) route. */
export async function deletePage(args?: DeletePageRequestArguments): Promise<Page> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Page[];
    return request;
}

/**
 * Get attachments objects from the /wp/v2/media route.
 */
export async function getAttachments(args?: GetAttachmentsRequestArguments): Promise<Attachment[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/media');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Attachment[];
    return request;
}

/**
 * Create a attachment object at the /wp/v2/media route.
 */
export async function createAttachment(properties: CreateAttachmentRequestArguments): Promise<Attachment> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/media');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Attachment;
    return response;
}

/**
 * Get a attachment object from the /wp/v2/media/(?P<id>[\d]+) route.
 */
export async function getAttachment(args?: GetAttachmentRequestArguments): Promise<Attachment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Attachment[];
    return request;
}

/**
 * Update a attachment object from the /wp/v2/media/(?P<id>[\d]+) route.
 */
export async function updateAttachment(args?: UpdateAttachmentRequestArguments): Promise<Attachment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Attachment[];
    return request;
}

/** Delete a attachment object from the /wp/v2/media/(?P<id>[\d]+) route. */
export async function deleteAttachment(args?: DeleteAttachmentRequestArguments): Promise<Attachment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Attachment[];
    return request;
}

/**
 * Get nav_menu_items objects from the /wp/v2/menu-items route.
 */
export async function getNavMenuItems(args?: GetNavMenuItemsRequestArguments): Promise<NavMenuItem[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/menu-items');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenuItem[];
    return request;
}

/**
 * Create a nav_menu_item object at the /wp/v2/menu-items route.
 */
export async function createNavMenuItem(properties: CreateNavMenuItemRequestArguments): Promise<NavMenuItem> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/menu-items');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as NavMenuItem;
    return response;
}

/**
 * Get a nav_menu_item object from the /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export async function getNavMenuItem(args?: GetNavMenuItemRequestArguments): Promise<NavMenuItem> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenuItem[];
    return request;
}

/**
 * Update a nav_menu_item object from the /wp/v2/menu-items/(?P<id>[\d]+) route.
 */
export async function updateNavMenuItem(args?: UpdateNavMenuItemRequestArguments): Promise<NavMenuItem> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenuItem[];
    return request;
}

/** Delete a nav_menu_item object from the /wp/v2/menu-items/(?P<id>[\d]+) route. */
export async function deleteNavMenuItem(args?: DeleteNavMenuItemRequestArguments): Promise<NavMenuItem> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenuItem[];
    return request;
}

/**
 * Get wp_blocks objects from the /wp/v2/blocks route.
 */
export async function getWPBlocks(args?: GetWPBlocksRequestArguments): Promise<WPBlock[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/blocks');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlock[];
    return request;
}

/**
 * Create a wp_block object at the /wp/v2/blocks route.
 */
export async function createWPBlock(properties: CreateWPBlockRequestArguments): Promise<WPBlock> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/blocks');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as WPBlock;
    return response;
}

/**
 * Get a wp_block object from the /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export async function getWPBlock(args?: GetWPBlockRequestArguments): Promise<WPBlock> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlock[];
    return request;
}

/**
 * Update a wp_block object from the /wp/v2/blocks/(?P<id>[\d]+) route.
 */
export async function updateWPBlock(args?: UpdateWPBlockRequestArguments): Promise<WPBlock> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlock[];
    return request;
}

/** Delete a wp_block object from the /wp/v2/blocks/(?P<id>[\d]+) route. */
export async function deleteWPBlock(args?: DeleteWPBlockRequestArguments): Promise<WPBlock> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlock[];
    return request;
}

/**
 * Get wp_templates objects from the /wp/v2/templates route.
 */
export async function getWPTemplates(args?: GetWPTemplatesRequestArguments): Promise<WPTemplate[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/templates');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplate[];
    return request;
}

/**
 * Create a wp_template object at the /wp/v2/templates route.
 */
export async function createWPTemplate(properties: CreateWPTemplateRequestArguments): Promise<WPTemplate> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/templates');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as WPTemplate;
    return response;
}

/**
 * Get a wp_template object from the /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export async function getWPTemplate(args?: GetWPTemplateRequestArguments): Promise<WPTemplate> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplate[];
    return request;
}

/**
 * Update a wp_template object from the /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export async function updateWPTemplate(args?: UpdateWPTemplateRequestArguments): Promise<WPTemplate> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplate[];
    return request;
}

/** Delete a wp_template object from the /wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route. */
export async function deleteWPTemplate(args?: DeleteWPTemplateRequestArguments): Promise<WPTemplate> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplate[];
    return request;
}

/**
 * Get wp_template_parts objects from the /wp/v2/template-parts route.
 */
export async function getWPTemplateParts(args?: GetWPTemplatePartsRequestArguments): Promise<WPTemplatePart[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/template-parts');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplatePart[];
    return request;
}

/**
 * Create a wp_template_part object at the /wp/v2/template-parts route.
 */
export async function createWPTemplatePart(properties: CreateWPTemplatePartRequestArguments): Promise<WPTemplatePart> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/template-parts');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as WPTemplatePart;
    return response;
}

/**
 * Get a wp_template_part object from the /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export async function getWPTemplatePart(args?: GetWPTemplatePartRequestArguments): Promise<WPTemplatePart> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplatePart[];
    return request;
}

/**
 * Update a wp_template_part object from the /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route.
 */
export async function updateWPTemplatePart(args?: UpdateWPTemplatePartRequestArguments): Promise<WPTemplatePart> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplatePart[];
    return request;
}

/** Delete a wp_template_part object from the /wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w-]+) route. */
export async function deleteWPTemplatePart(args?: DeleteWPTemplatePartRequestArguments): Promise<WPTemplatePart> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPTemplatePart[];
    return request;
}

/**
 * Get wp_navigations objects from the /wp/v2/navigation route.
 */
export async function getWPNavigations(args?: GetWPNavigationsRequestArguments): Promise<WPNavigation[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/navigation');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPNavigation[];
    return request;
}

/**
 * Create a wp_navigation object at the /wp/v2/navigation route.
 */
export async function createWPNavigation(properties: CreateWPNavigationRequestArguments): Promise<WPNavigation> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/navigation');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as WPNavigation;
    return response;
}

/**
 * Get a wp_navigation object from the /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export async function getWPNavigation(args?: GetWPNavigationRequestArguments): Promise<WPNavigation> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPNavigation[];
    return request;
}

/**
 * Update a wp_navigation object from the /wp/v2/navigation/(?P<id>[\d]+) route.
 */
export async function updateWPNavigation(args?: UpdateWPNavigationRequestArguments): Promise<WPNavigation> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPNavigation[];
    return request;
}

/** Delete a wp_navigation object from the /wp/v2/navigation/(?P<id>[\d]+) route. */
export async function deleteWPNavigation(args?: DeleteWPNavigationRequestArguments): Promise<WPNavigation> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPNavigation[];
    return request;
}

/**
 * Get case-studies objects from the /wp/v2/case-study route.
 */
export async function getCaseStudies(args?: GetCaseStudiesRequestArguments): Promise<CaseStudy[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/case-study');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CaseStudy[];
    return request;
}

/**
 * Create a case-study object at the /wp/v2/case-study route.
 */
export async function createCaseStudy(properties: CreateCaseStudyRequestArguments): Promise<CaseStudy> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/case-study');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as CaseStudy;
    return response;
}

/**
 * Get a case-study object from the /wp/v2/case-study/(?P<id>[\d]+) route.
 */
export async function getCaseStudy(args?: GetCaseStudyRequestArguments): Promise<CaseStudy> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CaseStudy[];
    return request;
}

/**
 * Update a case-study object from the /wp/v2/case-study/(?P<id>[\d]+) route.
 */
export async function updateCaseStudy(args?: UpdateCaseStudyRequestArguments): Promise<CaseStudy> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CaseStudy[];
    return request;
}

/** Delete a case-study object from the /wp/v2/case-study/(?P<id>[\d]+) route. */
export async function deleteCaseStudy(args?: DeleteCaseStudyRequestArguments): Promise<CaseStudy> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CaseStudy[];
    return request;
}

/**
 * Get curated_archives objects from the /wp/v2/curated_archive route.
 */
export async function getCuratedArchives(args?: GetCuratedArchivesRequestArguments): Promise<CuratedArchive[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/curated_archive');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CuratedArchive[];
    return request;
}

/**
 * Create a curated_archive object at the /wp/v2/curated_archive route.
 */
export async function createCuratedArchive(properties: CreateCuratedArchiveRequestArguments): Promise<CuratedArchive> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/curated_archive');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as CuratedArchive;
    return response;
}

/**
 * Get a curated_archive object from the /wp/v2/curated_archive/(?P<id>[\d]+) route.
 */
export async function getCuratedArchive(args?: GetCuratedArchiveRequestArguments): Promise<CuratedArchive> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CuratedArchive[];
    return request;
}

/**
 * Update a curated_archive object from the /wp/v2/curated_archive/(?P<id>[\d]+) route.
 */
export async function updateCuratedArchive(args?: UpdateCuratedArchiveRequestArguments): Promise<CuratedArchive> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CuratedArchive[];
    return request;
}

/** Delete a curated_archive object from the /wp/v2/curated_archive/(?P<id>[\d]+) route. */
export async function deleteCuratedArchive(args?: DeleteCuratedArchiveRequestArguments): Promise<CuratedArchive> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CuratedArchive[];
    return request;
}

/**
 * Get categories objects from the /wp/v2/categories route.
 */
export async function getCategories(args?: GetCategoriesRequestArguments): Promise<Category[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/categories');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Category[];
    return request;
}

/**
 * Create a category object at the /wp/v2/categories route.
 */
export async function createCategory(properties: CreateCategoryRequestArguments): Promise<Category> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/categories');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Category;
    return response;
}

/**
 * Get a category object from the /wp/v2/categories/(?P<id>[\d]+) route.
 */
export async function getCategory(args?: GetCategoryRequestArguments): Promise<Category> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Category[];
    return request;
}

/**
 * Update a category object from the /wp/v2/categories/(?P<id>[\d]+) route.
 */
export async function updateCategory(args?: UpdateCategoryRequestArguments): Promise<Category> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Category[];
    return request;
}

/** Delete a category object from the /wp/v2/categories/(?P<id>[\d]+) route. */
export async function deleteCategory(args?: DeleteCategoryRequestArguments): Promise<Category> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Category[];
    return request;
}

/**
 * Get tags objects from the /wp/v2/tags route.
 */
export async function getTags(args?: GetTagsRequestArguments): Promise<Tag[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/tags');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Tag[];
    return request;
}

/**
 * Create a tag object at the /wp/v2/tags route.
 */
export async function createTag(properties: CreateTagRequestArguments): Promise<Tag> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/tags');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Tag;
    return response;
}

/**
 * Get a tag object from the /wp/v2/tags/(?P<id>[\d]+) route.
 */
export async function getTag(args?: GetTagRequestArguments): Promise<Tag> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Tag[];
    return request;
}

/**
 * Update a tag object from the /wp/v2/tags/(?P<id>[\d]+) route.
 */
export async function updateTag(args?: UpdateTagRequestArguments): Promise<Tag> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Tag[];
    return request;
}

/** Delete a tag object from the /wp/v2/tags/(?P<id>[\d]+) route. */
export async function deleteTag(args?: DeleteTagRequestArguments): Promise<Tag> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Tag[];
    return request;
}

/**
 * Get nav_menus objects from the /wp/v2/menus route.
 */
export async function getNavMenus(args?: GetNavMenusRequestArguments): Promise<NavMenu[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/menus');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenu[];
    return request;
}

/**
 * Create a nav_menu object at the /wp/v2/menus route.
 */
export async function createNavMenu(properties: CreateNavMenuRequestArguments): Promise<NavMenu> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/menus');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as NavMenu;
    return response;
}

/**
 * Get a nav_menu object from the /wp/v2/menus/(?P<id>[\d]+) route.
 */
export async function getNavMenu(args?: GetNavMenuRequestArguments): Promise<NavMenu> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenu[];
    return request;
}

/**
 * Update a nav_menu object from the /wp/v2/menus/(?P<id>[\d]+) route.
 */
export async function updateNavMenu(args?: UpdateNavMenuRequestArguments): Promise<NavMenu> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenu[];
    return request;
}

/** Delete a nav_menu object from the /wp/v2/menus/(?P<id>[\d]+) route. */
export async function deleteNavMenu(args?: DeleteNavMenuRequestArguments): Promise<NavMenu> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as NavMenu[];
    return request;
}

/**
 * Get clients objects from the /wp/v2/client route.
 */
export async function getClients(args?: GetClientsRequestArguments): Promise<Client[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/client');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Client[];
    return request;
}

/**
 * Create a client object at the /wp/v2/client route.
 */
export async function createClient(properties: CreateClientRequestArguments): Promise<Client> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/client');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Client;
    return response;
}

/**
 * Get a client object from the /wp/v2/client/(?P<id>[\d]+) route.
 */
export async function getClient(args?: GetClientRequestArguments): Promise<Client> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Client[];
    return request;
}

/**
 * Update a client object from the /wp/v2/client/(?P<id>[\d]+) route.
 */
export async function updateClient(args?: UpdateClientRequestArguments): Promise<Client> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Client[];
    return request;
}

/** Delete a client object from the /wp/v2/client/(?P<id>[\d]+) route. */
export async function deleteClient(args?: DeleteClientRequestArguments): Promise<Client> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Client[];
    return request;
}

/**
 * Get industries objects from the /wp/v2/industry route.
 */
export async function getIndustries(args?: GetIndustriesRequestArguments): Promise<Industry[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/industry');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Industry[];
    return request;
}

/**
 * Create a industry object at the /wp/v2/industry route.
 */
export async function createIndustry(properties: CreateIndustryRequestArguments): Promise<Industry> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/industry');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Industry;
    return response;
}

/**
 * Get a industry object from the /wp/v2/industry/(?P<id>[\d]+) route.
 */
export async function getIndustry(args?: GetIndustryRequestArguments): Promise<Industry> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Industry[];
    return request;
}

/**
 * Update a industry object from the /wp/v2/industry/(?P<id>[\d]+) route.
 */
export async function updateIndustry(args?: UpdateIndustryRequestArguments): Promise<Industry> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Industry[];
    return request;
}

/** Delete a industry object from the /wp/v2/industry/(?P<id>[\d]+) route. */
export async function deleteIndustry(args?: DeleteIndustryRequestArguments): Promise<Industry> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Industry[];
    return request;
}

/**
 * Get services objects from the /wp/v2/service route.
 */
export async function getServices(args?: GetServicesRequestArguments): Promise<Service[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/service');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Service[];
    return request;
}

/**
 * Create a service object at the /wp/v2/service route.
 */
export async function createService(properties: CreateServiceRequestArguments): Promise<Service> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/service');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Service;
    return response;
}

/**
 * Get a service object from the /wp/v2/service/(?P<id>[\d]+) route.
 */
export async function getService(args?: GetServiceRequestArguments): Promise<Service> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Service[];
    return request;
}

/**
 * Update a service object from the /wp/v2/service/(?P<id>[\d]+) route.
 */
export async function updateService(args?: UpdateServiceRequestArguments): Promise<Service> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Service[];
    return request;
}

/** Delete a service object from the /wp/v2/service/(?P<id>[\d]+) route. */
export async function deleteService(args?: DeleteServiceRequestArguments): Promise<Service> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Service[];
    return request;
}

/**
 * Get technologies objects from the /wp/v2/technology route.
 */
export async function getTechnologies(args?: GetTechnologiesRequestArguments): Promise<Technology[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/technology');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Technology[];
    return request;
}

/**
 * Create a technology object at the /wp/v2/technology route.
 */
export async function createTechnology(properties: CreateTechnologyRequestArguments): Promise<Technology> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/technology');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Technology;
    return response;
}

/**
 * Get a technology object from the /wp/v2/technology/(?P<id>[\d]+) route.
 */
export async function getTechnology(args?: GetTechnologyRequestArguments): Promise<Technology> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Technology[];
    return request;
}

/**
 * Update a technology object from the /wp/v2/technology/(?P<id>[\d]+) route.
 */
export async function updateTechnology(args?: UpdateTechnologyRequestArguments): Promise<Technology> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Technology[];
    return request;
}

/** Delete a technology object from the /wp/v2/technology/(?P<id>[\d]+) route. */
export async function deleteTechnology(args?: DeleteTechnologyRequestArguments): Promise<Technology> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Technology[];
    return request;
}

/**
 * Get custom-post-types objects from the /wp/v2/custom-post-type route.
 */
export async function getCustomPostTypes(args?: GetCustomPostTypesRequestArguments): Promise<CustomPostType[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/custom-post-type');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CustomPostType[];
    return request;
}

/**
 * Create a custom-post-type object at the /wp/v2/custom-post-type route.
 */
export async function createCustomPostType(properties: CreateCustomPostTypeRequestArguments): Promise<CustomPostType> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/custom-post-type');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as CustomPostType;
    return response;
}

/**
 * Get a custom-post-type object from the /wp/v2/custom-post-type/(?P<id>[\d]+) route.
 */
export async function getCustomPostType(args?: GetCustomPostTypeRequestArguments): Promise<CustomPostType> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CustomPostType[];
    return request;
}

/**
 * Update a custom-post-type object from the /wp/v2/custom-post-type/(?P<id>[\d]+) route.
 */
export async function updateCustomPostType(args?: UpdateCustomPostTypeRequestArguments): Promise<CustomPostType> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CustomPostType[];
    return request;
}

/** Delete a custom-post-type object from the /wp/v2/custom-post-type/(?P<id>[\d]+) route. */
export async function deleteCustomPostType(args?: DeleteCustomPostTypeRequestArguments): Promise<CustomPostType> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as CustomPostType[];
    return request;
}

/**
 * Get wp_block_categories objects from the /wp/v2/wp_block_category route.
 */
export async function getWPBlockCategories(args?: GetWPBlockCategoriesRequestArguments): Promise<WPBlockCategory[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/wp_block_category');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlockCategory[];
    return request;
}

/**
 * Create a wp_block_category object at the /wp/v2/wp_block_category route.
 */
export async function createWPBlockCategory(properties: CreateWPBlockCategoryRequestArguments): Promise<WPBlockCategory> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/wp_block_category');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as WPBlockCategory;
    return response;
}

/**
 * Get a wp_block_category object from the /wp/v2/wp_block_category/(?P<id>[\d]+) route.
 */
export async function getWPBlockCategory(args?: GetWPBlockCategoryRequestArguments): Promise<WPBlockCategory> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlockCategory[];
    return request;
}

/**
 * Update a wp_block_category object from the /wp/v2/wp_block_category/(?P<id>[\d]+) route.
 */
export async function updateWPBlockCategory(args?: UpdateWPBlockCategoryRequestArguments): Promise<WPBlockCategory> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlockCategory[];
    return request;
}

/** Delete a wp_block_category object from the /wp/v2/wp_block_category/(?P<id>[\d]+) route. */
export async function deleteWPBlockCategory(args?: DeleteWPBlockCategoryRequestArguments): Promise<WPBlockCategory> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as WPBlockCategory[];
    return request;
}

/**
 * Get users objects from the /wp/v2/users route.
 */
export async function getUsers(args?: GetUsersRequestArguments): Promise<User[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/users');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as User[];
    return request;
}

/**
 * Create a user object at the /wp/v2/users route.
 */
export async function createUser(properties: CreateUserRequestArguments): Promise<User> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/users');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as User;
    return response;
}

/**
 * Get a user object from the /wp/v2/users/(?P<id>[\d]+) route.
 */
export async function getUser(args?: GetUserRequestArguments): Promise<User> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as User[];
    return request;
}

/**
 * Update a user object from the /wp/v2/users/(?P<id>[\d]+) route.
 */
export async function updateUser(args?: UpdateUserRequestArguments): Promise<User> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as User[];
    return request;
}

/** Delete a user object from the /wp/v2/users/(?P<id>[\d]+) route. */
export async function deleteUser(args?: DeleteUserRequestArguments): Promise<User> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as User[];
    return request;
}

/**
 * Get a application-password object from the /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export async function getApplicationPassword(args?: GetApplicationPasswordRequestArguments): Promise<ApplicationPassword> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as ApplicationPassword[];
    return request;
}

/**
 * Update a application-password object from the /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route.
 */
export async function updateApplicationPassword(args?: UpdateApplicationPasswordRequestArguments): Promise<ApplicationPassword> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as ApplicationPassword[];
    return request;
}

/** Delete a application-password object from the /wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+) route. */
export async function deleteApplicationPassword(args?: DeleteApplicationPasswordRequestArguments): Promise<ApplicationPassword> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as ApplicationPassword[];
    return request;
}

/**
 * Get comments objects from the /wp/v2/comments route.
 */
export async function getComments(args?: GetCommentsRequestArguments): Promise<Comment[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/comments');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Comment[];
    return request;
}

/**
 * Create a comment object at the /wp/v2/comments route.
 */
export async function createComment(properties: CreateCommentRequestArguments): Promise<Comment> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/comments');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Comment;
    return response;
}

/**
 * Get a comment object from the /wp/v2/comments/(?P<id>[\d]+) route.
 */
export async function getComment(args?: GetCommentRequestArguments): Promise<Comment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Comment[];
    return request;
}

/**
 * Update a comment object from the /wp/v2/comments/(?P<id>[\d]+) route.
 */
export async function updateComment(args?: UpdateCommentRequestArguments): Promise<Comment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Comment[];
    return request;
}

/** Delete a comment object from the /wp/v2/comments/(?P<id>[\d]+) route. */
export async function deleteComment(args?: DeleteCommentRequestArguments): Promise<Comment> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Comment[];
    return request;
}

/**
 * Get plugins objects from the /wp/v2/plugins route.
 */
export async function getPlugins(args?: GetPluginsRequestArguments): Promise<Plugin[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/plugins');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Plugin[];
    return request;
}

/**
 * Create a plugin object at the /wp/v2/plugins route.
 */
export async function createPlugin(properties: CreatePluginRequestArguments): Promise<Plugin> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/plugins');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Plugin;
    return response;
}

/**
 * Get a plugin object from the /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export async function getPlugin(args?: GetPluginRequestArguments): Promise<Plugin> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Plugin[];
    return request;
}

/**
 * Update a plugin object from the /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route.
 */
export async function updatePlugin(args?: UpdatePluginRequestArguments): Promise<Plugin> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Plugin[];
    return request;
}

/** Delete a plugin object from the /wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?) route. */
export async function deletePlugin(args?: DeletePluginRequestArguments): Promise<Plugin> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Plugin[];
    return request;
}

/**
 * Get widgets objects from the /wp/v2/widgets route.
 */
export async function getWidgets(args?: GetWidgetsRequestArguments): Promise<Widget[]> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/widgets');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Widget[];
    return request;
}

/**
 * Create a widget object at the /wp/v2/widgets route.
 */
export async function createWidget(properties: CreateWidgetRequestArguments): Promise<Widget> {
    const url = new URL('https://humanmade.com/wp-json/wp/v2/widgets');
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
    });
    const response = await request.json() as Widget;
    return response;
}

/**
 * Get a widget object from the /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export async function getWidget(args?: GetWidgetRequestArguments): Promise<Widget> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Widget[];
    return request;
}

/**
 * Update a widget object from the /wp/v2/widgets/(?P<id>[\w\-]+) route.
 */
export async function updateWidget(args?: UpdateWidgetRequestArguments): Promise<Widget> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Widget[];
    return request;
}

/** Delete a widget object from the /wp/v2/widgets/(?P<id>[\w\-]+) route. */
export async function deleteWidget(args?: DeleteWidgetRequestArguments): Promise<Widget> {
    const url = new URL('undefined');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Widget[];
    return request;
}

export namespace WPSiteHealthV1 {
    /**
     * Object type for the "wp-site-health-test" object in the route /wp-site-health/v1/tests/background-updates.
     */
    export type WPSiteHealthTest = {
        /** The name of the test being run. */
        test: string;
        /** A label describing the test. */
        label: string;
        /** The status of the test. */
        status: 'good' | 'recommended' | 'critical';
        /** The category this test is grouped in. */
        badge: {
            /** */
            label: string;
            /** */
            color: 'blue' | 'orange' | 'red' | 'green' | 'purple' | 'gray';
        };
        /** A more descriptive explanation of what the test looks for, and why it is important for the user. */
        description: string;
        /** HTML containing an action to direct the user to where they can resolve the issue. */
        actions: string;
    };
    /**
     * Endpoint request arguments for the GET /wp-site-health/v1/tests/authorization-header route.
     */
    export type GetWPSiteHealthTestsRequestArguments = {};
}

