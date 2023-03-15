$(function () {
    load();
  
    $("#title").on('keydown', function (e) {
        if (e.keyCode === 13) {
            var local = getDate();
            local.push({
                title: $(this).val(),
                done: false
            })
            saveDate(local);
            load();

        }
    })


    //获取数据
    function getDate() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //保存数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data))

    }
    //渲染页面
    function load() {
        var td = 0;
        var de = 0;
        var data = getDate();
        $("ol,ul").empty()
        $.each(data, function (i, n) {
          
            if (n.done) {
                $('ul').prepend("<li><input type='checkbox' checked><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>")
                td++;
            } else {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>")
                de++;
            }
           
        }
        )
        $("#todocount").text(de);
        $("#donecount").text(td);
    }
    //点击删除
    $("ol,ul").on("click", 'a', function () {
        var data = getDate();
        var index = $(this).attr('id');
        data.splice(index, 1)

        saveDate(data);

        load()
    })
    $("ol,ul").on("click", "input", function () {

        var data = getDate()
        var index = $(this).siblings('a').attr('id');
        data[index].done = $(this).prop('checked');
        saveDate(data)

        load()
    })

})