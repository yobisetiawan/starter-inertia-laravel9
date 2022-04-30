document.addEventListener(
    "DOMContentLoaded",
    function () {
        var search_able_selects = document.querySelectorAll(
            ".app-searchable-select"
        );

        for (const el of search_able_selects) {
            new Choices(el, {
                allowHTML: true,
                searchPlaceholderValue: "Search ",
                itemSelectText: "",
            });
        }

        var date_pickers = document.querySelectorAll(".app-date-picker");

        for (const el of date_pickers) {
            let minDate = el.getAttribute("min_date");
            let onlyDay = el.getAttribute("only_day");
            window.litepicker = {[el.id]: new Litepicker({
                element: el,
                format: "YYYY-MM-DD",
                minDate,
                lockDaysFilter: (date) => {
                    if (onlyDay < 7 && onlyDay !== null) {
                        const d = date.getDay();
                        const day = [0, 1, 2, 3, 4, 5, 6];

                        day.splice(onlyDay, 1);
    
                        return day.includes(d);
                    }

                    return;
                }
            })};
        }

        for (const el of document.querySelectorAll(".app-multi-select")) {
            new Choices(el, {
                allowHTML: true,
                  
            });
        }

        var popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    },
    false
);
