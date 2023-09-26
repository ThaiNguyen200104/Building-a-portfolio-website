const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    // const observer = new IntersectionObserver(() => {}, {
    //     root: null, // Root option defines the parent element we want to observe
    //                     // Leave it at null,  the entire page will be observed
    //     rootMargin: '0px', // RootMargin option adds additional space to be observed on the root
    //     threshold: 0, // Threshold defines how much of the image needs to be visible before
    //                     // observing it. If it is set to 1, the img have to be 100% visible.
    //     // In this case, we need it to be observed the exact moment
    //         // it enters the viewport so it has to be 0
    // });
        // Because the three options are set to default so we don't need to display them
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    });
}

export default lazyLoading;