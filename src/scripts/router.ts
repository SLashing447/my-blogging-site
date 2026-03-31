const AboutPage = `
     <main class="about">
      <div>
        ∇ <br />
        Hello World! <br />
        I am <b> Aishik Chakraborty </b> <br />
        just trying to explore and figure out what this world has to offer
        <br />
        through the eyes of an aspiring physicist
      </div>
      <div class="p">
        This space is a quiet mix of curiosity and exploration , a personal
        place where I write about ideas, small research trails, and things I'm
        trying to understand across mathematics, science, and programming.
        <br />
        Music, especially blues and rock on the guitar, sits at the center of it
        all, shaping how I think and approach things. <br />
        Alongside that, you'll find traces of novels and fiction, long walks and
        hikes, and a steady pull toward art, literature, history, and film.
        <br />
        It isn't meant to be complete , just an honest, evolving collection of
        what I find interesting, and a space where these different threads come
        together.
      </div>
      <div class="socials">
        <a href="">Instagram</a>
        <a href="">Discord</a>
        <a href="">Reddit</a>
        <a href="">Github</a>
      </div>
    </main>
`;

const NotePage = `       
 <h1>Notes</h1>

       <div class="notes">
         <div class="header">
            <div>
              <span>#</span>
             <span>title</span>
            </div>
            <span>genre</span>
           <span>date</span>
          </div>`;

const main = document.getElementById("main");

export default function router(route: string) {
  console.log(route);
}

//   <main class="note-module">

//         <button>
//           <div>
//             <span>1</span>
//             <span>title of the note</span>
//           </div>
//           <span>genre</span>
//           <span>date</span>
//         </button>
//         <button>
//           <div>
//             <span>2</span>
//             <span>title of the note</span>
//           </div>
//           <span>genre</span>
//           <span>date</span>
//         </button>
//       </div>
//     </main>

function createNotesPage() {}

function clearMain(cn?: string) {
  if (!main) return;

  main.innerHTML = "";
  if (cn) {
    main.className = cn;
  }
}
