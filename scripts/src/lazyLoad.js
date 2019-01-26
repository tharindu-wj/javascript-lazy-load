var LazyLoad = /** @class */ (function () {
    function LazyLoad(target_el) {
        var _this = this;
        this.init = function () {
            _this.target_el.forEach(_this.lazyLoad);
        };
        this.lazyLoad = function (item) {
            var io = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var el = entry.target;
                        el.classList.add('fade');
                        observer.disconnect();
                    }
                });
            });
            io.observe(item);
        };
        this.target_el = document.querySelectorAll(target_el);
        this.init();
    }
    return LazyLoad;
}());
