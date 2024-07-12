<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let buttonText: string;
  export let href: string;
</script>

<div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
  <a href={href} class="absolute inset-0 z-10" aria-label={title}>
    <span class="sr-only">View {title}</span>
  </a>
  <img
    src={imageUrl}
    alt={title}
    width={500}
    height={400}
    class="object-cover w-full h-64"
  />
  <div class="p-4 bg-background">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-sm text-muted-foreground">
      {description}
    </p>
    <div class="mt-4">
      <a
        {href}
        class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        {buttonText}
      </a>
    </div>
  </div>
</div>
