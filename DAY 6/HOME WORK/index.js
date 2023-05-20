const gallery_div = document.querySelector('.gallery_div');
let background = [1,2,3,4,5,6,7,8,9,10];
const img_card = document.querySelector('.img_card');


console.log(background.length)
function loopImage(){
    for(let i;i<background.length;i++){
        gallery_div.innerHTML+=`

            <div class="card">
                <a href="#">
                    <div class="img_card">
                       <img src="${background[i].jpg}" alt="image on card">
                    </div>
                    <div class="text_card">
                        <h3>Gallery Card</h3>
                    </div>
                </a>
            </div>   
    
    `;
    console.log(background[i])
    }
}

console.log(gallery_div);


function displayCard(){
    
}



loopImage();