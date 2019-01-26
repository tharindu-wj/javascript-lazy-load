class LazyLoad{
    
    private target_el;

    constructor(target_el){
        this.target_el = document.querySelectorAll(target_el);
        this.init();

    }

    private init = () => {
        this.target_el.forEach(this.lazyLoad);
    }

    private lazyLoad = (item) => {
        const io = new IntersectionObserver((entries, observer) =>  {
            entries.forEach(entry => {    
                if(entry.isIntersecting){
                    const el = entry.target;
                    el.classList.add('fade');
    
                    observer.disconnect();
                }
            });
        });
        io.observe(item);
    }
}


