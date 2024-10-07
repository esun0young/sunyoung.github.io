/* 프로젝트 데이터 */
let projectData = [
  {
    subject : 'MeNEW',
    desc: '매일매일 새로운 메뉴',
    imgSrc : ['./img/MeNEW_thum.png','./img/MeNEW_01.png','./img/MeNEW_02.png','./img/MeNEW_03.png','./img/MeNEW_04.png','./img/MeNEW_05.png','./img/MeNEW_06.png','./img/MeNEW_07.png','./img/MeNEW_08.png','./img/MeNEW_09.png','./img/MeNEW_10.png','./img/MeNEW_11.png','./img/MeNEW_12.png','./img/MeNEW_13.png','./img/MeNEW_14.png','./img/MeNEW_15.png','./img/MeNEW_16.png'],
    //direction: 'half'
  },
  {
    subject : 'SAVISION',
    desc: '귀여운 픽토그램들과 건강한 습관을 만들어보세요.',
    imgSrc : ['./img/SAVISION_thum.png','./img/SAVISION_01.png','./img/SAVISION_02.png','./img/SAVISION_03.png','./img/SAVISION_04.png','./img/SAVISION_05.png','./img/SAVISION_06.png','./img/SAVISION_07.png','./img/SAVISION_08.png'],
    //direction: 'half'
  },
  {
    subject : 'Flory',
    desc: '나의 마음을 전할 수 있는 꽃다발',
    imgSrc : ['./img/Flory_thum.png','./img/Flory_01.png','./img/Flory_02.png','./img/Flory_03.png','./img/Flory_04.png','./img/Flory_05.png','./img/Flory_06.png','./img/Flory_07.png','./img/Flory_08.png','./img/Flory_09.png','./img/Flory_10.png','./img/Flory_11.png','./img/Flory_12.png','./img/Flory_13.png','./img/Flory_14.png'],
  },
  {
    subject : 'MY ROOM',
    desc: '인테리어 VR 시뮬레이션',
    imgSrc : ['./img/MYROOM_thum.png','./img/MYROOM_01.png','./img/MYROOM_02.png','./img/MYROOM_03.png','./img/MYROOM_04.png','./img/MYROOM_05.png','./img/MYROOM_06.png','./img/MYROOM_07.png'],
  },
  {
    subject : '막거리 한잔, 추억 한잔',
    desc: '인포그래픽스',
    imgSrc : ['./img/Makgeolli_thum.png','./img/Makgeolli_01.png', './img/Makgeolli_02.png', './img/Makgeolli_03.png', './img/Makgeolli_04.png', './img/Makgeolli_05.png'],
  },
  {
   subject : '왜 명품인가?',
    desc: '인포그래픽스',
    imgSrc : ['./img/Luxury_thum.png', './img/Luxury_01.png','./img/Luxury_02.png','./img/Luxury_03.png','./img/Luxury_04.png','./img/Luxury_05.png','./img/Luxury_06.png','./img/Luxury_07.png','./img/Luxury_08.png','./img/Luxury_09.png','./img/Luxury_10.png','./img/Luxury_11.png','./img/Luxury_12.png','./img/Luxury_13.png'],
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