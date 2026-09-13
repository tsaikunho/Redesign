/**
 * =========================================
 * Global Header
 * =========================================
 *
 * Responsibility:
 * - Header Scroll State
 * - Mobile Navigation
 * - Active Page
 * - Accessibility
 * - Mobile UX
 *
 * Bootstrap Navbar Collapse is used
 * for mobile navigation.
 */

$(function () {

    const $header = $(".site-header");

    // -----------------------------------------
    // Header 不存在時直接結束
    // -----------------------------------------
    if (!$header.length) {
        return;
    }


    // =========================================
    // 01｜Header Scroll State
    // =========================================

    function updateHeader() {

        $header.toggleClass(
            "is-scrolled",
            $(window).scrollTop() > 20
        );

    }


    // Initial State
    updateHeader();


    // Scroll Event
    $(window).on(
        "scroll.header",
        updateHeader
    );


    // =========================================
    // 02｜Bootstrap Navbar
    // =========================================

    const $navbarCollapse = $("#mainNavbar");
    const $navbarToggler = $(".navbar-toggler");


    // -----------------------------------------
    // Navbar 不存在時
    // -----------------------------------------
    if (!$navbarCollapse.length) {
        return;
    }


    // =========================================
    // 03｜Accessibility
    // =========================================

    function updateTogglerState() {

        const isOpen =
            $navbarCollapse.hasClass("show");

        $navbarToggler.attr(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    }


    // Bootstrap Collapse Events
    $navbarCollapse.on(
        "shown.bs.collapse",
        updateTogglerState
    );

    $navbarCollapse.on(
        "hidden.bs.collapse",
        updateTogglerState
    );


    // Initial State
    updateTogglerState();


    // =========================================
    // 04｜Active Page
    // =========================================

    function setActivePage() {

        const currentPath =
            window.location.pathname
                .replace(/\/+$/, "");


        // -----------------------------------------
        // Nav Links
        // -----------------------------------------

        $navbarCollapse
            .find(".nav-link")
            .each(function () {

                const $link = $(this);

                const href =
                    $link.attr("href");


                // 沒有連結時跳過
                if (!href || href === "#") {
                    return;
                }


                // ---------------------------------
                // 取得連結實際 Path
                // ---------------------------------

                let linkPath;

                try {

                    linkPath =
                        new URL(
                            href,
                            window.location.href
                        ).pathname
                        .replace(/\/+$/, "");

                } catch (error) {

                    return;

                }


                // ---------------------------------
                // Active 判斷
                // ---------------------------------

                const isActive =
                    linkPath === currentPath;


                // ---------------------------------
                // Active Class
                // ---------------------------------

                $link.toggleClass(
                    "active",
                    isActive
                );


                // ---------------------------------
                // Accessibility
                // ---------------------------------

                if (isActive) {

                    $link.attr(
                        "aria-current",
                        "page"
                    );

                } else {

                    $link.removeAttr(
                        "aria-current"
                    );

                }

            });


        // -----------------------------------------
        // Contact CTA
        // -----------------------------------------

        $navbarCollapse
            .find(".btn-brand")
            .each(function () {

                const $button = $(this);

                const href =
                    $button.attr("href");


                if (!href || href === "#") {
                    return;
                }


                let linkPath;

                try {

                    linkPath =
                        new URL(
                            href,
                            window.location.href
                        ).pathname
                        .replace(/\/+$/, "");

                } catch (error) {

                    return;

                }


                const isActive =
                    linkPath === currentPath;


                // CTA 不使用 Bootstrap .active
                // 避免改變 btn-brand 原本視覺
                $button.toggleClass(
                    "is-active",
                    isActive
                );


                if (isActive) {

                    $button.attr(
                        "aria-current",
                        "page"
                    );

                } else {

                    $button.removeAttr(
                        "aria-current"
                    );

                }

            });

    }


    // Initial Active State
    setActivePage();


    // =========================================
    // 05｜Mobile Menu：點擊後自動關閉
    // =========================================

    $navbarCollapse
        .find(".nav-link, .btn-brand")
        .on(
            "click.header",
            function () {

                // Desktop 不需要自動關閉
                if (window.innerWidth >= 992) {
                    return;
                }


                const collapseElement =
                    document.getElementById(
                        "mainNavbar"
                    );


                if (!collapseElement) {
                    return;
                }


                // 取得 Bootstrap Collapse Instance
                const collapseInstance =
                    bootstrap.Collapse.getInstance(
                        collapseElement
                    );


                if (collapseInstance) {

                    collapseInstance.hide();

                }

            }
        );


    // =========================================
    // 06｜Mobile Menu：ESC 關閉
    // =========================================

    $(document).on(
        "keydown.header",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            // Desktop 不需要處理
            if (window.innerWidth >= 992) {
                return;
            }


            const collapseElement =
                document.getElementById(
                    "mainNavbar"
                );


            if (!collapseElement) {
                return;
            }


            if (!$navbarCollapse.hasClass("show")) {
                return;
            }


            const collapseInstance =
                bootstrap.Collapse.getInstance(
                    collapseElement
                );


            if (collapseInstance) {

                collapseInstance.hide();

                $navbarToggler.trigger("focus");

            }

        }
    );


    // =========================================
    // 07｜Responsive UX
    // =========================================

    $(window).on(
        "resize.header",
        function () {

            // ---------------------------------
            // Desktop Mode
            // ---------------------------------

            if (window.innerWidth >= 992) {

                const collapseElement =
                    document.getElementById(
                        "mainNavbar"
                    );


                if (!collapseElement) {
                    return;
                }


                const collapseInstance =
                    bootstrap.Collapse.getInstance(
                        collapseElement
                    );


                if (
                    collapseInstance &&
                    $navbarCollapse.hasClass("show")
                ) {

                    collapseInstance.hide();

                }

            }

        }
    );

});