    var clipboard = new ClipboardJS('.btn-copy', {
        target: function (trigger) {
            return trigger.nextElementSibling
        }
    });
    function wait(callback, seconds) {
        var timelag = null;
        timelag = window.setTimeout(callback, seconds)
    }
    function pjax_initCopyCode() {
		if($(".highlight .code pre").length+$(".article pre code").length==0)return;
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '<i class="fas fa-copy"></i><span>COPY</span>';
        copyHtml += '</button>';
        $(".highlight .code pre").before(copyHtml);
        $(".article pre code").before(copyHtml);
        clipboard.off('success').on('success', function (e) {
            $.message({
            title: '复制成功',
            message: "代码已复制，请遵守相关授权协议。",
            type: 'success'
        });
            let $btn = $(e.trigger);
            $btn.addClass('copied');
            let $icon = $($btn.find('i'));
            $icon.removeClass('fa-copy');
            $icon.addClass('fa-check-circle');
            let $span = $($btn.find('span'));
            $span[0].innerText = 'COPIED';
            wait(function () {
                $icon.removeClass('fa-check-circle');
                $icon.addClass('fa-copy');
                $span[0].innerText = 'COPY'
            }, 2000)
        });
        clipboard.off('error').on('error', function (e) {
            e.clearSelection();
            let $btn = $(e.trigger);
            $btn.addClass('copy-failed');
            let $icon = $($btn.find('i'));
            $icon.removeClass('fa-copy');
            $icon.addClass('fa-times-circle');
            let $span = $($btn.find('span'));
            $span[0].innerText = 'COPY FAILED';
            wait(function () {
                $icon.removeClass('fa-times-circle');
                $icon.addClass('fa-copy');
                $span[0].innerText = 'COPY'
            }, 2000)
        })
    }
    $(function () {
        pjax_initCopyCode()
    });
