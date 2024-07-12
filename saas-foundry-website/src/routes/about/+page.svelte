<script>
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

<main class="flex-grow container mx-auto py-10 px-4">
  <div class="text-center mb-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-2">{aboutData.sectionTitle}</h1>
    <p class="text-lg text-gray-600 leading-relaxed">{aboutData.aboutDescription}</p>
  </div>
  
  <div class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">{aboutData.missionTitle}</h2>
    <p class="text-base text-gray-600 leading-relaxed">{aboutData.missionDescription}</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">{aboutData.valuesTitle}</h2>
    <ul class="list-disc list-inside text-base text-gray-600 leading-relaxed">
      {#each aboutData.values as value}
        <li>{value}</li>
      {/each}
    </ul>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">{aboutData.teamTitle}</h2>
    <p class="text-base text-gray-600 leading-relaxed">{aboutData.teamDescription}</p>
  </div>
</main>
