import router from "./router";

console.log("hello world");

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const link = target.closest("a");
  if (!link) return;

  const url = new URL(link.href);

  // only handle same-origin links
  if (url.origin !== location.origin) return;

  e.preventDefault();

  history.pushState({}, "", url.pathname);

  router(url.pathname);
});

//   <div class="blog-module">
//       <aside class="sidebar">
//         <div class="pnav">
//           <a class="h2">Oscillators</a>
//           <a class="h3">eulers formula</a>
//           <!-- <button class="h3">Simple Harmonic Motion</button> -->
//           <a class="h3">Derivation</a>
//           <a class="h3">more cases</a>
//           <a class="h2">SHM</a>
//           <a class="h3">application</a>
//         </div>
//       </aside>
//       <div class="content-body">acids are pretty simple</div>
//     </div>
