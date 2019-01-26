class LazyLoad{
    
    //Tagret elements 
    private target_el;

    constructor(target_el){
        this.target_el = document.querySelectorAll(target_el);
        this.init();

    }

    //Apply observer function to target elements
    private init = () => {
        this.target_el.forEach(this.lazyLoad);
    }

    //Observer function to each element
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


