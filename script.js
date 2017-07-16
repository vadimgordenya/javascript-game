window.onload = function() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>'
    }
    var hod = 0;
    document.getElementById('game').onclick = function(event) {
        if (event.target.className == 'block') {
            console.log("1");
            if (hod % 2 == 0) {
                event.target.className += ' animated bounceIn'
                event.target.innerHTML = 'x';
            } else {
                event.target.className += ' animated tada'
                event.target.innerHTML = '0';
            }
            hod++;
            checkWinner();
        }
    }
    document.getElementById('start-game-btn').onclick = function() {
    	document.getElementById('start-game').style.display = 'none';
    }
    document.getElementById('restart-game').onclick = function() {
        var allBlocks = document.getElementsByClassName('block');
        for (var i = 0; i < allBlocks.length; i++) {
            allBlocks[i].innerHTML = '';
            allBlocks[i].className = 'block';
            allBlocks[i].style.background = "transparent";
        }
        document.getElementById('info').className = 'animated zoomOutRight';
        document.getElementById('result').innerText = '';
    }
    var countWinnerX = 0;
    var countWinnerO = 0;
    document.getElementById('clear-score').onclick = function() {
        document.querySelector('#result-x span').innerHTML = '0';
        document.querySelector('#result-O span').innerHTML = '0';
        localStorage.removeItem('result-x');
        localStorage.removeItem('result-O');
        countWinnerX = 0;
        countWinnerO = 0;
    }
    var countMoves = 0;
    var number = false;

    function checkWinner() {

        countMoves++;

        var allBlocks = document.getElementsByClassName('block');
        // Горизонталь Крестики
        if (allBlocks[0].innerHTML == 'x' && allBlocks[1].innerHTML == 'x' && allBlocks[2].innerHTML == 'x') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[1].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        if (allBlocks[3].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[5].innerHTML == 'x') {
            number = true;
            allBlocks[3].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[5].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        if (allBlocks[6].innerHTML == 'x' && allBlocks[7].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') {
            number = true;
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[7].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        // Вертикаль Крестики
        if (allBlocks[0].innerHTML == 'x' && allBlocks[3].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[3].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        if (allBlocks[1].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[7].innerHTML == 'x') {
            number = true;
            allBlocks[1].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[7].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        if (allBlocks[2].innerHTML == 'x' && allBlocks[5].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') {
            number = true;
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[5].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        // Диагональ Крестики
        if (allBlocks[0].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[8].innerHTML == 'x') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        if (allBlocks[2].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[6].innerHTML == 'x') {
            number = true;
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Крестики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerX++;
            localStorage.setItem('result-x', countWinnerX);
            document.querySelector('#result-x span').innerHTML = localStorage.getItem('result-x');
            countMoves = 0;
        }
        // Горизонталь Нолики
        if (allBlocks[0].innerHTML == '0' && allBlocks[1].innerHTML == '0' && allBlocks[2].innerHTML == '0') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[1].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (allBlocks[3].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[5].innerHTML == '0') {
            number = true;
            allBlocks[3].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[5].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (allBlocks[6].innerHTML == '0' && allBlocks[7].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            number = true;
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[7].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        // Вертикаль Нолики
        if (allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' && allBlocks[6].innerHTML == '0') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[3].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[7].innerHTML == '0') {
            number = true;
            allBlocks[1].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[7].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            number = true;
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[5].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        // Диагональ Нолики
        if (allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            number = true;
            allBlocks[0].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[8].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[6].innerHTML == '0') {
            number = true;
            allBlocks[2].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[4].style.background = 'rgba(3, 128, 2, 0.8)';
            allBlocks[6].style.background = 'rgba(3, 128, 2, 0.8)';
            document.getElementById('result').innerText = 'Победили Нолики';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('info').style.display = 'flex';
            countWinnerO++;
            localStorage.setItem('result-O', countWinnerO);
            document.querySelector('#result-O span').innerHTML = localStorage.getItem('result-O');
            countMoves = 0;
        }
        if (countMoves >= 9 && number === false) {
            document.getElementById('info').style.display = 'flex';
            document.getElementById('info').className = 'animated jackInTheBox';
            document.getElementById('result').innerText = 'Ничья';
            countMoves = 0;
        }
        number = false;
    }
}