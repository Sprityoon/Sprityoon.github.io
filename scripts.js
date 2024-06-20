// script.js
const dialogues = [
    "여기를 눌러주세용~.~",
    "안녕! 시연아!",
    "헤헤 생일 축하 편지하고는 또 따로 이렇게 하나 만들어주고 싶었어",
    "먼가 허전하고 짧지만 귀엽게 봐줬으면 좋겟당 헤헤",
    "생일 정말정말 축하해!",
    "그동안 이런저런 일들이 있는 와중에 시연이와 함께여서 너무 행복했어",
    "시연이가 나 덕분이라고 말하는 만큼, 나도 시연이 덕분에 많은 경험도 해보구",
    "시시하고 별 거 아닐뻔한 날들도 시연이가 있어서 다채로워졌어",
    "앞으로도 나랑 함께 재밌고 행복한 날들을 보냈으면 좋겠어",
    "또 평화로운 나날들이 계속됐으면 좋겠구~",
    "많이 사랑하고 아껴♥",
    "한번 더 생일 축하해!! 사랑해~.~♥"
];

let dialogueIndex = 0;
const dialogueBox = document.querySelector('.dialogue-text');
const characterLeft = document.getElementById('character-left');
const characterRight = document.getElementById('character-right');

function typeDialogue(dialogue, callback) {
    let i = 0;
    dialogueBox.innerHTML = dialogue;
    
    dialogueBox.innerHTML = '';
    const typingElement = document.createElement('span');
    typingElement.classList.add('typing');
    dialogueBox.appendChild(typingElement);
    characterLeft.classList.add('nodding'); // 캐릭터에 애니메이션 클래스 추가
    characterRight.classList.add('nodding'); // 캐릭터에 애니메이션 클래스 추가

  function type() {
        if (i < dialogue.length) {
            typingElement.textContent += dialogue.charAt(i);
            i++;
            setTimeout(type, 50); // 타이핑 속도 조절 (더 빠르게)
        } else {
            characterLeft.classList.remove('nodding'); // 타이핑이 끝나면 애니메이션 클래스 제거
            characterRight.classList.remove('nodding'); // 타이핑이 끝나면 애니메이션 클래스 제거
            if (callback) callback();
        }
    }

    type();
}

function updateDialogue() {
    if (dialogueIndex < dialogues.length) {
        typeDialogue(dialogues[dialogueIndex], () => {
            dialogueIndex++;
        });
    } else {
        dialogueBox.innerText = " 끝! ";
    }
}

document.querySelector('.dialogue-box').addEventListener('click', updateDialogue);
updateDialogue(); // 첫 번째 대사를 표시합니다.
