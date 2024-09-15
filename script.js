 function showAvialable() {
    document.getElementById("discover").innerHTML = `  
    <div class="here">
    <h1>
          We are available all across the globe
        </h1>
    
      <p>
        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.
    
      </p>
     <button> Shop now</button>
    </div>
    <div class="next">
        <button class="left">
          <img src="./images/icon-angle-left.svg" alt="icon-angle-left"/>
          <img src="./images/icon-angle-right.svg" alt="icon-angle-right" onClick="showMake()"/>
        </button>
    `
}
function showMake() {
    document.getElementById("discover").innerHTML = `  
    <div class="here">
    <h1>
        Manufactured with the best materials
    
      </h1>
      <p>
        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.
    
      </p>
     <button class="spread">
      Shop now
     </button>
    </div>
    <div class="next">
        <button class="left">
          <img src="./images/icon-angle-left.svg" alt="icon-angle-left"/>
          <img src="./images/icon-angle-right.svg" alt="icon-angle-right">
        </button>
    `
}