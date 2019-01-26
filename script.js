window.onload = function(){
    //All elements
    const target = document.querySelectorAll('[data-lazy-load]');

    //Observer function to each element
    const lazyLoad = (item) => {
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
    };
    
    //Apply observer function to target elements
    target.forEach(lazyLoad);
}

  
 