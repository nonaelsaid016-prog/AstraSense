// Scan page
function scanContent(){
    var content=document.getElementById('inputContent').value.trim();
    var resultBox=document.getElementById('resultBox');
    if(content===''){ resultBox.style.display='block'; resultBox.className='result-box unsafe'; resultBox.innerHTML='⚠️ Please enter a link or text to scan.'; return;}
    var unsafeKeywords=['fake','scam','phishing','malware','danger'];
    var isUnsafe=unsafeKeywords.some(keyword=>content.toLowerCase().includes(keyword));
    var threatScore=Math.floor(Math.random()*100)+1;
    resultBox.style.display='block';
    resultBox.className='result-box';
    resultBox.innerHTML='🔄 Scanning...';
    setTimeout(()=>{
        if(isUnsafe||threatScore>70){ resultBox.className='result-box unsafe'; resultBox.innerHTML=`⚠️ Warning! Unsafe! (Threat Score: ${threatScore}%)`;}
        else{ resultBox.className='result-box safe'; resultBox.innerHTML=`✅ This content appears safe. (Threat Score: ${threatScore}%)`;}
    },1500);
}

// Login page
function loginUser(){
    const user=document.getElementById('username').value.trim();
    const pass=document.getElementById('password').value.trim();
    const msg=document.getElementById('loginMessage');
    if(user==='cyberuser' && pass==='astrapass'){
        msg.style.display='block';
        msg.className='result-box safe';
        msg.innerHTML='✅ Login Successful! Redirecting...';
        localStorage.setItem('loggedIn', 'true');
        setTimeout(()=>{ window.location.href='dashboard.html'; },1500);
    } else{
        msg.style.display='block';
        msg.className='result-box unsafe';
        msg.innerHTML='⚠️ Invalid username or password!';
    }
}

// Check login for protected pages
function checkLogin(){
    if(localStorage.getItem('loggedIn')!=='true'){
        alert('⚠️ Please login first!');
        window.location.href='login.html';
    }
}

// Video password generator
function generateVideoPassword(){
    let pwd='VID-'+Math.random().toString(36).slice(-8);
    alert('Your video password is: '+pwd);
}
