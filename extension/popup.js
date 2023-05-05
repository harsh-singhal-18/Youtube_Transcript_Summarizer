 const btn = document.getElementById('summarize');
 btn.addEventListener("click",function(){
    btn.disabled = true;
    btn.innerHTML = "Summarizing...";
    chrome.tabs.query({currentWindow: true, active: true},function(tabs){
        var url = tabs[0].url;
        var htt = new XMLHttpRequest(); 
        htt.open("Get","http://127.0.0.1:5000/summary?url=" + url, true);
        htt.onload=function(){
            var text = htt.responseText;
            const p =document.getElementById("output");
            p.innerHTML = text;
            btn.disabled = false;
            btn.innerHTML = "Summarize";
        }
        htt.send();
    });
 });

