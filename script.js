const container = document.createElement("div")
container.setAttribute("class","container")
document.body.appendChild(container)

const row = document.createElement("div")
row.setAttribute("class","row")
container.appendChild(row)

const col1=document.createElement("div")
col1.setAttribute("class","col-lg-3 col-md-4 col-sm-6")
row.appendChild(col1)

const table=document.createElement("div")
table.setAttribute("class","col-lg-6 col-md-4 col-sm-6 ")
table.setAttribute("id","content") 
table.style.backgroundColor="#f8c291"
row.appendChild(table)

const heading =document.createElement("h1") //heading
heading.textContent ="DOM"
heading.setAttribute("id" , "title")
heading.setAttribute("class","d-flex justify-content-center")
table.appendChild(heading)


// created a paragraphtag
var description = document.createElement("p")
description.textContent ="DOM Manipulation With Form "
description.setAttribute("id", "description")
description.setAttribute("class","d-flex justify-content-center")
table.appendChild(description)

// create a from tag 
// const createForm = document.createElement("form")// createForm.id="form"
const createForm = document.createElement("form");
createForm.setAttribute("id", "survey-form"); 
createForm.setAttribute("action", "submit");
createForm.setAttribute("class", "survey-form")
table.appendChild(createForm);
 
// div1
const div1= document.createElement("div")
div1.setAttribute("class","form-group mb-3 ")
createForm.appendChild(div1)

// label
const firstNameLabel = document.createElement("label")
firstNameLabel.setAttribute("type" , "text")
firstNameLabel.setAttribute("id", "name-label")
firstNameLabel.innerHTML ="First Name"
div1.appendChild(firstNameLabel)

// firstname 
const firstname = document.createElement("input")
firstname.setAttribute("id","first-name")
firstname.setAttribute("class","form-control")
firstname.setAttribute("required","")
firstname.setAttribute("placeholder", "First Name")
firstname.setAttribute("type","text")
div1.appendChild(firstname)

const div2= document.createElement("div")
div2.setAttribute("class","form-group mb-3")
createForm.appendChild(div2)

// LastNamelabel
const lastNameLabel  = document.createElement("label")
lastNameLabel .setAttribute("type", "text")
lastNameLabel.setAttribute("id", "name-label")
lastNameLabel.innerHTML=("Last Name")
div2.appendChild(lastNameLabel)

const lastName=document.createElement("input")
lastName.setAttribute("class","form-control")
lastName.setAttribute("id","last-name")
lastName.setAttribute("required", "")
lastName.setAttribute("placeholder" , "Last Name")
lastName.setAttribute("type" , "text")
div2.appendChild(lastName)
// Email div
const emailDiv = document.createElement("div");
emailDiv.setAttribute("class", "form-group mb-3");
createForm.appendChild(emailDiv);

// Email label
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.setAttribute("id", "name-label")
emailLabel.setAttribute("id", "email-label");
emailLabel.innerHTML = "Email";
emailDiv.appendChild(emailLabel);

// Email input
const emailInput = document.createElement("input");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("class", "form-control");
emailInput.setAttribute("required", "");
emailInput.setAttribute("placeholder", "Enter your email");
emailInput.setAttribute("type", "email");
emailDiv.appendChild(emailInput);

// Address
const addressDiv = document.createElement("div");
addressDiv.setAttribute("class", "form-group");
createForm.appendChild(addressDiv)

const addressLabel = document.createElement("label");
addressLabel.setAttribute("for", "address");
addressLabel.innerHTML = "Address";
addressDiv.appendChild(addressLabel);

const addressTextarea = document.createElement("textarea");
addressTextarea.setAttribute("class","form-control")
addressTextarea.setAttribute("id","address");
addressTextarea.setAttribute("rows","3")
addressTextarea.setAttribute("col","50")
addressTextarea.setAttribute("name", "address");
addressTextarea.setAttribute("required", "");
addressTextarea.setAttribute("placeholder", "Enter your address here");
addressDiv.appendChild(addressTextarea)

// pincode
const pindiv = document.createElement("div")
pindiv.setAttribute("class","form-group")
createForm.appendChild(pindiv)

const pincodelabel = document.createElement("label")
pincodelabel.setAttribute("for","pincode")
pincodelabel.innerHTML=("Pincode")
pindiv.appendChild(pincodelabel)

const pincode=document.createElement("input")
pincode.setAttribute("class","form-control")
pincode.setAttribute("id","pincode")
pincode.setAttribute("type","text")
pincode.setAttribute("name","pincode")
pincode.required = true; 
pincode.setAttribute("placeholder","Enter a 6-digit pincode")
pindiv.appendChild(pincode)


// gender
const gdiv3= document.createElement("div")

gdiv3.setAttribute("class","form-group gender")
// gdiv3.style.display = "flex"; 
// gdiv3.style.alignItems = "center";
// gdiv3.style.gap = "10px"; 
createForm.appendChild(gdiv3)

const para = document.createElement("h5")
para.setAttribute("class","para mb-1")
para.textContent =("Gender")
gdiv3.appendChild(para)

const radiocontainer = document.createElement("div")
radiocontainer.style.display = "flex"; // Use flexbox for horizontal layout
radiocontainer.style.alignItems = "center"; // Align items vertically centered
radiocontainer.style.gap = "11px"; 
radiocontainer.setAttribute("class","radio-container")
gdiv3.appendChild(radiocontainer)

const forfemale = document.createElement("input")
forfemale.setAttribute("type","radio")
forfemale.setAttribute("name","gender")
forfemale.setAttribute("value", "Male")
radiocontainer.appendChild(forfemale)
// genderlabel
const flabel  = document.createElement("label")
flabel.setAttribute("for", "Female")
flabel.setAttribute("class","formale p-1")
flabel.setAttribute("type", "text")
flabel.innerHTML=("Male")
radiocontainer.appendChild(flabel)

