import * as Types from './wordpressTypes.ts';
export * from './wordpressTypes.ts';

export async function getShopCoupons(args?: Types.GetShopCouponsRequestArguments): Promise<Types.ShopCoupon[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/coupons');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ShopCoupon[];
    return request;
}

export async function getShopOrders(args?: Types.GetShopOrdersRequestArguments): Promise<Types.ShopOrder[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/orders');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ShopOrder[];
    return request;
}

export async function getProducts(args?: Types.GetProductsRequestArguments): Promise<Types.Product[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/products');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Product[];
    return request;
}

export async function getProductAttributes(args?: Types.GetProductAttributesRequestArguments): Promise<Types.ProductAttribute[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/products/attributes');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ProductAttribute[];
    return request;
}

export async function getProductCats(args?: Types.GetProductCatsRequestArguments): Promise<Types.ProductCat[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/products/categories');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ProductCat[];
    return request;
}

export async function getProductReviews(args?: Types.GetProductReviewsRequestArguments): Promise<Types.ProductReview[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/products/reviews');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ProductReview[];
    return request;
}

export async function getDataIndexs(args?: Types.GetDataIndexsRequestArguments): Promise<Types.DataIndex[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-admin/onboarding/tasks');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.DataIndex[];
    return request;
}

export async function getTaxs(args?: Types.GetTaxsRequestArguments): Promise<Types.Tax[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-analytics/taxes');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Tax[];
    return request;
}

export async function getCheckouts(args?: Types.GetCheckoutsRequestArguments): Promise<Types.Checkout[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/store/checkout');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Checkout[];
    return request;
}

export async function getUserMemberships(args?: Types.GetUserMembershipsRequestArguments): Promise<Types.UserMembership[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v2/memberships/members');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.UserMembership[];
    return request;
}

export async function getCustomers(args?: Types.GetCustomersRequestArguments): Promise<Types.Customer[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v1/customers');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Customer[];
    return request;
}

export async function getProductShippingClasss(args?: Types.GetProductShippingClasssRequestArguments): Promise<Types.ProductShippingClass[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v1/products/shipping_classes');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ProductShippingClass[];
    return request;
}

export async function getProductTags(args?: Types.GetProductTagsRequestArguments): Promise<Types.ProductTag[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v1/products/tags');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ProductTag[];
    return request;
}

export async function getTaxClasss(args?: Types.GetTaxClasssRequestArguments): Promise<Types.TaxClass[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v1/taxes/classes');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.TaxClass[];
    return request;
}

export async function getWebhooks(args?: Types.GetWebhooksRequestArguments): Promise<Types.Webhook[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v1/webhooks');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Webhook[];
    return request;
}

export async function getShippingZones(args?: Types.GetShippingZonesRequestArguments): Promise<Types.ShippingZone[]> {
    const url = new URL('https://poststatus.com/wp-json/wc/v2/shipping/zones');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ShippingZone[];
    return request;
}

export async function getShopSubscriptions(args?: Types.GetShopSubscriptionsRequestArguments): Promise<Types.ShopSubscription[]> {
    const url = new URL('https://poststatus.com/wp-json/wc-zapier/v1/subscriptions');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.ShopSubscription[];
    return request;
}

export async function getPosts(args?: Types.GetPostsRequestArguments): Promise<Types.Post[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/posts');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Post[];
    return request;
}

export async function getPages(args?: Types.GetPagesRequestArguments): Promise<Types.Page[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/pages');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Page[];
    return request;
}

export async function getAttachments(args?: Types.GetAttachmentsRequestArguments): Promise<Types.Attachment[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/media');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Attachment[];
    return request;
}

export async function getNavMenuItems(args?: Types.GetNavMenuItemsRequestArguments): Promise<Types.NavMenuItem[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/menu-items');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NavMenuItem[];
    return request;
}

export async function getWpBlocks(args?: Types.GetWpBlocksRequestArguments): Promise<Types.WpBlock[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/blocks');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.WpBlock[];
    return request;
}

export async function getWpTemplates(args?: Types.GetWpTemplatesRequestArguments): Promise<Types.WpTemplate[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/templates');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.WpTemplate[];
    return request;
}

export async function getWpTemplateParts(args?: Types.GetWpTemplatePartsRequestArguments): Promise<Types.WpTemplatePart[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/template-parts');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.WpTemplatePart[];
    return request;
}

export async function getWpNavigations(args?: Types.GetWpNavigationsRequestArguments): Promise<Types.WpNavigation[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/navigation');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.WpNavigation[];
    return request;
}

export async function getJobListings(args?: Types.GetJobListingsRequestArguments): Promise<Types.JobListing[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/job-listings');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.JobListing[];
    return request;
}

export async function getKadenceElements(args?: Types.GetKadenceElementsRequestArguments): Promise<Types.KadenceElement[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/kadence_element');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.KadenceElement[];
    return request;
}

