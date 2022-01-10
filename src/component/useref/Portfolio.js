

export function Header({ pageRefs }) {

    function scrollIntoView(type) {
      pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header className="btn">
        <button onClick={() => scrollIntoView('about')}>
          HTML
        </button>
        <button onClick={() => scrollIntoView('techno')}>
          CSS
        </button>
        <button onClick={() => scrollIntoView('portfolio')}>
         JS
        </button>

        <button onClick={() => scrollIntoView('sample')}>
         REACT
        </button>

        <button onClick={() => scrollIntoView('node')}>
       NODE
        </button>
      </header>
    );
  };
  
  export  function About({ pageRefs }) {
    return (
      <section
        className="page about"
        ref={el => pageRefs.current = { ...pageRefs.current, about: el }}>
        < img src="https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg"/>
      </section>
    );
  };
  
  export function Technology({ pageRefs }) {
    return (
      <section
        className="page techno"
        ref={el => pageRefs.current = { ...pageRefs.current, techno: el }}>
        < img src="https://i1.wp.com/www.cssscript.com/wp-content/uploads/2016/02/CSS-Only-Crossfading-Background-Slideshow.jpg?fit=475%2C354&ssl=1"/>

      </section>
    );
  };
  
  export function Portfolio({ pageRefs }) {
    return (
      <section
        className="page portfolio"
        ref={el => pageRefs.current = { ...pageRefs.current, portfolio: el }}>
        < img src="https://image.freepik.com/free-photo/javascript-programming-code-abstract-technology-background_272306-155.jpg"/> 
      </section>
    );
  };
  
 
  export function Sample({ pageRefs }) {
    return (
      <section
        className="page sample"
        ref={el => pageRefs.current = { ...pageRefs.current, sample: el }}>
         <img src="https://i.morioh.com/200728/b71d4811.webp"></img>
       </section>
    );
  };
  
  export function Node({ pageRefs }) {
    return (
      <section
        className="page node"
        ref={el => pageRefs.current = { ...pageRefs.current, node: el }}>
         <img src="  https://www.brainfuel.io/images/node-js-new.png"></img>
       </section>
    );
  };
  
 

