export type ProductBlockCategory = {
    /** Unique identifier for the resource. */
    id: number;
    /** Category name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** The ID for the parent of the resource. */
    parent: number;
    /** Number of published products for the resource. */
    count: number;
};
export type ProductBlockProduct = {
    /** Unique identifier for the resource. */
    id: number;
    /** Product name. */
    name: string;
    /** Product URL. */
    permalink: string;
    /** Unique identifier. */
    sku: string;
    /** Product description. */
    description: string;
    /** Product short description. */
    short_description: string;
    /** Current product price. */
    price: string;
    /** Price formatted in HTML. */
    price_html: string;
    /** Reviews average rating. */
    average_rating: string;
    /** List of images. */
    images: Record<string, unknown>;
};
export type AdminMenu = {
    /** Core/Plugin/Theme update count or unread comments count. */
    count: number;
    /** Menu item icon. Dashicon slug or base64-encoded SVG. */
    icon: string;
    /** Additional text to be added inline with the menu title. */
    inlineText: string;
    /** Badge to be added inline with the menu title. */
    badge: string;
    /** */
    slug: string;
    /** */
    children: unknown[]
    ;
    /** */
    title: string;
    /** */
    type: 'separator' | 'menu-item';
    /** */
    url: string;
};
export type JetpackPublicizeConnection = {
    /** Unique identifier for the Publicize Connection */
    id: string;
    /** Alphanumeric identifier for the Publicize Service */
    service_name: string;
    /** Username of the connected account */
    display_name: string;
    /** The name to display in the profile of the connected account */
    profile_display_name: string;
    /** Profile picture of the connected account */
    profile_picture: string;
    /** Is this connection available to all users? */
    global: boolean;
};
export type ResolveRedirect = {
    /** The final destination of the URL being checked for redirects. */
    url: string;
    /** The status code of the URL's response. */
    status: number;
};
export type JetpackPublicizeConnectionTestResults = {
    /** Unique identifier for the Publicize Connection */
    id: string;
    /** Alphanumeric identifier for the Publicize Service */
    service_name: string;
    /** Username of the connected account */
    display_name: string;
    /** The name to display in the profile of the connected account */
    profile_display_name: string;
    /** Profile picture of the connected account */
    profile_picture: string;
    /** Is this connection available to all users? */
    global: boolean;
    /** Did the Publicize Connection test pass? */
    test_success: boolean;
    /** Publicize Connection success or error message */
    test_message: string;
    /** Can the current user refresh the Publicize Connection? */
    can_refresh: boolean;
    /** Message instructing the user to refresh their Connection to the Publicize Service */
    refresh_text: string;
    /** URL for refreshing the Connection to the Publicize Service */
    refresh_url: string;
};
export type JetpackPublicizeService = {
    /** Alphanumeric identifier for the Publicize Service */
    name: string;
    /** Human readable label for the Publicize Service */
    label: string;
    /** The URL used to connect to the Publicize Service */
    url: string;
};
export type DataIndex = {
    /** Data resource ID. */
    slug: string;
    /** Data resource description. */
    description: string;
};
export type Note = {
    /** ID of the note record. */
    id: number;
    /** Name of the note. */
    name: string;
    /** The type of the note (e.g. error, warning, etc.). */
    type: string;
    /** Locale used for the note title and content. */
    locale: string;
    /** Title of the note. */
    title: string;
    /** Content of the note. */
    content: string;
    /** Content data for the note. JSON string. Available for re-localization. */
    content_data: string;
    /** The status of the note (e.g. unactioned, actioned). */
    status: string;
    /** Source of the note. */
    source: string;
    /** Date the note was created. */
    date_created: string;
    /** Date the note was created (GMT). */
    date_created_gmt: string;
    /** Date after which the user should be reminded of the note, if any. */
    date_reminder: string;
    /** Date after which the user should be reminded of the note, if any (GMT). */
    date_reminder_gmt: string;
    /** Whether or not a user can request to be reminded about the note. */
    is_snoozable: boolean;
    /** An array of actions, if any, for the note. */
    actions: unknown[];
    /** The layout of the note (e.g. banner, thumbnail, plain). */
    layout: string;
    /** The image of the note, if any. */
    image: string;
    /** Registers whether the note is deleted or not */
    is_deleted: boolean;
};
export type ShopCoupon = {
    /** Unique identifier for the object. */
    id: number;
    /** Coupon code. */
    code: string;
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount: string;
    /** The status of the coupon. Should always be draft, published, or pending review */
    status: string;
    /** The date the coupon was created, in the site's timezone. */
    date_created: unknown;
    /** The date the coupon was created, as GMT. */
    date_created_gmt: unknown;
    /** The date the coupon was last modified, in the site's timezone. */
    date_modified: unknown;
    /** The date the coupon was last modified, as GMT. */
    date_modified_gmt: unknown;
    /** Determines the type of discount that will be applied. */
    discount_type: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** Coupon description. */
    description: string;
    /** The date the coupon expires, in the site's timezone. */
    date_expires: unknown;
    /** The date the coupon expires, as GMT. */
    date_expires_gmt: unknown;
    /** Number of times the coupon has been used already. */
    usage_count: number;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    excluded_product_ids: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions: string[]
    ;
    /** List of user IDs (or guest email addresses) that have used the coupon. */
    used_by: number[]
    ;
    /** Meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
};
export type Batch = {
    /** List of created resources. */
    create: Record<string, unknown>[]
    ;
    /** List of updated resources. */
    update: Record<string, unknown>[]
    ;
    /** List of delete resources. */
    delete: number[]
    ;
};
export type DataCountries = {
    /** ISO3166 alpha-2 country code. */
    code: string;
    /** Full name of country. */
    name: string;
    /** List of states in this country. */
    states: {
        /** State code. */
        code: string;
        /** Full name of state. */
        name: string;
    }[];
};
export type DataDownloadIps = {
    /** IP address. */
    user_ip_address: string;
};
export type Options = {
    /** Array of options with associated values. */
    options: unknown[];
};
export type ShopOrder = {
    /** Unique identifier for the resource. */
    id: number;
    /** Parent order ID. */
    parent_id: number;
    /** Order number. */
    number: string;
    /** Order key. */
    order_key: string;
    /** Shows where the order was created. */
    created_via: string;
    /** Version of WooCommerce which last updated the order. */
    version: number;
    /** Order status. */
    status: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** The date the order was created, in the site's timezone. */
    date_created: unknown;
    /** The date the order was created, as GMT. */
    date_created_gmt: unknown;
    /** The date the order was last modified, in the site's timezone. */
    date_modified: unknown;
    /** The date the order was last modified, as GMT. */
    date_modified_gmt: unknown;
    /** Total discount amount for the order. */
    discount_total: string;
    /** Total discount tax amount for the order. */
    discount_tax: string;
    /** Total shipping amount for the order. */
    shipping_total: string;
    /** Total shipping tax amount for the order. */
    shipping_tax: string;
    /** Sum of line item taxes only. */
    cart_tax: string;
    /** Grand total. */
    total: string;
    /** Sum of all taxes. */
    total_tax: string;
    /** True the prices included tax during checkout. */
    prices_include_tax: boolean;
    /** User ID who owns the order. 0 for guests. */
    customer_id: number;
    /** Customer's IP address. */
    customer_ip_address: string;
    /** User agent of the customer. */
    customer_user_agent: string;
    /** Note left by customer during checkout. */
    customer_note: string;
    /** Billing address. */
    billing: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method: string;
    /** Payment method title. */
    payment_method_title: string;
    /** Unique transaction ID. */
    transaction_id: string;
    /** The date the order was paid, in the site's timezone. */
    date_paid: unknown;
    /** The date the order was paid, as GMT. */
    date_paid_gmt: unknown;
    /** The date the order was completed, in the site's timezone. */
    date_completed: unknown;
    /** The date the order was completed, as GMT. */
    date_completed_gmt: unknown;
    /** MD5 hash of cart items to ensure orders are not modified. */
    cart_hash: string;
    /** Meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
    /** Line items data. */
    line_items: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: unknown;
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: unknown;
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: unknown;
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Tax lines data. */
    tax_lines: {
        /** Item ID. */
        id: number;
        /** Tax rate code. */
        rate_code: string;
        /** Tax rate ID. */
        rate_id: string;
        /** Tax rate label. */
        label: string;
        /** Show if is a compound tax rate. */
        compound: boolean;
        /** Tax total (not including shipping taxes). */
        tax_total: string;
        /** Shipping tax total. */
        shipping_tax_total: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
    /** Shipping lines data. */
    shipping_lines: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: unknown;
        /** Shipping method ID. */
        method_id: unknown;
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
    /** Fee lines data. */
    fee_lines: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: unknown;
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: unknown;
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
    /** List of refunds. */
    refunds: {
        /** Refund ID. */
        id: number;
        /** Refund reason. */
        reason: string;
        /** Refund total. */
        total: string;
    }[];
    /** Order payment URL. */
    payment_url: string;
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid: boolean;
    /** Whether an order can be edited. */
    is_editable: boolean;
    /** Whether an order needs payment, based on status and order total. */
    needs_payment: boolean;
    /** Whether an order needs processing before it can be completed. */
    needs_processing: boolean;
};
export type PaymentGatewaySuggestions = {
    /** Suggestion description. */
    content: string;
    /** Suggestion ID. */
    id: string;
    /** Gateway image. */
    image: string;
    /** Suggestion visibility. */
    is_visible: boolean;
    /** Array of plugin slugs. */
    plugins: unknown[];
    /** Priority of recommendation. */
    recommendation_priority: number;
    /** Gateway title. */
    title: string;
};
export type Product = {
    /** Unique identifier for the resource. */
    id: number;
    /** Product name. */
    name: string;
    /** Product slug. */
    slug: string;
    /** Product URL. */
    permalink: string;
    /** The date the product was created, in the site's timezone. */
    date_created: unknown;
    /** The date the product was created, as GMT. */
    date_created_gmt: unknown;
    /** The date the product was last modified, in the site's timezone. */
    date_modified: unknown;
    /** The date the product was last modified, as GMT. */
    date_modified_gmt: unknown;
    /** Product type. */
    type: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured: boolean;
    /** Catalog visibility. */
    catalog_visibility: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description: string;
    /** Product short description. */
    short_description: string;
    /** Unique identifier. */
    sku: string;
    /** Current product price. */
    price: string;
    /** Product regular price. */
    regular_price: string;
    /** Product sale price. */
    sale_price: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from: unknown;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt: unknown;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to: unknown;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt: unknown;
    /** Price formatted in HTML. */
    price_html: string;
    /** Shows if the product is on sale. */
    on_sale: boolean;
    /** Shows if the product can be bought. */
    purchasable: boolean;
    /** Amount of sales. */
    total_sales: number;
    /** If the product is virtual. */
    virtual: boolean;
    /** If the product is downloadable. */
    downloadable: boolean;
    /** List of downloadable files. */
    downloads: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry: number;
    /** Product external URL. Only for external products. */
    external_url: string;
    /** Product external button text. Only for external products. */
    button_text: string;
    /** Tax status. */
    tax_status: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class: string;
    /** Stock management at product level. */
    manage_stock: boolean;
    /** Stock quantity. */
    stock_quantity: number;
    /** Controls the stock status of the product. */
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders: 'no' | 'notify' | 'yes';
    /** Shows if backorders are allowed. */
    backorders_allowed: boolean;
    /** Shows if the product is on backordered. */
    backordered: boolean;
    /** Low Stock amount for the product. */
    low_stock_amount: number | null;
    /** Allow one item to be bought in a single order. */
    sold_individually: boolean;
    /** Product weight (lbs). */
    weight: string;
    /** Product dimensions. */
    dimensions: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shows if the product need to be shipped. */
    shipping_required: boolean;
    /** Shows whether or not the product shipping is taxable. */
    shipping_taxable: boolean;
    /** Shipping class slug. */
    shipping_class: string;
    /** Shipping class ID. */
    shipping_class_id: string;
    /** Allow reviews. */
    reviews_allowed: boolean;
    /** Reviews average rating. */
    average_rating: string;
    /** Amount of reviews that the product have. */
    rating_count: number;
    /** List of related products IDs. */
    related_ids: number[]
    ;
    /** List of up-sell products IDs. */
    upsell_ids: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids: number[]
    ;
    /** Product parent ID. */
    parent_id: number;
    /** Optional note to send the customer after purchase. */
    purchase_note: string;
    /** List of categories. */
    categories: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: unknown;
        /** The date the image was created, as GMT. */
        date_created_gmt: unknown;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: unknown;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: unknown;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    }[];
    /** Shows if the product needs to be configured before it can be bought. */
    has_options: boolean;
    /** List of attributes. */
    attributes: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: string[]
        ;
    }[];
    /** Defaults variation attributes. */
    default_attributes: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** List of variations IDs. */
    variations: number[]
    ;
    /** List of grouped products ID. */
    grouped_products: number[]
    ;
    /** Menu order, used to custom sort products. */
    menu_order: number;
    /** Meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
    /** */
    jetpack_publicize_connections: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
    /** The date the last order for this product was placed, in the site's timezone. */
    last_order_date: unknown;
};
export type ProductAttribute = {
    /** Unique identifier for the resource. */
    id: number | string;
    /** Attribute name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** Type of attribute. */
    type: 'select';
    /** Default sort order. */
    order_by: 'menu_order' | 'name' | 'name_num' | 'id';
    /** Enable/Disable attribute archives. */
    has_archives: boolean;
};
export type ProductAttributeTerm = {
    /** Unique identifier for the resource. */
    id: number | string;
    /** Term name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** HTML description of the resource. */
    description: string;
    /** Menu order, used to custom sort the resource. */
    menu_order: number;
    /** Number of published products for the resource. */
    count: number;
};
export type ProductCat = {
    /** Unique identifier for the resource. */
    id: number;
    /** Category name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** The ID for the parent of the resource. */
    parent: number;
    /** HTML description of the resource. */
    description: string;
    /** Category archive display type. */
    display: 'default' | 'products' | 'subcategories' | 'both';
    /** Image data. */
    image: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: unknown;
        /** The date the image was created, as GMT. */
        date_created_gmt: unknown;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: unknown;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: unknown;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Menu order, used to custom sort the resource. */
    menu_order: number;
    /** Number of published products for the resource. */
    count: number;
};
export type ProductVariation = {
    /** Unique identifier for the resource. */
    id: number;
    /** The date the variation was created, in the site's timezone. */
    date_created: unknown;
    /** The date the variation was last modified, in the site's timezone. */
    date_modified: unknown;
    /** Variation description. */
    description: string;
    /** Variation URL. */
    permalink: string;
    /** Unique identifier. */
    sku: string;
    /** Current variation price. */
    price: string;
    /** Variation regular price. */
    regular_price: string;
    /** Variation sale price. */
    sale_price: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from: unknown;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt: unknown;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to: unknown;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt: unknown;
    /** Shows if the variation is on sale. */
    on_sale: boolean;
    /** Variation status. */
    status: 'draft' | 'pending' | 'private' | 'publish';
    /** Shows if the variation can be bought. */
    purchasable: boolean;
    /** If the variation is virtual. */
    virtual: boolean;
    /** If the variation is downloadable. */
    downloadable: boolean;
    /** List of downloadable files. */
    downloads: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry: number;
    /** Tax status. */
    tax_status: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class: string;
    /** Stock management at variation level. */
    manage_stock: boolean;
    /** Stock quantity. */
    stock_quantity: number;
    /** Controls the stock status of the product. */
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders: 'no' | 'notify' | 'yes';
    /** Shows if backorders are allowed. */
    backorders_allowed: boolean;
    /** Shows if the variation is on backordered. */
    backordered: boolean;
    /** Low Stock amount for the variation. */
    low_stock_amount: number | null;
    /** Variation weight (lbs). */
    weight: string;
    /** Variation dimensions. */
    dimensions: {
        /** Variation length (in). */
        length: string;
        /** Variation width (in). */
        width: string;
        /** Variation height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class: string;
    /** Shipping class ID. */
    shipping_class_id: string;
    /** Variation image data. */
    image: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: unknown;
        /** The date the image was created, as GMT. */
        date_created_gmt: unknown;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: unknown;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: unknown;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** List of attributes. */
    attributes: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order: number;
    /** Meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
    /** Product parent name. */
    name: string;
    /** Product type. */
    type: 'variation';
    /** Product parent ID. */
    parent_id: number;
};
export type ProductReview = {
    /** Unique identifier for the resource. */
    id: number;
    /** The date the review was created, in the site's timezone. */
    date_created: unknown;
    /** The date the review was created, as GMT. */
    date_created_gmt: unknown;
    /** Unique identifier for the product that the review belongs to. */
    product_id: number;
    /** Product name. */
    product_name: string;
    /** Product URL. */
    product_permalink: string;
    /** Status of the review. */
    status: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
    /** Reviewer name. */
    reviewer: string;
    /** Reviewer email. */
    reviewer_email: string;
    /** The content of the review. */
    review: string;
    /** Review rating (0 to 5). */
    rating: number;
    /** Shows if the reviewer bought the product or not. */
    verified: boolean;
    /** Avatar URLs for the object reviewer. */
    reviewer_avatar_urls: {
        /** Avatar URL with image size of 24 pixels. */
        24: string;
        /** Avatar URL with image size of 48 pixels. */
        48: string;
        /** Avatar URL with image size of 96 pixels. */
        96: string;
    };
};
export type Setting = {
    /** A unique identifier for the setting. */
    id: string;
    /** An identifier for the group this setting belongs to. */
    group_id: string;
    /** A human readable label for the setting used in interfaces. */
    label: string;
    /** A human readable description for the setting used in interfaces. */
    description: string;
    /** Setting value. */
    value: unknown;
    /** Default value for the setting. */
    default: unknown;
    /** Additional help text shown to the user about the setting. */
    tip: string;
    /** Placeholder text to be displayed in text inputs. */
    placeholder: string;
    /** Type of setting. */
    type: 'text' | 'email' | 'number' | 'color' | 'password' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'image_width' | 'checkbox';
    /** Array of options (key value pairs) for inputs such as select, multiselect, and radio buttons. */
    options: Record<string, unknown>;
};
export type UploadTheme = {
    /** Theme installation status. */
    status: string;
    /** Theme installation message. */
    message: string;
    /** Uploaded theme. */
    theme: Record<string, unknown>;
};
export type Plugins = {
    /** Plugin slug. */
    slug: string;
    /** Plugin name. */
    name: string;
    /** Plugin status. */
    status: string;
};
export type OnboardingProfile = {
    /** Whether or not the profile was completed. */
    completed: boolean;
    /** Whether or not the profile was skipped. */
    skipped: boolean;
    /** Industry. */
    industry: unknown[];
    /** Types of products sold. */
    product_types: unknown[];
    /** Number of products to be added. */
    product_count: '0' | '1-10' | '11-100' | '101-1000' | '1000+';
    /** Other places the store is selling products. */
    selling_venues: 'no' | 'other' | 'brick-mortar' | 'brick-mortar-other' | 'other-woocommerce';
    /** Number of employees of the store. */
    number_employees: '1' | '<10' | '10-50' | '50-250' | '+250' | 'not specified';
    /** Current annual revenue of the store. */
    revenue: 'none' | 'up-to-2500' | '2500-10000' | '10000-50000' | '50000-250000' | 'more-than-250000' | 'rather-not-say';
    /** Name of other platform used to sell. */
    other_platform: 'shopify' | 'bigcommerce' | 'magento' | 'wix' | 'amazon' | 'ebay' | 'etsy' | 'squarespace' | 'other';
    /** Name of other platform used to sell (not listed). */
    other_platform_name: string;
    /** Extra business extensions to install. */
    business_extensions: unknown[];
    /** Selected store theme. */
    theme: string;
    /** Whether or not this store was setup for a client. */
    setup_client: boolean;
    /** Whether or not the store was connected to WooCommerce.com during the extension flow. */
    wccom_connected: boolean;
    /** Whether or not this store agreed to receiving marketing contents from WooCommerce.com. */
    is_agree_marketing: boolean;
    /** Store email address. */
    store_email: string;
};
export type OnboardingTheme = {
    /** Theme slug. */
    slug: string;
    /** Theme name. */
    name: string;
    /** Theme status. */
    status: string;
};
export type Tax = {
    /** Unique identifier for the resource. */
    id: number;
    /** Country ISO 3166 code. */
    country: string;
    /** State code. */
    state: string;
    /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
    postcode: string;
    /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
    city: string;
    /** Tax rate. */
    rate: string;
    /** Tax rate name. */
    name: string;
    /** Tax priority. */
    priority: number;
    /** Whether or not this is a compound rate. */
    compound: boolean;
    /** Whether or not this tax rate also gets applied to shipping. */
    shipping: boolean;
    /** Indicates the order that will appear in queries. */
    order: number;
    /** Tax class. */
    class: 'standard' | 'reduced-rate' | 'zero-rate';
    /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
    postcodes: string[]
    ;
    /** List of city names. Introduced in WooCommerce 5.3. */
    cities: string[]
    ;
};
export type ReportCustomers = {
    /** Customer ID. */
    id: number;
    /** User ID. */
    user_id: number;
    /** Name. */
    name: string;
    /** Username. */
    username: string;
    /** Country / Region. */
    country: string;
    /** City. */
    city: string;
    /** Region. */
    state: string;
    /** Postal code. */
    postcode: string;
    /** Date registered. */
    date_registered: unknown;
    /** Date registered GMT. */
    date_registered_gmt: unknown;
    /** Date last active. */
    date_last_active: unknown;
    /** Date last active GMT. */
    date_last_active_gmt: unknown;
    /** Order count. */
    orders_count: number;
    /** Total spend. */
    total_spend: number;
    /** Avg order value. */
    avg_order_value: number;
};
export type Leaderboard = {
    /** Leaderboard ID. */
    id: string;
    /** Displayed title for the leaderboard. */
    label: string;
    /** Table headers. */
    headers: unknown[][]
    ;
    /** Table rows. */
    rows: unknown[][]
    ;
};
export type Report = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** A human-readable description of the resource. */
    description: string;
    /** API path. */
    path: string;
};
export type ReportImport = {
    /** Regeneration status. */
    status: string;
    /** Regenerate data message. */
    message: string;
};
export type ReportExport = {
    /** Export status. */
    status: string;
    /** Export status message. */
    message: string;
    /** Export ID. */
    export_id: string;
};
export type ReportExportStatus = {
    /** Percentage complete. */
    percent_complete: unknown;
    /** Export download URL. */
    download_url: string;
};
export type ReportProducts = {
    /** Product ID. */
    product_id: number;
    /** Number of items sold. */
    items_sold: number;
    /** Total Net sales of all items sold. */
    net_revenue: number;
    /** Number of orders product appeared in. */
    orders_count: number;
    /** */
    extended_info: unknown;
};
export type ReportVaritations = {
    /** Product ID. */
    product_id: number;
    /** Product ID. */
    variation_id: number;
    /** Number of items sold. */
    items_sold: number;
    /** Total Net sales of all items sold. */
    net_revenue: number;
    /** Number of orders product appeared in. */
    orders_count: number;
    /** */
    extended_info: unknown;
};
export type ReportProductsStats = {
    /** Totals data. */
    totals: {
        /** Number of product items sold. */
        items_sold: number;
        /** Net sales. */
        net_revenue: number;
        /** Number of orders. */
        orders_count: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Human readable segment label, either product or variation name. */
            segment_label: 'day' | 'week' | 'month' | 'year';
            /** Interval subtotals. */
            subtotals: {
                /** Number of product items sold. */
                items_sold: number;
                /** Net sales. */
                net_revenue: number;
                /** Number of orders. */
                orders_count: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Number of product items sold. */
            items_sold: number;
            /** Net sales. */
            net_revenue: number;
            /** Number of orders. */
            orders_count: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Human readable segment label, either product or variation name. */
                segment_label: 'day' | 'week' | 'month' | 'year';
                /** Interval subtotals. */
                subtotals: {
                    /** Number of product items sold. */
                    items_sold: number;
                    /** Net sales. */
                    net_revenue: number;
                    /** Number of orders. */
                    orders_count: number;
                };
            }[];
        };
    }[];
};
export type ReportVariationsStats = {
    /** Totals data. */
    totals: {
        /** Number of variation items sold. */
        items_sold: number;
        /** Net sales. */
        net_revenue: number;
        /** Number of orders. */
        orders_count: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Human readable segment label, either product or variation name. */
            segment_label: 'day' | 'week' | 'month' | 'year';
            /** Interval subtotals. */
            subtotals: {
                /** Number of variation items sold. */
                items_sold: number;
                /** Net sales. */
                net_revenue: number;
                /** Number of orders. */
                orders_count: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Number of variation items sold. */
            items_sold: number;
            /** Net sales. */
            net_revenue: number;
            /** Number of orders. */
            orders_count: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Human readable segment label, either product or variation name. */
                segment_label: 'day' | 'week' | 'month' | 'year';
                /** Interval subtotals. */
                subtotals: {
                    /** Number of variation items sold. */
                    items_sold: number;
                    /** Net sales. */
                    net_revenue: number;
                    /** Number of orders. */
                    orders_count: number;
                };
            }[];
        };
    }[];
};
export type ReportRevenueStats = {
    /** Totals data. */
    totals: {
        /** Total sales. */
        total_sales: number;
        /** Net sales. */
        net_revenue: number;
        /** Amount discounted by coupons. */
        coupons: number;
        /** Unique coupons count. */
        coupons_count: number;
        /** Total of shipping. */
        shipping: number;
        /** Total of taxes. */
        taxes: number;
        /** Total of returns. */
        refunds: number;
        /** Number of orders. */
        orders_count: number;
        /** Items sold. */
        num_items_sold: number;
        /** Products sold. */
        products: number;
        /** Gross sales. */
        gross_sales: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Interval subtotals. */
            subtotals: {
                /** Total sales. */
                total_sales: number;
                /** Net sales. */
                net_revenue: number;
                /** Amount discounted by coupons. */
                coupons: number;
                /** Unique coupons count. */
                coupons_count: number;
                /** Total of shipping. */
                shipping: number;
                /** Total of taxes. */
                taxes: number;
                /** Total of returns. */
                refunds: number;
                /** Number of orders. */
                orders_count: number;
                /** Items sold. */
                num_items_sold: number;
                /** Products sold. */
                products: number;
                /** Gross sales. */
                gross_sales: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Total sales. */
            total_sales: number;
            /** Net sales. */
            net_revenue: number;
            /** Amount discounted by coupons. */
            coupons: number;
            /** Unique coupons count. */
            coupons_count: number;
            /** Total of shipping. */
            shipping: number;
            /** Total of taxes. */
            taxes: number;
            /** Total of returns. */
            refunds: number;
            /** Number of orders. */
            orders_count: number;
            /** Items sold. */
            num_items_sold: number;
            /** Gross sales. */
            gross_sales: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Interval subtotals. */
                subtotals: {
                    /** Total sales. */
                    total_sales: number;
                    /** Net sales. */
                    net_revenue: number;
                    /** Amount discounted by coupons. */
                    coupons: number;
                    /** Unique coupons count. */
                    coupons_count: number;
                    /** Total of shipping. */
                    shipping: number;
                    /** Total of taxes. */
                    taxes: number;
                    /** Total of returns. */
                    refunds: number;
                    /** Number of orders. */
                    orders_count: number;
                    /** Items sold. */
                    num_items_sold: number;
                    /** Products sold. */
                    products: number;
                    /** Gross sales. */
                    gross_sales: number;
                };
            }[];
        };
    }[];
};
export type ReportOrders = {
    /** Order ID. */
    order_id: number;
    /** Order Number. */
    order_number: string;
    /** Date the order was created, in the site's timezone. */
    date_created: unknown;
    /** Date the order was created, as GMT. */
    date_created_gmt: unknown;
    /** Order status. */
    status: string;
    /** Customer ID. */
    customer_id: number;
    /** Number of items sold. */
    num_items_sold: number;
    /** Net total revenue. */
    net_total: unknown;
    /** Net total revenue (formatted). */
    total_formatted: string;
    /** Returning or new customer. */
    customer_type: string;
    /** */
    extended_info: unknown;
};
export type ReportOrdersStats = {
    /** Totals data. */
    totals: {
        /** Net sales. */
        net_revenue: number;
        /** Number of orders */
        orders_count: number;
        /** Average order value. */
        avg_order_value: number;
        /** Average items per order */
        avg_items_per_order: number;
        /** Number of items sold */
        num_items_sold: number;
        /** Amount discounted by coupons. */
        coupons: number;
        /** Unique coupons count. */
        coupons_count: number;
        /** Total distinct customers. */
        total_customers: number;
        /** Number of distinct products sold. */
        products: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Interval subtotals. */
            subtotals: {
                /** Net sales. */
                net_revenue: number;
                /** Number of orders */
                orders_count: number;
                /** Average order value. */
                avg_order_value: number;
                /** Average items per order */
                avg_items_per_order: number;
                /** Number of items sold */
                num_items_sold: number;
                /** Amount discounted by coupons. */
                coupons: number;
                /** Unique coupons count. */
                coupons_count: number;
                /** Total distinct customers. */
                total_customers: number;
                /** Number of distinct products sold. */
                products: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Net sales. */
            net_revenue: number;
            /** Number of orders */
            orders_count: number;
            /** Average order value. */
            avg_order_value: number;
            /** Average items per order */
            avg_items_per_order: number;
            /** Number of items sold */
            num_items_sold: number;
            /** Amount discounted by coupons. */
            coupons: number;
            /** Unique coupons count. */
            coupons_count: number;
            /** Total distinct customers. */
            total_customers: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Interval subtotals. */
                subtotals: {
                    /** Net sales. */
                    net_revenue: number;
                    /** Number of orders */
                    orders_count: number;
                    /** Average order value. */
                    avg_order_value: number;
                    /** Average items per order */
                    avg_items_per_order: number;
                    /** Number of items sold */
                    num_items_sold: number;
                    /** Amount discounted by coupons. */
                    coupons: number;
                    /** Unique coupons count. */
                    coupons_count: number;
                    /** Total distinct customers. */
                    total_customers: number;
                    /** Number of distinct products sold. */
                    products: number;
                };
            }[];
        };
    }[];
};
export type ReportCategories = {
    /** Category ID. */
    category_id: number;
    /** Amount of items sold. */
    items_sold: number;
    /** Total sales. */
    net_revenue: number;
    /** Number of orders. */
    orders_count: number;
    /** Amount of products. */
    products_count: number;
    /** */
    extended_info: unknown;
};
export type ReportTaxes = {
    /** Tax rate ID. */
    tax_rate_id: number;
    /** Tax rate name. */
    name: string;
    /** Tax rate. */
    tax_rate: number;
    /** Country / Region. */
    country: string;
    /** State. */
    state: string;
    /** Priority. */
    priority: number;
    /** Total tax. */
    total_tax: number;
    /** Order tax. */
    order_tax: number;
    /** Shipping tax. */
    shipping_tax: number;
    /** Number of orders. */
    orders_count: number;
};
export type ReportTaxesStats = {
    /** Totals data. */
    totals: {
        /** Total tax. */
        total_tax: number;
        /** Order tax. */
        order_tax: number;
        /** Shipping tax. */
        shipping_tax: number;
        /** Number of orders. */
        orders_count: number;
        /** Amount of tax codes. */
        tax_codes: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Interval subtotals. */
            subtotals: {
                /** Total tax. */
                total_tax: number;
                /** Order tax. */
                order_tax: number;
                /** Shipping tax. */
                shipping_tax: number;
                /** Number of orders. */
                orders_count: number;
                /** Amount of tax codes. */
                tax_codes: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Total tax. */
            total_tax: number;
            /** Order tax. */
            order_tax: number;
            /** Shipping tax. */
            shipping_tax: number;
            /** Number of orders. */
            orders_count: number;
            /** Amount of tax codes. */
            tax_codes: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Interval subtotals. */
                subtotals: {
                    /** Total tax. */
                    total_tax: number;
                    /** Order tax. */
                    order_tax: number;
                    /** Shipping tax. */
                    shipping_tax: number;
                    /** Number of orders. */
                    orders_count: number;
                    /** Amount of tax codes. */
                    tax_codes: number;
                };
            }[];
        };
    }[];
};
export type ReportCoupons = {
    /** Coupon ID. */
    coupon_id: number;
    /** Net discount amount. */
    amount: number;
    /** Number of orders. */
    orders_count: number;
    /** */
    extended_info: unknown;
};
export type ReportCouponsStats = {
    /** Totals data. */
    totals: {
        /** Net discount amount. */
        amount: number;
        /** Number of coupons. */
        coupons_count: number;
        /** Number of discounted orders. */
        orders_count: number;
        /** Reports data grouped by segment condition. */
        segments: {
            /** Segment identificator. */
            segment_id: number;
            /** Interval subtotals. */
            subtotals: {
                /** Net discount amount. */
                amount: number;
                /** Number of coupons. */
                coupons_count: number;
                /** Number of discounted orders. */
                orders_count: number;
            };
        }[];
    };
    /** Reports data grouped by intervals. */
    intervals: {
        /** Type of interval. */
        interval: 'day' | 'week' | 'month' | 'year';
        /** The date the report start, in the site's timezone. */
        date_start: unknown;
        /** The date the report start, as GMT. */
        date_start_gmt: unknown;
        /** The date the report end, in the site's timezone. */
        date_end: unknown;
        /** The date the report end, as GMT. */
        date_end_gmt: unknown;
        /** Interval subtotals. */
        subtotals: {
            /** Net discount amount. */
            amount: number;
            /** Number of coupons. */
            coupons_count: number;
            /** Number of discounted orders. */
            orders_count: number;
            /** Reports data grouped by segment condition. */
            segments: {
                /** Segment identificator. */
                segment_id: number;
                /** Interval subtotals. */
                subtotals: {
                    /** Net discount amount. */
                    amount: number;
                    /** Number of coupons. */
                    coupons_count: number;
                    /** Number of discounted orders. */
                    orders_count: number;
                };
            }[];
        };
    }[];
};
export type ReportStock = {
    /** Unique identifier for the resource. */
    id: number;
    /** Product parent ID. */
    parent_id: number;
    /** Product name. */
    name: string;
    /** Unique identifier. */
    sku: string;
    /** Stock status. */
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
    /** Stock quantity. */
    stock_quantity: number;
    /** Manage stock. */
    manage_stock: boolean;
};
export type ReportCustomersStats = {
    /** Totals data. */
    totals: {
        /** Number of products. */
        products: number;
        /** Number of low stock products. */
        lowstock: number;
        /** Number of In stock products. */
        instock: number;
        /** Number of Out of stock products. */
        outofstock: number;
        /** Number of On backorder products. */
        onbackorder: number;
    };
};
export type ReportDownloads = {
    /** ID. */
    id: number;
    /** Product ID. */
    product_id: number;
    /** The date of the download, in the site's timezone. */
    date: unknown;
    /** The date of the download, as GMT. */
    date_gmt: unknown;
    /** Download ID. */
    download_id: string;
    /** File name. */
    file_name: string;
    /** File URL. */
    file_path: string;
    /** Order ID. */
    order_id: number;
    /** Order Number. */
    order_number: string;
    /** User ID for the downloader. */
    user_id: number;
    /** User name of the downloader. */
    username: string;
    /** IP address for the downloader. */
    ip_address: string;
};
export type ReportPerformanceIndicator = {
    /** Unique identifier for the resource. */
    stat;
    /** The specific chart this stat referrers to. */
    chart: string;
    /** Human readable label for the stat. */
    label: string;
    /** Format of the stat. */
    format: 'number' | 'currency';
    /** Value of the stat. Returns null if the stat does not exist or cannot be loaded. */
    value: number;
};
export type Cart = {
    /** List of applied cart coupons. */
    coupons: {
        /** The coupon's unique code. */
        code: string;
        /** The discount type for the coupon (e.g. percentage or fixed amount) */
        discount_type: string;
        /** Total amounts provided using the smallest unit of the currency. */
        totals: {
            /** Currency code (in ISO format) for returned prices. */
            currency_code: string;
            /** Currency symbol for the currency which can be used to format returned prices. */
            currency_symbol: string;
            /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
            currency_minor_unit: number;
            /** Decimal separator for the currency which can be used to format returned prices. */
            currency_decimal_separator: string;
            /** Thousand separator for the currency which can be used to format returned prices. */
            currency_thousand_separator: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_prefix: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_suffix: string;
            /** Total discount applied by this coupon. */
            total_discount: string;
            /** Total tax removed due to discount applied by this coupon. */
            total_discount_tax: string;
        };
    }[];
    /** List of available shipping rates for the cart. */
    shipping_rates: {
        /** The ID of the package the shipping rates belong to. */
        package_id: number | string;
        /** Name of the package. */
        name: string;
        /** Shipping destination address. */
        destination: {
            /** First line of the address being shipped to. */
            address_1: string;
            /** Second line of the address being shipped to. */
            address_2: string;
            /** City of the address being shipped to. */
            city: string;
            /** ISO code, or name, for the state, province, or district of the address being shipped to. */
            state: string;
            /** Zip or Postcode of the address being shipped to. */
            postcode: string;
            /** ISO code for the country of the address being shipped to. */
            country: string;
        };
        /** List of cart items the returned shipping rates apply to. */
        items: {
            /** Unique identifier for the item within the cart. */
            key: string;
            /** Name of the item. */
            name: string;
            /** Quantity of the item in the current package. */
            quantity: number;
        }[];
        /** List of shipping rates. */
        shipping_rates: {
            /** ID of the shipping rate. */
            rate_id: string;
            /** Name of the shipping rate, e.g. Express shipping. */
            name: string;
            /** Description of the shipping rate, e.g. Dispatched via USPS. */
            description: string;
            /** Delivery time estimate text, e.g. 3-5 business days. */
            delivery_time: string;
            /** Price of this shipping rate using the smallest unit of the currency. */
            price: string;
            /** Taxes applied to this shipping rate using the smallest unit of the currency. */
            taxes: string;
            /** ID of the shipping method that provided the rate. */
            method_id: string;
            /** Instance ID of the shipping method that provided the rate. */
            instance_id: number;
            /** Meta data attached to the shipping rate. */
            meta_data: {
                /** Meta key. */
                key: string;
                /** Meta value. */
                value: string;
            }[];
            /** True if this is the rate currently selected by the customer for the cart. */
            selected: boolean;
            /** Currency code (in ISO format) for returned prices. */
            currency_code: string;
            /** Currency symbol for the currency which can be used to format returned prices. */
            currency_symbol: string;
            /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
            currency_minor_unit: number;
            /** Decimal separator for the currency which can be used to format returned prices. */
            currency_decimal_separator: string;
            /** Thousand separator for the currency which can be used to format returned prices. */
            currency_thousand_separator: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_prefix: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_suffix: string;
        }[];
    }[];
    /** Current set shipping address for the customer. */
    shipping_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
    };
    /** Current set billing address for the customer. */
    billing_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** List of cart items. */
    items: {
        /** Unique identifier for the item within the cart. */
        key: string;
        /** The cart item product or variation ID. */
        id: number;
        /** Quantity of this item in the cart. */
        quantity: number;
        /** How the quantity of this item should be controlled, for example, any limits in place. */
        quantity_limits: {
            /** The minimum quantity allowed in the cart for this line item. */
            minimum: number;
            /** The maximum quantity allowed in the cart for this line item. */
            maximum: number;
            /** The amount that quantities increment by. Quantity must be an multiple of this value. */
            multiple_of: number;
            /** If the quantity in the cart is editable or fixed. */
            editable: boolean;
        };
        /** Product name. */
        name: string;
        /** Product short description in HTML format. */
        short_description: string;
        /** Product full description in HTML format. */
        description: string;
        /** Stock keeping unit, if applicable. */
        sku: string;
        /** Quantity left in stock if stock is low, or null if not applicable. */
        low_stock_remaining: number | null;
        /** True if backorders are allowed past stock availability. */
        backorders_allowed: boolean;
        /** True if the product is on backorder. */
        show_backorder_badge: boolean;
        /** If true, only one item of this product is allowed for purchase in a single order. */
        sold_individually: boolean;
        /** Product URL. */
        permalink: string;
        /** List of images. */
        images: {
            /** Image ID. */
            id: number;
            /** Full size image URL. */
            src: string;
            /** Thumbnail URL. */
            thumbnail: string;
            /** Thumbnail srcset for responsive images. */
            srcset: string;
            /** Thumbnail sizes for responsive images. */
            sizes: string;
            /** Image name. */
            name: string;
            /** Image alternative text. */
            alt: string;
        }[];
        /** Chosen attributes (for variations). */
        variation: {
            /** Variation attribute name. */
            attribute: string;
            /** Variation attribute value. */
            value: string;
        }[];
        /** Metadata related to the cart item */
        item_data: {
            /** Name of the metadata. */
            name: string;
            /** Value of the metadata. */
            value: string;
            /** Optionally, how the metadata value should be displayed to the user. */
            display: string;
        }[];
        /** Price data for the product in the current line item, including or excluding taxes based on the "display prices during cart and checkout" setting. Provided using the smallest unit of the currency. */
        prices: {
            /** Currency code (in ISO format) for returned prices. */
            currency_code: string;
            /** Currency symbol for the currency which can be used to format returned prices. */
            currency_symbol: string;
            /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
            currency_minor_unit: number;
            /** Decimal separator for the currency which can be used to format returned prices. */
            currency_decimal_separator: string;
            /** Thousand separator for the currency which can be used to format returned prices. */
            currency_thousand_separator: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_prefix: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_suffix: string;
            /** Current product price. */
            price: string;
            /** Regular product price. */
            regular_price: string;
            /** Sale product price, if applicable. */
            sale_price: string;
            /** Price range, if applicable. */
            price_range: {
                /** Price amount. */
                min_amount: string;
                /** Price amount. */
                max_amount: string;
            } | null;
            /** Raw unrounded product prices used in calculations. Provided using a higher unit of precision than the currency. */
            raw_prices: {
                /** Decimal precision of the returned prices. */
                precision: number;
                /** Current product price. */
                price: string;
                /** Regular product price. */
                regular_price: string;
                /** Sale product price, if applicable. */
                sale_price: string;
            } | null;
        };
        /** Item total amounts provided using the smallest unit of the currency. */
        totals: {
            /** Currency code (in ISO format) for returned prices. */
            currency_code: string;
            /** Currency symbol for the currency which can be used to format returned prices. */
            currency_symbol: string;
            /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
            currency_minor_unit: number;
            /** Decimal separator for the currency which can be used to format returned prices. */
            currency_decimal_separator: string;
            /** Thousand separator for the currency which can be used to format returned prices. */
            currency_thousand_separator: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_prefix: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_suffix: string;
            /** Line subtotal (the price of the product before coupon discounts have been applied). */
            line_subtotal: string;
            /** Line subtotal tax. */
            line_subtotal_tax: string;
            /** Line total (the price of the product after coupon discounts have been applied). */
            line_total: string;
            /** Line total tax. */
            line_total_tax: string;
        };
        /** Whether the product is visible in the catalog */
        catalog_visibility: string;
        /** */
        extensions: {
            /** Extension data registered by subscriptions */
            subscriptions: {
                /** Billing period for the subscription. */
                billing_period: 'day' | 'week' | 'month' | 'year' | 'day' | 'week' | 'month' | 'year';
                /** The number of billing periods between subscription renewals. */
                billing_interval: number | null;
                /** Subscription Product length. */
                subscription_length: number | null;
                /** Subscription Product trial period. */
                trial_period: 'day' | 'week' | 'month' | 'year' | 'day' | 'week' | 'month' | 'year';
                /** Subscription Product trial interval. */
                trial_length: number | null;
                /** Subscription Product signup fees. */
                sign_up_fees: string | null;
                /** Subscription Product signup fees taxes. */
                sign_up_fees_tax: string | null;
                /** Indicates whether this product is being used to resubscribe the customer to an existing, expired subscription. */
                is_resubscribe: boolean;
                /** Indicates whether this product a subscription update, downgrade, cross grade or none of the above. */
                switch_type: string | null;
                /** Synchronization data for the subscription. */
                synchronization: {
                    /** Synchronization day if subscription is annual. */
                    day: number;
                    /** Synchronization month if subscription is annual. */
                    month: number;
                } | number | null;
            };
        };
    }[];
    /** Number of items in the cart. */
    items_count: number;
    /** Total weight (in grams) of all products in the cart. */
    items_weight: number;
    /** True if the cart needs payment. False for carts with only free products and no shipping costs. */
    needs_payment: boolean;
    /** True if the cart needs shipping. False for carts with only digital goods or stores with no shipping methods set-up. */
    needs_shipping: boolean;
    /** True if the cart meets the criteria for showing shipping costs, and rates have been calculated and included in the totals. */
    has_calculated_shipping: boolean;
    /** List of cart fees. */
    fees: {
        /** Unique identifier for the fee within the cart. */
        id: string;
        /** Fee name. */
        name: string;
        /** Fee total amounts provided using the smallest unit of the currency. */
        totals: {
            /** Currency code (in ISO format) for returned prices. */
            currency_code: string;
            /** Currency symbol for the currency which can be used to format returned prices. */
            currency_symbol: string;
            /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
            currency_minor_unit: number;
            /** Decimal separator for the currency which can be used to format returned prices. */
            currency_decimal_separator: string;
            /** Thousand separator for the currency which can be used to format returned prices. */
            currency_thousand_separator: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_prefix: string;
            /** Price prefix for the currency which can be used to format returned prices. */
            currency_suffix: string;
            /** Total amount for this fee. */
            total: string;
            /** Total tax amount for this fee. */
            total_tax: string;
        };
    }[];
    /** Cart total amounts provided using the smallest unit of the currency. */
    totals: {
        /** Currency code (in ISO format) for returned prices. */
        currency_code: string;
        /** Currency symbol for the currency which can be used to format returned prices. */
        currency_symbol: string;
        /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
        currency_minor_unit: number;
        /** Decimal separator for the currency which can be used to format returned prices. */
        currency_decimal_separator: string;
        /** Thousand separator for the currency which can be used to format returned prices. */
        currency_thousand_separator: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_prefix: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_suffix: string;
        /** Total price of items in the cart. */
        total_items: string;
        /** Total tax on items in the cart. */
        total_items_tax: string;
        /** Total price of any applied fees. */
        total_fees: string;
        /** Total tax on fees. */
        total_fees_tax: string;
        /** Total discount from applied coupons. */
        total_discount: string;
        /** Total tax removed due to discount from applied coupons. */
        total_discount_tax: string;
        /** Total price of shipping. If shipping has not been calculated, a null response will be sent. */
        total_shipping: string | null;
        /** Total tax on shipping. If shipping has not been calculated, a null response will be sent. */
        total_shipping_tax: string | null;
        /** Total price the customer will pay. */
        total_price: string;
        /** Total tax applied to items and shipping. */
        total_tax: string;
        /** Lines of taxes applied to items and shipping. */
        tax_lines: {
            /** The name of the tax. */
            name: string;
            /** The amount of tax charged. */
            price: string;
            /** The rate at which tax is applied. */
            rate: string;
        }[];
    };
    /** List of cart item errors, for example, items in the cart which are out of stock. */
    errors: {
        /** Error code */
        code: string;
        /** Error message */
        message: string;
    }[];
    /** List of required payment gateway features to process the order. */
    payment_requirements: unknown[];
    /** */
    extensions: {
        /** Extension data registered by subscriptions */
        subscriptions: unknown[]
        ;
    };
};
export type CartCoupon = {
    /** The coupon's unique code. */
    code: string;
    /** The discount type for the coupon (e.g. percentage or fixed amount) */
    discount_type: string;
    /** Total amounts provided using the smallest unit of the currency. */
    totals: {
        /** Currency code (in ISO format) for returned prices. */
        currency_code: string;
        /** Currency symbol for the currency which can be used to format returned prices. */
        currency_symbol: string;
        /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
        currency_minor_unit: number;
        /** Decimal separator for the currency which can be used to format returned prices. */
        currency_decimal_separator: string;
        /** Thousand separator for the currency which can be used to format returned prices. */
        currency_thousand_separator: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_prefix: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_suffix: string;
        /** Total discount applied by this coupon. */
        total_discount: string;
        /** Total tax removed due to discount applied by this coupon. */
        total_discount_tax: string;
    };
};
export type CartExtensions = {};
export type CartItem = {
    /** Unique identifier for the item within the cart. */
    key: string;
    /** The cart item product or variation ID. */
    id: number;
    /** Quantity of this item in the cart. */
    quantity: number;
    /** How the quantity of this item should be controlled, for example, any limits in place. */
    quantity_limits: {
        /** The minimum quantity allowed in the cart for this line item. */
        minimum: number;
        /** The maximum quantity allowed in the cart for this line item. */
        maximum: number;
        /** The amount that quantities increment by. Quantity must be an multiple of this value. */
        multiple_of: number;
        /** If the quantity in the cart is editable or fixed. */
        editable: boolean;
    };
    /** Product name. */
    name: string;
    /** Product short description in HTML format. */
    short_description: string;
    /** Product full description in HTML format. */
    description: string;
    /** Stock keeping unit, if applicable. */
    sku: string;
    /** Quantity left in stock if stock is low, or null if not applicable. */
    low_stock_remaining: number | null;
    /** True if backorders are allowed past stock availability. */
    backorders_allowed: boolean;
    /** True if the product is on backorder. */
    show_backorder_badge: boolean;
    /** If true, only one item of this product is allowed for purchase in a single order. */
    sold_individually: boolean;
    /** Product URL. */
    permalink: string;
    /** List of images. */
    images: {
        /** Image ID. */
        id: number;
        /** Full size image URL. */
        src: string;
        /** Thumbnail URL. */
        thumbnail: string;
        /** Thumbnail srcset for responsive images. */
        srcset: string;
        /** Thumbnail sizes for responsive images. */
        sizes: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    }[];
    /** Chosen attributes (for variations). */
    variation: {
        /** Variation attribute name. */
        attribute: string;
        /** Variation attribute value. */
        value: string;
    }[];
    /** Metadata related to the cart item */
    item_data: {
        /** Name of the metadata. */
        name: string;
        /** Value of the metadata. */
        value: string;
        /** Optionally, how the metadata value should be displayed to the user. */
        display: string;
    }[];
    /** Price data for the product in the current line item, including or excluding taxes based on the "display prices during cart and checkout" setting. Provided using the smallest unit of the currency. */
    prices: {
        /** Currency code (in ISO format) for returned prices. */
        currency_code: string;
        /** Currency symbol for the currency which can be used to format returned prices. */
        currency_symbol: string;
        /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
        currency_minor_unit: number;
        /** Decimal separator for the currency which can be used to format returned prices. */
        currency_decimal_separator: string;
        /** Thousand separator for the currency which can be used to format returned prices. */
        currency_thousand_separator: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_prefix: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_suffix: string;
        /** Current product price. */
        price: string;
        /** Regular product price. */
        regular_price: string;
        /** Sale product price, if applicable. */
        sale_price: string;
        /** Price range, if applicable. */
        price_range: {
            /** Price amount. */
            min_amount: string;
            /** Price amount. */
            max_amount: string;
        } | null;
        /** Raw unrounded product prices used in calculations. Provided using a higher unit of precision than the currency. */
        raw_prices: {
            /** Decimal precision of the returned prices. */
            precision: number;
            /** Current product price. */
            price: string;
            /** Regular product price. */
            regular_price: string;
            /** Sale product price, if applicable. */
            sale_price: string;
        } | null;
    };
    /** Item total amounts provided using the smallest unit of the currency. */
    totals: {
        /** Currency code (in ISO format) for returned prices. */
        currency_code: string;
        /** Currency symbol for the currency which can be used to format returned prices. */
        currency_symbol: string;
        /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
        currency_minor_unit: number;
        /** Decimal separator for the currency which can be used to format returned prices. */
        currency_decimal_separator: string;
        /** Thousand separator for the currency which can be used to format returned prices. */
        currency_thousand_separator: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_prefix: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_suffix: string;
        /** Line subtotal (the price of the product before coupon discounts have been applied). */
        line_subtotal: string;
        /** Line subtotal tax. */
        line_subtotal_tax: string;
        /** Line total (the price of the product after coupon discounts have been applied). */
        line_total: string;
        /** Line total tax. */
        line_total_tax: string;
    };
    /** Whether the product is visible in the catalog */
    catalog_visibility: string;
    /** */
    extensions: {
        /** Extension data registered by subscriptions */
        subscriptions: {
            /** Billing period for the subscription. */
            billing_period: 'day' | 'week' | 'month' | 'year' | 'day' | 'week' | 'month' | 'year';
            /** The number of billing periods between subscription renewals. */
            billing_interval: number | null;
            /** Subscription Product length. */
            subscription_length: number | null;
            /** Subscription Product trial period. */
            trial_period: 'day' | 'week' | 'month' | 'year' | 'day' | 'week' | 'month' | 'year';
            /** Subscription Product trial interval. */
            trial_length: number | null;
            /** Subscription Product signup fees. */
            sign_up_fees: string | null;
            /** Subscription Product signup fees taxes. */
            sign_up_fees_tax: string | null;
            /** Indicates whether this product is being used to resubscribe the customer to an existing, expired subscription. */
            is_resubscribe: boolean;
            /** Indicates whether this product a subscription update, downgrade, cross grade or none of the above. */
            switch_type: string | null;
            /** Synchronization data for the subscription. */
            synchronization: {
                /** Synchronization day if subscription is annual. */
                day: number;
                /** Synchronization month if subscription is annual. */
                month: number;
            } | number | null;
        };
    };
};
export type Checkout = {
    /** The order ID to process during checkout. */
    order_id: number;
    /** Order status. Payment providers will update this value after payment. */
    status: string;
    /** Order key used to check validity or protect access to certain order data. */
    order_key: string;
    /** Note added to the order by the customer during checkout. */
    customer_note: string;
    /** Customer ID if registered. Will return 0 for guests. */
    customer_id: number;
    /** Billing address. */
    billing_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** Shipping address. */
    shipping_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** The ID of the payment method being used to process the payment. */
    payment_method: string;
    /** Whether to create a new user account as part of order processing. */
    create_account: boolean;
    /** Result of payment processing, or false if not yet processed. */
    payment_result: {
        /** Status of the payment returned by the gateway. One of success, pending, failure, error. */
        payment_status: string;
        /** An array of data being returned from the payment gateway. */
        payment_details: {
            /** */
            key: string;
            /** */
            value: string;
        }[];
        /** A URL to redirect the customer after checkout. This could be, for example, a link to the payment processors website. */
        redirect_url: string;
    };
    /** */
    extensions: {};
};
export type Term = {
    /** Unique identifier for the resource. */
    id: number;
    /** Term name. */
    name: string;
    /** String based identifier for the term. */
    slug: string;
    /** Term description. */
    description: string;
    /** Parent term ID, if applicable. */
    parent: number;
    /** Number of objects (posts of any type) assigned to the term. */
    count: number;
};
export type ProductCategory = {
    /** Unique identifier for the resource. */
    id: number;
    /** Term name. */
    name: string;
    /** String based identifier for the term. */
    slug: string;
    /** Term description. */
    description: string;
    /** Parent term ID, if applicable. */
    parent: number;
    /** Number of objects (posts of any type) assigned to the term. */
    count: number;
    /** Category image. */
    image: {
        /** Image ID. */
        id: number;
        /** Full size image URL. */
        src: string;
        /** Thumbnail URL. */
        thumbnail: string;
        /** Thumbnail srcset for responsive images. */
        srcset: string;
        /** Thumbnail sizes for responsive images. */
        sizes: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Number of reviews for products in this category. */
    review_count: number;
    /** Category URL. */
    permalink: string;
};
export type ProductCollectionData = {
    /** Min and max prices found in collection of products, provided using the smallest unit of the currency. */
    price_range: {
        /** Currency code (in ISO format) for returned prices. */
        currency_code: string;
        /** Currency symbol for the currency which can be used to format returned prices. */
        currency_symbol: string;
        /** Currency minor unit (number of digits after the decimal separator) for returned prices. */
        currency_minor_unit: number;
        /** Decimal separator for the currency which can be used to format returned prices. */
        currency_decimal_separator: string;
        /** Thousand separator for the currency which can be used to format returned prices. */
        currency_thousand_separator: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_prefix: string;
        /** Price prefix for the currency which can be used to format returned prices. */
        currency_suffix: string;
        /** Min price found in collection of products. */
        min_price: string;
        /** Max price found in collection of products. */
        max_price: string;
    } | null;
    /** Returns number of products within attribute terms. */
    attribute_counts: {
        /** Term ID */
        term: number;
        /** Number of products. */
        count: number;
    }[] | null;
    /** Returns number of products with each average rating. */
    rating_counts: {
        /** Average rating */
        rating: number;
        /** Number of products. */
        count: number;
    }[] | null;
    /** Returns number of products with each stock status. */
    stock_status_counts: {
        /** Status */
        status: string;
        /** Number of products. */
        count: number;
    }[] | null;
};
export type MembershipPlan = {
    /** Unique identifier of the membership plan. */
    id: number;
    /** Membership plan name. */
    name: string;
    /** Membership plan slug. */
    slug: string;
    /** Membership plan status. */
    status: string;
    /** Membership plan access method. */
    access_method: string;
    /** Marks a membership plan that has at least one subscription product that can give access upon purchase. */
    has_subscription: boolean;
    /** Marks a membership plan whose duration is not bound to a tied subscription, but where the subscription handles installment billing. */
    has_subscription_installment: boolean;
    /** List of products that can grant access to the membership plan. */
    access_product_ids: number[]
    ;
    /** Duration type of the membership. */
    access_length_type: string;
    /** Membership plan access duration in seconds, when tied to a subscription. */
    subscription_access_length: number;
    /** Duration type of the membership plan when access is tied to a subscription. */
    subscription_access_length_type: string;
    /** Membership plan access duration in seconds. */
    access_length: number;
    /** The date when access will start, in the site timezone. */
    access_start_date: unknown;
    /** The date when access will start, in UTC. */
    access_start_date_gmt: unknown;
    /** The set date when access will end for fixed-length membership plans, in the site timezone. */
    access_end_date: unknown;
    /** The set date when access will end for fixed-length membership plans, in UTC. */
    access_end_date_gmt: unknown;
    /** The date when access will start, when tied to a subscription, in the site timezone. */
    subscription_access_start_date: unknown;
    /** The date when access will start, when tied to a subscription, in UTC. */
    subscription_access_start_date_gmt: unknown;
    /** The set date when access will end for fixed-length membership plans tied to a subscription, in the site timezone. */
    subscription_access_end_date: unknown;
    /** The set date when access will end for fixed-length membership plans tied to a subscription, in UTC. */
    subscription_access_end_date_gmt: unknown;
    /** The date when the membership plan was created, in the site timezone. */
    date_created: unknown;
    /** The date when the membership plan was created, in UTC. */
    date_created_gmt: unknown;
    /** The date when the membership plan was last updated, in the site timezone. */
    date_modified: unknown;
    /** The date when the membership plan was last updated, in UTC. */
    date_modified_gmt: unknown;
    /** Membership plan additional meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
};
export type UserMembership = {
    /** Unique identifier of the user membership. */
    id: number;
    /** Unique identifier of the user the membership belongs to. */
    customer_id: number;
    /** Unique identifier of the plan the user membership grants access to. */
    plan_id: number;
    /** User membership status. */
    status: 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Unique identifier of the order that grants access. */
    order_id: number;
    /** Unique identifier of the purchased product, or its variation, that grants access. */
    product_id: number;
    /** The date when the user membership is created, in the site timezone. */
    date_created: unknown;
    /** The date when the user membership is created, in UTC. */
    date_created_gmt: unknown;
    /** The date when the user membership starts being active, in the site timezone. */
    start_date: unknown;
    /** The date when the user membership starts being active, in UTC. */
    start_date_gmt: unknown;
    /** The date when the user membership ends, in the site timezone. */
    end_date: unknown;
    /** The date when the user membership ends, in UTC. */
    end_date_gmt: unknown;
    /** The date when the user membership was last paused, in the site timezone. */
    paused_date: unknown;
    /** The date when the user membership was last paused, in UTC. */
    paused_date_gmt: unknown;
    /** The date when the user membership was cancelled, in the site timezone. */
    cancelled_date: unknown;
    /** The date when the user membership was cancelled, in UTC. */
    cancelled_date_gmt: unknown;
    /** The URL pointing to the Members Area to view the membership. */
    view_url: string;
    /** User membership profile fields. */
    profile_fields: {
        /** Profile field slug. */
        slug;
        /** Profile field value. */
        value: unknown;
    }[];
    /** User membership additional meta data. */
    meta_data: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: unknown;
    }[];
    /** Unique identifier of a subscription the user membership is tied to. */
    subscription_id: number;
};
export type Products = {
    /** */
    title: unknown;
    /** */
    type: unknown;
    /** */
    properties: unknown;
};
export type CustomerDownload = {
    /** Download file URL. */
    download_url: string;
    /** Download ID (MD5). */
    download_id: string;
    /** Downloadable product ID. */
    product_id: number;
    /** Downloadable file name. */
    download_name: string;
    /** Order ID. */
    order_id: number;
    /** Order key. */
    order_key: string;
    /** Number of downloads remaining. */
    downloads_remaining: string;
    /** The date when download access expires, in the site's timezone. */
    access_expires: string;
    /** File details. */
    file: {
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    };
};
export type Customer = {
    /** Unique identifier for the resource. */
    id: number;
    /** The date the customer was created, as GMT. */
    date_created: unknown;
    /** The date the customer was last modified, as GMT. */
    date_modified: unknown;
    /** The email address for the customer. */
    email: string;
    /** Customer first name. */
    first_name: string;
    /** Customer last name. */
    last_name: string;
    /** Customer login name. */
    username: string;
    /** Customer password. */
    password: string;
    /** Last order data. */
    last_order: {
        /** Last order ID. */
        id: number;
        /** The date of the customer last order, as GMT. */
        date: unknown;
    };
    /** Quantity of orders made by the customer. */
    orders_count: number;
    /** Total amount spent. */
    total_spent: string;
    /** Avatar URL. */
    avatar_url: string;
    /** List of billing address data. */
    billing: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** List of shipping address data. */
    shipping: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
    };
};
export type OrderNote = {
    /** Unique identifier for the resource. */
    id: number;
    /** The date the order note was created, in the site's timezone. */
    date_created: unknown;
    /** Order note. */
    note: string;
    /** Shows/define if the note is only for reference or for the customer (the user will be notified). */
    customer_note: boolean;
};
export type ShopOrderRefund = {
    /** Unique identifier for the resource. */
    id: number;
    /** The date the order refund was created, in the site's timezone. */
    date_created: unknown;
    /** Refund amount. */
    amount: string;
    /** Reason for refund. */
    reason: string;
    /** Line items data. */
    line_items: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: unknown;
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: unknown;
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
};
export type ProductShippingClass = {
    /** Unique identifier for the resource. */
    id: number;
    /** Shipping class name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** HTML description of the resource. */
    description: string;
    /** Number of published products for the resource. */
    count: number;
};
export type ProductTag = {
    /** Unique identifier for the resource. */
    id: number;
    /** Tag name. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug: string;
    /** HTML description of the resource. */
    description: string;
    /** Number of published products for the resource. */
    count: number;
};
export type SalesReport = {
    /** Gross sales in the period. */
    total_sales: string;
    /** Net sales in the period. */
    net_sales: string;
    /** Average net daily sales. */
    average_sales: string;
    /** Total of orders placed. */
    total_orders: number;
    /** Total of items purchased. */
    total_items: number;
    /** Total charged for taxes. */
    total_tax: string;
    /** Total charged for shipping. */
    total_shipping: string;
    /** Total of refunded orders. */
    total_refunds: number;
    /** Total of coupons used. */
    total_discount: number;
    /** Group type. */
    totals_grouped_by: string;
    /** Totals. */
    totals: unknown[][]
    ;
};
export type TopSellersReport = {
    /** Product name. */
    name: string;
    /** Product ID. */
    product_id: number;
    /** Total number of purchases. */
    quantity: number;
};
export type TaxClass = {
    /** Unique identifier for the resource. */
    slug: string;
    /** Tax class name. */
    name: string;
};
export type Webhook = {
    /** Unique identifier for the resource. */
    id: number;
    /** A friendly name for the webhook. */
    name: string;
    /** Webhook status. */
    status: 'active' | 'paused' | 'disabled';
    /** Webhook topic. */
    topic: string;
    /** Webhook resource. */
    resource: string;
    /** Webhook event. */
    event: string;
    /** WooCommerce action names associated with the webhook. */
    hooks: string[]
    ;
    /** The URL where the webhook payload is delivered. */
    delivery_url: string;
    /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
    secret: string;
    /** The date the webhook was created, in the site's timezone. */
    date_created: unknown;
    /** The date the webhook was last modified, in the site's timezone. */
    date_modified: unknown;
};
export type WebhookDelivery = {
    /** Unique identifier for the resource. */
    id: number;
    /** The delivery duration, in seconds. */
    duration: string;
    /** A friendly summary of the response including the HTTP response code, message, and body. */
    summary: string;
    /** The URL where the webhook was delivered. */
    request_url: string;
    /** Request headers. */
    request_headers: string[]
    ;
    /** Request body. */
    request_body: string;
    /** The HTTP response code from the receiving server. */
    response_code: string;
    /** The HTTP response message from the receiving server. */
    response_message: string;
    /** Array of the response headers from the receiving server. */
    response_headers: string[]
    ;
    /** The response body from the receiving server. */
    response_body: string;
    /** The date the webhook delivery was logged, in the site's timezone. */
    date_created: unknown;
};
export type SettingGroup = {
    /** A unique identifier that can be used to link settings together. */
    id: string;
    /** A human readable label for the setting used in interfaces. */
    label: string;
    /** A human readable description for the setting used in interfaces. */
    description: string;
    /** ID of parent grouping. */
    parent_id: string;
    /** IDs for settings sub groups. */
    sub_groups: string;
};
export type ShippingZone = {
    /** Unique identifier for the resource. */
    id: number;
    /** Shipping zone name. */
    name: string;
    /** Shipping zone order. */
    order: number;
};
export type ShippingZoneLocation = {
    /** Shipping zone location code. */
    code: string;
    /** Shipping zone location type. */
    type: 'postcode' | 'state' | 'country' | 'continent';
};
export type ShippingZoneMethod = {
    /** Shipping method instance ID. */
    id: number;
    /** Shipping method instance ID. */
    instance_id: number;
    /** Shipping method customer facing title. */
    title: string;
    /** Shipping method sort order. */
    order: number;
    /** Shipping method enabled status. */
    enabled: boolean;
    /** Shipping method ID. */
    method_id: string;
    /** Shipping method title. */
    method_title: string;
    /** Shipping method description. */
    method_description: string;
    /** Shipping method settings. */
    settings: {
        /** A unique identifier for the setting. */
        id: string;
        /** A human readable label for the setting used in interfaces. */
        label: string;
        /** A human readable description for the setting used in interfaces. */
        description: string;
        /** Type of setting. */
        type: 'text' | 'email' | 'number' | 'color' | 'password' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'image_width' | 'checkbox';
        /** Setting value. */
        value: string;
        /** Default value for the setting. */
        default: string;
        /** Additional help text shown to the user about the setting. */
        tip: string;
        /** Placeholder text to be displayed in text inputs. */
        placeholder: string;
    };
};
export type SystemStatus = {
    /** Environment. */
    environment: {
        /** Home URL. */
        home_url: string;
        /** Site URL. */
        site_url: string;
        /** WooCommerce version. */
        version: string;
        /** Log directory. */
        log_directory: string;
        /** Is log directory writable? */
        log_directory_writable: boolean;
        /** WordPress version. */
        wp_version: string;
        /** Is WordPress multisite? */
        wp_multisite: boolean;
        /** WordPress memory limit. */
        wp_memory_limit: number;
        /** Is WordPress debug mode active? */
        wp_debug_mode: boolean;
        /** Are WordPress cron jobs enabled? */
        wp_cron: boolean;
        /** WordPress language. */
        language: string;
        /** Server info. */
        server_info: string;
        /** PHP version. */
        php_version: string;
        /** PHP post max size. */
        php_post_max_size: number;
        /** PHP max execution time. */
        php_max_execution_time: number;
        /** PHP max input vars. */
        php_max_input_vars: number;
        /** cURL version. */
        curl_version: string;
        /** Is SUHOSIN installed? */
        suhosin_installed: boolean;
        /** Max upload size. */
        max_upload_size: number;
        /** MySQL version. */
        mysql_version: string;
        /** MySQL version string. */
        mysql_version_string: string;
        /** Default timezone. */
        default_timezone: string;
        /** Is fsockopen/cURL enabled? */
        fsockopen_or_curl_enabled: boolean;
        /** Is SoapClient class enabled? */
        soapclient_enabled: boolean;
        /** Is DomDocument class enabled? */
        domdocument_enabled: boolean;
        /** Is GZip enabled? */
        gzip_enabled: boolean;
        /** Is mbstring enabled? */
        mbstring_enabled: boolean;
        /** Remote POST successful? */
        remote_post_successful: boolean;
        /** Remote POST response. */
        remote_post_response: string;
        /** Remote GET successful? */
        remote_get_successful: boolean;
        /** Remote GET response. */
        remote_get_response: string;
    };
    /** Database. */
    database: {
        /** WC database version. */
        wc_database_version: string;
        /** Database prefix. */
        database_prefix: string;
        /** MaxMind GeoIP database. */
        maxmind_geoip_database: string;
        /** Database tables. */
        database_tables: string[]
        ;
    };
    /** Active plugins. */
    active_plugins: string[]
    ;
    /** Inactive plugins. */
    inactive_plugins: string[]
    ;
    /** Dropins & MU plugins. */
    dropins_mu_plugins: string[]
    ;
    /** Theme. */
    theme: {
        /** Theme name. */
        name: string;
        /** Theme version. */
        version: string;
        /** Latest version of theme. */
        version_latest: string;
        /** Theme author URL. */
        author_url: string;
        /** Is this theme a child theme? */
        is_child_theme: boolean;
        /** Does the theme declare WooCommerce support? */
        has_woocommerce_support: boolean;
        /** Does the theme have a woocommerce.php file? */
        has_woocommerce_file: boolean;
        /** Does this theme have outdated templates? */
        has_outdated_templates: boolean;
        /** Template overrides. */
        overrides: string[]
        ;
        /** Parent theme name. */
        parent_name: string;
        /** Parent theme version. */
        parent_version: string;
        /** Parent theme author URL. */
        parent_author_url: string;
    };
    /** Settings. */
    settings: {
        /** REST API enabled? */
        api_enabled: boolean;
        /** SSL forced? */
        force_ssl: boolean;
        /** Currency. */
        currency: string;
        /** Currency symbol. */
        currency_symbol: string;
        /** Currency position. */
        currency_position: string;
        /** Thousand separator. */
        thousand_separator: string;
        /** Decimal separator. */
        decimal_separator: string;
        /** Number of decimals. */
        number_of_decimals: number;
        /** Geolocation enabled? */
        geolocation_enabled: boolean;
        /** Taxonomy terms for product/order statuses. */
        taxonomies: string[]
        ;
        /** Terms in the product visibility taxonomy. */
        product_visibility_terms: string[]
        ;
    };
    /** Security. */
    security: {
        /** Is the connection to your store secure? */
        secure_connection: boolean;
        /** Hide errors from visitors? */
        hide_errors: boolean;
    };
    /** WooCommerce pages. */
    pages: string[]
    ;
    /** Total post count. */
    post_type_counts: string[]
    ;
    /** */
    properties: unknown;
};
export type SystemStatusTool = {
    /** A unique identifier for the tool. */
    id: string;
    /** Tool name. */
    name: string;
    /** What running the tool will do. */
    action: string;
    /** Tool description. */
    description: string;
    /** Did the tool run successfully? */
    success: boolean;
    /** Tool return message. */
    message: string;
};
export type ShippingMethod = {
    /** Method ID. */
    id: string;
    /** Shipping method title. */
    title: string;
    /** Shipping method description. */
    description: string;
};
export type PaymentGateway = {
    /** Payment gateway ID. */
    id: string;
    /** Payment gateway title on checkout. */
    title: string;
    /** Payment gateway description on checkout. */
    description: string;
    /** Payment gateway sort order. */
    order: number;
    /** Payment gateway enabled status. */
    enabled: boolean;
    /** Payment gateway method title. */
    method_title: string;
    /** Payment gateway method description. */
    method_description: string;
    /** Payment gateway settings. */
    settings: {
        /** A unique identifier for the setting. */
        id: string;
        /** A human readable label for the setting used in interfaces. */
        label: string;
        /** A human readable description for the setting used in interfaces. */
        description: string;
        /** Type of setting. */
        type: 'text' | 'email' | 'number' | 'color' | 'password' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'image_width' | 'checkbox';
        /** Setting value. */
        value: string;
        /** Default value for the setting. */
        default: string;
        /** Additional help text shown to the user about the setting. */
        tip: string;
        /** Placeholder text to be displayed in text inputs. */
        placeholder: string;
    };
};
export type ReportOrderTotal = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** Order status name. */
    name: string;
    /** Amount of orders. */
    total: string;
};
export type ReportProductTotal = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** Product type name. */
    name: string;
    /** Amount of products. */
    total: string;
};
export type ReportCustomerTotal = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** Customer type name. */
    name: string;
    /** Amount of customers. */
    total: string;
};
export type ReportCouponTotal = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** Coupon type name. */
    name: string;
    /** Amount of coupons. */
    total: string;
};
export type ReportReviewTotal = {
    /** An alphanumeric identifier for the resource. */
    slug: string;
    /** Review type name. */
    name: string;
    /** Amount of reviews. */
    total: string;
};
export type DataContinents = {
    /** 2 character continent code. */
    code: string;
    /** Full name of continent. */
    name: string;
    /** List of countries on this continent. */
    countries: {
        /** ISO3166 alpha-2 country code. */
        code: string;
        /** Default ISO4127 alpha-3 currency code for the country. */
        currency_code: string;
        /** Currency symbol position for this country. */
        currency_pos: string;
        /** Decimal separator for displayed prices for this country. */
        decimal_sep: string;
        /** The unit lengths are defined in for this country. */
        dimension_unit: string;
        /** Full name of country. */
        name: string;
        /** Number of decimal points shown in displayed prices for this country. */
        num_decimals: number;
        /** List of states in this country. */
        states: {
            /** State code. */
            code: string;
            /** Full name of state. */
            name: string;
        }[];
        /** Thousands separator for displayed prices in this country. */
        thousand_sep: string;
        /** The unit weights are defined in for this country. */
        weight_unit: string;
    }[];
};
export type DataCurrencies = {
    /** ISO4217 currency code. */
    code: string;
    /** Full name of currency. */
    name: string;
    /** Currency symbol. */
    symbol: string;
};
export type WebhookTopic = {
    /** The unique key (identifier) for the webhook topic. */
    key: string;
    /** A friendly name for the webhook topic. */
    name: string;
};
export type ShopSubscription = {
    /** Unique identifier for the resource. */
    id: number;
    /** Parent order ID. */
    parent_id: number;
    /** Order status. */
    status: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Order key. */
    order_key: string;
    /** Order number. */
    number: string;
    /** Currency the order was created with, in ISO format. */
    currency: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** Version of WooCommerce which last updated the order. */
    version: number;
    /** True the prices included tax during checkout. */
    prices_include_tax: boolean;
    /** The date the order was created, as GMT. */
    date_created: unknown;
    /** The date the order was last modified, as GMT. */
    date_modified: unknown;
    /** User ID who owns the order. 0 for guests. */
    customer_id: number;
    /** Total discount amount for the order. */
    discount_total: string;
    /** Total discount tax amount for the order. */
    discount_tax: string;
    /** Total shipping amount for the order. */
    shipping_total: string;
    /** Total shipping tax amount for the order. */
    shipping_tax: string;
    /** Sum of line item taxes only. */
    cart_tax: string;
    /** Grand total. */
    total: string;
    /** Sum of all taxes. */
    total_tax: string;
    /** Billing address. */
    billing: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method: string;
    /** Payment method title. */
    payment_method_title: string;
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid: boolean;
    /** Unique transaction ID. */
    transaction_id: string;
    /** Customer's IP address. */
    customer_ip_address: string;
    /** User agent of the customer. */
    customer_user_agent: string;
    /** Shows where the order was created. */
    created_via: string;
    /** Note left by customer during checkout. */
    customer_note: string;
    /** The date the order was completed, in the site's timezone. */
    date_completed: unknown;
    /** The date the order was paid, in the site's timezone. */
    date_paid: unknown;
    /** MD5 hash of cart items to ensure orders are not modified. */
    cart_hash: string;
    /** Line items data. */
    line_items: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: unknown;
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: unknown;
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
    /** Tax lines data. */
    tax_lines: {
        /** Item ID. */
        id: number;
        /** Tax rate code. */
        rate_code: string;
        /** Tax rate ID. */
        rate_id: string;
        /** Tax rate label. */
        label: string;
        /** Show if is a compound tax rate. */
        compound: boolean;
        /** Tax total (not including shipping taxes). */
        tax_total: string;
        /** Shipping tax total. */
        shipping_tax_total: string;
    }[];
    /** Shipping lines data. */
    shipping_lines: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: unknown;
        /** Shipping method ID. */
        method_id: unknown;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
    }[];
    /** Fee lines data. */
    fee_lines: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: unknown;
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: unknown;
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
    }[];
    /** List of refunds. */
    refunds: {
        /** Refund ID. */
        id: number;
        /** Refund reason. */
        reason: string;
        /** Refund total. */
        total: string;
    }[];
    /** The status to transition the subscription to. Unlike the "status" param, this will calculate and update the subscription dates. */
    transition_status: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** The number of billing periods between subscription renewals. */
    billing_interval: number;
    /** Billing period for the subscription. */
    billing_period: 'day' | 'week' | 'month' | 'year';
    /** Subscription payment details. */
    payment_details: {
        /** Payment gateway ID. */
        method_id: string;
    };
    /** The subscription's start date. */
    start_date: unknown;
    /** The subscription's trial date */
    trial_end_date: unknown;
    /** The subscription's next payment date. */
    next_payment_date: unknown;
    /** The subscription's end date. */
    end_date: unknown;
    /** The subscription's original subscription ID if this is a resubscribed subscription. */
    resubscribed_from: string;
    /** The subscription's resubscribed subscription ID. */
    resubscribed_subscription: string;
    /** The date the subscription's latest order was completed, in GMT. */
    date_completed_gmt: unknown;
    /** The date the subscription's latest order was paid, in GMT. */
    date_paid_gmt: unknown;
    /** Removed line items data. */
    removed_line_items: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: unknown;
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: unknown;
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Removed line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: unknown;
        }[];
    }[];
};
export type Links = {
    /** Unique identifier for the object. */
    id: number;
    /** Workflow name */
    title: string;
    /** Whether the Workflow is active or disabled. */
    status: 'disabled' | 'active';
    /** The workflow type. */
    type: 'automatic' | 'manual';
    /** The type of event that triggers the workflow to run. */
    trigger: unknown[];
    /** When the workflow will run in relation to the trigger. */
    timing_type: 'immediately' | 'delayed' | 'scheduled' | 'datetime';
    /** Whether tracking is enabled for the Workflow. */
    is_tracking_enabled: boolean;
    /** Whether conversion tracking is enabled for the Workflow. */
    is_conversion_tracking_enabled: boolean;
};
export type Preset = {
    /** Unique name for the preset. */
    name: string;
    /** A string defining the type of the preset workflow. */
    type: string;
    /** A short title indicating the purpose of this preset workflow. */
    title: string;
    /** A short description about this preset. */
    description: string;
    /** Link to the documentation page for the preset. */
    link: string;
};
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
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
    jetpack_publicize_connections: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the media_tag taxonomy. */
    media_tag: number[]
    ;
    /** Unique VideoPress ID */
    jetpack_videopress_guid: string;
    /** VideoPress Data */
    jetpack_videopress: Record<string, unknown>;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
};
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
export type WpBlock = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type WpBlockRevision = {
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
export type WpTemplate = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** Post ID. */
    wp_id: number;
    /** Theme file exists. */
    has_theme_file: boolean;
    /** The ID for the author of the template. */
    author: number;
    /** Whether a template is a custom template. */
    is_custom: boolean;
};
export type WpTemplateRevision = {
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
export type WpTemplatePart = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** Post ID. */
    wp_id: number;
    /** Theme file exists. */
    has_theme_file: boolean;
    /** The ID for the author of the template. */
    author: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area: string;
};
export type WpTemplatePartRevision = {
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
export type WpNavigation = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type WpNavigationRevision = {
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
export type JobListing = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Location */
        _job_location: string;
        /** Application email/URL */
        _application: string;
        /** Company Name */
        _company_name: string;
        /** Company Website */
        _company_website: string;
        /** Company Tagline */
        _company_tagline: string;
        /** Company Twitter */
        _company_twitter: string;
        /** Company Video */
        _company_video: string;
        /** Position Filled */
        _filled: number;
        /** Featured Listing */
        _featured: number;
        /** Listing Expiry Date */
        _job_expires: string;
        /** Remote Position */
        _remote_position: number;
        /** Salary */
        _job_salary: string;
        /** Salary Currency */
        _job_salary_currency: string;
        /** Salary Unit */
        _job_salary_unit: string;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the job_listing_category taxonomy. */
    'job-categories': number[]
    ;
    /** The terms assigned to the post in the job_listing_type taxonomy. */
    'job-types': number[]
    ;
    /** */
    jetpack_publicize_connections: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type JobListingRevision = {
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
export type KadenceElement = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _kad_element_type: string;
        /** */
        _kad_element_hook: string;
        /** */
        _kad_element_hook_custom: string;
        /** */
        _kad_element_hook_priority: number;
        /** */
        _kad_element_hook_scroll: number;
        /** */
        _kad_element_show_conditionals: string;
        /** */
        _kad_element_all_show: boolean;
        /** */
        _kad_element_hide_conditionals: string;
        /** */
        _kad_element_user_conditionals: string;
        /** */
        _kad_element_device_conditionals: string;
        /** */
        _kad_element_enable_expires: boolean;
        /** */
        _kad_element_expires: string;
        /** */
        _kad_element_language: string;
        /** */
        _kad_element_fixed_width: string;
        /** */
        _kad_element_width: number;
        /** */
        _kad_element_fixed_position: string;
        /** */
        _kad_element_xposition: number;
        /** */
        _kad_element_yposition: number;
        /** */
        _kad_element_preview_post: string;
        /** */
        _kad_element_preview_post_type: string;
        /** */
        _kad_element_preview_width: string;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type KadenceElementRevision = {
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
export type Newsletterglue = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** The ID of the featured media for the post. */
    featured_media: number;
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the ngl_newsletter_cat taxonomy. */
    ngl_newsletter_cat: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type NewsletterglueRevision = {
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
export type NglTemplate = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the ngl_template_category taxonomy. */
    ngl_template_category: number[]
    ;
};
export type NglTemplateRevision = {
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
export type NglPattern = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
        /** */
        _ngl_core_pattern: string;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the ngl_pattern_category taxonomy. */
    ngl_pattern_category: number[]
    ;
};
export type NglPatternRevision = {
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
export type ProductRevision = {
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
    /** Preview link for the post. */
    preview_link: string;
};
export type TribeVenue = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type TribeVenueRevision = {
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
export type TribeOrganizer = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type TribeOrganizerRevision = {
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
export type TribeEvents = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _tribe_events_status: string;
        /** */
        _tribe_events_status_reason: string;
        /** */
        _tribe_events_is_hybrid: string;
        /** */
        _tribe_events_is_virtual: string;
        /** */
        _tribe_events_virtual_video_source: string;
        /** */
        _tribe_events_virtual_embed_video: string;
        /** */
        _tribe_events_virtual_linked_button_text: string;
        /** */
        _tribe_events_virtual_linked_button: string;
        /** */
        _tribe_events_virtual_show_embed_at: string;
        /** */
        _tribe_events_virtual_show_embed_to: string;
        /** */
        _tribe_events_virtual_show_on_event: string;
        /** */
        _tribe_events_virtual_show_on_views: string;
        /** */
        _tribe_events_virtual_url: string;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags: number[]
    ;
    /** The terms assigned to the post in the tribe_events_cat taxonomy. */
    tribe_events_cat: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type TribeEventsRevision = {
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
export type KbIcon = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type KbIconRevision = {
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
export type KadenceLottie = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type KadenceLottieRevision = {
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
export type JpPayOrder = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** Type of post. */
    type: string;
    /** A password to protect access to the content and excerpt. */
    password: string;
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
};
export type JpPayOrderRevision = {
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
    /** The excerpt for the post. */
    excerpt: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** Preview link for the post. */
    preview_link: string;
};
export type JpPayProduct = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** The ID for the author of the post. */
    author: number;
    /** The ID of the featured media for the post. */
    featured_media: number;
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Simple payments; price. */
        spay_price: number;
        /** Simple payments; currency code. */
        spay_currency: string;
        /** Simple payments; text with &quot;Buy&quot; or other CTA */
        spay_cta: string;
        /** Simple payments; allow multiple items */
        spay_multiple: boolean;
        /** Simple payments button; paypal email. */
        spay_email: string;
        /** Simple payments; status. */
        spay_status: string;
    };
    /** The theme file to use to display the post. */
    template: string;
};
export type JpPayProductRevision = {
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
export type PsMember = {
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template: string;
    /** The terms assigned to the post in the ps_member_category taxonomy. */
    ps_member_category: number[]
    ;
    /** The terms assigned to the post in the ps_member_type taxonomy. */
    ps_member_type: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled: boolean;
};
export type PsMemberRevision = {
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
    /** Preview link for the post. */
    preview_link: string;
};
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
        /** Whether to make the post type available for selection in navigation menus. */
        show_in_nav_menus: boolean;
    };
};
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
export type JobListingCategory = {
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
    taxonomy: 'job_listing_category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type JobListingType = {
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
    taxonomy: 'job_listing_type';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {
        /** Employment Type */
        employment_type: string;
    };
};
export type NglNewsletterCat = {
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
    taxonomy: 'ngl_newsletter_cat';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type NglTemplateCategory = {
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
    taxonomy: 'ngl_template_category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type NglPatternCategory = {
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
    taxonomy: 'ngl_pattern_category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type TribeEventsCat = {
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
    taxonomy: 'tribe_events_cat';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type MediaTag = {
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
    taxonomy: 'media_tag';
    /** Meta fields. */
    meta: {};
};
export type PsMemberCategory = {
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
    taxonomy: 'ps_member_category';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
export type PsMemberType = {
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
    taxonomy: 'ps_member_type';
    /** The parent term ID. */
    parent: number;
    /** Meta fields. */
    meta: {};
};
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
};
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
    subtype: 'post' | 'page' | 'job_listing' | 'kadence_element' | 'newsletterglue' | 'product' | 'tribe_venue' | 'tribe_organizer' | 'tribe_events' | 'ps_member' | 'category' | 'post_tag' | 'ngl_newsletter_cat' | 'ngl_template_category' | 'ngl_pattern_category' | 'product_cat' | 'product_tag' | 'tribe_events_cat' | 'media_tag' | 'ps_member_category' | 'ps_member_type';
};
export type RenderedBlock = {
    /** The rendered block. */
    rendered: string;
};
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
    /** Ancestor blocks. */
    ancestor: string[]
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
export type WpGlobalStyles = {
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
export type Settings = {
    /** */
    newsletterglue_admin_name: string;
    /** */
    newsletterglue_admin_address: string;
    /** */
    newsletterglue_logo_id: string;
    /** */
    newsletterglue_logo_width: string;
    /** */
    newsletterglue_instagram_url: string;
    /** */
    newsletterglue_tiktok_url: string;
    /** */
    newsletterglue_twitter_url: string;
    /** */
    newsletterglue_facebook_url: string;
    /** */
    newsletterglue_linkedin_url: string;
    /** */
    newsletterglue_twitch_url: string;
    /** */
    newsletterglue_youtube_url: string;
    /** Config Kadence Starter Templates */
    kadence_starter_templates_config: string;
    /** Send in Blue V3 API Key */
    kadence_blocks_send_in_blue_api: string;
    /** Mail Chimp API Key */
    kadence_blocks_mail_chimp_api: string;
    /** Config Kadence Block Defaults */
    kadence_blocks_config_blocks: string;
    /** Config Kadence Block Settings View */
    kadence_blocks_settings_blocks: string;
    /** Config Kadence Blocks Color Palette */
    kadence_blocks_colors: string;
    /** Config Kadence Blocks Global Settings */
    kadence_blocks_global: string;
    /** Google reCaptcha Site Key */
    kadence_blocks_recaptcha_site_key: string;
    /** Google reCaptcha Secret Key */
    kadence_blocks_recaptcha_secret_key: string;
    /** MailerLite API Key */
    kadence_blocks_mailerlite_api: string;
    /** Google Maps API Key */
    kadence_blocks_google_maps_api: string;
    /** Config Kadence Blocks Cloud */
    kadence_blocks_cloud: string;
    /** Subscribe to Wireframe library */
    kadence_blocks_wire_subscribe: boolean;
    /** Config Kadence Modules */
    kadence_theme_config: string;
    /** Config Kadence Pro Modules */
    kadence_pro_theme_config: string;
    /** Site title. */
    title: string;
    /** Site tagline. */
    description: string;
    /** Site URL. */
    url: string;
    /** This address is used for admin purposes, like new user notification. */
    email: string;
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
    /** What to show on the front page */
    show_on_front: string;
    /** The ID of the page that should be displayed on the front page */
    page_on_front: number;
    /** The ID of the page that should display the latest posts */
    page_for_posts: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status: 'open' | 'closed';
    /** Allow people to submit comments on new posts. */
    default_comment_status: 'open' | 'closed';
    /** Site logo. */
    site_logo: number;
    /** Site icon. */
    site_icon: number;
};
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
        /** Whether a theme uses block-based templates. */
        'block-templates': boolean;
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
export type Plugin = {
    /** The plugin file. */
    plugin: string;
    /** The plugin activation status. */
    status: 'inactive' | 'active';
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
    active_installs: number;
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
    /** The pattern's keywords. */
    keywords: string[]
    ;
    /** A description of the pattern. */
    description: string;
    /** The preferred width of the viewport when previewing a pattern, in pixels. */
    viewport_width: number;
};
export type BlockPattern = {
    /** The pattern name. */
    name: string;
    /** The pattern title, in human readable format. */
    title: string;
    /** The pattern detailed description. */
    description: string;
    /** The pattern viewport width for inserter preview. */
    viewport_width: number;
    /** Block types that the pattern is intended to be used with. */
    block_types: unknown[];
    /** The pattern category slugs. */
    categories: unknown[];
    /** The pattern keywords. */
    keywords: unknown[];
    /** The pattern content. */
    content: string;
    /** Determines whether the pattern is visible in inserter. */
    inserter: boolean;
};
export type BlockPatternCategory = {
    /** The category name. */
    name: string;
    /** The category label, in human readable format. */
    label: string;
};
export type WpSiteHealthTest = {
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
export type MenuLocation = {
    /** The name of the menu location. */
    name: string;
    /** The description of the menu location. */
    description: string;
    /** The ID of the assigned menu. */
    menu: number;
};
export type GetShopCouponsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to coupons with codes matching a given string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to resources with a specific code. */
    code?: string;
};
export type CreateShopCouponRequestArguments = {
    /** Coupon code. */
    code: string;
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount?: string;
    /** The status of the coupon. Should always be draft, published, or pending review */
    status?: string;
    /** Determines the type of discount that will be applied. */
    discount_type?: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** Coupon description. */
    description?: string;
    /** The date the coupon expires, in the site's timezone. */
    date_expires?: null | string;
    /** The date the coupon expires, as GMT. */
    date_expires_gmt?: null | string;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use?: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids?: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    excluded_product_ids?: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit?: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user?: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items?: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping?: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories?: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories?: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items?: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount?: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount?: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions?: string[]
    ;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetShopOrdersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to orders which have specific statuses. */
    status?: 'any' | 'trash' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft'[]
    ;
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
    /** Limit result set to orders matching part of an order number. */
    number?: string;
};
export type CreateShopOrderRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
};
export type GetProductsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Search by similar product name or sku. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order' | 'price' | 'popularity' | 'rating';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to featured products. */
    featured?: boolean;
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
    /** Limit result set to products with specified stock status. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** Limit results to those with a SKU that partial matches a string. */
    search_sku?: string;
    /** Limit result set to products that are low or out of stock. (Deprecated) */
    low_in_stock?: boolean;
};
export type CreateProductRequestArguments = {
    /** Product name. */
    name?: string;
    /** Product slug. */
    slug?: string;
    /** The date the product was created, in the site's timezone. */
    date_created?: null | string;
    /** The date the product was created, as GMT. */
    date_created_gmt?: null | string;
    /** Product type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured?: boolean;
    /** Catalog visibility. */
    catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description?: string;
    /** Product short description. */
    short_description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Product regular price. */
    regular_price?: string;
    /** Product sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt?: null | string;
    /** If the product is virtual. */
    virtual?: boolean;
    /** If the product is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Product external URL. Only for external products. */
    external_url?: string;
    /** Product external button text. Only for external products. */
    button_text?: string;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at product level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls the stock status of the product. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Low Stock amount for the product. */
    low_stock_amount?: number | null;
    /** Allow one item to be bought in a single order. */
    sold_individually?: boolean;
    /** Product weight (lbs). */
    weight?: string;
    /** Product dimensions. */
    dimensions?: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Allow reviews. */
    reviews_allowed?: boolean;
    /** List of up-sell products IDs. */
    upsell_ids?: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids?: number[]
    ;
    /** Product parent ID. */
    parent_id?: number;
    /** Optional note to send the customer after purchase. */
    purchase_note?: string;
    /** List of categories. */
    categories?: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags?: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    }[];
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: string[]
        ;
    }[];
    /** Defaults variation attributes. */
    default_attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
};
export type GetProductAttributesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Search by similar attribute name. */
    search?: string;
};
export type CreateProductAttributeRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** Type of attribute. */
    type?: 'select';
    /** Default sort order. */
    order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
    /** Enable/Disable attribute archives. */
    has_archives?: boolean;
};
export type GetProductAttributeTermsRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductAttributeTermRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductCatsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductCatRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** The ID for the parent of the resource. */
    parent?: number;
    /** HTML description of the resource. */
    description?: string;
    /** Category archive display type. */
    display?: 'default' | 'products' | 'subcategories' | 'both';
    /** Image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductReviewsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to reviews published before a given ISO8601 compliant date. */
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
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
    /** Limit result set to reviews assigned to specific user IDs. */
    reviewer?: number[]
    ;
    /** Ensure result set excludes reviews assigned to specific user IDs. */
    reviewer_exclude?: number[]
    ;
    /** Limit result set to that from a specific author email. */
    reviewer_email?: string;
    /** Limit result set to reviews assigned to specific product IDs. */
    product?: number[]
    ;
    /** Limit result set to reviews assigned a specific status. */
    status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
};
export type CreateProductReviewRequestArguments = {
    /** Unique identifier for the product. */
    product_id: number;
    /** Product name. */
    product_name?: string;
    /** Status of the review. */
    status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
    /** Name of the reviewer. */
    reviewer: string;
    /** Email of the reviewer. */
    reviewer_email: string;
    /** Review content. */
    review: string;
    /** Review rating (0 to 5). */
    rating?: number;
};
export type GetDataIndexsRequestArguments = {
    /** Optional parameter to get only specific task lists by id. */
    ids?: 'setup' | 'setup_experiment_1' | 'setup_experiment_2' | 'extended' | 'setup_two_column' | 'extended_two_column' | 'secret_tasklist'[]
    ;
};
export type CreateDataIndexRequestArguments = {
    /** Optional parameter to get only specific task lists by id. */
    ids?: 'setup' | 'setup_experiment_1' | 'setup_experiment_2' | 'extended' | 'setup_two_column' | 'extended_two_column' | 'secret_tasklist'[]
    ;
    /** List of extended deprecated tasks from the client side filter. */
    extended_tasks?: unknown[];
};
export type GetTaxsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'order' | 'priority';
    /** Sort by tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
    /** Search by similar tax code. */
    search?: string;
    /** Limit result set to items that have the specified rate ID(s) assigned. */
    include?: number[]
    ;
};
export type CreateTaxRequestArguments = {
    /** Country ISO 3166 code. */
    country?: string;
    /** State code. */
    state?: string;
    /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
    postcode?: string;
    /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
    city?: string;
    /** Tax rate. */
    rate?: string;
    /** Tax rate name. */
    name?: string;
    /** Tax priority. */
    priority?: number;
    /** Whether or not this is a compound rate. */
    compound?: boolean;
    /** Whether or not this tax rate also gets applied to shipping. */
    shipping?: boolean;
    /** Indicates the order that will appear in queries. */
    order?: number;
    /** Tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
    /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
    postcodes?: string[]
    ;
    /** List of city names. Introduced in WooCommerce 5.3. */
    cities?: string[]
    ;
};
export type GetCheckoutsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateCheckoutRequestArguments = {
    /** Data to pass through to the payment method when processing payment. */
    payment_data?: {
        /** */
        key: string;
        /** */
        value: string | boolean;
    }[];
    /** Note added to the order by the customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** Shipping address. */
    shipping_address?: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** The ID of the payment method being used to process the payment. */
    payment_method?: string;
    /** Whether to create a new user account as part of order processing. */
    create_account?: boolean;
    /** */
    extensions?: {};
};
export type GetCheckoutsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateCheckoutRequestArguments = {
    /** Data to pass through to the payment method when processing payment. */
    payment_data?: {
        /** */
        key: string;
        /** */
        value: string | boolean;
    }[];
    /** Note added to the order by the customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing_address: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** Shipping address. */
    shipping_address?: {
        /** First name */
        first_name: string;
        /** Last name */
        last_name: string;
        /** Company */
        company: string;
        /** Address */
        address_1: string;
        /** Apartment, suite, etc. */
        address_2: string;
        /** City */
        city: string;
        /** State/County code, or name of the state, county, province, or district. */
        state: string;
        /** Postal code */
        postcode: string;
        /** Country/Region code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Phone */
        phone: string;
        /** Email */
        email: string;
    };
    /** The ID of the payment method being used to process the payment. */
    payment_method?: string;
    /** Whether to create a new user account as part of order processing. */
    create_account?: boolean;
    /** */
    extensions?: {};
};
export type GetUserMembershipsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Limit results to user memberships of a specific status. */
    status?: 'any' | 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Limit results to user memberships for a specific plan (matched by ID or slug). */
    plan?: string;
    /** Limit results to user memberships belonging to a specific customer (matched by ID, login name or email address). */
    customer?: string;
    /** Limit results to user memberships related to a specific order (matched by ID). */
    order?: number;
    /** Limit results to user memberships granted after the purchase of a specific product (matched by ID). */
    product?: number;
    /** Limit results to user memberships linked to a specific subscription (matched by ID). */
    subscription?: number;
};
export type CreateUserMembershipRequestArguments = {
    /** Unique identifier of the user the membership belongs to. */
    customer_id: number;
    /** Unique identifier of the plan the user membership grants access to. */
    plan_id: number;
    /** User membership status. */
    status?: 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Unique identifier of the order that grants access. */
    order_id?: number;
    /** Unique identifier of a subscription the user membership is tied to. */
    subscription_id?: number;
    /** Flag whether the user membership is using a subscription for installments. */
    installment_plan?: boolean;
    /** Unique identifier of the purchased product, or its variation, that grants access. */
    product_id?: number;
    /** The date when the user membership starts being active, in UTC. */
    start_date_gmt?: null | string;
    /** The date when the user membership ends, in UTC. */
    end_date_gmt?: null | string;
    /** The date when the user membership was last paused, in UTC. */
    paused_date_gmt?: null | string;
    /** The date when the user membership was cancelled, in UTC. */
    cancelled_date_gmt?: null | string;
    /** User membership profile fields. */
    profile_fields?: {
        /** Profile field slug. */
        slug;
        /** Profile field value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** User membership additional meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetUserMembershipsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Limit results to user memberships of a specific status. */
    status?: 'any' | 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Limit results to user memberships for a specific plan (matched by ID or slug). */
    plan?: string;
    /** Limit results to user memberships belonging to a specific customer (matched by ID, login name or email address). */
    customer?: string;
    /** Limit results to user memberships related to a specific order (matched by ID). */
    order?: number;
    /** Limit results to user memberships granted after the purchase of a specific product (matched by ID). */
    product?: number;
    /** Limit results to user memberships linked to a specific subscription (matched by ID). */
    subscription?: number;
};
export type CreateUserMembershipRequestArguments = {
    /** Unique identifier of the user the membership belongs to. */
    customer_id: number;
    /** Unique identifier of the plan the user membership grants access to. */
    plan_id: number;
    /** User membership status. */
    status?: 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Unique identifier of the order that grants access. */
    order_id?: number;
    /** Unique identifier of a subscription the user membership is tied to. */
    subscription_id?: number;
    /** Flag whether the user membership is using a subscription for installments. */
    installment_plan?: boolean;
    /** Unique identifier of the purchased product, or its variation, that grants access. */
    product_id?: number;
    /** The date when the user membership starts being active, in UTC. */
    start_date_gmt?: null | string;
    /** The date when the user membership ends, in UTC. */
    end_date_gmt?: null | string;
    /** The date when the user membership was last paused, in UTC. */
    paused_date_gmt?: null | string;
    /** The date when the user membership was cancelled, in UTC. */
    cancelled_date_gmt?: null | string;
    /** User membership profile fields. */
    profile_fields?: {
        /** Profile field slug. */
        slug;
        /** Profile field value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** User membership additional meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetUserMembershipsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Limit results to user memberships of a specific status. */
    status?: string[]
    ;
    /** Limit results to user memberships for a specific plan (matched by ID or slug). */
    plan?: number[]
    ;
    /** Limit results to user memberships belonging to a specific customer (matched by ID, login name or email address). */
    customer?: string;
    /** Limit results to user memberships related to a specific order (matched by ID). */
    order?: number;
    /** Limit results to user memberships granted after the purchase of a specific product (matched by ID). */
    product?: number;
    /** Limit results to user memberships linked to a specific subscription (matched by ID). */
    subscription?: number;
};
export type CreateUserMembershipRequestArguments = {
    /** Unique identifier of the user the membership belongs to. */
    customer_id: number;
    /** Unique identifier of the plan the user membership grants access to. */
    plan_id: number;
    /** User membership status. */
    status?: 'active' | 'free_trial' | 'delayed' | 'complimentary' | 'pending' | 'paused' | 'expired' | 'cancelled';
    /** Unique identifier of the order that grants access. */
    order_id?: number;
    /** Unique identifier of a subscription the user membership is tied to. */
    subscription_id?: number;
    /** Flag whether the user membership is using a subscription for installments. */
    installment_plan?: boolean;
    /** Unique identifier of the purchased product, or its variation, that grants access. */
    product_id?: number;
    /** The date when the user membership starts being active, in UTC. */
    start_date_gmt?: null | string;
    /** The date when the user membership ends, in UTC. */
    end_date_gmt?: null | string;
    /** The date when the user membership was last paused, in UTC. */
    paused_date_gmt?: null | string;
    /** The date when the user membership was cancelled, in UTC. */
    cancelled_date_gmt?: null | string;
    /** User membership profile fields. */
    profile_fields?: {
        /** Profile field slug. */
        slug;
        /** Profile field value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** User membership additional meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetShopCouponsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
    filter?: Record<string, unknown>;
    /** Limit result set to resources with a specific code. */
    code?: string;
};
export type CreateShopCouponRequestArguments = {
    /** Coupon code. */
    code: string;
    /** Coupon description. */
    description?: string;
    /** Determines the type of discount that will be applied. */
    discount_type?: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount?: string;
    /** UTC DateTime when the coupon expires. */
    expiry_date?: null | string;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use?: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids?: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    exclude_product_ids?: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit?: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user?: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items?: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping?: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories?: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories?: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items?: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount?: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount?: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions?: string[]
    ;
};
export type GetCustomersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
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
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'include' | 'name' | 'registered_date';
    /** Limit result set to resources with a specific email. */
    email?: string;
    /** Limit result set to resources with a specific role. */
    role?: 'all' | 'administrator' | 'editor' | 'author' | 'contributor' | 'subscriber' | 'spec_comment_moderator' | 'customer' | 'shop_manager' | 'fue_manager' | 'employer' | 'wpseo_manager' | 'wpseo_editor' | 'analytics_manager' | 'newsletterglue_manager';
};
export type CreateCustomerRequestArguments = {
    /** New user email address. */
    email: string;
    /** Customer first name. */
    first_name?: string;
    /** Customer last name. */
    last_name?: string;
    /** New user username. */
    username: string;
    /** New user password. */
    password?: string;
    /** List of billing address data. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** List of shipping address data. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
    };
};
export type GetOrderNotesRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateOrderNoteRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Order note content. */
    note: string;
    /** Shows/define if the note is only for reference or for the customer (the user will be notified). */
    customer_note?: boolean;
};
export type GetShopOrderRefundsRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
    filter?: Record<string, unknown>;
    /** Limit result set to orders assigned a specific status. */
    status?: 'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
};
export type CreateShopOrderRefundRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Refund amount. */
    amount?: string;
    /** Reason for refund. */
    reason?: string;
};
export type GetShopOrdersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
    filter?: Record<string, unknown>;
    /** Limit result set to orders assigned a specific status. */
    status?: 'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
};
export type CreateShopOrderRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
    }[];
};
export type GetProductAttributeTermsRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductAttributeTermRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductAttributesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateProductAttributeRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** Type of attribute. */
    type?: 'select';
    /** Default sort order. */
    order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
    /** Enable/Disable attribute archives. */
    has_archives?: boolean;
};
export type GetProductCatsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductCatRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** The ID for the parent of the resource. */
    parent?: number;
    /** HTML description of the resource. */
    description?: string;
    /** Category archive display type. */
    display?: 'default' | 'products' | 'subcategories' | 'both';
    /** Image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        title: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductReviewsRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Unique identifier for the variation. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateProductReviewRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Unique identifier for the variation. */
    id?: number;
    /** Review content. */
    review: string;
    /** The date the review was created, in the site's timezone. */
    date_created?: null | string;
    /** Review rating (0 to 5). */
    rating?: number;
    /** Name of the reviewer. */
    name: string;
    /** Email of the reviewer. */
    email: string;
};
export type GetProductShippingClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductShippingClassRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductTagsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductTagRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
    filter?: Record<string, unknown>;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products with a specific SKU. */
    sku?: string;
};
export type CreateProductRequestArguments = {
    /** Product name. */
    name?: string;
    /** Product slug. */
    slug?: string;
    /** Product type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured?: boolean;
    /** Catalog visibility. */
    catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description?: string;
    /** Product short description. */
    short_description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Product regular price. */
    regular_price?: string;
    /** Product sale price. */
    sale_price?: string;
    /** Start date of sale price. */
    date_on_sale_from?: string;
    /** End date of sale price. */
    date_on_sale_to?: string;
    /** If the product is virtual. */
    virtual?: boolean;
    /** If the product is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Download type, this controls the schema on the front-end. */
    download_type?: 'standard';
    /** Product external URL. Only for external products. */
    external_url?: string;
    /** Product external button text. Only for external products. */
    button_text?: string;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at product level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
    in_stock?: boolean;
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Allow one item to be bought in a single order. */
    sold_individually?: boolean;
    /** Product weight (lbs). */
    weight?: string;
    /** Product dimensions. */
    dimensions?: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Allow reviews. */
    reviews_allowed?: boolean;
    /** List of upsell products IDs. */
    upsell_ids?: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids?: number[]
    ;
    /** Product parent ID. */
    parent_id?: number;
    /** Optional note to send the customer after purchase. */
    purchase_note?: string;
    /** List of categories. */
    categories?: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags?: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
        /** Image position. 0 means that the image is featured. */
        position: number;
    }[];
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: unknown[];
    }[];
    /** Defaults variation attributes. */
    default_attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** List of variations. */
    variations?: {
        /** Variation ID. */
        id: number;
        /** The date the variation was created, in the site's timezone. */
        date_created: null | string;
        /** The date the variation was last modified, in the site's timezone. */
        date_modified: null | string;
        /** Variation URL. */
        permalink: string;
        /** Unique identifier. */
        sku: string;
        /** Current variation price. */
        price: string;
        /** Variation regular price. */
        regular_price: string;
        /** Variation sale price. */
        sale_price: string;
        /** Start date of sale price. */
        date_on_sale_from: string;
        /** End date of sale price. */
        date_on_sale_to: string;
        /** Shows if the variation is on sale. */
        on_sale: boolean;
        /** Shows if the variation can be bought. */
        purchasable: boolean;
        /** If the variation is visible. */
        visible: boolean;
        /** If the variation is virtual. */
        virtual: boolean;
        /** If the variation is downloadable. */
        downloadable: boolean;
        /** List of downloadable files. */
        downloads: {
            /** File ID. */
            id: string;
            /** File name. */
            name: string;
            /** File URL. */
            file: string;
        }[];
        /** Number of times downloadable files can be downloaded after purchase. */
        download_limit: number;
        /** Number of days until access to downloadable files expires. */
        download_expiry: number;
        /** Tax status. */
        tax_status: 'taxable' | 'shipping' | 'none';
        /** Tax class. */
        tax_class: string;
        /** Stock management at variation level. */
        manage_stock: boolean;
        /** Stock quantity. */
        stock_quantity: number;
        /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
        in_stock: boolean;
        /** If managing stock, this controls if backorders are allowed. */
        backorders: 'no' | 'notify' | 'yes';
        /** Shows if backorders are allowed. */
        backorders_allowed: boolean;
        /** Shows if the variation is on backordered. */
        backordered: boolean;
        /** Variation weight (lbs). */
        weight: string;
        /** Variation dimensions. */
        dimensions: {
            /** Variation length (in). */
            length: string;
            /** Variation width (in). */
            width: string;
            /** Variation height (in). */
            height: string;
        };
        /** Shipping class slug. */
        shipping_class: string;
        /** Shipping class ID. */
        shipping_class_id: number;
        /** Variation image data. */
        image: {
            /** Image ID. */
            id: number;
            /** The date the image was created, in the site's timezone. */
            date_created: null | string;
            /** The date the image was last modified, in the site's timezone. */
            date_modified: null | string;
            /** Image URL. */
            src: string;
            /** Image name. */
            name: string;
            /** Image alternative text. */
            alt: string;
            /** Image position. 0 means that the image is featured. */
            position: number;
        };
        /** List of attributes. */
        attributes: {
            /** Attribute ID. */
            id: number;
            /** Attribute name. */
            name: string;
            /** Selected attribute term name. */
            option: string;
        }[];
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTaxClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateTaxClassRequestArguments = {
    /** Tax class name. */
    name: string;
};
export type GetTaxsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'order' | 'priority';
    /** Sort by tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
};
export type CreateTaxRequestArguments = {
    /** Country ISO 3166 code. */
    country?: string;
    /** State code. */
    state?: string;
    /** Postcode / ZIP. */
    postcode?: string;
    /** City name. */
    city?: string;
    /** Tax rate. */
    rate?: string;
    /** Tax rate name. */
    name?: string;
    /** Tax priority. */
    priority?: number;
    /** Whether or not this is a compound rate. */
    compound?: boolean;
    /** Whether or not this tax rate also gets applied to shipping. */
    shipping?: boolean;
    /** Indicates the order that will appear in queries. */
    order?: number;
    /** Tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
};
export type GetWebhooksRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'title';
    /** Limit result set to webhooks assigned a specific status. */
    status?: 'all' | 'active' | 'paused' | 'disabled';
};
export type CreateWebhookRequestArguments = {
    /** A friendly name for the webhook. */
    name?: string;
    /** Webhook status. */
    status?: 'active' | 'paused' | 'disabled';
    /** Webhook topic. */
    topic: string;
    /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
    secret?: string;
    /** Webhook delivery URL. */
    delivery_url: string;
};
export type GetShopCouponsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to resources with a specific code. */
    code?: string;
};
export type CreateShopCouponRequestArguments = {
    /** Coupon code. */
    code: string;
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount?: string;
    /** The status of the coupon. Should always be draft, published, or pending review */
    status?: string;
    /** Determines the type of discount that will be applied. */
    discount_type?: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** Coupon description. */
    description?: string;
    /** The date the coupon expires, in the site's timezone. */
    date_expires?: null | string;
    /** The date the coupon expires, as GMT. */
    date_expires_gmt?: null | string;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use?: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids?: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    excluded_product_ids?: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit?: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user?: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items?: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping?: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories?: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories?: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items?: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount?: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount?: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions?: string[]
    ;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetCustomersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
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
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'include' | 'name' | 'registered_date';
    /** Limit result set to resources with a specific email. */
    email?: string;
    /** Limit result set to resources with a specific role. */
    role?: 'all' | 'administrator' | 'editor' | 'author' | 'contributor' | 'subscriber' | 'spec_comment_moderator' | 'customer' | 'shop_manager' | 'fue_manager' | 'employer' | 'wpseo_manager' | 'wpseo_editor' | 'analytics_manager' | 'newsletterglue_manager';
};
export type CreateCustomerRequestArguments = {
    /** New user email address. */
    email: string;
    /** Customer first name. */
    first_name?: string;
    /** Customer last name. */
    last_name?: string;
    /** New user username. */
    username: string;
    /** New user password. */
    password?: string;
    /** List of billing address data. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** List of shipping address data. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
    };
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetOrderNotesRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Limit result to customers or internal notes. */
    type?: 'any' | 'customer' | 'internal';
};
export type CreateOrderNoteRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Order note content. */
    note: string;
    /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
    customer_note?: boolean;
};
export type GetShopOrderRefundsRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopOrderRefundRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Refund amount. */
    amount?: string;
    /** Reason for refund. */
    reason?: string;
    /** User ID of user who created the refund. */
    refunded_by?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** When true, the payment gateway API is used to generate the refund. */
    api_refund?: boolean;
};
export type GetShopOrdersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to orders assigned a specific status. */
    status?: 'any' | 'trash' | 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopOrderRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
};
export type GetProductAttributeTermsRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductAttributeTermRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductAttributesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateProductAttributeRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** Type of attribute. */
    type?: 'select';
    /** Default sort order. */
    order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
    /** Enable/Disable attribute archives. */
    has_archives?: boolean;
};
export type GetProductCatsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductCatRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** The ID for the parent of the resource. */
    parent?: number;
    /** HTML description of the resource. */
    description?: string;
    /** Category archive display type. */
    display?: 'default' | 'products' | 'subcategories' | 'both';
    /** Image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        title: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductReviewsRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Unique identifier for the variation. */
    id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateProductReviewRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Unique identifier for the variation. */
    id?: number;
    /** Review content. */
    review: string;
    /** The date the review was created, in the site's timezone. */
    date_created?: null | string;
    /** The date the review was created, as GMT. */
    date_created_gmt?: null | string;
    /** Review rating (0 to 5). */
    rating?: number;
    /** Name of the reviewer. */
    name: string;
    /** Email of the reviewer. */
    email: string;
};
export type GetProductShippingClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductShippingClassRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductTagsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductTagRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to featured products. */
    featured?: boolean;
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products in stock or out of stock. */
    in_stock?: boolean;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
};
export type CreateProductRequestArguments = {
    /** Product name. */
    name?: string;
    /** Product slug. */
    slug?: string;
    /** Product type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured?: boolean;
    /** Catalog visibility. */
    catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description?: string;
    /** Product short description. */
    short_description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Product regular price. */
    regular_price?: string;
    /** Product sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, as GMT. */
    date_on_sale_to_gmt?: null | string;
    /** If the product is virtual. */
    virtual?: boolean;
    /** If the product is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Product external URL. Only for external products. */
    external_url?: string;
    /** Product external button text. Only for external products. */
    button_text?: string;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at product level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
    in_stock?: boolean;
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Allow one item to be bought in a single order. */
    sold_individually?: boolean;
    /** Product weight (lbs). */
    weight?: string;
    /** Product dimensions. */
    dimensions?: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Allow reviews. */
    reviews_allowed?: boolean;
    /** List of up-sell products IDs. */
    upsell_ids?: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids?: number[]
    ;
    /** Product parent ID. */
    parent_id?: number;
    /** Optional note to send the customer after purchase. */
    purchase_note?: string;
    /** List of categories. */
    categories?: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags?: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
        /** Image position. 0 means that the image is featured. */
        position: number;
    }[];
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: string[]
        ;
    }[];
    /** Defaults variation attributes. */
    default_attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** List of grouped products ID. */
    grouped_products?: number[]
    ;
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetProductVariationsRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to featured products. */
    featured?: boolean;
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products in stock or out of stock. */
    in_stock?: boolean;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
};
export type CreateProductVariationRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Variation description. */
    description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Variation regular price. */
    regular_price?: string;
    /** Variation sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, as GMT. */
    date_on_sale_to_gmt?: null | string;
    /** Define if the variation is visible on the product's page. */
    visible?: boolean;
    /** If the variation is virtual. */
    virtual?: boolean;
    /** If the variation is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at variation level. */
    manage_stock?: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
    in_stock?: boolean;
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Variation weight (lbs). */
    weight?: string;
    /** Variation dimensions. */
    dimensions?: {
        /** Variation length (in). */
        length: string;
        /** Variation width (in). */
        width: string;
        /** Variation height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Variation image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
        /** Image position. 0 means that the image is featured. */
        position: number;
    };
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetShippingZonesRequestArguments = {};
export type CreateShippingZoneRequestArguments = {
    /** Shipping zone name. */
    name: string;
    /** Shipping zone order. */
    order?: number;
};
export type GetShippingZoneMethodsRequestArguments = {
    /** Unique ID for the zone. */
    zone_id?: number;
};
export type CreateShippingZoneMethodRequestArguments = {
    /** Unique ID for the zone. */
    zone_id?: number;
    /** Shipping method sort order. */
    order?: number;
    /** Shipping method enabled status. */
    enabled?: boolean;
    /** Shipping method settings. */
    settings?: {
        /** A unique identifier for the setting. */
        id: string;
        /** A human readable label for the setting used in interfaces. */
        label: string;
        /** A human readable description for the setting used in interfaces. */
        description: string;
        /** Type of setting. */
        type: 'text' | 'email' | 'number' | 'color' | 'password' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'image_width' | 'checkbox';
        /** Setting value. */
        value: string;
        /** Default value for the setting. */
        default: string;
        /** Additional help text shown to the user about the setting. */
        tip: string;
        /** Placeholder text to be displayed in text inputs. */
        placeholder: string;
    };
    /** Shipping method ID. */
    method_id: unknown;
};
export type GetTaxClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateTaxClassRequestArguments = {
    /** Tax class name. */
    name: string;
};
export type GetTaxsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'order' | 'priority';
    /** Sort by tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
};
export type CreateTaxRequestArguments = {
    /** Country ISO 3166 code. */
    country?: string;
    /** State code. */
    state?: string;
    /** Postcode / ZIP. */
    postcode?: string;
    /** City name. */
    city?: string;
    /** Tax rate. */
    rate?: string;
    /** Tax rate name. */
    name?: string;
    /** Tax priority. */
    priority?: number;
    /** Whether or not this is a compound rate. */
    compound?: boolean;
    /** Whether or not this tax rate also gets applied to shipping. */
    shipping?: boolean;
    /** Indicates the order that will appear in queries. */
    order?: number;
    /** Tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
};
export type GetWebhooksRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'title';
    /** Limit result set to webhooks assigned a specific status. */
    status?: 'all' | 'active' | 'paused' | 'disabled';
};
export type CreateWebhookRequestArguments = {
    /** A friendly name for the webhook. */
    name?: string;
    /** Webhook status. */
    status?: 'active' | 'paused' | 'disabled';
    /** Webhook topic. */
    topic: string;
    /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
    secret?: string;
    /** Webhook delivery URL. */
    delivery_url: string;
};
export type GetShopCouponsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to resources with a specific code. */
    code?: string;
};
export type CreateShopCouponRequestArguments = {
    /** Coupon code. */
    code: string;
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount?: string;
    /** The status of the coupon. Should always be draft, published, or pending review */
    status?: string;
    /** Determines the type of discount that will be applied. */
    discount_type?: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** Coupon description. */
    description?: string;
    /** The date the coupon expires, in the site's timezone. */
    date_expires?: null | string;
    /** The date the coupon expires, as GMT. */
    date_expires_gmt?: null | string;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use?: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids?: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    excluded_product_ids?: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit?: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user?: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items?: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping?: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories?: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories?: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items?: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount?: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount?: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions?: string[]
    ;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetCustomersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
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
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'include' | 'name' | 'registered_date';
    /** Limit result set to resources with a specific email. */
    email?: string;
    /** Limit result set to resources with a specific role. */
    role?: 'all' | 'administrator' | 'editor' | 'author' | 'contributor' | 'subscriber' | 'spec_comment_moderator' | 'customer' | 'shop_manager' | 'fue_manager' | 'employer' | 'wpseo_manager' | 'wpseo_editor' | 'analytics_manager' | 'newsletterglue_manager';
};
export type CreateCustomerRequestArguments = {
    /** New user email address. */
    email: string;
    /** Customer first name. */
    first_name?: string;
    /** Customer last name. */
    last_name?: string;
    /** New user username. */
    username: string;
    /** New user password. */
    password?: string;
    /** List of billing address data. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** List of shipping address data. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Phone number. */
        phone: string;
    };
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetOrderNotesRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Limit result to customers or internal notes. */
    type?: 'any' | 'customer' | 'internal';
};
export type CreateOrderNoteRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Order note content. */
    note: string;
    /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
    customer_note?: boolean;
    /** If true, this note will be attributed to the current user. If false, the note will be attributed to the system. */
    added_by_user?: boolean;
};
export type GetShopOrderRefundsRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopOrderRefundRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Refund amount. */
    amount?: string;
    /** Reason for refund. */
    reason?: string;
    /** User ID of user who created the refund. */
    refunded_by?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** When true, the payment gateway API is used to generate the refund. */
    api_refund?: boolean;
    /** When true, refunded items are restocked. */
    api_restock?: boolean;
};
export type GetShopOrdersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to orders which have specific statuses. */
    status?: 'any' | 'trash' | 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft'[]
    ;
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopOrderRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
};
export type GetProductAttributeTermsRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductAttributeTermRequestArguments = {
    /** Unique identifier for the attribute of the terms. */
    attribute_id?: number;
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductAttributesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateProductAttributeRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** Type of attribute. */
    type?: 'select';
    /** Default sort order. */
    order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
    /** Enable/Disable attribute archives. */
    has_archives?: boolean;
};
export type GetProductCatsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductCatRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** The ID for the parent of the resource. */
    parent?: number;
    /** HTML description of the resource. */
    description?: string;
    /** Category archive display type. */
    display?: 'default' | 'products' | 'subcategories' | 'both';
    /** Image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** Menu order, used to custom sort the resource. */
    menu_order?: number;
};
export type GetProductReviewsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to reviews published before a given ISO8601 compliant date. */
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
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
    /** Limit result set to reviews assigned to specific user IDs. */
    reviewer?: number[]
    ;
    /** Ensure result set excludes reviews assigned to specific user IDs. */
    reviewer_exclude?: number[]
    ;
    /** Limit result set to that from a specific author email. */
    reviewer_email?: string;
    /** Limit result set to reviews assigned to specific product IDs. */
    product?: number[]
    ;
    /** Limit result set to reviews assigned a specific status. */
    status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
};
export type CreateProductReviewRequestArguments = {
    /** Unique identifier for the product. */
    product_id: number;
    /** Product name. */
    product_name?: string;
    /** Status of the review. */
    status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
    /** Name of the reviewer. */
    reviewer: string;
    /** Email of the reviewer. */
    reviewer_email: string;
    /** Review content. */
    review: string;
    /** Review rating (0 to 5). */
    rating?: number;
};
export type GetProductShippingClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductShippingClassRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductTagsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by resource attribute. */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /** Whether to hide resources not assigned to any products. */
    hide_empty?: boolean;
    /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
    parent?: number;
    /** Limit result set to resources assigned to a specific product. */
    product?: number;
    /** Limit result set to resources with a specific slug. */
    slug?: string;
};
export type CreateProductTagRequestArguments = {
    /** Name for the resource. */
    name: string;
    /** An alphanumeric identifier for the resource unique to its type. */
    slug?: string;
    /** HTML description of the resource. */
    description?: string;
};
export type GetProductsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order' | 'price' | 'popularity' | 'rating';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to featured products. */
    featured?: boolean;
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
    /** Limit result set to products with specified stock status. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** Limit results to those with a SKU that partial matches a string. */
    search_sku?: string;
};
export type CreateProductRequestArguments = {
    /** Product name. */
    name?: string;
    /** Product slug. */
    slug?: string;
    /** The date the product was created, in the site's timezone. */
    date_created?: null | string;
    /** The date the product was created, as GMT. */
    date_created_gmt?: null | string;
    /** Product type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured?: boolean;
    /** Catalog visibility. */
    catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description?: string;
    /** Product short description. */
    short_description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Product regular price. */
    regular_price?: string;
    /** Product sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt?: null | string;
    /** If the product is virtual. */
    virtual?: boolean;
    /** If the product is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Product external URL. Only for external products. */
    external_url?: string;
    /** Product external button text. Only for external products. */
    button_text?: string;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at product level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls the stock status of the product. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Low Stock amount for the product. */
    low_stock_amount?: number | null;
    /** Allow one item to be bought in a single order. */
    sold_individually?: boolean;
    /** Product weight (lbs). */
    weight?: string;
    /** Product dimensions. */
    dimensions?: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Allow reviews. */
    reviews_allowed?: boolean;
    /** List of up-sell products IDs. */
    upsell_ids?: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids?: number[]
    ;
    /** Product parent ID. */
    parent_id?: number;
    /** Optional note to send the customer after purchase. */
    purchase_note?: string;
    /** List of categories. */
    categories?: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags?: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    }[];
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: string[]
        ;
    }[];
    /** Defaults variation attributes. */
    default_attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetProductVariationsRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
    /** Limit result set to products with specified stock status. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
};
export type CreateProductVariationRequestArguments = {
    /** Unique identifier for the variable product. */
    product_id?: number;
    /** Variation description. */
    description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Variation regular price. */
    regular_price?: string;
    /** Variation sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt?: null | string;
    /** Variation status. */
    status?: 'draft' | 'pending' | 'private' | 'publish';
    /** If the variation is virtual. */
    virtual?: boolean;
    /** If the variation is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at variation level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls the stock status of the product. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Low Stock amount for the variation. */
    low_stock_amount?: number | null;
    /** Variation weight (lbs). */
    weight?: string;
    /** Variation dimensions. */
    dimensions?: {
        /** Variation length (in). */
        length: string;
        /** Variation width (in). */
        width: string;
        /** Variation height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Variation image data. */
    image?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    };
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetShippingZonesRequestArguments = {};
export type CreateShippingZoneRequestArguments = {
    /** Shipping zone name. */
    name: string;
    /** Shipping zone order. */
    order?: number;
};
export type GetShippingZoneMethodsRequestArguments = {
    /** Unique ID for the zone. */
    zone_id?: number;
};
export type CreateShippingZoneMethodRequestArguments = {
    /** Unique ID for the zone. */
    zone_id?: number;
    /** Shipping method sort order. */
    order?: number;
    /** Shipping method enabled status. */
    enabled?: boolean;
    /** Shipping method settings. */
    settings?: {
        /** A unique identifier for the setting. */
        id: string;
        /** A human readable label for the setting used in interfaces. */
        label: string;
        /** A human readable description for the setting used in interfaces. */
        description: string;
        /** Type of setting. */
        type: 'text' | 'email' | 'number' | 'color' | 'password' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'image_width' | 'checkbox' | 'class' | 'order';
        /** Setting value. */
        value: string;
        /** Default value for the setting. */
        default: string;
        /** Additional help text shown to the user about the setting. */
        tip: string;
        /** Placeholder text to be displayed in text inputs. */
        placeholder: string;
    };
    /** Shipping method ID. */
    method_id: unknown;
};
export type GetTaxClasssRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateTaxClassRequestArguments = {
    /** Tax class name. */
    name: string;
};
export type GetTaxsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'order' | 'priority';
    /** Sort by tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
};
export type CreateTaxRequestArguments = {
    /** Country ISO 3166 code. */
    country?: string;
    /** State code. */
    state?: string;
    /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
    postcode?: string;
    /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
    city?: string;
    /** Tax rate. */
    rate?: string;
    /** Tax rate name. */
    name?: string;
    /** Tax priority. */
    priority?: number;
    /** Whether or not this is a compound rate. */
    compound?: boolean;
    /** Whether or not this tax rate also gets applied to shipping. */
    shipping?: boolean;
    /** Indicates the order that will appear in queries. */
    order?: number;
    /** Tax class. */
    class?: 'standard' | 'reduced-rate' | 'zero-rate';
    /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
    postcodes?: string[]
    ;
    /** List of city names. Introduced in WooCommerce 5.3. */
    cities?: string[]
    ;
};
export type GetWebhooksRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'title';
    /** Limit result set to webhooks assigned a specific status. */
    status?: 'all' | 'active' | 'paused' | 'disabled';
};
export type CreateWebhookRequestArguments = {
    /** A friendly name for the webhook. */
    name?: string;
    /** Webhook status. */
    status?: 'active' | 'paused' | 'disabled';
    /** Webhook topic. */
    topic: string;
    /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
    secret?: string;
    /** Webhook delivery URL. */
    delivery_url: string;
};
export type GetWebhooksRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'title';
    /** Limit result set to webhooks assigned a specific status. */
    status?: 'all' | 'active' | 'paused' | 'disabled';
};
export type CreateWebhookRequestArguments = {
    /** A friendly name for the webhook. */
    name?: string;
    /** Webhook status. */
    status?: 'active' | 'paused' | 'disabled';
    /** Webhook topic. */
    topic: string;
    /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
    secret?: string;
    /** Webhook delivery URL. */
    delivery_url: string;
};
export type GetShopSubscriptionsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to orders assigned a specific status. */
    status?: 'any' | 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
};
export type CreateShopSubscriptionRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
    }[];
    /** The status to transition the subscription to. Unlike the "status" param, this will calculate and update the subscription dates. */
    transition_status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** The number of billing periods between subscription renewals. */
    billing_interval?: number;
    /** Billing period for the subscription. */
    billing_period?: 'day' | 'week' | 'month' | 'year';
    /** Subscription payment details. */
    payment_details?: {
        /** Payment gateway ID. */
        method_id: string;
    };
    /** The subscription's start date. */
    start_date?: null | string;
    /** The subscription's trial date */
    trial_end_date?: null | string;
    /** The subscription's next payment date. */
    next_payment_date?: null | string;
    /** The subscription's end date. */
    end_date?: null | string;
    /** Removed line items data. */
    removed_line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Removed line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
};
export type GetShopCouponsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to resources with a specific code. */
    code?: string;
};
export type CreateShopCouponRequestArguments = {
    /** Coupon code. */
    code: string;
    /** The amount of discount. Should always be numeric, even if setting a percentage. */
    amount?: string;
    /** The status of the coupon. Should always be draft, published, or pending review */
    status?: string;
    /** Determines the type of discount that will be applied. */
    discount_type?: 'percent' | 'fixed_cart' | 'fixed_product' | 'sign_up_fee' | 'sign_up_fee_percent' | 'recurring_fee' | 'recurring_percent' | 'renewal_percent' | 'renewal_fee' | 'renewal_cart' | 'initial_cart';
    /** Coupon description. */
    description?: string;
    /** The date the coupon expires, in the site's timezone. */
    date_expires?: null | string;
    /** The date the coupon expires, as GMT. */
    date_expires_gmt?: null | string;
    /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
    individual_use?: boolean;
    /** List of product IDs the coupon can be used on. */
    product_ids?: number[]
    ;
    /** List of product IDs the coupon cannot be used on. */
    excluded_product_ids?: number[]
    ;
    /** How many times the coupon can be used in total. */
    usage_limit?: number;
    /** How many times the coupon can be used per customer. */
    usage_limit_per_user?: number;
    /** Max number of items in the cart the coupon can be applied to. */
    limit_usage_to_x_items?: number;
    /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
    free_shipping?: boolean;
    /** List of category IDs the coupon applies to. */
    product_categories?: number[]
    ;
    /** List of category IDs the coupon does not apply to. */
    excluded_product_categories?: number[]
    ;
    /** If true, this coupon will not be applied to items that have sale prices. */
    exclude_sale_items?: boolean;
    /** Minimum order amount that needs to be in the cart before coupon applies. */
    minimum_amount?: string;
    /** Maximum order amount allowed when using the coupon. */
    maximum_amount?: string;
    /** List of email addresses that can use this coupon. */
    email_restrictions?: string[]
    ;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetCustomersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
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
    /** Sort collection by object attribute. */
    orderby?: 'id' | 'include' | 'name' | 'registered_date';
    /** Limit result set to resources with a specific email. */
    email?: string;
    /** Limit result set to resources with a specific role. */
    role?: 'all' | 'administrator' | 'editor' | 'author' | 'contributor' | 'subscriber' | 'spec_comment_moderator' | 'customer' | 'shop_manager' | 'fue_manager' | 'employer' | 'wpseo_manager' | 'wpseo_editor' | 'analytics_manager' | 'newsletterglue_manager';
};
export type CreateCustomerRequestArguments = {
    /** New user email address. */
    email: string;
    /** Customer first name. */
    first_name?: string;
    /** Customer last name. */
    last_name?: string;
    /** New user username. */
    username: string;
    /** New user password. */
    password?: string;
    /** List of billing address data. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** List of shipping address data. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** ISO code of the country. */
        country: string;
        /** Phone number. */
        phone: string;
    };
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
};
export type GetShopOrdersRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to orders which have specific statuses. */
    status?: 'any' | 'trash' | 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft'[]
    ;
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopOrderRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
};
export type GetProductsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order' | 'price' | 'popularity' | 'rating';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to products with a specific slug. */
    slug?: string;
    /** Limit result set to products assigned a specific status. */
    status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
    /** Limit result set to products assigned a specific type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Limit result set to products with specific SKU(s). Use commas to separate. */
    sku?: string;
    /** Limit result set to featured products. */
    featured?: boolean;
    /** Limit result set to products assigned a specific category ID. */
    category?: string;
    /** Limit result set to products assigned a specific tag ID. */
    tag?: string;
    /** Limit result set to products assigned a specific shipping class ID. */
    shipping_class?: string;
    /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
    attribute?: string;
    /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
    attribute_term?: string;
    /** Limit result set to products on sale. */
    on_sale?: boolean;
    /** Limit result set to products based on a minimum price. */
    min_price?: string;
    /** Limit result set to products based on a maximum price. */
    max_price?: string;
    /** Limit result set to products with specified stock status. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** Limit results to those with a SKU that partial matches a string. */
    search_sku?: string;
};
export type CreateProductRequestArguments = {
    /** Product name. */
    name?: string;
    /** Product slug. */
    slug?: string;
    /** The date the product was created, in the site's timezone. */
    date_created?: null | string;
    /** The date the product was created, as GMT. */
    date_created_gmt?: null | string;
    /** Product type. */
    type?: 'simple' | 'grouped' | 'external' | 'variable' | 'subscription' | 'variable-subscription';
    /** Product status (post status). */
    status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
    /** Featured product. */
    featured?: boolean;
    /** Catalog visibility. */
    catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
    /** Product description. */
    description?: string;
    /** Product short description. */
    short_description?: string;
    /** Unique identifier. */
    sku?: string;
    /** Product regular price. */
    regular_price?: string;
    /** Product sale price. */
    sale_price?: string;
    /** Start date of sale price, in the site's timezone. */
    date_on_sale_from?: null | string;
    /** Start date of sale price, as GMT. */
    date_on_sale_from_gmt?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to?: null | string;
    /** End date of sale price, in the site's timezone. */
    date_on_sale_to_gmt?: null | string;
    /** If the product is virtual. */
    virtual?: boolean;
    /** If the product is downloadable. */
    downloadable?: boolean;
    /** List of downloadable files. */
    downloads?: {
        /** File ID. */
        id: string;
        /** File name. */
        name: string;
        /** File URL. */
        file: string;
    }[];
    /** Number of times downloadable files can be downloaded after purchase. */
    download_limit?: number;
    /** Number of days until access to downloadable files expires. */
    download_expiry?: number;
    /** Product external URL. Only for external products. */
    external_url?: string;
    /** Product external button text. Only for external products. */
    button_text?: string;
    /** Tax status. */
    tax_status?: 'taxable' | 'shipping' | 'none';
    /** Tax class. */
    tax_class?: string;
    /** Stock management at product level. */
    manage_stock?: boolean;
    /** Stock quantity. */
    stock_quantity?: number;
    /** Controls the stock status of the product. */
    stock_status?: 'instock' | 'outofstock' | 'onbackorder';
    /** If managing stock, this controls if backorders are allowed. */
    backorders?: 'no' | 'notify' | 'yes';
    /** Low Stock amount for the product. */
    low_stock_amount?: number | null;
    /** Allow one item to be bought in a single order. */
    sold_individually?: boolean;
    /** Product weight (lbs). */
    weight?: string;
    /** Product dimensions. */
    dimensions?: {
        /** Product length (in). */
        length: string;
        /** Product width (in). */
        width: string;
        /** Product height (in). */
        height: string;
    };
    /** Shipping class slug. */
    shipping_class?: string;
    /** Allow reviews. */
    reviews_allowed?: boolean;
    /** List of up-sell products IDs. */
    upsell_ids?: number[]
    ;
    /** List of cross-sell products IDs. */
    cross_sell_ids?: number[]
    ;
    /** Product parent ID. */
    parent_id?: number;
    /** Optional note to send the customer after purchase. */
    purchase_note?: string;
    /** List of categories. */
    categories?: {
        /** Category ID. */
        id: number;
        /** Category name. */
        name: string;
        /** Category slug. */
        slug: string;
    }[];
    /** List of tags. */
    tags?: {
        /** Tag ID. */
        id: number;
        /** Tag name. */
        name: string;
        /** Tag slug. */
        slug: string;
    }[];
    /** List of images. */
    images?: {
        /** Image ID. */
        id: number;
        /** The date the image was created, in the site's timezone. */
        date_created: null | string;
        /** The date the image was created, as GMT. */
        date_created_gmt: null | string;
        /** The date the image was last modified, in the site's timezone. */
        date_modified: null | string;
        /** The date the image was last modified, as GMT. */
        date_modified_gmt: null | string;
        /** Image URL. */
        src: string;
        /** Image name. */
        name: string;
        /** Image alternative text. */
        alt: string;
    }[];
    /** List of attributes. */
    attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Attribute position. */
        position: number;
        /** Define if the attribute is visible on the "Additional information" tab in the product's page. */
        visible: boolean;
        /** Define if the attribute can be used as variation. */
        variation: boolean;
        /** List of available term names of the attribute. */
        options: string[]
        ;
    }[];
    /** Defaults variation attributes. */
    default_attributes?: {
        /** Attribute ID. */
        id: number;
        /** Attribute name. */
        name: string;
        /** Selected attribute term name. */
        option: string;
    }[];
    /** Menu order, used to custom sort products. */
    menu_order?: number;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetShopSubscriptionsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
    filter?: Record<string, unknown>;
    /** Limit result set to orders assigned a specific status. */
    status?: 'any' | 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
};
export type CreateShopSubscriptionRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Order status. */
    status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Currency the order was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the order. 0 for guests. */
    customer_id?: number;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1. */
        address_1: string;
        /** Address line 2. */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Define if the order is paid. It will set the status to processing and reduce stock items. */
    set_paid?: boolean;
    /** Unique transaction ID. */
    transaction_id?: string;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
    }[];
    /** The status to transition the subscription to. Unlike the "status" param, this will calculate and update the subscription dates. */
    transition_status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** The number of billing periods between subscription renewals. */
    billing_interval?: number;
    /** Billing period for the subscription. */
    billing_period?: 'day' | 'week' | 'month' | 'year';
    /** Subscription payment details. */
    payment_details?: {
        /** Payment gateway ID. */
        method_id: string;
    };
    /** The subscription's start date. */
    start_date?: null | string;
    /** The subscription's trial date */
    trial_end_date?: null | string;
    /** The subscription's next payment date. */
    next_payment_date?: null | string;
    /** The subscription's end date. */
    end_date?: null | string;
    /** Removed line items data. */
    removed_line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Product SKU. */
        sku: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Product price. */
        price: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Removed line item meta data. */
        meta: {
            /** Meta key. */
            key: string;
            /** Meta label. */
            label: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
};
export type GetOrderNotesRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
};
export type CreateOrderNoteRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Order note content. */
    note: string;
    /** Shows/define if the note is only for reference or for the customer (the user will be notified). */
    customer_note?: boolean;
};
export type GetShopSubscriptionsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: string;
    /** Limit response to resources published after a given ISO8601 compliant date. */
    after?: string;
    /** Limit response to resources published before a given ISO8601 compliant date. */
    before?: string;
    /** Limit response to resources modified after a given ISO8601 compliant date. */
    modified_after?: string;
    /** Limit response to resources modified before a given ISO8601 compliant date. */
    modified_before?: string;
    /** Whether to consider GMT post dates when limiting response by published or modified date. */
    dates_are_gmt?: boolean;
    /** Ensure result set excludes specific IDs. */
    exclude?: number[]
    ;
    /** Limit result set to specific ids. */
    include?: number[]
    ;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
    /** Limit result set to those of particular parent IDs. */
    parent?: number[]
    ;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: number[]
    ;
    /** Limit result set to subscriptions which have specific statuses. */
    status?: 'any' | 'trash' | 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel'[]
    ;
    /** Limit result set to orders assigned a specific customer. */
    customer?: number;
    /** Limit result set to orders assigned a specific product. */
    product?: number;
    /** Number of decimal points to use in each resource. */
    dp?: number;
    /** Only show meta which is meant to be displayed for an order. */
    order_item_display_meta?: boolean;
};
export type CreateShopSubscriptionRequestArguments = {
    /** Parent order ID. */
    parent_id?: number;
    /** Subscription status. */
    status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** Currency the subscription was created with, in ISO format. */
    currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
    /** User ID who owns the subscription. */
    customer_id?: number;
    /** Note left by customer during checkout. */
    customer_note?: string;
    /** Billing address. */
    billing?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
        /** Email address. */
        email: string | null;
        /** Phone number. */
        phone: string;
    };
    /** Shipping address. */
    shipping?: {
        /** First name. */
        first_name: string;
        /** Last name. */
        last_name: string;
        /** Company name. */
        company: string;
        /** Address line 1 */
        address_1: string;
        /** Address line 2 */
        address_2: string;
        /** City name. */
        city: string;
        /** ISO code or name of the state, province or district. */
        state: string;
        /** Postal code. */
        postcode: string;
        /** Country code in ISO 3166-1 alpha-2 format. */
        country: string;
    };
    /** Payment method ID. */
    payment_method?: string;
    /** Payment method title. */
    payment_method_title?: string;
    /** Meta data. */
    meta_data?: {
        /** Meta ID. */
        id: number;
        /** Meta key. */
        key: string;
        /** Meta value. */
        value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
    }[];
    /** Line items data. */
    line_items?: {
        /** Item ID. */
        id: number;
        /** Product name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Parent product name if the product is a variation. */
        parent_name: string;
        /** Product ID. */
        product_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Variation ID, if applicable. */
        variation_id: number;
        /** Quantity ordered. */
        quantity: number;
        /** Tax class of product. */
        tax_class: string;
        /** Line subtotal (before discounts). */
        subtotal: string;
        /** Line subtotal tax (before discounts). */
        subtotal_tax: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
            /** Meta key for UI display. */
            display_key: string;
            /** Meta value for UI display. */
            display_value: string;
        }[];
        /** Product SKU. */
        sku: string;
        /** Product price. */
        price: number;
        /** Properties of the main product image. */
        image: {
            /** */
            type: unknown;
            /** */
            properties: unknown;
        };
    }[];
    /** Shipping lines data. */
    shipping_lines?: {
        /** Item ID. */
        id: number;
        /** Shipping method name. */
        method_title: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping method ID. */
        method_id: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Shipping instance ID. */
        instance_id: string;
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Fee lines data. */
    fee_lines?: {
        /** Item ID. */
        id: number;
        /** Fee name. */
        name: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Tax class of fee. */
        tax_class: string;
        /** Tax status of fee. */
        tax_status: 'taxable' | 'none';
        /** Line total (after discounts). */
        total: string;
        /** Line total tax (after discounts). */
        total_tax: string;
        /** Line taxes. */
        taxes: {
            /** Tax rate ID. */
            id: number;
            /** Tax total. */
            total: string;
            /** Tax subtotal. */
            subtotal: string;
        }[];
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** Coupons line data. */
    coupon_lines?: {
        /** Item ID. */
        id: number;
        /** Coupon code. */
        code: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        /** Discount total. */
        discount: string;
        /** Discount total tax. */
        discount_tax: string;
        /** Meta data. */
        meta_data: {
            /** Meta ID. */
            id: number;
            /** Meta key. */
            key: string;
            /** Meta value. */
            value: null | Record<string, unknown> | string | number | boolean | number | unknown[];
        }[];
    }[];
    /** The status to transition a subscription to. */
    transition_status?: 'pending' | 'active' | 'on-hold' | 'cancelled' | 'switched' | 'expired' | 'pending-cancel';
    /** The number of billing periods between subscription renewals. */
    billing_interval?: number;
    /** Billing period for the subscription. */
    billing_period?: 'day' | 'week' | 'month' | 'year';
    /** Subscription payment details. */
    payment_details?: {
        /** Payment method meta and token in a post_meta_key: token format. */
        post_meta: Record<string, unknown>;
        /** Payment method meta and token in a user_meta_key : token format. */
        user_meta: Record<string, unknown>;
    };
    /** The subscription's start date, as GMT. */
    start_date?: null | string;
    /** The subscription's trial date, as GMT. */
    trial_date?: null | string;
    /** The subscription's next payment date, as GMT. */
    next_payment_date?: null | string;
    /** The subscription's cancelled date, as GMT. */
    cancelled_date?: null | string;
    /** The subscription's end date, as GMT. */
    end_date?: null | string;
};
export type GetOrderNotesRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'edit';
    /** Limit result to customers or internal notes. */
    type?: 'any' | 'customer' | 'internal';
};
export type CreateOrderNoteRequestArguments = {
    /** The order ID. */
    order_id?: number;
    /** Order note content. */
    note: string;
    /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
    customer_note?: boolean;
    /** If true, this note will be attributed to the current user. If false, the note will be attributed to the system. */
    added_by_user?: boolean;
};
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
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'rand' | 'menu_order';
    /** Limit result set to posts with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to posts assigned one or more statuses. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
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
export type CreatePostRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
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
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetPostRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
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
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreatePageRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetPageRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
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
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the media_tag taxonomy. */
    media_tag?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the media_tag taxonomy. */
    media_tag_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to attachments of a particular media type. */
    media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
    /** Limit result set to attachments of a particular MIME type. */
    mime_type?: string;
};
export type CreateAttachmentRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the media_tag taxonomy. */
    media_tag?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
};
export type GetNavMenuItemRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
};
export type GetWpBlocksRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateWpBlockRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetWpBlockRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateWpBlockRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetWpTemplatesRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: string;
    /** Post type to get the templates for. */
    post_type?: string;
};
export type CreateWpTemplateRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** The ID for the author of the template. */
    author?: number;
};
export type GetWpTemplateRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateWpTemplateRevisionRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** The ID for the author of the template. */
    author?: number;
};
export type GetWpTemplatePartsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: string;
    /** Post type to get the templates for. */
    post_type?: string;
};
export type CreateWpTemplatePartRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
};
export type GetWpTemplatePartRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateWpTemplatePartRevisionRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** The ID for the author of the template. */
    author?: number;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
};
export type GetWpNavigationsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateWpNavigationRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetWpNavigationRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateWpNavigationRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetJobListingsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the job-categories taxonomy. */
    'job-categories'?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the job-categories taxonomy. */
    'job-categories_exclude'?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the job-types taxonomy. */
    'job-types'?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the job-types taxonomy. */
    'job-types_exclude'?: Record<string, unknown> | unknown[];
};
export type CreateJobListingRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Location */
        _job_location: string;
        /** Application email/URL */
        _application: string;
        /** Company Name */
        _company_name: string;
        /** Company Website */
        _company_website: string;
        /** Company Tagline */
        _company_tagline: string;
        /** Company Twitter */
        _company_twitter: string;
        /** Company Video */
        _company_video: string;
        /** Position Filled */
        _filled: number;
        /** Featured Listing */
        _featured: number;
        /** Listing Expiry Date */
        _job_expires: string;
        /** Remote Position */
        _remote_position: number;
        /** Salary */
        _job_salary: string;
        /** Salary Currency */
        _job_salary_currency: string;
        /** Salary Unit */
        _job_salary_unit: string;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the job_listing_category taxonomy. */
    'job-categories'?: number[]
    ;
    /** The terms assigned to the post in the job_listing_type taxonomy. */
    'job-types'?: number[]
    ;
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetJobListingRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateJobListingRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Location */
        _job_location: string;
        /** Application email/URL */
        _application: string;
        /** Company Name */
        _company_name: string;
        /** Company Website */
        _company_website: string;
        /** Company Tagline */
        _company_tagline: string;
        /** Company Twitter */
        _company_twitter: string;
        /** Company Video */
        _company_video: string;
        /** Position Filled */
        _filled: number;
        /** Featured Listing */
        _featured: number;
        /** Listing Expiry Date */
        _job_expires: string;
        /** Remote Position */
        _remote_position: number;
        /** Salary */
        _job_salary: string;
        /** Salary Currency */
        _job_salary_currency: string;
        /** Salary Unit */
        _job_salary_unit: string;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the job_listing_category taxonomy. */
    'job-categories'?: number[]
    ;
    /** The terms assigned to the post in the job_listing_type taxonomy. */
    'job-types'?: number[]
    ;
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetKadenceElementsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateKadenceElementRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _kad_element_type: string;
        /** */
        _kad_element_hook: string;
        /** */
        _kad_element_hook_custom: string;
        /** */
        _kad_element_hook_priority: number;
        /** */
        _kad_element_hook_scroll: number;
        /** */
        _kad_element_show_conditionals: string;
        /** */
        _kad_element_all_show: boolean;
        /** */
        _kad_element_hide_conditionals: string;
        /** */
        _kad_element_user_conditionals: string;
        /** */
        _kad_element_device_conditionals: string;
        /** */
        _kad_element_enable_expires: boolean;
        /** */
        _kad_element_expires: string;
        /** */
        _kad_element_language: string;
        /** */
        _kad_element_fixed_width: string;
        /** */
        _kad_element_width: number;
        /** */
        _kad_element_fixed_position: string;
        /** */
        _kad_element_xposition: number;
        /** */
        _kad_element_yposition: number;
        /** */
        _kad_element_preview_post: string;
        /** */
        _kad_element_preview_post_type: string;
        /** */
        _kad_element_preview_width: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetKadenceElementRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateKadenceElementRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _kad_element_type: string;
        /** */
        _kad_element_hook: string;
        /** */
        _kad_element_hook_custom: string;
        /** */
        _kad_element_hook_priority: number;
        /** */
        _kad_element_hook_scroll: number;
        /** */
        _kad_element_show_conditionals: string;
        /** */
        _kad_element_all_show: boolean;
        /** */
        _kad_element_hide_conditionals: string;
        /** */
        _kad_element_user_conditionals: string;
        /** */
        _kad_element_device_conditionals: string;
        /** */
        _kad_element_enable_expires: boolean;
        /** */
        _kad_element_expires: string;
        /** */
        _kad_element_language: string;
        /** */
        _kad_element_fixed_width: string;
        /** */
        _kad_element_width: number;
        /** */
        _kad_element_fixed_position: string;
        /** */
        _kad_element_xposition: number;
        /** */
        _kad_element_yposition: number;
        /** */
        _kad_element_preview_post: string;
        /** */
        _kad_element_preview_post_type: string;
        /** */
        _kad_element_preview_width: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetNewslettergluesRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the ngl_newsletter_cat taxonomy. */
    ngl_newsletter_cat?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the ngl_newsletter_cat taxonomy. */
    ngl_newsletter_cat_exclude?: Record<string, unknown> | unknown[];
};
export type CreateNewsletterglueRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_newsletter_cat taxonomy. */
    ngl_newsletter_cat?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetNewsletterglueRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateNewsletterglueRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_newsletter_cat taxonomy. */
    ngl_newsletter_cat?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetNglTemplatesRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the ngl_template_category taxonomy. */
    ngl_template_category?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the ngl_template_category taxonomy. */
    ngl_template_category_exclude?: Record<string, unknown> | unknown[];
};
export type CreateNglTemplateRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_template_category taxonomy. */
    ngl_template_category?: number[]
    ;
};
export type GetNglTemplateRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateNglTemplateRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_template_category taxonomy. */
    ngl_template_category?: number[]
    ;
};
export type GetNglPatternsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the ngl_pattern_category taxonomy. */
    ngl_pattern_category?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the ngl_pattern_category taxonomy. */
    ngl_pattern_category_exclude?: Record<string, unknown> | unknown[];
};
export type CreateNglPatternRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
        /** */
        _ngl_core_pattern: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_pattern_category taxonomy. */
    ngl_pattern_category?: number[]
    ;
};
export type GetNglPatternRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateNglPatternRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _webview: string;
        /** */
        _ngl_core_pattern: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ngl_pattern_category taxonomy. */
    ngl_pattern_category?: number[]
    ;
};
export type GetProductsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the product_cat taxonomy. */
    product_cat?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the product_cat taxonomy. */
    product_cat_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the product_tag taxonomy. */
    product_tag?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the product_tag taxonomy. */
    product_tag_exclude?: Record<string, unknown> | unknown[];
};
export type CreateProductRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the product_cat taxonomy. */
    product_cat?: number[]
    ;
    /** The terms assigned to the post in the product_tag taxonomy. */
    product_tag?: number[]
    ;
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetProductRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateProductRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** The message to use instead of the title when sharing to Publicize Services */
        jetpack_publicize_message: string;
        /** Whether or not the post should be treated as a Twitter thread. */
        jetpack_is_tweetstorm: boolean;
        /** Whether or not the Share Post feature is enabled. */
        jetpack_publicize_feature_enabled: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the product_cat taxonomy. */
    product_cat?: number[]
    ;
    /** The terms assigned to the post in the product_tag taxonomy. */
    product_tag?: number[]
    ;
    /** */
    jetpack_publicize_connections?: {
        /** Unique identifier for the Publicize Connection */
        id: string;
        /** Alphanumeric identifier for the Publicize Service */
        service_name: string;
        /** Username of the connected account */
        display_name: string;
        /** Profile picture of the connected account */
        profile_picture: string;
        /** Whether to share to this connection */
        enabled: boolean;
        /** Whether Publicize has already finished sharing for this post */
        done: boolean;
        /** Whether `enable` can be changed for this post/connection */
        toggleable: boolean;
    }[];
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeVenuesRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateTribeVenueRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeVenueRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateTribeVenueRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeOrganizersRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateTribeOrganizerRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeOrganizerRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateTribeOrganizerRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeEventssRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the tags taxonomy. */
    tags?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the tags taxonomy. */
    tags_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the tribe_events_cat taxonomy. */
    tribe_events_cat?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the tribe_events_cat taxonomy. */
    tribe_events_cat_exclude?: Record<string, unknown> | unknown[];
};
export type CreateTribeEventsRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _tribe_events_status: string;
        /** */
        _tribe_events_status_reason: string;
        /** */
        _tribe_events_is_hybrid: string;
        /** */
        _tribe_events_is_virtual: string;
        /** */
        _tribe_events_virtual_video_source: string;
        /** */
        _tribe_events_virtual_embed_video: string;
        /** */
        _tribe_events_virtual_linked_button_text: string;
        /** */
        _tribe_events_virtual_linked_button: string;
        /** */
        _tribe_events_virtual_show_embed_at: string;
        /** */
        _tribe_events_virtual_show_embed_to: string;
        /** */
        _tribe_events_virtual_show_on_event: string;
        /** */
        _tribe_events_virtual_show_on_views: string;
        /** */
        _tribe_events_virtual_url: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[]
    ;
    /** The terms assigned to the post in the tribe_events_cat taxonomy. */
    tribe_events_cat?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetTribeEventsRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateTribeEventsRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** */
        _tribe_events_status: string;
        /** */
        _tribe_events_status_reason: string;
        /** */
        _tribe_events_is_hybrid: string;
        /** */
        _tribe_events_is_virtual: string;
        /** */
        _tribe_events_virtual_video_source: string;
        /** */
        _tribe_events_virtual_embed_video: string;
        /** */
        _tribe_events_virtual_linked_button_text: string;
        /** */
        _tribe_events_virtual_linked_button: string;
        /** */
        _tribe_events_virtual_show_embed_at: string;
        /** */
        _tribe_events_virtual_show_embed_to: string;
        /** */
        _tribe_events_virtual_show_on_event: string;
        /** */
        _tribe_events_virtual_show_on_views: string;
        /** */
        _tribe_events_virtual_url: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[]
    ;
    /** The terms assigned to the post in the tribe_events_cat taxonomy. */
    tribe_events_cat?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetKbIconsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateKbIconRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetKbIconRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateKbIconRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetKadenceLottiesRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateKadenceLottieRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetKadenceLottieRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateKadenceLottieRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
};
export type GetJpPayOrdersRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateJpPayOrderRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
};
export type GetJpPayOrderRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateJpPayOrderRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The excerpt for the post. */
    excerpt?: {
        /** Excerpt for the post, as it exists in the database. */
        raw: string;
        /** HTML excerpt for the post, transformed for display. */
        rendered: string;
        /** Whether the excerpt is protected with a password. */
        protected: boolean;
    };
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
};
export type GetJpPayProductsRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
};
export type CreateJpPayProductRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Simple payments; price. */
        spay_price: number;
        /** Simple payments; currency code. */
        spay_currency: string;
        /** Simple payments; text with &quot;Buy&quot; or other CTA */
        spay_cta: string;
        /** Simple payments; allow multiple items */
        spay_multiple: boolean;
        /** Simple payments button; paypal email. */
        spay_email: string;
        /** Simple payments; status. */
        spay_status: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
};
export type GetJpPayProductRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreateJpPayProductRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
        /** Simple payments; price. */
        spay_price: number;
        /** Simple payments; currency code. */
        spay_currency: string;
        /** Simple payments; text with &quot;Buy&quot; or other CTA */
        spay_cta: string;
        /** Simple payments; allow multiple items */
        spay_multiple: boolean;
        /** Simple payments button; paypal email. */
        spay_email: string;
        /** Simple payments; status. */
        spay_status: string;
    };
    /** The theme file to use to display the post. */
    template?: string;
};
export type GetPsMembersRequestArguments = {
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | 'auto-draft' | 'inherit' | 'request-pending' | 'request-confirmed' | 'request-failed' | 'request-completed' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'dp-rewrite-republish' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled' | 'any'[]
    ;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the ps_member_category taxonomy. */
    ps_member_category?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the ps_member_category taxonomy. */
    ps_member_category_exclude?: Record<string, unknown> | unknown[];
    /** Limit result set to items with specific terms assigned in the ps_member_type taxonomy. */
    ps_member_type?: Record<string, unknown> | unknown[];
    /** Limit result set to items except those with specific terms assigned in the ps_member_type taxonomy. */
    ps_member_type_exclude?: Record<string, unknown> | unknown[];
};
export type CreatePsMemberRequestArguments = {
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ps_member_category taxonomy. */
    ps_member_category?: number[]
    ;
    /** The terms assigned to the post in the ps_member_type taxonomy. */
    ps_member_type?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetPsMemberRevisionsRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
};
export type CreatePsMemberRevisionRequestArguments = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: string | null;
    /** The date the post was published, as GMT. */
    date_gmt?: string | null;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'expired' | 'preview' | 'wc-active' | 'wc-switched' | 'wc-expired' | 'wc-pending-cancel' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'tribe-ea-success' | 'tribe-ea-failed' | 'tribe-ea-schedule' | 'tribe-ea-pending' | 'tribe-ea-draft' | 'tribe-ignored' | 'wcmti-pending' | 'wcmti-accepted' | 'wcmti-cancelled' | 'wcm-active' | 'wcm-free_trial' | 'wcm-delayed' | 'wcm-complimentary' | 'wcm-pending' | 'wcm-paused' | 'wcm-expired' | 'wcm-cancelled' | 'aw-disabled' | 'disabled';
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: {
        /** Title for the post, as it exists in the database. */
        raw: string;
        /** HTML title for the post, transformed for display. */
        rendered: string;
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
    /** Meta fields. */
    meta?: {
        /** */
        _kad_blocks_custom_css: string;
        /** */
        _kad_blocks_head_custom_js: string;
        /** */
        _kad_blocks_body_custom_js: string;
        /** */
        _kad_blocks_footer_custom_js: string;
        /** */
        _EventAllDay: boolean;
        /** */
        _EventTimezone: string;
        /** */
        _EventStartDate: string;
        /** */
        _EventEndDate: string;
        /** */
        _EventStartDateUTC: string;
        /** */
        _EventEndDateUTC: string;
        /** */
        _EventShowMap: boolean;
        /** */
        _EventShowMapLink: boolean;
        /** */
        _EventURL: string;
        /** */
        _EventCost: string;
        /** */
        _EventCostDescription: string;
        /** */
        _EventCurrencySymbol: string;
        /** */
        _EventCurrencyCode: string;
        /** */
        _EventCurrencyPosition: string;
        /** */
        _EventDateTimeSeparator: string;
        /** */
        _EventTimeRangeSeparator: string;
        /** */
        _EventOrganizerID: number[]
        ;
        /** Event Venue */
        _EventVenueID: number;
        /** */
        _OrganizerEmail: string;
        /** */
        _OrganizerPhone: string;
        /** */
        _OrganizerWebsite: string;
        /** */
        _VenueAddress: string;
        /** */
        _VenueCity: string;
        /** */
        _VenueCountry: string;
        /** */
        _VenueProvince: string;
        /** */
        _VenueZip: string;
        /** */
        _VenuePhone: string;
        /** */
        _VenueURL: string;
        /** */
        _VenueStateProvince: string;
        /** */
        _VenueLat: string;
        /** */
        _VenueLng: string;
        /** */
        _tribe_blocks_recurrence_rules: string;
        /** */
        _tribe_blocks_recurrence_description: string;
        /** */
        _tribe_blocks_recurrence_exclusions: string;
        /** */
        _kad_post_transparent: string;
        /** */
        _kad_post_title: string;
        /** */
        _kad_post_layout: string;
        /** */
        _kad_post_sidebar_id: string;
        /** */
        _kad_post_content_style: string;
        /** */
        _kad_post_vertical_padding: string;
        /** */
        _kad_post_feature: string;
        /** */
        _kad_post_feature_position: string;
        /** */
        _kad_post_header: boolean;
        /** */
        _kad_post_footer: boolean;
    };
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ps_member_category taxonomy. */
    ps_member_category?: number[]
    ;
    /** The terms assigned to the post in the ps_member_type taxonomy. */
    ps_member_type?: number[]
    ;
    /** Are sharing buttons enabled? */
    jetpack_sharing_enabled?: boolean;
};
export type GetCategorysRequestArguments = {
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
export type GetJobListingCategorysRequestArguments = {
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
export type CreateJobListingCategoryRequestArguments = {
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
export type GetJobListingTypesRequestArguments = {
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
export type CreateJobListingTypeRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: {
        /** Employment Type */
        employment_type: string;
    };
};
export type GetNglNewsletterCatsRequestArguments = {
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
export type CreateNglNewsletterCatRequestArguments = {
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
export type GetNglTemplateCategorysRequestArguments = {
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
export type CreateNglTemplateCategoryRequestArguments = {
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
export type GetNglPatternCategorysRequestArguments = {
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
export type CreateNglPatternCategoryRequestArguments = {
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
export type GetProductCatsRequestArguments = {
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
export type CreateProductCatRequestArguments = {
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
export type GetProductTagsRequestArguments = {
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
export type CreateProductTagRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
};
export type GetTribeEventsCatsRequestArguments = {
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
export type CreateTribeEventsCatRequestArguments = {
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
export type GetMediaTagsRequestArguments = {
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
export type CreateMediaTagRequestArguments = {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: {};
};
export type GetPsMemberCategorysRequestArguments = {
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
export type CreatePsMemberCategoryRequestArguments = {
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
export type GetPsMemberTypesRequestArguments = {
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
export type CreatePsMemberTypeRequestArguments = {
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
export type GetUsersRequestArguments = {
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
    /** Sort collection by user attribute. */
    orderby?: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'include_slugs' | 'email' | 'url';
    /** Limit result set to users with one or more specific slugs. */
    slug?: string[]
    ;
    /** Limit result set to users matching at least one specific role provided. Accepts csv list or single role. */
    roles?: string[]
    ;
    /** Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability. */
    capabilities?: string[]
    ;
    /** Limit result set to users who are considered authors. */
    who?: 'authors';
    /** Limit result set to users who have published posts. */
    has_published_posts?: boolean |
    string[]
    ;
};
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
};
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
export type GetPluginsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit results to those matching a string. */
    search?: string;
    /** Limits results to plugins with the given status. */
    status?: 'inactive' | 'active'[]
    ;
};
export type CreatePluginRequestArguments = {
    /** WordPress.org plugin directory slug. */
    slug: string;
    /** The plugin activation status. */
    status?: 'inactive' | 'active';
};
export type GetWidgetsRequestArguments = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The sidebar to return widgets for. */
    sidebar?: string;
};
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
