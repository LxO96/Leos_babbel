// Fills the background with the faint wall of words from the Babbel artwork.
(function () {
  var el = document.querySelector(".texture");
  if (!el) return;
  var words = "3D printing · Art · Parametric · Composites · Design · CNC · Cooking · Gardening · Prototyping · Visualization · Mechanics · Engineering · ";
  el.textContent = new Array(160).join(words);
})();
