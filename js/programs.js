const programsMenu = document.querySelectorAll('.program');
const programDetail = document.querySelector('.program-detail');

const removeActiveclass = () => {
  programsMenu.forEach(button => {
    button.classList.remove('active');
  })
}

programsMenu.forEach(program => {
  program.addEventListener('click', () => {
    removeActiveclass();
    if(program.classList.contains('express')) {
      program.classList.add('active');
      programDetail.innerHTML = `
        <div class="container">
          <div class="program-detail__left">
            <h2>Regular Learning</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Dolor illum qui eaque deserunt. Temporibus quos 
              nemo voluptate ab suscipit! Nihil earum est veniam 
              reprehenderit nisi aliquam non dolorem natus optio.
            </p>
            <div class="program-detail__images">
              <div><img src="./assets/32323.jpg" alt=""></div>
              <div><img src="./assets/graduate2.webp" alt=""></div>
            </div>
            <h4>Included in weekday streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>Practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>

            <h4>The Weekend streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <a href="/contact.html" class="btn btn-primary">Get Started now!</a>
          </div>

          <div class="program-detail__right">
            <article>
              <h4>Regular Without License</h4>
              <div>
                <h2>$1,990</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$1,180</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Standard License</h4>
              <div>
                <h2>$2,650</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,500</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Premium License</h4>
              <div>
                <h2>$2,900</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,750</h2>
                <p>for Students</p>
              </div>
              <p>License Will be ready 2 weeks after completion</p>
            </article>
          </div>
        </div> 
      `
    } else if (program.classList.contains('polishing')) {
      program.classList.add('active');
      programDetail.innerHTML = `
        <div class="container">
          <div class="program-detail__left">
            <h2>Regular Learning</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Dolor illum qui eaque deserunt. Temporibus quos 
              nemo voluptate ab suscipit! Nihil earum est veniam 
              reprehenderit nisi aliquam non dolorem natus optio.
            </p>
            <div class="program-detail__images">
              <div><img src="./assets/graduate6.jpg" alt=""></div>
              <div><img src="./assets/practical10.jpg" alt=""></div>
            </div>
            <h4>Included in weekday streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>Practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>

            <h4>The Weekend streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <a href="/contact.html" class="btn btn-primary">Get Started now!</a>
          </div>

          <div class="program-detail__right">
            <article>
              <h4>Regular Without License</h4>
              <div>
                <h2>$1,990</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$1,180</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Standard License</h4>
              <div>
                <h2>$2,650</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,500</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Premium License</h4>
              <div>
                <h2>$2,900</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,750</h2>
                <p>for Students</p>
              </div>
              <p>License Will be ready 2 weeks after completion</p>
            </article>
          </div>
        </div> 
      `
    } else if (program.classList.contains('license')) {
      program.classList.add('active');
      programDetail.innerHTML = `
        <div class="container">
          <div class="program-detail__left">
            <h2>Regular Learning</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Dolor illum qui eaque deserunt. Temporibus quos 
              nemo voluptate ab suscipit! Nihil earum est veniam 
              reprehenderit nisi aliquam non dolorem natus optio.
            </p>
            <div class="program-detail__images">
              <div><img src="./assets/graduate4.jpg" alt=""></div>
              <div><img src="./assets/practical1.jpg" alt=""></div>
            </div>
            <h4>Included in weekday streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>Practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>

            <h4>The Weekend streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <a href="/contact.html" class="btn btn-primary">Get Started now!</a>
          </div>

          <div class="program-detail__right">
            <article>
              <h4>Regular Without License</h4>
              <div>
                <h2>$1,990</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$1,180</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Standard License</h4>
              <div>
                <h2>$2,650</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,500</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Premium License</h4>
              <div>
                <h2>$2,900</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,750</h2>
                <p>for Students</p>
              </div>
              <p>License Will be ready 2 weeks after completion</p>
            </article>
          </div>
        </div> 
      `
    } else if (program.classList.contains('regular')) {
      program.classList.add('active');
      programDetail.innerHTML = `
        <div class="container">
          <div class="program-detail__left">
            <h2>Regular Learning</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Dolor illum qui eaque deserunt. Temporibus quos 
              nemo voluptate ab suscipit! Nihil earum est veniam 
              reprehenderit nisi aliquam non dolorem natus optio.
            </p>
            <div class="program-detail__images">
              <div><img src="./assets/graduate3.jpg" alt=""></div>
              <div><img src="./assets/practical8.jpg" alt=""></div>
            </div>
            <h4>Included in weekday streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>Practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>

            <h4>The Weekend streams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Animi reiciendis repudiandae modi minus mollitia autem perferendis?
            </p>
            <article>
              <h5>Theory Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <article>
              <h5>practical Lessons</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum saepe voluptatum maxime totam tempora possimus 
                facilis quam minima nemo? Iure ratione aliquam molestias 
                tempore temporibus, rem laudantium atque deleniti.
              </p>
            </article>
            <a href="/contact.html" class="btn btn-primary">Get Started now!</a>
          </div>

          <div class="program-detail__right">
            <article>
              <h4>Regular Without License</h4>
              <div>
                <h2>$1,990</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$1,180</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Standard License</h4>
              <div>
                <h2>$2,650</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,500</h2>
                <p>for Students</p>
              </div>
            </article>

            <article>
              <h4>Regular With Premium License</h4>
              <div>
                <h2>$2,900</h2>
                <p>for non Students</p>
              </div>
              <div>
                <h2>$2,750</h2>
                <p>for Students</p>
              </div>
              <p>License Will be ready 2 weeks after completion</p>
            </article>
          </div>
        </div> 
      `
    }
  })
})