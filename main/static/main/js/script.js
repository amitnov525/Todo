let ultask=$('#ultask');
let btnAdd=$('#btnAdd');
let btnClear=$('#btnClear');
let btnClean=$('#btnClean');
let btnSort=$('#btnSort');
let inputTask =$('#inputTask');


function additem(){
    let listitem=$('<li>',{
        'class':'list-group-item',
        text:inputTask.val()
    })
    listitem.click(()=>{
        listitem.toggleClass('done');
    })
    ultask.append(listitem);
    inputTask.val("");
    toggleReset();

}

function cleanup(){
    $('#ultask .done').remove();
    toggleReset();
}

function sort1(){
    $('#ultask .done').appendTo(ultask); 
}

inputTask.keypress(function(e){
    if(e.which==13){
        additem();
    }
})

function toggleReset(){
        btnClear.prop('disabled',inputTask.val()=='');
        btnAdd.prop('disabled',inputTask.val()=='');
        btnSort.prop('disabled',ultask.children().length<1);
        btnClean.prop('disabled',ultask.children().length<1);
}

inputTask.on('input',toggleReset);

btnAdd.click(additem)

btnClear.click(()=>{
    inputTask.val("");
    toggleReset();

})


btnClean.click(cleanup);

btnSort.click(sort1)