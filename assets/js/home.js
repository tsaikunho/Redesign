/**
 * =========================================
 * Homepage
 * =========================================
 */

$(function () {

    // =========================================
    // S012｜Contact / Conversion CTA
    // =========================================

    const $cta = $("#contact-cta");

    // -----------------------------------------
    // S012 不存在時直接結束
    // -----------------------------------------
    if (!$cta.length) {
        return;
    }


    // =========================================
    // Company Name
    // =========================================

    $("#cta-company-name")
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

    $("#cta-phone")
        .text(phone)
        .attr(
            "href",
            "tel:" + phone.replace(/-/g, "")
        );


    // =========================================
    // Email
    // =========================================

    const email =
        siteData.contact.email.address;

    $("#cta-email")
        .text(email)
        .attr(
            "href",
            "mailto:" + email
        );

});