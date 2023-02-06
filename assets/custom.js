
document.querySelectorAll('.faqs-item .faqs-content-inside').forEach((element) => {
    element.addEventListener('click', function(){
        var html = this.querySelector('.product-info').innerHTML;
        document.querySelector('.product-info-show').innerHTML = html;
        if ($(this).closest('.faqs-content').style.maxHeight) {
            $(this).closest('.faqs-content').style.maxHeight = null;
        }
    });
});
