<script>
  import aboutImage from '$lib/assets/homepage-hero-primary.jpg';
  import teamImage from '$lib/assets/homepage-services.jpg';

  const aboutData = {
    sectionTitle: 'About SaaS Foundry',
    aboutDescription:
      "SaaS Foundry is dedicated to providing innovative, scalable, and cost-effective software solutions for businesses in underserved markets. We turn your industry expertise into impactful software that solves real problems.",
    missionTitle: 'Our Mission',
    missionDescription:
      "Our mission is to empower businesses by delivering cutting-edge, efficient, and tailored SaaS products. We aim to transform challenges into opportunities, ensuring your success and growth.",
    valuesTitle: 'Our Values',
    values: [
      'Customer Success: We prioritize our clients\' success.',
      'Innovation: We leverage the latest technology for the best solutions.',
      'Integrity: We adhere to the highest standards of integrity.',
      'Excellence: We strive for excellence in every aspect of our work.'
    ],
    teamTitle: 'Our Team',
    teamDescription:
      "Our team comprises industry experts passionate about technology and innovation. We are committed to providing exceptional service and support, helping you achieve your business goals."
  };
</script>

<main class="flex-grow">
  <!-- Hero Section -->
  <section class="relative bg-gray-900 text-white">
    <div class="absolute inset-0 z-0">
      <img src={aboutImage} alt="About SaaS Foundry" class="w-full h-full object-cover opacity-50">
    </div>
    <div class="relative z-10 container mx-auto py-20 px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">{aboutData.sectionTitle}</h1>
      <p class="text-xl max-w-3xl mx-auto">{aboutData.aboutDescription}</p>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{aboutData.missionTitle}</h2>
      <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">{aboutData.missionDescription}</p>
    </div>
  </section>

  <!-- Values Section -->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">{aboutData.valuesTitle}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each aboutData.values as value}
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-lg text-gray-700">{value}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img src={teamImage} alt="Our Team" class="rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 md:pl-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">{aboutData.teamTitle}</h2>
        <p class="text-lg text-gray-600 leading-relaxed">{aboutData.teamDescription}</p>
      </div>
    </div>
  </section>
</main>