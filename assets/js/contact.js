/**
 * =========================================
 * Contact Page
 * =========================================
 */

$(function () {


    // =========================================
    // Company
    // =========================================

    $("#contact-company-name")
        .text(siteData.company.name);


    // =========================================
    // Phone
    // =========================================

    const phone =
        siteData.contact.phone.area +
        "-" +
        siteData.contact.phone.number1 +
        "-" +
        siteData.contact.phone.number2;

    $("#contact-phone")
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

    $("#contact-mobile")
        .text(mobile)
        .attr(
            "href",
            "tel:" + mobile.replace(/-/g, "")
        );


    // =========================================
    // Address
    // =========================================

    const address =
        siteData.contact.address.city +
        siteData.contact.address.district +
        siteData.contact.address.street +
        "（" +
        siteData.contact.address.building +
        "）";

    $("#contact-address")
        .text(address)
        .attr(
            "href",
            siteData.maps.url
        );


    // =========================================
    // Business Hours
    // =========================================

    const businessHours =
        siteData.contact.business.weekdays +
        " " +
        siteData.contact.business.time;

    $("#contact-business-hours")
        .text(businessHours);


    // =========================================
    // Email
    // =========================================

    const email =
        siteData.contact.email.address;

    $("#contact-email")
        .text(email)
        .attr(
            "href",
            "mailto:" + email
        );


    // =========================================
    // Google Maps
    // =========================================

    $("#contact-map")
        .attr(
            "href",
            siteData.maps.url
        );

});