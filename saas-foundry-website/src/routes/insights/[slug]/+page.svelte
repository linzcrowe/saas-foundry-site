<script>
  export let data;
</script>

<article class="prose lg:prose-xl">
  <h1>{data.title}</h1>
  <p class="text-gray-600">{data.date}</p>
  {@html data.content}
</article>
