/**
 * =========================================
 * Global Footer
 * =========================================
 */

$(function () {

    const $footer = $("#site-footer");

    // -----------------------------------------
    // Footer 不存在時直接結束
    // -----------------------------------------
    if (!$footer.length) {
        return;
    }


    // =========================================
    // Company Name
    // =========================================

    const companyName =
        siteData.company.name;

    $("#footer-company-name")
        .text(companyName);

    $("#footer-copyright-name")
        .text(companyName);


    // =========================================
    // Phone
    // =========================================

    const phone =
        siteData.contact.phone.area +
        "-" +
        siteData.contact.phone.number1 +
        "-" +
        siteData.contact.phone.number2;

    $("#footer-phone")
        .text(phone)
        .attr(
            "href",
            "tel:" + phone.replace(/-/g, "")
        );


    // =========================================
    // Mobile
    // =========================================

    const mobile =
        siteData.contact.mobile.number1 +
        "-" +
        siteData.contact.mobile.number2 +
        "-" +
        siteData.contact.mobile.number3;

    $("#footer-mobile")
        .text(mobile)
        .attr(
            "href",
            "tel:" + mobile.replace(/-/g, "")
        );


    // =========================================
    // Email
    // =========================================

    const email =
        siteData.contact.email.address;

    $("#footer-email")
        .text(email)
        .attr(
            "href",
            "mailto:" + email
        );


    // =========================================
    // Address
    // =========================================

    const address =
        siteData.contact.address.city +
        siteData.contact.address.district +
        siteData.contact.address.street;

    $("#footer-address")
        .text(address)
        .attr(
            "href",
            siteData.maps.url
        );


    // =========================================
    // Google Maps
    // =========================================

    $("#footer-map")
        .attr(
            "href",
            siteData.maps.url
        );


    // =========================================
    // Copyright Year
    // =========================================

    $("#footer-year")
        .text(new Date().getFullYear());

});