/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();
factory.Area("plastic");
factory.Area("paper");

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});

document.getElementById('area').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
 });
/**
* table render
*/
function initTable(){
    for(let i = 0; companionList.length > i; i++){
        const list = companionList[i];
        const companion = new Companion(i, list.firstName, list.lastName, list.area)
        for(const product of list.products){
            companion.Product(product)
        }
        factory.addmano(companion)
    }
    console.log(factory)
   // TODO 6
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
   const mano = factory.companion(companionId);
   refreshProductList(mano)
}