gdiv3.appendChild(document.createElement("br"));

const formale = document.createElement("input")
formale.setAttribute("type","radio")
formale.setAttribute("name","gender")
formale.setAttribute("value", "Female") 

radiocontainer.appendChild(formale)
// genderlabel
const mlabel  = document.createElement("label")
mlabel.setAttribute("for", "Female")
mlabel.setAttribute("type", "text")
mlabel.innerHTML=("Female")
radiocontainer.appendChild(mlabel)

// choice of food
const choiceoffood= document.createElement("div")
choiceoffood.setAttribute("class","form-group")
createForm.appendChild(choiceoffood)

const para1 = document.createElement("h5")
para1.textContent =("Choice Of Food")
para1.setAttribute("class"," mb-1")
choiceoffood.appendChild(para1)

const foridly = document.createElement("input")
foridly.setAttribute("type","radio")
foridly.setAttribute("name","food")
foridly.setAttribute("value", "Idly")
choiceoffood.appendChild(foridly)
// idlylabel
const idly  = document.createElement("label")
idly.setAttribute("for", "idly")
idly.setAttribute("class","foridly p-1")
idly.setAttribute("type", "text")
idly.setAttribute("id","idly")
idly.innerHTML=("Idly")
choiceoffood.appendChild(idly)

choiceoffood.appendChild(document.createElement("br"));

const dosa = document.createElement("input")
dosa.setAttribute("type","radio")
dosa.setAttribute("name","food")
dosa.setAttribute("value", "dosa")
choiceoffood.appendChild(dosa)
// Dosalabel
const dlabel  = document.createElement("label")
dlabel.setAttribute("class","p-1 ")
dlabel.setAttribute("for", "fordosa ")
dlabel.setAttribute("type", "text")
dlabel.innerHTML=("Dosa")
choiceoffood.appendChild(dlabel)

choiceoffood.appendChild(document.createElement("br"));

const pizza = document.createElement("input")
pizza.setAttribute("type","radio")
pizza.setAttribute("name","food")
pizza.setAttribute("value", "pizza")
choiceoffood.appendChild(pizza)
// pizzalabel
const plabel  = document.createElement("label")
plabel.setAttribute("class","p-1 ")
plabel.setAttribute("for", "forpizza ")
plabel.setAttribute("type", "text")
plabel.innerHTML=("Pizza")
choiceoffood.appendChild(plabel)

choiceoffood.appendChild(document.createElement("br"));


const burger = document.createElement("input")
    burger.setAttribute("type","radio")
    burger.setAttribute("name","food")
    burger.setAttribute("value", "burger")
    choiceoffood.appendChild(burger)
    // burgerlabel
    const blabel  = document.createElement("label")
    blabel.setAttribute("class","p-1 ")
    blabel.setAttribute("for", "forburger ")
    blabel.setAttribute("type", "text")
    blabel.innerHTML=("Burger")
    choiceoffood.appendChild(blabel)


    choiceoffood.appendChild(document.createElement("br")); // breakline
    const statediv= document.createElement("div")
    statediv.setAttribute("class","form-group mb-3")
    createForm.appendChild(statediv)
    
    // statenametag
    const statenametag  = document.createElement("label")
    statenametag .setAttribute("type", "text")
    statenametag.innerHTML=("State")
    statediv.appendChild(statenametag)
    
    const statename=document.createElement("input")
    statename.setAttribute("class","form-control")
    statename.setAttribute("id","state")
    statename.setAttribute("required", "")
    statename.setAttribute("placeholder" , "State")
    statename.setAttribute("type" , "text")
    statediv.appendChild(statename)

    const country= document.createElement("div")
    country.setAttribute("class","form-group mb-3")
    createForm.appendChild(country)
    
    // countrylabel
    const countrylabel  = document.createElement("label")
    countrylabel .setAttribute("type", "text")
    countrylabel.innerHTML=("Country")
    country.appendChild(countrylabel)
    
    const countryname=document.createElement("input")
    countryname.setAttribute("class","form-control")
    countryname.setAttribute("id","country")
    countryname.setAttribute("required", "")
    countryname.setAttribute("placeholder" , "Country")
    countryname.setAttribute("type" , "text")
    country.appendChild(countryname)
    //commmand
    const commentsDiv = document.createElement("div");
commentsDiv.setAttribute("class", "form-group mb-3");
createForm.appendChild(commentsDiv);

const commentsLabel = document.createElement("label");
commentsLabel.setAttribute("for", "comments");
commentsLabel.innerHTML = "Additional Comments";
commentsDiv.appendChild(commentsLabel);

const commentsTextarea = document.createElement("textarea");
commentsTextarea.setAttribute("id", "comments");
commentsTextarea.setAttribute("class", "form-control");
commentsTextarea.setAttribute("rows", "4");
commentsTextarea.setAttribute("placeholder", "Enter your comments here...");
commentsDiv.appendChild(commentsTextarea);

// submit
const buttondiv =document.createElement("div")
buttondiv .setAttribute("class","form-group mb-3 text-center ")
createForm.appendChild(buttondiv)

 const submitbutton = document.createElement("button")
 submitbutton.setAttribute("id","submit")
 submitbutton.setAttribute("type","submit")
 submitbutton.setAttribute("value", "submit")
 submitbutton.innerHTML=("Submit")
 submitbutton.setAttribute("class","btn btn-primary")
 buttondiv.appendChild(submitbutton)

 const col3=document.createElement("div")
 col3.setAttribute("class","col-lg-3 col-md-4 col-sm-6 ")
 row.appendChild(col3)

