function renderPost(arr) {

    const ul = document.createElement("ul")
    ul.classList.add("cards")

    const modal = document.querySelector(".modal")


    arr.forEach(element => {

        const h2 = document.createElement("h2")
        const li = document.createElement("li")
        const cardPost = document.createElement("div")
        const imgPerfil = document.createElement("img")
        const div = document.createElement("div")
        const name = document.createElement("h2")
        const spanSkill = document.createElement("span")
        const divContent = document.createElement("div")
        const titlePost = document.createElement("h2")
        const contentPost = document.createElement("p")
        const cardPostBtns = document.createElement("div")
        const btnOpenPost = document.createElement("button")
        const btnLike = document.createElement("button")

        const divModal = document.createElement("div")
        const divModalHeader = document.createElement("div")
        const divModalPerfil = document.createElement("div")
        const divModalUser = document.createElement("div")
        const imgPerfilModal = document.createElement("img")
        const nameModal = document.createElement("h2")
        const spanSkilllModal = document.createElement("span")
        const titleModal = document.createElement("h2")
        const contentModal = document.createElement("p")
        const btnModal = document.createElement("button")

        imgPerfilModal.src = users[element.user].img
        nameModal.innerText = users[element.user - 1].user
        spanSkilllModal.innerText = users[element.user - 1].stack
        titleModal.innerText = element.title
        titleModal.classList.add("modal__title")
        contentModal.innerText = element.text
        contentModal.classList.add("modal__content--text")
        divModal.classList.add("modal__content")
        divModalPerfil.classList.add("modal__perfil")
        divModalHeader.classList.add("modal__header")
        divModalUser.classList.add("modal__user")
        btnModal.innerText = "X"
        btnModal.id = "btnModalClose"
        btnModal.addEventListener("click", ()=>{
            modal.close()
        })

        divModalPerfil.append(nameModal, spanSkilllModal)
        divModalUser.append(imgPerfilModal, divModalPerfil)
        divModalHeader.append(divModalUser, btnModal)
        divModal.append(divModalHeader, titleModal, contentModal)

        h2.innerText = "Posts"

        cardPost.classList.add("card__post")

        imgPerfil.src = users[element.user].img
        imgPerfil.alt = users[element.user - 1].user

        name.innerText = users[element.user - 1].user

        spanSkill.innerText = users[element.user - 1].stack

        divContent.classList.add("card__post__content")

        titlePost.innerText = element.title

        contentPost.innerText = element.text

        cardPostBtns.classList.add("card__post__btns")


        btnOpenPost.innerText = "Abrir Post"
        btnOpenPost.setAttribute("data-modal-control", `${element.id_post}`)
        btnOpenPost.classList.add("btn--open-post")
        btnOpenPost.addEventListener("click", ()=>{

            modal.innerHTML = ""
            modal.append(divModal)
            modal.showModal()

        })

        btnLike.innerHTML = "<img src='./src/assets/img/btn.png' alt='botão favorito'>"
        btnLike.classList.add("btn--like", "btn--bkcground")
        btnLike.addEventListener("click", ()=>{

            let btnlike = btnLike.classList.toggle("btn--bkcground")

            if(btnlike){
                btnLike.innerHTML = "<img src='./src/assets/img/btn.png' alt='botão favorito'>"
            }else{
                btnLike.innerHTML = "<img src='./src/assets/img/btn2.png' alt='botão favorito'>"
            }


        })

        cardPostBtns.append(btnOpenPost, btnLike)
        divContent.append(titlePost, contentPost, cardPostBtns)
        div.append(name, spanSkill)
        cardPost.append(imgPerfil, div)
        li.append(cardPost, divContent)
        ul.appendChild(li)



    });

    return ul

}
// const sugestUsers = [3, 7, 6];


function renderSuggestedUser(arr) {

    const ul = document.querySelector(".suggested__users__list")

    arr.forEach((element =>{     
        
        const li = document.createElement("li")
        const divCard = document.createElement("div")
        const imgPerfil = document.createElement("img")
        const divCard2 = document.createElement("div")
        const name = document.createElement("h2")
        const spanSkill = document.createElement("span")
        const btnFollowing = document.createElement("button")

        li.classList.add("display--flex", "flex--direction", "gap--default", "justify-content--center")

        divCard.classList.add("display--flex", "gap--default")

        imgPerfil.src = users[element-1].img

        divCard2.classList.add("display--flex", "flex--direction", "gap--default")

        name.innerText = users[element-1].user

        spanSkill.innerText = users[element-1].stack

        btnFollowing.classList.add("btn--default-1")
        btnFollowing.innerText = "Seguir"
        btnFollowing.addEventListener("click", ()=>{

            let isFollowing = btnFollowing.classList.toggle("btn--default--following")
            
            if(isFollowing){
                btnFollowing.innerText = "Seguindo"
            }else{
                btnFollowing.innerText = "Seguir"
            }
        })

        divCard2.append(name, spanSkill)
        li.append(divCard, btnFollowing)
        divCard.append(imgPerfil, divCard2)
        ul.appendChild(li)

    }))

}


function creatingCards(list) {

    let cardContainer = document.querySelector(".card__container")

    cardContainer.innerHTML = ""


    cardContainer.append(list(posts))
    renderSuggestedUser(sugestUsers)


}
creatingCards(renderPost)

function addPost(){
    let form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{

        event.preventDefault()


        let input = form.querySelector("input")
        let textArea = form.querySelector("textarea")

        let obj = {
            id_post: posts.length + 1,
            user: 5,
            title: input.value,
            text: textArea.value
        }

        posts.push(obj)
        console.log(posts)
    

    })
}
addPost()





   