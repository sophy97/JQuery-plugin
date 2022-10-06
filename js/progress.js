//  progressBar 스크립트파일


window.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll",function(){
        // 프로그래스 바 있다면 실행될 수 있도록 !
        if ( document.querySelector(".progressbar") != null ) {
            // 프로그래스 바 세팅 함수를 실행 - 아래 만듦
            setProgress();
        }
    })
});

// progress의 width를 스크롤 길이에 따라 수정할 수 있게
function setProgress(){
    // 스크롤한 높이
    let curreY = document.documentElement.scrollTop;
    console.log(curreY);
    // 전체높이 
    let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    console.log(totalY);

    // 퍼센트로 바꿔서 progress css의 width값에 넣기
    let percentage = (curreY/totalY)*100;
    document.querySelector('.progress').style.width = percentage+"%";
}