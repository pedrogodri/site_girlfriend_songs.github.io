function sim() {
    const urls = [
        "https://open.spotify.com/playlist/5AHQKIwGv07GsGDTkTuvlP",
        "https://open.spotify.com/intl-pt/track/4JSROzfWqKccwZ68DX1aJe",
        "https://open.spotify.com/intl-pt/track/69ZsxJHVrQ2VXNk7urPNQC",
        "https://open.spotify.com/intl-pt/track/2TE9rkhJYDctxgzak0AnSb",
        "https://open.spotify.com/intl-pt/track/6nI98wtHOJAYSASq22TCYu",
        "https://open.spotify.com/intl-pt/track/6SKwQghsR8AISlxhcwyA9R",
        "https://open.spotify.com/intl-pt/track/0LDT8QEHbPA0aawzm9CWP7",
        "https://open.spotify.com/intl-pt/track/5HOkVB35cz5nK6ZeRj0xM6",
        "https://open.spotify.com/intl-pt/track/3QI5bIozef0HZ1kJnA2RdT",
        "https://open.spotify.com/intl-pt/track/5yEais1zgeW1MjLrx7tsie",
    ];

    const weddingMusic = document.getElementById("weddingMusic");

    confetties();

    weddingMusic.play();

    setTimeout(() => {
        const modal = document.getElementById("myModal");
        const playMusicButton = document.getElementById("playMusic");
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        
        modal.style.display = "block";

        playMusicButton.onclick = function() {
            window.open(randomUrl, "_blank");
        };

        document.querySelector(".close").onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }, 2000);
}

function confetties() {
    confetti({
        particleCount: 2000,
        spread: 5000,
        origin: { y: 0.25 }
    });
    confetti({
        particleCount: 2000,
        spread: 5000,
        origin: { y: 0.5 }
    });
    confetti({
        particleCount: 2000,
        spread: 5000,
        origin: { y: 0.75 }
    });
    confetti({
        particleCount: 2000,
        spread: 5000,
        origin: { y: 1 }
    });
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}