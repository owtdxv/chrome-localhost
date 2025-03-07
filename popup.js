document.getElementById("moveBtn").addEventListener("click", function() {
    const port = document.getElementById("port").value.trim();
    const regExp = /^[0-9]*$/;
    if (!regExp.test(port)) {
      alert("포트 번호는 숫자로만 입력해주세요.");
      return
    }
    if (1024 <= port <= 65535) {
      chrome.tabs.create({ url: `http://localhost:${port}` });
    } else {
      alert("올바른 포트 번호를 입력해주세요.");
    }
  });