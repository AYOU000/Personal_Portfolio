function addReco()
{
  const text = document.getElementById("comment");
  const input = text.value.trim();
  const name = document.getElementById("name")
  const Name = name.value.trim(); 
   if(input !== "")
   {
    const ul = document.getElementById("Reco");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = `"${input}"`;
    li.appendChild(span);
    ul.appendChild(li);
    text.value = "";
    showPopup(true);
   }
   else
   {
    alert ("please write a comment")
   }
}
function showPopup(bool) {
    let popup = document.getElementById("popup");
    if (bool) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
function closePopup() {
    showPopup(false);
}