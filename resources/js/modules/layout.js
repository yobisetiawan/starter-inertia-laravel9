let $basic = Alpine.store("basic");

Alpine.store("layout", {
    isOpen: false,
    toggleMainMenu(e) {
        if (!this.isOpen) {
            $basic.addClassByQuery(
                ".app-main-menu, .page-main-content.with-nav",
                "open-mobile"
            );
        } else {
            $basic.removeClassByQuery(
                ".app-main-menu, .page-main-content.with-nav",
                "open-mobile"
            );
        }

        this.isOpen = !this.isOpen;

        e.preventDefault();
    },
});
