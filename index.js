fetch("https://souhaib-node-mailer.herokuapp.com/experiences")
  .then((response) => response.json())
  .then((json) => {
    EperiencesTitle = document.getElementById("experiences");
    console.log(json.experiences);
    var experiencesContent = `<div class="resume-item">
                                    <h4>[TITLE]</h4>
                                    <h5>[TIME]</h5>
                                    <p><em>[ADRESS]</em></p>
                                    <ul>
                                    <li>[work1]</li>
                                    <li>[work2]</li>
                                    <li>[work3]</li>
                                    <li>[work4]</li>
                                    </ul>
                                </div>`;
    json.experiences.forEach((element) => {
      var currentContent = experiencesContent;
      currentContent = currentContent.replace("[TITLE]", element["A"]);
      currentContent = currentContent.replace("[TIME]", element["B"]);
      currentContent = currentContent.replace("[ADRESS]", element["C"]);
      currentContent = currentContent.replace("[work1]", element["D"]);
      currentContent = currentContent.replace("[work2]", element["E"]);
      currentContent = currentContent.replace("[work3]", element["F"]);
      currentContent = currentContent.replace("[work4]", element["G"]);
      var div = document.createElement("div");
      div.innerHTML = currentContent;
      experiences.appendChild(div);
    });
  });

