$(document).ready(function() {
    // تفعيل الرسوم المتحركة
    AOS.init();

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
        $('#formResponse').text('Thank you for your message!').fadeIn();
        
        // إعادة تعيين النموذج بعد الإرسال
        $(this).trigger('reset');
    });
});