export async function getNewsletterglues(args?: Types.GetNewslettergluesRequestArguments): Promise<Types.Newsletterglue[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/newsletterglue');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Newsletterglue[];
    return request;
}

export async function getNglTemplates(args?: Types.GetNglTemplatesRequestArguments): Promise<Types.NglTemplate[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ngl_template');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NglTemplate[];
    return request;
}

export async function getNglPatterns(args?: Types.GetNglPatternsRequestArguments): Promise<Types.NglPattern[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ngl_pattern');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NglPattern[];
    return request;
}

export async function getTribeVenues(args?: Types.GetTribeVenuesRequestArguments): Promise<Types.TribeVenue[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/tribe_venue');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.TribeVenue[];
    return request;
}

export async function getTribeOrganizers(args?: Types.GetTribeOrganizersRequestArguments): Promise<Types.TribeOrganizer[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/tribe_organizer');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.TribeOrganizer[];
    return request;
}

export async function getTribeEventss(args?: Types.GetTribeEventssRequestArguments): Promise<Types.TribeEvents[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/tribe_events');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.TribeEvents[];
    return request;
}

export async function getKbIcons(args?: Types.GetKbIconsRequestArguments): Promise<Types.KbIcon[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/kb_icon');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.KbIcon[];
    return request;
}

export async function getKadenceLotties(args?: Types.GetKadenceLottiesRequestArguments): Promise<Types.KadenceLottie[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/kadence_lottie');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.KadenceLottie[];
    return request;
}

export async function getJpPayOrders(args?: Types.GetJpPayOrdersRequestArguments): Promise<Types.JpPayOrder[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/jp_pay_order');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.JpPayOrder[];
    return request;
}

export async function getJpPayProducts(args?: Types.GetJpPayProductsRequestArguments): Promise<Types.JpPayProduct[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/jp_pay_product');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.JpPayProduct[];
    return request;
}

export async function getPsMembers(args?: Types.GetPsMembersRequestArguments): Promise<Types.PsMember[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ps_member');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.PsMember[];
    return request;
}

export async function getCategorys(args?: Types.GetCategorysRequestArguments): Promise<Types.Category[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/categories');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Category[];
    return request;
}

export async function getTags(args?: Types.GetTagsRequestArguments): Promise<Types.Tag[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/tags');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Tag[];
    return request;
}

export async function getNavMenus(args?: Types.GetNavMenusRequestArguments): Promise<Types.NavMenu[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/menus');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NavMenu[];
    return request;
}

export async function getJobListingCategorys(args?: Types.GetJobListingCategorysRequestArguments): Promise<Types.JobListingCategory[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/job-categories');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.JobListingCategory[];
    return request;
}

export async function getJobListingTypes(args?: Types.GetJobListingTypesRequestArguments): Promise<Types.JobListingType[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/job-types');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.JobListingType[];
    return request;
}

export async function getNglNewsletterCats(args?: Types.GetNglNewsletterCatsRequestArguments): Promise<Types.NglNewsletterCat[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ngl_newsletter_cat');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NglNewsletterCat[];
    return request;
}

export async function getNglTemplateCategorys(args?: Types.GetNglTemplateCategorysRequestArguments): Promise<Types.NglTemplateCategory[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ngl_template_category');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NglTemplateCategory[];
    return request;
}

export async function getNglPatternCategorys(args?: Types.GetNglPatternCategorysRequestArguments): Promise<Types.NglPatternCategory[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ngl_pattern_category');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.NglPatternCategory[];
    return request;
}

export async function getTribeEventsCats(args?: Types.GetTribeEventsCatsRequestArguments): Promise<Types.TribeEventsCat[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/tribe_events_cat');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.TribeEventsCat[];
    return request;
}

export async function getMediaTags(args?: Types.GetMediaTagsRequestArguments): Promise<Types.MediaTag[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/media_tag');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.MediaTag[];
    return request;
}

export async function getPsMemberCategorys(args?: Types.GetPsMemberCategorysRequestArguments): Promise<Types.PsMemberCategory[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ps_member_category');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.PsMemberCategory[];
    return request;
}

export async function getPsMemberTypes(args?: Types.GetPsMemberTypesRequestArguments): Promise<Types.PsMemberType[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/ps_member_type');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.PsMemberType[];
    return request;
}

export async function getUsers(args?: Types.GetUsersRequestArguments): Promise<Types.User[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/users');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.User[];
    return request;
}

export async function getComments(args?: Types.GetCommentsRequestArguments): Promise<Types.Comment[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/comments');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Comment[];
    return request;
}

export async function getPlugins(args?: Types.GetPluginsRequestArguments): Promise<Types.Plugin[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/plugins');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Plugin[];
    return request;
}

export async function getWidgets(args?: Types.GetWidgetsRequestArguments): Promise<Types.Widget[]> {
    const url = new URL('https://poststatus.com/wp-json/wp/v2/widgets');
    url.search = new URLSearchParams(args as Record<string, string>).toString();
    const request = await (await fetch(url)).json() as Types.Widget[];
    return request;
}
