function submitData() {

    let skillHtml =  document.getElementById('html').checked;
    let skillCss =  document.getElementById('css').checked;
    let skillJs = document.getElementById('js').checked;

    // CONDITION SKILL HTML!
    // JIKA USER TIDAK MENGISI CHECKBOX!
    if (skillHtml) {
        skillHtml = (document.getElementById('html').value);
    } else {
        skillHtml = "";
    }

    // CONDITION SKILL CSS!
    // JIKA USER TIDAK MENGISI CHECKBOX!
    if (skillCss) {
        skillCss = (document.getElementById('css').value);
    } else {
        skillCss = "";
    }
    
    // CONDITION SKILL JS!
    // JIKA USER TIDAK MENGISI CHECKBOX!
    if (skillJs) {
        skillJs = (document.getElementById('js').value);
    } else {
        skillJs = "";
    }

    // CONDITION PESAN ALERT!
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    

    if (name == "" && email == "" && number == "" && subject == "Select Here" && message == "") {
        return alert("Form cannot empty!")
    } else if (name == "") {
        return alert("What is your name?");
    } else if (email == "") {
        return alert("Email is required!");
    } else if (number == "") {
        return alert("Your input phone number!");
    } else if (subject == "Select Here") {
        return alert("Click & select subject!");
    } else if (message == "") {
        return alert("Enter your message!");
    }
    
    let emailReceiver = 'passyah11@gmail.com';

    let a = document.createElement('a')

    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name ${name}, ${message}, contact me ${number}%0Asend CV ${email} requirment skill${skillHtml}${skillCss}${skillJs}`
    a.click();

    // <a href="mailto:samsul@mail.com?subject=Test Subject&body=Hallo B30">Send Mail</a>

    let dataObject = {
        name: name,
        email: email,
        phoneNumber: number,
        subject: subject,
        message: message,
        skillHtml: skillHtml,
        skillCss: skillCss,
        skillJs: skillJs
    }

    console.log(dataObject);

}

// submitData()
// panggillan function submitData tidak perlu lagi, kenapa?
// karena panggil submit data sudah diletakkan di button onclick
// agar function ini berjalan di file contactForm.html dan muncul di website