<script>
  import heroImage from '$lib/assets/homepage-hero-primary.jpg';
  export let data;
</script>

<main class="flex-grow mt-8">
  <!-- Hero Section -->
  <section class="relative bg-gray-900 text-white">
    <div class="absolute inset-0 z-0">
      <img src={heroImage} alt="Insight Hero" class="w-full h-full object-cover opacity-50">
    </div>
    <div class="relative z-10 container mx-auto py-20 px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">{data.title}</h1>
      <p class="text-xl max-w-3xl mx-auto">{data.date}</p>
    </div>
  </section>

  <!-- Article Content -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <article class="prose lg:prose-xl max-w-3xl mx-auto">
        {@html data.content}
      </article>
    </div>
  </section>

  <!-- Related Posts or Call-to-Action -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8">Explore More Insights</h2>
      <a href="/insights" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        View All Insights
      </a>
    </div>
  </section>
</main>

<style>
  :global(.prose) {
    @apply max-w-none;
  }
  :global(.prose h1) {
    @apply text-4xl font-bold mt-8 mb-4 text-gray-800;
  }
  :global(.prose h2) {
    @apply text-3xl font-semibold mt-8 mb-4 text-gray-800;
  }
  :global(.prose h3) {
    @apply text-2xl font-semibold mt-6 mb-3 text-gray-800;
  }
  :global(.prose p) {
    @apply mb-4 text-gray-700 leading-relaxed;
  }
  :global(.prose ul, .prose ol) {
    @apply my-4 ml-6;
  }
  :global(.prose li) {
    @apply mb-2;
  }
  :global(.prose img) {
    @apply rounded-lg shadow-md my-8;
  }
  :global(.prose a) {
    @apply text-blue-600 hover:text-blue-800 transition-colors duration-300 underline;
  }
  :global(.prose blockquote) {
    @apply border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600;
  }
  :global(.prose code) {
    @apply bg-gray-100 rounded px-1 py-0.5 font-mono text-sm;
  }
  :global(.prose pre) {
    @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-6;
  }
  :global(.prose pre code) {
    @apply bg-transparent text-white;
  }
  :global(.prose table) {
    @apply w-full border-collapse my-6;
  }
  :global(.prose th, .prose td) {
    @apply border border-gray-300 px-4 py-2;
  }
  :global(.prose th) {
    @apply bg-gray-100 font-semibold;
  }
</style>
