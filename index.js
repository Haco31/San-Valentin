document.getElementById('carta-boton').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        resetModal();
        modal.style.display = 'none';
    }
});

document.getElementById('play-button').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pausar Música';
    } else {
        audio.pause();
        this.textContent = 'Reproducir Música';
    }
});

// Variables para mantener el estado de las escalas
var scaleYes = 1;
var scaleNo = 1;


// Funcionalidad para los botones del modal
function addModalButtonEvents() {
    document.getElementById('yes-button').addEventListener('click', function() {
        var modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '<span class="close-button">&times;</span><img src="gato.png" alt="Imagen de amor" style="max-width: 100%; border-radius: 10px;">';
        document.querySelector('.close-button').addEventListener('click', function() {
            resetModal();
            var modal = document.getElementById('modal');
            modal.style.display = 'none';
        });
    });

    document.getElementById('no-button').addEventListener('click', function() {
        var yesButton = document.getElementById('yes-button');
        var noButton = document.getElementById('no-button');

        function animateButtons() {
            scaleYes *= 1.2;
            scaleNo *= 0.8;
            yesButton.style.transform = `scale(${scaleYes})`;
            noButton.style.transform = `scale(${scaleNo})`;
        }

        animateButtons();
    });
}

function resetModal() {
    var modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="close-button">&times;</span>
        <h2>Para mi amor bonito, Aileen</h2>
        <p>A veces tengo ganas de ser cursi
        para decir: La amo a usted con locura.
        A veces tengo ganas de ser tonto
        para gritar: ¡La quiero tanto!
        
        A veces tengo ganas de ser niño
        para llorar acurrucado en su seno.
        
        A veces tengo ganas de estar muerto
        para sentir,
        bajo la tierra húmeda de mis jugos,
        que me crece una flor
        rompiéndome el pecho,
        una flor, y decir:
        Esta flor, para usted.
        </p>
        <p>¿Quieres ser mi San Valentín, Patsy?</p>
        <button id="yes-button" class="modal-button">Sí</button>
        <button id="no-button" class="modal-button">No</button>
    `;

    document.querySelector('.close-button').addEventListener('click', function() {
        var modal = document.getElementById('modal');
        modal.style.display = 'none';
    });

    // Restablecer las escalas al valor inicial
    scaleYes = 1;
    scaleNo = 1;

    addModalButtonEvents();
}

// Inicializa los eventos de los botones del modal
addModalButtonEvents();