
const menu = [
    {
        id: 1,
        productName: "Курячий бульйон",
        productDescription: "",
        productWeiht: "365 г",
        ingredients: "Курячий бульйон, куряче філе, яйце, локшина і духмяні трави",
        price: 56,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/brodo-di-galina.jpeg",
        keywords: ['гарячі страви', 'супи'],
        Weiht : 365,
        stopList : false,
        ageRestrictions : false,
        like : "0"

    },
    {
        id: 2,
        productName: "Сирний суп",
        productWeiht: "300/60 г",
        ingredients: "Cирний крем-суп з дор блю, чеддером, вершковим сиром, беконом. Брускета з сирним кремом",
        price: 120,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/syrnyj-sup.jpeg",
        keywords: ['гарячі страви', "супи"],
        Weiht : 360,
        stopList : false,ageRestrictions : false,
        like : 0 ,
        ageRestrictions : false
    },
    {
        id: 3,
        productName: "Цезар",
        productWeiht: "275 г",
        ingredients: "Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar",
        price: 130,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg",
        keywords: ['салати'],
        Weiht: 275,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {

        id: 4,
        productName: "Цитрусовий з креветками",
        productWeiht: "220 г",
        ingredients: "Креветки, апельсин, грейпфрут, мiкс салатiв з цитрусовим соусом та мигдалем, помідори черрі",
        price: 160,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/citrusovyj-s-krevetkami_1562848610626.jpeg",
        keywords: ['салати'],
        datarestoratoratin : this,
        Weiht : 220,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 5,
        productName: "Картопля фрi",
        productWeiht: "140 г",
        ingredients: "Картопля фрi",
        productDescription: "кусочки картофеля, обжаренные в большом количестве сильно нагретого растительного масла",
        price: 30,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kartofel-fri_1550770471902.jpeg",
        keywords: ['гарячі страви', 'гарніри'],
        Weiht : 140,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 6,
        productName: "Стейк зі свинини гриль",
        productWeiht: "180/150/30 г",
        ingredients: "Стейк зі свинини на грилі зі смаженою картоплею та грибами з соусом BBQ",
        price: 150,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/stejk-so-cvininy-gril.jpeg",
        keywords: ['гарячі страви', 'стейки'],
        Weiht : 350,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 7,
        productName: "Курячі крильця в соусі",
        productWeiht: "250/100 г",
        ingredients: "Курячі крильця в пряному соусі Приван, карпопляні діпи",
        price: 100,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kurinye-krylyshki-v-souse_156284838828.jpeg",
        keywords: ['гарячі страви', 'мясо'],
        Weiht : 350,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 8,
        productName: "Наполеон із солоною карамеллю",
        productWeiht: "120 г",
        ingredients: "Ніжні листкові коржі з карамельним соусом",
        price: 70,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/napoleon-s-solenoj-karamelyu.jpeg",
        keywords: ['десерти'],
        Weiht : 120,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 9,
        productName: "Карбонара",
        productWeiht: "500 г ",
        ingredients: "Сир моцарела, шинка, грудинка, печериці, пармезан, помідори черрі",
        price: 175,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/karbonara_1567060586370.jpeg",
        keywords: ['піца'],
        Weiht : 175,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 10,
        productName: "Піца Мисливська",
        productWeiht: "500 г",
        ingredients: "Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марінара, петрушка",
        price: 129,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/picca-ohotnichya.jpeg",
        keywords: ['піца'],
        Weiht : 500,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
    {
        id: 11,
        productName: "Кохання - це XXL",
        productWeiht: "78 шт., 1980 г",
        ingredients: `Рол №1 Рол з філе лосося, сиром Філадельфія, авокадо та огірком– 2 шт. Рол №2 Рол з крабом кімчі, авокадо та огірком в ікрі тобіко Рол №3 Рол з філе лосося, сиром Філадельфія, Тамаго, огірком та соусом манго-чилі
    Рол №4 Рол з сурімі та імбиром Рол №5 Рол з  курячим філе, сиром Філадельфія, сиром Хохланд, болгарським перцем, огірком, салатом Ромен та соусом Спайсі Рол №6  з чукою та соусом Гомадаре з кунжутом Рол №7 Рол з вугрем, сиром Філадельфія, омлетом Тамаго, грушею та соусом унагі в білому кунжуті
     Рол №8 Рол з філе лосося 
     Ролл №9 Рол з огiрком Гункан з креветками, червоною ікрою, манго та огірком – 3 шт.
    Гункан з крабом кімчі, Тамаго, огірком та кукурудзою – 3 шт.`,
        price: 900,
        productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/lyubov-eto-xxl.jpeg",
        keywords: ["суші"],
        Weiht : 1980,
        stopList : false,ageRestrictions : false,
        like : 0 ,ageRestrictions : false
    },
]

const modal = document.querySelector('.modal');
const [...btnBasket] = document.querySelectorAll('.btn_sal');

function modalCard(element){
    const imgBloc = document.querySelector('.modal-header');
    const img =document.createElement('img');
    img.src = element.firstElementChild.src;
    imgBloc.appendChild(img);
    imgBloc.prepend(img);
    const btnClose = document.querySelector('.btn-close').onclick = () => {
        img.remove();
        modal.style.display = 'none';}
}
function modalMenu(item){
    document.querySelector('.modal-title').innerHTML = item.productName;
    document.querySelector('.modal-body p').innerHTML = item.ingredients + "<br> " + "Порция:" + item.productWeiht;
    modal.style.display = 'block';
    
}
let rez ={};
function basketMenu(item){
    let zacazTitleee = document.querySelector('.zakaz-title').innerHTML = item.productName;
    let zakazInprt = document.querySelector('.zakaz_body p').innerHTML = item.ingredients;
    let zakazPrays = document.querySelector('.zakaz_prays').innerHTML = item.price;
    rez = {zacazTitleee,zakazInprt,zakazPrays }
    
}

function basketSwoov(){
    const deliv = document.querySelector('.zakaz_deliver');
    const zakazBody =document.querySelector('.zakaz_body');
    const zakazOut = document.createElement('div');
    zakazOut.classList.add('zakaz_item');
    const zakazBox = document.createElement('div');
    zakazBox.classList.add('zakaz_box');
    const h5 = document.createElement('h5');
    h5.classList.add('zakaz-title');
    const zakazIngr = document.createElement('div');
    zakazIngr.classList.add('zakaz-body');
    const zakazParag =document.createElement('p');
    const divBtn = document.createElement('div');
    const btnPlus = document.createElement('button');
    btnPlus.classList.add('btn_plus');
    btnPlus.innerText = '+';
    const btnMinus = document.createElement('button');
    btnMinus.classList.add('btn_minus');
    btnMinus.innerText = '-';
    const spanZakaz = document.createElement('span');
    spanZakaz.classList.add('zakaz_prays');
    divBtn.appendChild(btnPlus);
    divBtn.appendChild(btnMinus);
    divBtn.appendChild(spanZakaz);
    zakazIngr.appendChild(zakazParag);
    zakazBox.appendChild(h5,zakazIngr);
    zakazBox.appendChild(zakazIngr);
    zakazOut.appendChild(zakazBox,divBtn);
    zakazOut.appendChild(divBtn);
    deliv.insertAdjacentElement('beforeBegin', zakazOut);
    
}


const [...card] = document.querySelectorAll('.menu_item');
card.forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(element);
        if(element.id == '1'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '1'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '2'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '2'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '3'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '3'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '4'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '4'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '5'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '5'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '6'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '6'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '7'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '7'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '8'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '8'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '9'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '9'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '10'){
            modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '10'){
                    modalMenu(item);
                }
            }) 
        }if(element.id == '11'){
                modalCard(element)
                menu.forEach((item) =>{
                    if(item.id == '11'){
                    modalMenu(item);
                }
            }) 
        }
    })
    
})

