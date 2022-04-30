Alpine.store("basic", {
    addClassByQuery(selector, cls) {
        let blocks = document.querySelectorAll(selector);

        for (const i of blocks) {
            if (typeof cls === "string") {
                i.classList.add(cls);
            } else {
                for (const ic of cls) {
                    i.classList.add(ic);
                }
            }
        }
    },
    removeClassByQuery(selector, cls) {
        let blocks = document.querySelectorAll(selector);

        for (const i of blocks) {
            if (typeof cls === "string") {
                i.classList.remove(cls);
            } else {
                for (const ic of cls) {
                    i.classList.remove(ic);
                }
            }
        }
    },
    gotoUrl(el) {
        if (el?.dataset?.url) {
            window.location.href = el?.dataset?.url;
        }
    },
    createElement(str) {
        var frag = document.createDocumentFragment();

        var elem = document.createElement("div");
        elem.innerHTML = str;

        while (elem.childNodes[0]) {
            frag.appendChild(elem.childNodes[0]);
        }
        return frag;
    },
    appendSelectOptionItem(ref, value, label) {
        var opt = document.createElement("option");
        opt.value = value;
        opt.innerHTML = label;
        ref.appendChild(opt);
    },
    togglePassword($el, e) {
        let $target = $el
            .closest(".position-relative")
            .getElementsByTagName("input")[0];

        if ($target.getAttribute("type") == "password") {
            $target.setAttribute("type", "text");
            $el.classList.add("active");
        } else {
            $target.setAttribute("type", "password");
            $el.classList.remove("active");
        }

        e.preventDefault();
    },

    imagePick($el, e) {
        let target = $el.getAttribute("data-target");
        document.getElementById(target).click();

        e.preventDefault();
    },

    changeImagePick($el) {
        let target = $el.getAttribute("id");
        if ($el?.files?.length > 0) {
            this.removeClassByQuery("#" + target + "_placed", "d-none");
            this.removeClassByQuery("#" + target + "_placed_wrap", "d-none");
        } else {
            this.addClassByQuery("#" + target + "_placed", "d-none");
            this.addClassByQuery("#" + target + "_placed_wrap", "d-none");
        }
    },
});
