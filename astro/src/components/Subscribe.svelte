{#if $isViewed}
    <div class="bg-white rounded fixed p-2 bottom-5 right-5">
        <a href="#" class=" hover:underline">
            Subscribe to our newsletter!
        </a>
    </div>
{/if}

<script>
    import {isViewed} from '../stores/isViewed';     
</script>