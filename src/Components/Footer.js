import React from 'react';

//footer at a the bottom -common for all routes 
function Footer () {
  return (
    <div>
      <footer class="p-2 m-auto bg-dark fixed-bottom">
        <div class="container">
          <p class=" m-0 text-center text-white ">
            JustForYou &copy; &nbsp; {new Date().getFullYear()}
            </p>
        </div>
      </footer>
    </div>

  );
};

export default Footer;

