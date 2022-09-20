// var egor = document.querySelector("#Egor")
let first_button = document.querySelector("#button_first")
let second_button = document.querySelector("#button_second")
let three_button = document.querySelector("#button_three")
let four_button = document.querySelector("#button_four")
let first = document.querySelector("#first_block");
let second = document.querySelector("#about");
let three = document.querySelector("#portfolio");
let four = document.querySelector("#contacts");


function scrollTo(element) {
    window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: "smooth",
        }
    )
    console.log(element.offsetTop);
}

function first_funk() {
    scrollTo(first);
    first_button.classList.add("button_home_active")
    second_button.classList.add("button_home")
    three_button.classList.add("button_home")
    four_button.classList.add("button_home")
    first_button.classList.remove("button_about","button_portfolio","button_contact","button_home")
    second_button.classList.remove("button_about","button_portfolio","button_contact","button_about_active")
    three_button.classList.remove("button_about","button_portfolio","button_contact","button_portfolio_active")
    four_button.classList.remove("button_about","button_portfolio","button_contact","button_contact_active")
}

function second_funk() {
    scrollTo(second);
    first_button.classList.add("button_about")
    second_button.classList.add("button_about_active")
    three_button.classList.add("button_about")
    four_button.classList.add("button_about")
    first_button.classList.remove("button_home","button_portfolio","button_contact","button_home_active")
    second_button.classList.remove("button_home","button_portfolio","button_contact","button_about")
    three_button.classList.remove("button_home","button_portfolio","button_contact","button_portfolio_active")
    four_button.classList.remove("button_home","button_portfolio","button_contact","button_contact_active")
}

function three_funk() {
    scrollTo(three);
    first_button.classList.add("button_portfolio")
    second_button.classList.add("button_portfolio")
    three_button.classList.add("button_portfolio_active")
    four_button.classList.add("button_portfolio")
    first_button.classList.remove("button_home","button_about","button_contact","button_home_active")
    second_button.classList.remove("button_home","button_about","button_contact","button_about_active")
    three_button.classList.remove("button_home","button_about","button_contact","button_portfolio")
    four_button.classList.remove("button_home","button_about","button_contact","button_contact_active")
}

function four_funk() {
    scrollTo(four);
    first_button.classList.add("button_contact")
    second_button.classList.add("button_contact")
    three_button.classList.add("button_contact")
    four_button.classList.add("button_contact_active")
    first_button.classList.remove("button_home","button_about","button_portfolio","button_home_active")
    second_button.classList.remove("button_home","button_about","button_portfolio","button_about_active")
    three_button.classList.remove("button_home","button_about","button_portfolio","button_portfolio_active")
    four_button.classList.remove("button_home","button_about","button_portfolio","button_contact")
}

first_button.addEventListener("click", () => {
    first_funk();
})
second_button.addEventListener("click", () => {
    second_funk();
})
three_button.addEventListener("click", () => {
    three_funk();
})
four_button.addEventListener("click", () => {
    four_funk();
})
