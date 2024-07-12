<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { innovationProjects } from '$lib/data/innovation-projects';
  </script>
  
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
      {#each innovationProjects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
  