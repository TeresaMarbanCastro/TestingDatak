import { test } from './App';

describe('test', () => {
    test();
    var mailInput = document.getElementById('mailInput');
    var passwordInput = document.getElementById('passwordInput');
    var loginButton = document.getElementById('loginButton');
    var formArea = document.getElementById('formulario');
    var logginArea = document.querySelector('.loginArea');
    var nombre = document.querySelector('.nombre');
    var apellido = document.querySelector('.apellido');
    var guardarButton = document.getElementById('saveButton');
    var visualizar = document.getElementById('visualizar');
    var show = document.querySelector('.show');

    // var dbRefObject = firebase.database().ref().child('users');
    var showName = document.querySelector('.showName');
    var showSurname = document.querySelector('.showlastname');
    var showEmail = document.querySelector('.showEmail');
    var showID = document.querySelector('.showID');

    var logoutButton = document.getElementById('logoutButton');
    var userReference; 
    
    var userID = '';

    visualizar.addEventListener('click', ()=>{
        event.preventDefault()
        var userRef = dbRefObject.child(userID);
                formArea.classList.add('hidden');
                show.classList.remove('hidden');
                userRef.on('value', snap => {
                   console.log(snap.val());
                    showName.innerHTML = snap.val().nombre;
                    showSurname.innerHTML = snap.val().apellido;
                    showEmail.innerHTML = snap.val().email;
                    showID.innerHTML = snap.val().userID;
                });
            
    });
    it('should be up and running', () => {
        expect(mailInput).toBe(null);
        mailInput.value = 'gemma';
        visualizar.click();
        expect(showEmail.value).toBe('gemma');
    });

});