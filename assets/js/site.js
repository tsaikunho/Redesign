/* 公司名 */
document.querySelectorAll("[data-site-company]").forEach(element => {
    element.textContent = siteData.company.name;
});


/* 電話 */
document.querySelectorAll("[data-site-phone-area]").forEach(element => {
    element.textContent = siteData.contact.phone.area;
});


document.querySelectorAll("[data-site-phone-number1]").forEach(element => {
    element.textContent = siteData.contact.phone.number1;
});


document.querySelectorAll("[data-site-phone-number2]").forEach(element => {
    element.textContent = siteData.contact.phone.number2;
});


document.querySelectorAll("[data-site-phone-full]").forEach(element => {
    const phone = siteData.contact.phone;

    const phoneNumber =
        `${phone.area}-${phone.number1}${phone.number2}`;

    element.textContent = `${phoneNumber}`;
});


document.querySelectorAll("[data-site-phone-full2]").forEach(element => {
    const phone = siteData.contact.phone;

    const phoneNumber =
        `(${phone.area}) ${phone.number1}-${phone.number2}`;

    element.textContent = `${phoneNumber}`;
});


document.querySelectorAll("[data-site-phone-link]").forEach(element => {
    const phone = siteData.contact.phone;

    const phoneNumber =
        `${phone.area}-${phone.number1}-${phone.number2}`;

    element.href = `tel:${phoneNumber}`;
});


/* 手機 */
document.querySelectorAll("[data-site-mobile-number1]").forEach(element => {
    element.textContent = siteData.contact.mobile.number1;
});


document.querySelectorAll("[data-site-mobile-number2]").forEach(element => {
    element.textContent = siteData.contact.mobile.number2;
});


document.querySelectorAll("[data-site-mobile-number3]").forEach(element => {
    element.textContent = siteData.contact.mobile.number3;
});


document.querySelectorAll("[data-site-mobile-full]").forEach(element => {
    const mobile = siteData.contact.mobile;

    const mobileNumber =
        `${mobile.number1}${mobile.number2}${mobile.number3}`;

    element.textContent = `${mobileNumber}`;
});


document.querySelectorAll("[data-site-mobile-full2]").forEach(element => {
    const mobile = siteData.contact.mobile;

    const mobileNumber =
        `${mobile.number1}-${mobile.number2}-${mobile.number3}`;

    element.textContent = `${mobileNumber}`;
});


document.querySelectorAll("[data-site-mobile-link]").forEach(element => {
    const mobile = siteData.contact.mobile;

    const mobileNumber =
        `${mobile.number1}-${mobile.number2}-${mobile.number3}`;

    element.href = `tel:${mobileNumber}`;
});


/* 地址 */
document.querySelectorAll("[data-site-zipcode]").forEach(element => {
    element.textContent = siteData.contact.address.zipcode;
});


document.querySelectorAll("[data-site-city]").forEach(element => {
    element.textContent = siteData.contact.address.city;
});


document.querySelectorAll("[data-site-district]").forEach(element => {
    element.textContent = siteData.contact.address.district;
});


document.querySelectorAll("[data-site-street]").forEach(element => {
    element.textContent = siteData.contact.address.street;
});


document.querySelectorAll("[data-site-building]").forEach(element => {
    element.textContent = siteData.contact.address.building;
});


document.querySelectorAll("[data-site-address]").forEach(element => {
    const address = siteData.contact.address;

    element.textContent =
        `(${address.city})${address.district}${address.street}`;
});


/* 服務時間 */
document.querySelectorAll("[data-site-business-weekdays]").forEach(element => {
    element.textContent =
        siteData.contact.business.weekdays;
});


document.querySelectorAll("[data-site-business-time]").forEach(element => {
    element.textContent =
        siteData.contact.business.time;
});


document.querySelectorAll("[data-site-email]").forEach(element => {
    element.textContent =
        siteData.contact.email.address;
});


document.querySelectorAll("[data-site-email-link]").forEach(element => {
    const email =
        siteData.contact.email.address;

    element.href = `mailto:${email}`;
});


document.querySelectorAll("[data-site-facebook-link]").forEach(element => {
    element.href = siteData.social.facebook;
});


document.querySelectorAll("[data-site-maps-link]").forEach(element => {
    element.href = siteData.maps.url;
});