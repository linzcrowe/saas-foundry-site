<script lang="ts">
  import { Card, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let title: string;
  export let description: string;
  export let imageUrl: string = 'lib/assets/project-placeholder-cloud.jpg';
  export let buttonText: string;
  export let href: string;
</script>

<Card img={imageUrl}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {description}
  </p>
  <Button href={href}>
    {buttonText} <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
  </Button>
</Card>
