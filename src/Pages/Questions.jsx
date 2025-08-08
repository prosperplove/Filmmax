import React from 'react'

const Questions = () => {
  return (
    <div>
      
<div class="accordion accordion-flush" id="accordionFlushExample">
  <h2 style={{ textAlign:"center", fontSize:"xx-large", fontWeight:"700"}}>Frequently Asked Questions:</h2>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Who is the founder of filmmax?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><b>FILMMAX </b> is founded by Chukwujekwu Prosper, popularly known as <b>Ploveweb3</b>. hails from Nigeria and a lover of christ.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        What is the vision of Filmmax?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><b>FILMMAX</b> is divinely created to help, supports and connects young film creatives to top professional experience and advance their skills to achieve their dreams </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Is Filmmax 2026 summer submit free?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes!, Filmmax 2026 submit registration is free, but only available for the first 1,000 registered attendee. as one of their top goal is to help young film creatives connects to their dreams. Any platform charging fees of any kinds is considered a <span style={{ color:"red" }}>scam</span>.</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Questions
