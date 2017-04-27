$(document).ready(function () {
    
    $("#userinfo").on('click','.title',viewEach);
    function viewEach(event){
        
      var nameid='#detail'+$(this).attr('id');
        $(nameid).toggle(1000);
    
    }
});
