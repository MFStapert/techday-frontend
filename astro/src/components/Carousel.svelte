<section class="bg-sky-900">
    <div class="container m-auto py-32 space-y-2 relative overflow-hidden">      
        <h2 class="text-4xl font-bold text-white">
        Uitstekende software<span class="text-sky-600">.</span>
        </h2>
        <h2 class="text-4xl font-bold text-white">
        Buitengewone ervaringen<span class="text-sky-600">.</span>
        </h2>
        <h2 class="text-4xl font-bold text-white">
        Proactieve technische partner<span class="text-sky-600">.</span>
        </h2>
        
        <div bind:this={slidesContainer} class="scrollbar-hide p-32 flex space-x-8 overflow-scroll scroll-smooth">
            {#each customers as customer}
                <div bind:this={slide} class="slide text-white text-2xl font-bold w-full grow shrink-0 basis-2/4">
                    {customer}
                </div>
            {/each}
        </div>

        <div class="border-t text-right border-white text-xl font-bold text-white">
        Een greep uit onze klanten
        </div>
    </div>
</section>

<script>
    import { onMount } from 'svelte';
    import {isViewed} from '../stores/isViewed';    

    let slidesContainer;
    let slide;

    const customers = [
        "KNB",
        "LYFO",
        "ECH",
        "HDN",
        "ESSENT",
        "ROBECO"
    ];

    onMount(() => {
        isViewed.set(true);
        setInterval(() => {
            const slideWidth = slide.clientWidth ?? 0;
            var maxScrollLeft = slidesContainer?.scrollWidth - slidesContainer?.clientWidth;
            var maxScrollLeft = slidesContainer?.scrollWidth - slidesContainer?.clientWidth;

            if (slidesContainer.scrollLeft + slideWidth > maxScrollLeft) {
                slidesContainer.scrollLeft = 0;
            } else {
                slidesContainer.scrollLeft += slideWidth;  
            }    
        }, 1000);
    })
</script>

<style>
    .scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>