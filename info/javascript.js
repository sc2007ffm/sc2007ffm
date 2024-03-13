
function plan(){
    var list=document.getElementById("teams");
var mannschaft= list.value;
let uhrzeit;
let halle;
var image = document.getElementById('teampic');
switch(mannschaft){
    case "0" :
    uhrzeit="Trainingszeiten: Dienstag und Donnerstag 20:30-22 Uhr";
    halle="Halle: Gymnasium Oberursel";
    image.src="https://static.wixstatic.com/media/e71f61_9332cfb9fd3a406caa276c94a03c0134~mv2.jpeg/v1/crop/x_0,y_214,w_1200,h_1173/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-09-25%20at%2008_28_46.jpeg"
    break;
    case "1":
        uhrzeit="Trainingszeiten: Dienstag 20:00-21:30 Uhr";
        halle="Halle: Frankfurt International School";
        image.src="https://static.wixstatic.com/media/e71f61_1d676e26c31f4aafa2b7dee47c057b42~mv2.png/v1/crop/x_97,y_0,w_347,h_339/fill/w_220,h_215,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Damen_1.png";
        break;
    case "2":
    uhrzeit="Trainingszeiten: Dienstag und Donnerstag 19:00-20:30 Uhr";
    halle="Halle: Gymnasium Oberursel";
    image.src="https://static.wixstatic.com/media/e71f61_1c90ec1464e447d9be1d2e904aefde57~mv2.jpeg/v1/crop/x_238,y_0,w_1572,h_1536/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-10-11%20at%2010_00_38.jpeg";
    break;
    case "3":
        uhrzeit= "Trainginszeiten: Montag und Mittwoch 19:00 - 20:30";
        halle="Halle: Gymnasium Oberursel";
        image.src="https://static.wixstatic.com/media/e71f61_35c4eadfea3744fd851633790b706617~mv2.jpg/v1/crop/x_0,y_214,w_1200,h_1173/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PHOTO-2023-10-02-15-39-06%20(1).jpg";
        break;
    case "4":
        uhrzeit="Trainingszeiten: Dienstag und Donnerstag 19:00-20:30 Uhr";
    halle="Halle: Gymnasium Oberursel";
    image.src="https://static.wixstatic.com/media/e71f61_d3e65338d5d74cdfaf8fc33326ae3b95~mv2.jpg/v1/crop/x_0,y_273,w_1536,h_1501/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/wu16_jfif.jpg";
    break;
    case "5":
        uhrzeit="Trainingszeiten: Dienstag 18:00 - 19:30Uhr & Donnerstag 17:30 - 19:00Uhr"
        halle="Halle: Feldbergschule";
        image.src="https://static.wixstatic.com/media/e71f61_3b64f3172d284be4948306d09a7a7c58~mv2.jpeg/v1/crop/x_234,y_0,w_1547,h_1512/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-10-07%20at%2022_20_32.jpeg"
        break;
    default: 
        uhrzeit=mannschaft;
        halle=mannschaft;
        break;
}
document.getElementById("trainingszeitentext").innerHTML = uhrzeit;
document.getElementById("halle").innerHTML =halle;
}

/*function kontakt(){
    var anfrage=document.getElementById('anfrage').value;
    var email=document.getElementById('email').value;

    alert(email+anfrage);
    let emails = localStorage.getItem('emails').split(',')
    if (!emails) {
        localStorage.setItem('emails', [email].join(','))
    } else {
        emails.push(email)
        localStorage.setItem('emails', emails.join(','))
    }

    let anfragen = localStorage.getItem('anfragen').split(',')
    if (!anfragen) {
        localStorage.setItem("anfragen", [anfrage].join(','))
    } else {
        anfragen.push(anfrage)
        localStorage.setItem('anfragen', anfragen.join(','))
    }
    var testemail=localStorage.getItem(emails)
        alert(testemail);
}*/

function login(){
    var passwort=document.getElementById("password")
    console.log(passwort.value);
    if(passwort.value==""){
        alert('kein passwort eingegeben')
    }
    if (passwort.value=="Test123")
    { alert("richtiges passwort")
        window.location="anfragen.html";
        return false;
    }
    else{
        alert("falsches Passwort")
    }
    
}
/*function loadanfragen(){
let anfragen = localStorage.getItem(anfragen)
alert(anfragen);
let p=document.createElement("p")
p.appendChild(anfragen)
}
funktioniert nicht, ich weiß nicht wieso */
function kontakt(){
    var anfrage = document.getElementById('anfrage').value;
    var email=document.getElementById('email').value;
    alert('kontakt');
    alert(anfrage+email);
    const file = new File([email+": "+anfrage], 'anfrage '+email, {
        type: 'text/plain',
})
const link = document.createElement('a')
const url = URL.createObjectURL(file)

link.href = url
link.download = file.name
document.body.appendChild(link)
link.click()

document.body.removeChild(link)
window.URL.revokeObjectURL(url)
}
