document.querySelector('#userText').value = ''
document.querySelector('#refresh').addEventListener('click', () => location.reload())
document.querySelector('#enter').addEventListener('click', addNote)

document.querySelector('#userTextClear').addEventListener('click', () => document.querySelector('#userText').value = '')

function enterKey() {
    let key = window.event.keyCode
    if (key === 13 && !event.shiftKey) {
        document.getElementById("enter").click()
        event.preventDefault();
    }
}

function addNote() {
    if (document.querySelector('#userText').value === '') {
        alert(`Enter something in text box!`)
    } else {
    let section = document.createElement('section')
    section.className = 'notes'
    section.innerText = document.querySelector('#userText').value
    document.querySelector('.notes').before(section)  
    // let button = document.createElement('button')
    // button.className = 'clearList'
    // button.innerHTML = 'Clear'
    // document.querySelector('.notes').append(button)
    // document.querySelector('.clearList').addEventListener('click',() => document.querySelector('.notes').classList.add('hidden'))

    document.querySelector('#userText').value = ''
    }
}
