function showInfo(type){
  const info=document.getElementById("info");
  const messages={
    ingredients:"FreshGlow presents a nature-inspired skincare concept with moisturising care and organic-themed ingredients.",
    benefits:"The product experience highlights fresh-looking skin, moisture-focused care and an eco-friendly brand identity.",
    howto:"Clean your face, apply a small amount of cream evenly, and massage gently until absorbed."
  };
  info.textContent=messages[type];
}
