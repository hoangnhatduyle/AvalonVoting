const confirmApprove = document.querySelector("#confirmApprove")
const confirmReject = document.querySelector("#confirmReject")
const approveResult = document.querySelector("#approveResult")
const rejectResult = document.querySelector("#rejectResult")

const confirmPlayer = document.querySelector("#confirmPlayer")
const reset = document.querySelector("#reset")

const currentVotes = document.querySelector("#currentVotes")

const closeButton = document.querySelector("#close")

const approveVotes = document.querySelectorAll(".approveVotes")
const rejectVotes = document.querySelectorAll(".rejectVotes")
let numOfPlay = 0;
let numOfVotes = 0;

let numOfApprove = 0;
let numOfReject = 0;

let numOfWinningVotes = 0;

confirmApprove.addEventListener("click", function () {
    numOfVotes++;
    numOfApprove++;
    currentVotes.textContent = numOfVotes;
    console.log(numOfApprove)
    if (numOfVotes === numOfPlay) {
        if (numOfApprove >= numOfWinningVotes) {
            document.querySelector(".overlay").style.display = 'flex';
            rejectResult.style.display = "none";
            approveVotes[0].textContent = numOfApprove;
            rejectVotes[0].textContent = numOfReject;
        } else {
            document.querySelector(".overlay").style.display = 'flex';
            approveResult.style.display = "none";
            approveVotes[1].textContent = numOfApprove;
            rejectVotes[1].textContent = numOfReject;
        }
    }
})

confirmReject.addEventListener("click", function () {
    numOfVotes++;
    numOfReject++;
    currentVotes.textContent = numOfVotes;
    if (numOfVotes === numOfPlay) {
        if (numOfReject >= numOfWinningVotes) {
            document.querySelector(".overlay").style.display = 'flex';
            approveResult.style.display = "none";
            approveVotes[1].textContent = numOfApprove;
            rejectVotes[1].textContent = numOfReject;
        } else {
            document.querySelector(".overlay").style.display = 'flex';
            rejectResult.style.display = "none";
            approveVotes[0].textContent = numOfApprove;
            rejectVotes[0].textContent = numOfReject;
        }
    }
})

confirmPlayer.addEventListener("click", function () {
    document.getElementById("numOfPlayer").disabled = true;
    numOfPlay = parseInt(document.getElementById("numOfPlayer").value);
    numOfWinningVotes = Math.floor(numOfPlay / 2) + 1;
})

reset.addEventListener("click", function () {
    currentVotes.textContent = 0;
    document.getElementById("numOfPlayer").disabled = false;
    approveResult.style.display = "block";
    rejectResult.style.display = "block";
    numOfVotes = 0;
    numOfReject = 0;
    numOfApprove = 0;
    numOfPlay = 0;
})

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = 'none';
})