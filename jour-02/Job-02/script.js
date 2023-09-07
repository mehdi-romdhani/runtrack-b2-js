document.addEventListener('DOMContentLoaded',()=>{
    const myAddCount = () => {
        const countDisplay = document.querySelector('#count-display');
        const btnCount = document.querySelector('#add-count-btn');
        let count = 0;

        // countDisplay.textContent = count;


        btnCount.addEventListener('click',()=>{
            count ++;
            countDisplay.textContent = count;
        })
        
    }

    myAddCount();
})