btnBasket.forEach((element) =>{
    element.addEventListener('click', (e) => {  
        // console.log(element.parentElement.parentElement);
        if(element.parentElement.parentElement.id == '1'){
            menu.forEach((item) =>{
                if(item.id == '1'){
                    basketSwoov()
                    basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '2'){
            menu.forEach((item) =>{
                if(item.id == '2'){
                    basketSwoov()
                    basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '3'){
            menu.forEach((item) =>{
                if(item.id == '3'){
                    basketSwoov()
                    basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '4'){
            menu.forEach((item) =>{
                if(item.id == '4'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '5'){
            menu.forEach((item) =>{
                if(item.id == '5'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '6'){
            menu.forEach((item) =>{
                if(item.id == '6'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '7'){
            menu.forEach((item) =>{
                if(item.id == '7'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '8'){
            menu.forEach((item) =>{
                if(item.id == '8'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '9'){
            menu.forEach((item) =>{
                if(item.id == '9'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '10'){
            menu.forEach((item) =>{
                if(item.id == '10'){
                    basketSwoov()
                basketMenu(item);
            }})
        }if(element.parentElement.parentElement.id == '11'){
            menu.forEach((item) =>{
                if(item.id == '11'){
                    basketSwoov()
                basketMenu(item);
            }})
        }
    })
})


let clicks = 0;
    function onClick(elem) {
        clicks += 1;
        const rez = clicks;
        elem.nextSibling.nextSibling.innerHTML = rez + ' ' + 'користувача додали в улюблене';
        
    };
function saveBd(item) {
   localStorage.setItem('data', JSON.stringify(item));
   let arr = localStorage.getItem('data');
   arr = JSON.parse(arr); 
}

const [...like] = document.querySelectorAll('.card_svg');
like.forEach((elem) =>{
    elem.addEventListener('click',(e) =>{
        onClick(elem);
        if(elem.parentElement.parentElement.id == '1'){
            menu.forEach((item) =>{
                if(item.id == '1'){
                    console.log(item);
                    item.like = clicks;
                    saveBd(item)
                }})
        } if(elem.parentElement.parentElement.id == '2'){
            menu.forEach((item) =>{
                if(item.id == '2'){
                    console.log(item);
                    item.like = clicks;
                    saveBd(item)
                }})
        }
        
    })
    
})