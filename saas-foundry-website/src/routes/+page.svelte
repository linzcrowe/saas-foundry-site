<script>
    import { MountainIcon } from '$lib/Icons'; // Assuming you create an Icons.svelte component
    import HomepageHeroPrimary from '$lib/assets/homepage-hero-primary.jpg'
    import HomepageServices from '$lib/assets/homepage-services.jpg'
  
    let email = ''; 
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Handle form submission here (e.g., send data to your backend)
      console.log('Email submitted:', email);
      email = ''; // Clear the input field
    };
  
  </script>
  
  <svelte:head>
    <title>SaaS Foundry</title> 
    <meta name="description" content="Launching Innovative SaaS Products" />
  </svelte:head>
  
  <header class="px-4 lg:px-6 h-14 flex items-center bg-gray-100">
    <a href="/" class="flex items-center justify-center">
      <MountainIcon class="h-6 w-6" />
      <span class="sr-only">SaaS Foundry</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a href="#services" class="text-sm font-medium hover:underline underline-offset-4">
        Services
      </a>
      <a href="#testimonials" class="text-sm font-medium hover:underline underline-offset-4">
        Testimonials
      </a>
      <a href="#contact" class="text-sm font-medium hover:underline underline-offset-4">
        Contact
      </a>
    </nav>
  </header>
  
  <main>
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Launching Innovative SaaS Products
              </h1>
              <p class="max-w-[600px] text-gray-600 md:text-xl">
                We partner with industry leaders to create targeted, high-impact SaaS solutions.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#contact"
                class="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <img
            src={HomepageHeroPrimary}
            alt="Hero"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            width="550"
            height="550"
          /> 
        </div>
      </div>
    </section>
  
    <section id="services" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p class="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We partner with industry leaders to create targeted, high-impact SaaS solutions.
            </p>
          </div>
        </div>
        <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src={HomepageServices}
            alt="Image"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            width="550"
            height="310"
          />
          <div class="flex flex-col justify-center space-y-4">
            <ul class="grid gap-6">
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Product Development</h3>
                  <p class="text-gray-600">
                    We work with you to design and build innovative SaaS products.
                  </p>
                </div>
              </li>
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Go-to-Market Strategy</h3>
                  <p class="text-gray-600">
                    We help you develop and execute a successful go-to-market strategy.
                  </p>
                </div>
              </li>
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Ongoing Support</h3>
                  <p class="text-gray-600">
                    We provide ongoing support and maintenance to ensure your product's success.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    <section id="contact" class="w-full py-12 md:py-24 lg:py-32">
      <div
        class="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
      >
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <p
            class="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Let's discuss how we can partner to launch your next innovative
            SaaS product.
          </p>
        </div>
        <div class="mx-auto w-full max-w-sm space-y-2">
          <form class="flex gap-2" on:submit|preventDefault={handleSubmit}> 
            <input
              type="email"
              placeholder="Enter your email"
              class="max-w-lg flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={email}
            />
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get in Touch
            </button>
          </form>
          <p class="text-xs text-gray-600">
            We'll get back to you as soon as possible.
            <a href="/privacy" class="underline underline-offset-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  </main>
  
  
  <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100"
  >
    <p class="text-xs text-gray-600">
      &copy; 2024 SaaS Foundry. All rights reserved.
    </p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <a href="#" class="text-xs hover:underline underline-offset-4">
        Terms of Service
      </a>
      <a href="/privacy" class="text-xs hover:underline underline-offset-4">
        Privacy Policy
      </a>
    </nav>
  </footer>
  