<x-guest-layout>
       


<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
  <div class="mx-auto max-w-5xl py-24">

    <h1 class="text-4xl">Course Outline</h1>

    <p class="py-4">The course is expected to last 4-week, structured into 8 sessions (2 per week, 1 hour each).</p>
    
    <div class="prose prose-lg max-w-none">
      {!! Str::markdown($markdown) !!}
    </div>

  </div>
</div>




</x-guest-layout>
