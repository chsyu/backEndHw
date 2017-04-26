$(document).ready(function () {

    $("#usernew").on('click','.btn-post',createUser);
    $("#userinfo").on('click','.read',readUser);
    $("#userinfo").on('click','.update',updateUser);
    $("#userupdate").on('click','.btn-update',submitUser);
    $("#userinfo").on('click','.delete',deleteUser);

    function createUser(event){
        var errorCount=0;
        $('#usernew input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

        //確保erroCount為零(表示使用者確實填入所有欄位)
        if(errorCount===0){
            
            var newUser={
                'name':$('input#name').val(),
                'email':$('input#email').val(),
                'problem':$('input#problem').val()
            };
            //用ajax,post物件到‘addUser service’
            $.ajax({
                type:'POST',
                data: newUser,
                url:'record/person',
                dataType:'JSON'
            }).done(function(res){
                //把已經變更的user資料更新到#userinfo
                var html=new EJS({url:'views/persons.ejs'}).render(res);
                $("#userinfo").html(html);
                $("input").val('');//把input文字歸零
                
            });  
        }
        else{
            //沒填完就不做任何事
            alert('請填完所有欄位！');
            return false;
        }
    }
    function readUser(event){
        //取消超連結預設動作
        event.preventDefault();
        //用ajax, post物件到‘getUser service’
        $.ajax({
                type:'GET',
                url:'record/person/'+$(this).attr('rel'),
            }).done(function(res){
                //把已經變更的user資料更新到#userinfo
                var html=new EJS({url:'views/read.ejs'}).render(res);
                $("#userupdate").html(html);
            });  
    }
    function updateUser(event){
        
        event.preventDefault();
        $.ajax({
                type:'GET',
                url:'record/person/'+$(this).attr('rel')
            }).done(function(res){
                //把已經變更的user資料更新到#userinfo
                var html=new EJS({url:'views/update.ejs'}).render(res);
                $("#userupdate").html(html);
            });  
    }
    function submitUser(event){
        
        var newUser={
                'name':$('#name0').val(),
                'email':$('#email0').val(),
                'problem':$('#problem0').val()
            }
        $.ajax({
                type:'PUT',
                data:newUser,
                url:'record/person/'+$(this).attr('name'),
                dataType:'JSON'
            }).done(function(){
                $("input").val('');
                //把已經變更的user資料更新到#userinfo
                location.reload();
                
                var html=new EJS({url:'views/persons.ejs'}).render(res);
                $("#userinfo").html(html);
                alert('Thank you for your suggest!');
                
            });   
    }
    function deleteUser(event){
        event.preventDefault();
        
        var confirmation=confirm('確定刪除本記錄？');
        if(confirmation===true){
            $.ajax({
                type:'DELETE',
                url:'record/person/'+$(this).attr('rel'),
            }).done(function(res){
                //把已經變更的user資料更新到#userinfo
                var html=new EJS({url:'views/persons.ejs'}).render(res);
                $("#userinfo").html(html);
                
            });
        }
        else{
            return false;
        }
    }





});

