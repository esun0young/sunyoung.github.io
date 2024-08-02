/* 프로젝트 데이터 */
let projectData = [
    {
      subject : 'MeNEW',
      desc: '매일매일 새로운 메뉴',
      imgSrc : ['./img/MeNEW_thum.png', './img/MeNEW02.png', './img/MeNEW03.png', './img/MeNEW04.png', './img/MeNEW05.png'],
      //direction: 'half'
    },
    {
      subject : '포트폴리오 2번',
      imgSrc : ['./img/SAVISION_thum.png','./img/MeNEW01.png'],
      desc: '처음 퍼블리싱 배울 때 공부하면서...',
      //direction: 'half'
    },
    {
      subject : '포트폴리오 3번',
      imgSrc : ['./img/막걸리_thum.png'],
      desc: '처음 퍼블리싱 배울 때 공부하면서...'
    },
    {
      subject : '포트폴리오 4번',
      imgSrc : ['./img/myroom_thum.png'],
      desc: '처음 퍼블리싱 배울 때 공부하면서...'
    },
    {
      subject : '포트폴리오 5번',
      imgSrc : ['./img/Flory_thum.png'],
      desc: '처음 퍼블리싱 배울 때 공부하면서...'
    },
  ]

  /* 포트폴리오 리스트 생성하기 */
    projectData.forEach((data)=> {
        let img
        if ( Array.isArray(data.imgSrc) ) { // => 배열일 경우 
          img = data.imgSrc[0]
        } else { // => 배열이 아닐 경우
          img = data.imgSrc
        }
       /*  let half = ''
        if (data.direction == 'half' ) {
            half = 'vertical_list'
        } */
      
        let html = `<li class="project-card">
                            <a href="">
                                <img src="${img}" alt="">
                                <div class="project_list_txt">
                                    <h3>${data.subject}</h3>
                                    <p>${data.desc}</p>
                                </div>
                            </a>
                        </li>`
        document.querySelector('.project_list').insertAdjacentHTML('beforeend', html)
      })

  /* 프로젝트 클릭할 때 팝업 데이터 바인딩하기 */
  let links = document.querySelectorAll('.project_list a')
  
  links.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
      e.preventDefault() // 기본 동작 막기
  
      document.querySelector('.project_pop').style.display = 'block'
  
      // 클릭한 li의 index를 가져온다
      console.log('index', index)

      // 바디에 non_scroll 클래스 추가 -> 스크롤 막기
      document.querySelector('body').classList.add('non_scroll')
  
      // projectData[index].subject 데이터를 팝업의 h1태그에 바인딩 한다
      document.querySelector('.project_pop h1').innerHTML = projectData[index].subject
  
      // projectData[index].desc 데이터를 팝업의 p태그에 바인딩 한다
      document.querySelector('.project_pop p').innerHTML = projectData[index].desc
      
      document.querySelector('.project_img').innerHTML = ''
      
      if ( Array.isArray(projectData[index].imgSrc) ) { // => 배열일 경우 
        projectData[index].imgSrc.forEach((img)=> {
            let html = `<img src="${img}" alt="">`
            document.querySelector('.project_img').insertAdjacentHTML('beforeend', html)
        })
      } 
      // projectData[index].imgSrc 데이터를 팝업의 img 태그에 속성으로 넣어준다
      document.querySelector('.project_pop img').setAttribute('src', projectData[index].imgSrc[0])
  
    })
  })
  
  /* 포트폴리오 팝업창의 닫기 버튼 */
  document.querySelector('.project_pop button').addEventListener('click', ()=> {
    document.querySelector('.project_pop').style.display = 'none'
    document.querySelector('body').classList.remove('non_scroll')
  })
/* 메뉴 열고 닫기 */
  document.querySelector('.btn_open').addEventListener('click',()=>{
    document.querySelector('.gnb').classList.add('opened')
    document.querySelector('body').classList.add('non_scroll')
})
document.querySelector('.btn_close').addEventListener('click',()=>{
    document.querySelector('.gnb').classList.remove('opened')
    document.querySelector('body').classList.remove('non_scroll')    
})



/* 메뉴를 누를 때 해당하는 색션으로 부드럽게 이동 */
let navLinks = document.querySelectorAll('.gnb a')
navLinks.forEach((link)=> {
link.addEventListener('click', e =>  {
  e.preventDefault() //기본 기능 막기

  //.gnb 에 opened 글래스 없애기
  document.querySelector('.gnb').classList.remove('opened')
  document.querySelector('body').classList.remove('non_scroll')

/*   //클릭한 메뉴 색 넣어주기
  navLinks.forEach((link)=>link.classList.remove('active'))
  link.classList.add('active') */

  let targetID = link.getAttribute('href')
  let targetSection = document.querySelector(targetID)

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior:"smooth"
  })
  })
})

/* logo를 클릭했을 때 제일 위로 부드럽게 이동 */
let logo = document.querySelector('.logo a')
logo.addEventListener('click', (e) => {
  e.preventDefault() //기본 기능 막기

  //클릭한 메뉴 색 넣어주기
  //navLinks.forEach((link)=>link.classList.remove('active'))

  //선택한 섹션으로 부드럽게 이동
  let targetID = logo.getAttribute('href') // #introduce. 내가 클릭한 a태그의 값이 들어옴
  let targetSection = document.querySelector(targetID) // 내가 이동해야 할 섹션 선택(클릭한 대상)

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior:"smooth"
  })
})

/* thum 글자 효과 */

const tl = gsap.timeline()
      //무한 -1 
      
      tl.from('.txt0', {
        delay: 1.3,
        duration: 0.6,
        x: '30%',
        ease: 'elastic(1, 0.9)',
      })
      .from('.txt1', {
        duration: 0.6,
        x: '30%',
        ease: 'elastic(1, 0.9)',
      }, '-=0.4')
      .from('.txt2', {
        duration: 0.6,
        x: '30%',
        ease: 'elastic(1, 0.9)',
      }, '-=0.4')
       .from('.txt3', {
        duration: 0.6,
        x: '-30%',
        ease: 'elastic(1, 0.9)',
        }, '-=0.4')
        .from('.txt4', {
          duration: 0.6,
          x: '30%',
          ease: 'elastic(1, 0.9)',
      }, '-=0.4')