const message = `alloooo!! kamu udah sembuh belum? sorry ya tiba tiba ngirim ginian.\naku cuma pengen kamu tau, sejak kita udahan aku beneran intropeksi diri aku sendiri dan aku beneran banyak salahnya ke kamu...\n\naku tau dengan aku minta maaf begini ga bakal ngubah apa apa, tapi aku rasa kamu harus tau\n\n;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
