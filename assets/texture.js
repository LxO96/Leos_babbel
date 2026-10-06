// Fills the background with the faint wall of words from the Babbel artwork: in a shuffled order,
// so no row repeats the one above, and enough of them to cover the whole window at any size.
(function () {
  var el = document.querySelector(".texture");
  if (!el) return;
  var words = ["3D printing", "Art", "Parametric", "Composites", "Design", "CNC", "Cooking",
    "Gardening", "Prototyping", "Visualization", "Mechanics", "Engineering"];

  function next(last) {
    var w;
    do { w = words[Math.floor(Math.random() * words.length)]; } while (w === last);
    return w;
  }

  var parts = [];
  var last = null;

  // Only ever adds words, so a resize (or a phone's address bar hiding) never reshuffles what's showing.
  function fill() {
    if (el.clientHeight === 0) return;
    // Add words in batches until the text runs past the bottom of the window (capped, in case it never can).
    for (var batch = 0; batch < 100 && el.scrollHeight <= el.clientHeight + 200; batch++) {
      for (var i = 0; i < 300; i++) { last = next(last); parts.push(last); }
      el.textContent = parts.join(" · ");
    }
  }

  fill();
  // The site's font sets narrower than the fallback the first fill measured with: top up once it's in.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fill);
  var pending;
  window.addEventListener("resize", function () {
    clearTimeout(pending);
    pending = setTimeout(fill, 150);
  });
})();
